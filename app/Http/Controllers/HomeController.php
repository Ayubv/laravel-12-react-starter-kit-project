<?php

namespace App\Http\Controllers;

use App\Models\Hero;
use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    //

 public function index()
{
    $hero = Hero::first(); // single hero section
    return $hero;
    return Inertia::render('welcome', [
        'hero' => $hero
    ]);
}

public function welcome($section = null)
    {
        $hero = Hero::first(); // get your hero section
        return Inertia::render('welcome', [
            'hero' => $hero,
            'section' => $section, // optional for scrolling
        ]);
    }


}
