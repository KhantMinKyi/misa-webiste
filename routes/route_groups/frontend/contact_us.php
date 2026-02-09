<?php

use App\Http\Controllers\GeneralPageRouteController;
use Illuminate\Support\Facades\Route;

Route::get('/contact-us', [GeneralPageRouteController::class, 'getContactUsPage'])->name('contact-us');