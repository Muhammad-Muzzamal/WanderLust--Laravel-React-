<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ListingController;
use App\Http\Controllers\API\ReviewController;

Route::get('/listings', [ListingController::class, 'index']); // List all
Route::get('/listings/{id}', [ListingController::class, 'show']); // Single
Route::post('/listings', [ListingController::class, 'store']); // Create
Route::put('/listings/{id}', [ListingController::class, 'update']); // Update
Route::delete('/listings/{id}', [ListingController::class, 'destroy']); // Delete

// Route::middleware('auth:sanctum')->post('/reviews', [ReviewController::class, 'store']);
Route::post('/reviews', [ReviewController::class, 'store']);