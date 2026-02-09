<?php

use App\Http\Controllers\GeneralPageRouteController;
use Illuminate\Support\Facades\Route;

Route::get('/studentadmission', [GeneralPageRouteController::class, 'getStudentAdmissionPage'])->name('studentadmission');
