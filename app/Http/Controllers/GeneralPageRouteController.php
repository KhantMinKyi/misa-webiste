<?php

namespace App\Http\Controllers;

use App\Models\CategoryTag;
use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Laravel\Fortify\Features;

class GeneralPageRouteController extends Controller
{
    public function getHomePage(Request $request)
    {

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
        ]);
    }
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
}
