<?php

namespace App\Http\Controllers;

use App\Models\Hero;
use Inertia\Inertia;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    //



public function welcome()
    {

        return Inertia::render('welcome');
    }


}
