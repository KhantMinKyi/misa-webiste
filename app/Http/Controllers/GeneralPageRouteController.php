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
}
