<?php

namespace App\Http\Controllers;

use App\Models\Calendar;
use App\Models\CategoryTag;
use App\Models\Facility;
use App\Models\Gallery;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Laravel\Fortify\Features;

class GeneralPageRouteController extends Controller
{
    public function getHomePage(Request $request)
    {

        $images = Facility::limit(8)->get();
        $current_post = request()->input('current_post');
        $query = Post::with(['category_tags.category_tag'])->where('status', 1)->limit(3);
        if ($current_post) {
            $query->whereNot('id', $current_post); // apply limit only if present
        }
        $category_tags = CategoryTag::withCount('related_posts')->orderBy('created_at', 'desc')->get();
        $posts = $query->orderBy('created_at', 'desc')->get();
        return Inertia::render('welcome', [
            'canRegister' => Features::enabled(Features::registration()),
            'posts' => $posts,
            'category_tags' => $category_tags,
            'images' => $images,
        ]);
    }
    // About Us
    public function getHistoryPage()
    {
        return Inertia::render('frontend/about_us/OurHistory');
    }
    public function getMissionVisionPage()
    {
        return Inertia::render('frontend/about_us/OurMissionVision');
    }
    public function getPhilosophyPage()
    {
        return Inertia::render('frontend/about_us/OurPhilosophy');
    }
    public function getSisterSchoolsPage()
    {
        return Inertia::render('frontend/about_us/SisterSchools');
    }
    public function getAdminTeamPage()
    {
        return Inertia::render('frontend/about_us/AdminTeam');
    }
    public function getSchoolProfilePage()
    {
        return Inertia::render('frontend/about_us/SchoolProfile');
    }
    // Student Life
    public function getAlumniPage()
    {
        return Inertia::render('frontend/student_life/Alumni');
    }
    public function getNewsPage()
    {
        $current_post = request()->input('current_post');
        $query = Post::with(['category_tags.category_tag'])->where('status', 1)->limit(3);
        if ($current_post) {
            $query->whereNot('id', $current_post); // apply limit only if present
        }
        $category_tags = CategoryTag::withCount('related_posts')->orderBy('created_at', 'desc')->get();
        $posts = $query->orderBy('created_at', 'desc')->get();
        return Inertia::render('frontend/student_life/News', [
            'posts' => $posts,
            'category_tags' => $category_tags,
        ]);
    }
    public function getGalleryPage()
    {
        $images = Gallery::paginate(8);
        return Inertia::render('frontend/student_life/Gallery', [
            'images' => $images,
            'showLink' => false
        ]);
    }
    public function getCalendarPage()
    {
        $images = Calendar::paginate(4);
        return Inertia::render('frontend/student_life/Calendar', [
            'images' => $images,
            'showLink' => false
        ]);
    }
    public function getFacilitiesPage()
    {
        $images = Facility::paginate(8);
        return Inertia::render('frontend/student_life/Facility', [
            'images' => $images,
            'showLink' => false
        ]);
    }
    // Education
    public function getKGPage()
    {
        return Inertia::render('frontend/education/Kindergarten');
    }
    public function getPrimarySchoolPage()
    {
        return Inertia::render('frontend/education/PrimarySchool');
    }
    public function getSecondarySchoolPage()
    {
        return Inertia::render('frontend/education/SecondarySchool');
    }
    public function getIgcsePage()
    {
        return Inertia::render('frontend/education/Igcse');
    }

    // Admission 
    public function getStudentAdmissionPage()
    {
        return Inertia::render('frontend/admission/StudentAdmission');
    }
    public function getAdmissionProcessPage()
    {
        return Inertia::render('frontend/admission/AdmissionProcess');
    }
    public function getWithdrawalPolicyPage()
    {
        return Inertia::render('frontend/admission/WithdrawalPolicy');
    }
}
