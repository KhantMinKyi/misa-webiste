<?php

namespace App\Http\Controllers;

use App\Http\Requests\GalleryStoreRequest;
use App\Http\Requests\GalleryUpdateRequest;
use App\Models\Gallery;
use Error;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;
use PhpParser\Node\Expr\Throw_;

use function PHPUnit\Framework\throwException;

class GalleryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $galleries =  Gallery::orderBy('created_at', 'desc')->paginate(10);
        return Inertia::render('backend/gallery/dashboard', [
            'galleries' => $galleries
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('components/backend/gallery/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(GalleryStoreRequest $request)
    {
        $data = $request->validated();
        $data['created_user_id'] = Auth::user()->id;
        $data['category_id'] = 1;
        try {
            DB::beginTransaction();

            // create src 
            if (isset($data['src'])) {
                $filePath = "img/gallery_data/";
                if (!File::exists($filePath)) {
                    $result = File::makeDirectory($filePath, 0755, true);
                }

                $photo = $data['src'];
                $extension = $photo->getClientOriginalExtension();
                $imageUid = uniqid('', true);
                $photoName = $filePath . "/gallery_" . $imageUid . "." . $extension;

                $photo->move($filePath, "/gallery_" . $imageUid . "." . $extension);
                $data['src'] = "/" . $photoName;
            }
            // create Logo Black
            $gallery = Gallery::create($data);
            DB::commit();
            return redirect()->route('galleries.index')->with('success', 'Gallery created successfully.');
        } catch (\Exception $e) {

            DB::rollBack();
            // delete file if exists
            $filePath = "img/gallery_data/";
            if (File::exists($filePath)) {
                File::deleteDirectory($filePath);
            }
            // Handle the error
            return redirect()->route('galleries.create')->with('error', $e->getMessage());
        }
    }


    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        return Inertia::render('components/backend/gallery/Edit', [
            'gallery' => Gallery::findOrFail($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(GalleryUpdateRequest $request, string $id)
    {
        $data = $request->validated();
        $data['updated_user_id'] = Auth::user()->id;
        $gallery = Gallery::findOrFail($id);
        try {
            DB::beginTransaction();
            if ($request->hasFile('src')) {
                if (File::exists(public_path($gallery->src))) {
                    File::delete(public_path($gallery->src));
                }
                $filePath = "img/gallery_data/";
                if (!File::exists($filePath)) {
                    $result = File::makeDirectory($filePath, 0755, true);
                }

                $photo = $data['src'];
                $extension = $photo->getClientOriginalExtension();
                $imageUid = uniqid('', true);
                $photoName = $filePath . "/gallery_" . $imageUid . "." . $extension;

                $photo->move($filePath, "/gallery_" . $imageUid . "." . $extension);
                $data['src'] = "/" . $photoName;
            } else {
                unset($data['src']);
            }
            $gallery->update($data);

            DB::commit();
            return redirect()->route('galleries.index')->with('success', 'Gallery Updated successfully.');
        } catch (\Exception $e) {

            DB::rollBack();
            // Handle the error
            return redirect()->route('galleries.create')->with('error', $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $gallery = Gallery::findOrFail($id);
        try {
            DB::transaction(function () use ($gallery) {
                // Delete main record
                $gallery->delete();
                // Delete Files
                if (File::exists(public_path($gallery->src))) {
                    File::delete(public_path($gallery->src));
                }
                return redirect()->route('galleries.index')->with('success', 'Gallery Deleted successfully.');
            });
        } catch (\Exception $e) {
            return redirect()->route('galleries.index')->with('error', $e->getMessage());
        }
    }
}
