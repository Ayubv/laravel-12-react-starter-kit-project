<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\ContactController;

Route::get('/',[HomeController::class,'welcome'])->name('home');
Route::get('/{section?}', [HomeController::class, 'welcome'])
    ->where('section', 'home|about|services|projects|contact')
    ->name('welcome');
// Route::get('/', function () {
//     return Inertia::render('welcome');
// })->name('home');

Route::post('/contact', [ContactController::class, 'store'])->name('contact.store');



Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
