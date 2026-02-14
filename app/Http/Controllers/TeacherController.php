<?php

namespace App\Http\Controllers;

use App\Http\Requests\TeacherStoreRequest;
use App\Http\Requests\TeacherUpdateRequest;
use App\Models\Teacher;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Inertia\Inertia;

class TeacherController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $teachers =  Teacher::orderBy('created_at', 'desc')->paginate(10);
        return Inertia::render('backend/teachers/dashboard', [
            'teachers' => $teachers
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('components/backend/teacher/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(TeacherStoreRequest $request)
    {
        $data = $request->validated();
        $data['created_user_id'] = Auth::user()->id;
        $data['category_id'] = 1;
        try {
            DB::beginTransaction();

            // create src 
            if (isset($data['src'])) {
                $filePath = "img/teacher_data/";
                if (!File::exists($filePath)) {
                    $result = File::makeDirectory($filePath, 0755, true);
                }

                $photo = $data['src'];
                $extension = $photo->getClientOriginalExtension();
                $imageUid = uniqid('', true);
                $photoName = $filePath . "/teacher_" . $imageUid . "." . $extension;

                $photo->move($filePath, "/teacher_" . $imageUid . "." . $extension);
                $data['src'] = "/" . $photoName;
            }
            // create Logo Black
            $teacher = Teacher::create($data);
            DB::commit();
            return redirect()->route('teachers.index')->with('success', 'Teacher created successfully.');
        } catch (\Exception $e) {

            DB::rollBack();
            // delete file if exists
            $filePath = "img/teacher_data/";
            if (File::exists($filePath)) {
                File::deleteDirectory($filePath);
            }
            // Handle the error
            return redirect()->route('teachers.create')->with('error', $e->getMessage());
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
        return Inertia::render('components/backend/teacher/Edit', [
            'teacher' => Teacher::findOrFail($id)
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(TeacherUpdateRequest $request, string $id)
    {
        $data = $request->validated();
        $data['updated_user_id'] = Auth::user()->id;
        $teacher = Teacher::findOrFail($id);
        try {
            DB::beginTransaction();
            if ($request->hasFile('src')) {
                if (File::exists(public_path($teacher->src))) {
                    File::delete(public_path($teacher->src));
                }
                $filePath = "img/teacher_data/";
                if (!File::exists($filePath)) {
                    $result = File::makeDirectory($filePath, 0755, true);
                }

                $photo = $data['src'];
                $extension = $photo->getClientOriginalExtension();
                $imageUid = uniqid('', true);
                $photoName = $filePath . "/teacher_" . $imageUid . "." . $extension;

                $photo->move($filePath, "/teacher_" . $imageUid . "." . $extension);
                $data['src'] = "/" . $photoName;
            } else {
                unset($data['src']);
            }
            $teacher->update($data);

            DB::commit();
            return redirect()->route('teachers.index')->with('success', 'Teacher Updated successfully.');
        } catch (\Exception $e) {

            DB::rollBack();
            // Handle the error
            return redirect()->route('teachers.create')->with('error', $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $teacher = Teacher::findOrFail($id);
        try {
            DB::transaction(function () use ($teacher) {
                // Delete main record
                $teacher->delete();
                // Delete Files
                if (File::exists(public_path($teacher->src))) {
                    File::delete(public_path($teacher->src));
                }
                return redirect()->route('teachers.index')->with('success', 'Teacher Deleted successfully.');
            });
        } catch (\Exception $e) {
            return redirect()->route('teachers.index')->with('error', $e->getMessage());
        }
    }
}
