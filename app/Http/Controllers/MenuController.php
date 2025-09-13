<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Inertia\Inertia;
use Illuminate\Http\Request;

class MenuController extends Controller
{
    // Display a listing of the menu items
public function index()
    {
        $menus = Menu::all();
        //return   $menus;
        return Inertia::render('menus/index', [
            'menus' => $menus,
        ]);
    }

public function create()
{
    return Inertia::render('menus/create');
}



    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'url' => 'required|string|max:255',
        ]);

        Menu::create($validated);

        return redirect()->back()->with('success', 'Menu item created.');
    }

    public function update(Request $request, Menu $menu)
{
    // Validate the request data
    $validated = $request->validate([
        'title' => 'required|string|max:255',
        'url' => 'required|string|max:255',
    ]);

    // Update the menu item
    $menu->update($validated);

    // Redirect back with a success message (optional)
    return redirect()->route('menus.index')->with('success', 'Menu item updated successfully.');
}

    public function destroy($id)
    {
        Menu::findOrFail($id)->delete();

        return redirect()->back()->with('success', 'Menu item deleted.');
    }


}
