<?php

use App\Http\Controllers\GeneralPageRouteController;
use Illuminate\Support\Facades\Route;

Route::get('/kindergarten-programs', [GeneralPageRouteController::class, 'getKGPage'])->name('kindergarten-programs');
Route::get('/primary-school-programs', [GeneralPageRouteController::class, 'getPrimarySchoolPage'])->name('primary-school-programs');
Route::get('/secondary-school-programs', [GeneralPageRouteController::class, 'getSecondarySchoolPage'])->name('secondary-school-programs');
