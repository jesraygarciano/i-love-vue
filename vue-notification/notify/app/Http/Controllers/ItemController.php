<?php

namespace App\Http\Controllers;

use App\Item;
use Illuminate\Http\Request;

class ItemController extends Controller
{
    //

    public function store(Request $request)
    {
        $item = new item;
        $item->name = $request->get('name');
        $item->price = $request->get('price');

        $item->save();

        return response()->json(['success' => 'Your data is sucessfully saved'], 200);

    }
}
