<?php

use App\Http\Controllers\FacilityController;
use App\Http\Controllers\GalleryController;

use Illuminate\Support\Facades\Route;

Route::resource('facilities', FacilityController::class);
