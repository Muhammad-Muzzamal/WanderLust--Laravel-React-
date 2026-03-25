<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function store(Request $request)
    {
        // ✅ Validation
        $request->validate([
            'listing_id' => 'required|exists:listings,id',
            'rating' => 'required|integer|min:1|max:5',
            'message' => 'nullable|string'
        ]);

        
    }
}