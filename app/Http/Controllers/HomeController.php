<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    //

  public function welcome($section = 'home') // default to home if none provided
{
    return Inertia::render('welcome', [
        'section' => $section,
    ]);
}
}
