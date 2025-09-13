<?php

namespace App\Http\Controllers;

use App\Models\Hero;
use Inertia\Inertia;
use App\Models\HeroSection;
use Illuminate\Http\Request;

class HeroController extends Controller
{
    /**
     * Display the hero section.
     */
   public function index()
{
    $heroes = Hero::all(); // collection of heroes
    return Inertia::render('heroes/index', [
        'heroes' => $heroes,
    ]);
}







    /**
     * Show form to edit hero section.
     */
    public function edit($id)
    {
        $hero = Hero::findOrFail($id);
        return Inertia::render('heroes/Edit', [
            'heroes' => $hero
        ]);
    }

    /**
     * Update hero section.
     */
    public function update(Request $request, $id)
    {
        $hero = Hero::findOrFail($id);

        $validated = $request->validate([
            'background_image' => 'nullable|string',
            'profile_image'    => 'nullable|string',
            'title'            => 'nullable|string|max:255',
            'typed_texts'      => 'nullable|array',
            'description'      => 'nullable|string',
            'button_text'      => 'nullable|string|max:255',
            'button_link'      => 'nullable|string|max:255',
        ]);

        $hero->update($validated);

        return redirect()->route('heroies.index')->with('success', 'Hero section updated successfully.');
    }

    /**
     * Store a new hero section (optional if you only have one).
     */
  public function store(Request $request)
{
    $validated = $request->validate([
        'background_image' => 'nullable|image|mimes:jpg,jpeg,png,gif,webp|max:2048',
        'profile_image'    => 'nullable|image|mimes:jpg,jpeg,png,gif,webp|max:2048',
        'title'            => 'nullable|string|max:255',
        'typed_texts'      => 'nullable|array',
        'description'      => 'nullable|string',
        'button_text'      => 'nullable|string|max:255',
        'button_link'      => 'nullable|string|max:255',
    ]);

    // Handle background image upload
    if ($request->hasFile('background_image')) {
        $validated['background_image'] = $request->file('background_image')->store('heroes', 'public');
    }

    // Handle profile image upload
    if ($request->hasFile('profile_image')) {
        $validated['profile_image'] = $request->file('profile_image')->store('heroes', 'public');
    }

    Hero::create($validated);

    return redirect()->route('heroes.index')->with('success', 'Hero section created successfully.');
}

    /**
     * Remove the hero section (optional).
     */
    public function destroy($id)
    {
        $hero = Hero::findOrFail($id);
        $hero->delete();

        return redirect()->route('heroes.index')->with('success', 'Hero section deleted.');
    }
}
