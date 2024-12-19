<?php

use IDS\Framework\Controllers\MediaController;
use IDS\Framework\Models\Setting;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('maintenance', function () {
    return view('maintenance');
});

// Route::get('/attachments/{media}', MediaController::class);

Route::post('locale', function () {
    // Validate
    $validated = request()->validate([
        'language' => ['required'],
    ]);
    // Set locale
    App::setLocale($validated['language']);
    // Session
    session()->put('locale', $validated['language']);

    // Response
    return redirect()->back();
});

Route::get('{any}', function () {
    // $app = Setting::where('key', 'app.name')->first();
    $appName = 'Dragon Code';

    return view('app', compact('appName'));
})->where('any', '^(?!api).*$');
