<?php

use App\Http\Controllers\GeneralPageRouteController;
use Illuminate\Support\Facades\Route;

Route::get('/our-history', [GeneralPageRouteController::class, 'getHistoryPage'])->name('our-history');
Route::get('/our-mission-and-vision', [GeneralPageRouteController::class, 'getMissionVisionPage'])->name('our-mission-vision');
