<?php

use App\Http\Controllers\GeneralPageRouteController;
use Illuminate\Support\Facades\Route;

Route::get('/alumni', [GeneralPageRouteController::class, 'getAlumniPage'])->name('alumni');
