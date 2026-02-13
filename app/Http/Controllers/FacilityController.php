<?php

namespace App\Http\Controllers;

use App\Http\Requests\FacilityStoreRequest;
use App\Http\Requests\FacilityUpdateRequest;
use App\Models\Facility;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class FacilityController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $facilities =  Facility::orderBy('created_at', 'desc')->paginate(10);
        return Inertia::render('backend/facility/dashboard', [
            'facilities' => $facilities
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('components/backend/facility/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(FacilityStoreRequest $request)
    {
        $data = $request->validated();
        $data['created_user_id'] = Auth::user()->id;
        $data['category_id'] = 1;
        try {
            DB::beginTransaction();

            // create src 
            if (isset($data['src'])) {
                $filePath = "img/facility_data/";
                if (!File::exists($filePath)) {
                    $result = File::makeDirectory($filePath, 0755, true);
                }

                $photo = $data['src'];
                $extension = $photo->getClientOriginalExtension();
                $imageUid = uniqid('', true);
                $photoName = $filePath . "/facility_" . $imageUid . "." . $extension;

                $photo->move($filePath, "/facility_" . $imageUid . "." . $extension);
                $data['src'] = "/" . $photoName;
            }
            // create Logo Black
            $facility = Facility::create($data);
            DB::commit();
            return redirect()->route('facilities.index')->with('success', 'Facility created successfully.');
        } catch (\Exception $e) {

            DB::rollBack();
            // delete file if exists
            $filePath = "img/facility_data/";
            if (File::exists($filePath)) {
                File::deleteDirectory($filePath);
            }
            // Handle the error
            return redirect()->route('facilities.create')->with('error', $e->getMessage());
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
        return Inertia::render('components/backend/facility/Edit', [
            'facility' => Facility::findOrFail($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(FacilityUpdateRequest $request, string $id)
    {
        $data = $request->validated();
        $data['updated_user_id'] = Auth::user()->id;
        $facility = Facility::findOrFail($id);
        try {
            DB::beginTransaction();
            if ($request->hasFile('src')) {
                if (File::exists(public_path($facility->src))) {
                    File::delete(public_path($facility->src));
                }
                $filePath = "img/facility_data/";
                if (!File::exists($filePath)) {
                    $result = File::makeDirectory($filePath, 0755, true);
                }

                $photo = $data['src'];
                $extension = $photo->getClientOriginalExtension();
                $imageUid = uniqid('', true);
                $photoName = $filePath . "/facility_" . $imageUid . "." . $extension;

                $photo->move($filePath, "/facility_" . $imageUid . "." . $extension);
                $data['src'] = "/" . $photoName;
            } else {
                unset($data['src']);
            }
            $facility->update($data);

            DB::commit();
            return redirect()->route('facilities.index')->with('success', 'Facility Updated successfully.');
        } catch (\Exception $e) {

            DB::rollBack();
            // Handle the error
            return redirect()->route('facilities.create')->with('error', $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $facility = Facility::findOrFail($id);
        try {
            DB::transaction(function () use ($facility) {
                // Delete main record
                $facility->delete();
                // Delete Files
                if (File::exists(public_path($facility->src))) {
                    File::delete(public_path($facility->src));
                }
                return redirect()->route('facilities.index')->with('success', 'Facility Deleted successfully.');
            });
        } catch (\Exception $e) {
            return redirect()->route('facilities.index')->with('error', $e->getMessage());
        }
    }
}
