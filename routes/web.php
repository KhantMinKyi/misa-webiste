<?php

use App\Http\Controllers\GeneralPageRouteController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

// Route::get('/', function () {
//     return Inertia::render('welcome', [
//         'canRegister' => Features::enabled(Features::registration()),
//     ]);
// })->name('home');

Route::get('/', [GeneralPageRouteController::class, 'getHomePage'])->name('home');
Route::get('/post-detail/{id}', [GeneralPageRouteController::class, 'showPostDetail'])->name('post-detail');
require __DIR__ . '/route_groups/frontend/about_us.php';
require __DIR__ . '/route_groups/frontend/student_life.php';
require __DIR__ . '/route_groups/frontend/education.php';
require __DIR__ . '/route_groups/frontend/admission.php';
require __DIR__ . '/route_groups/frontend/events_and_news.php';
require __DIR__ . '/route_groups/frontend/contact_us.php';
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__ . '/settings.php';
