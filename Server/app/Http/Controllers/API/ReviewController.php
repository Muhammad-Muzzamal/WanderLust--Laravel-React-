<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Review;

class ReviewController extends Controller
{
    public function store(Request $request)
{
    // ✅ Validation
    $validated = $request->validate([
        'listing_id' => 'required|exists:listings,id',
        'rating' => 'required|integer|min:1|max:5',
        'message' => 'nullable|string'
    ]);

    // ✅ Create review
    $review = Review::create([
        'user_id' => auth()->id(),
        'listing_id' => $validated['listing_id'],
        'rating' => $validated['rating'],
        'message' => $validated['message'] ?? null
    ]);

    // ✅ Return JSON with status code 201 (Created)
    return response()->json([
        'message' => 'Review added successfully',
        'data' => $review
    ], 201); // 201 = resource created
}
}
