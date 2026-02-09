
<?php

use App\Http\Controllers\GeneralPageRouteController;
use Illuminate\Support\Facades\Route;
Route::get('/events-and-news', [GeneralPageRouteController::class, 'getNewsPage'])->name('events-and-news');