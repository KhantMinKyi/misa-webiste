<?php

use App\Http\Controllers\GeneralPageRouteController;
use Illuminate\Support\Facades\Route;

Route::get('/alumni', [GeneralPageRouteController::class, 'getAlumniPage'])->name('alumni');
Route::get('/news', [GeneralPageRouteController::class, 'getNewsPage'])->name('news');
Route::get('/gallery', [GeneralPageRouteController::class, 'getGalleryPage'])->name('gallery');
Route::get('/calendar', [GeneralPageRouteController::class, 'getCalendarPage'])->name('calendar');
Route::get('/facilities', [GeneralPageRouteController::class, 'getFacilitiesPage'])->name('facilities');
