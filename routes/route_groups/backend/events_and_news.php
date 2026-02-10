<?php

use App\Http\Controllers\FacilityController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::resource('events-and-news', PostController::class);
