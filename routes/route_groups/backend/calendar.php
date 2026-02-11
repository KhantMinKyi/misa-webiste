<?php

use App\Http\Controllers\CalendarController;
use App\Http\Controllers\TeacherController;
use Illuminate\Support\Facades\Route;

Route::resource('calendars', CalendarController::class);
