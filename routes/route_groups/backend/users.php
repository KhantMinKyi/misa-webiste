<?php

use App\Http\Controllers\FacilityController;
use App\Http\Controllers\GalleryController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::resource('users', UserController::class);
