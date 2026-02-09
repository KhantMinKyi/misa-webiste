<?php

use App\Http\Controllers\GeneralPageRouteController;
use Illuminate\Support\Facades\Route;

Route::get('/studentadmission', [GeneralPageRouteController::class, 'getStudentAdmissionPage'])->name('studentadmission');
Route::get('/admission-process', [GeneralPageRouteController::class, 'getAdmissionProcessPage'])->name('admission-process');
Route::get('/withdrawal-policy', [GeneralPageRouteController::class, 'getWithdrawalPolicyPage'])->name('withdrawal-policy');
