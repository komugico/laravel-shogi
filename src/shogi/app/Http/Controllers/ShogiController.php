<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ShogiController extends Controller
{
    public function index() {
        return view('shogi/index');
    }
}
