
<?php

use App\Http\Controllers\GeneralPageRouteController;
use Illuminate\Support\Facades\Route;

Route::get('/privacy-policy', [GeneralPageRouteController::class, 'getPrivacyPolicyPage'])->name('privacy-policy');
