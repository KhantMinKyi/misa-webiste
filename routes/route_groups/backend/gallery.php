<?php

use App\Http\Controllers\GalleryController;

use Illuminate\Support\Facades\Route;

Route::resource('galleries', GalleryController::class);
