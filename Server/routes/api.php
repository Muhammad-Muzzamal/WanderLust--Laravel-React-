<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

use App\Http\Controllers\API\ListingController;

Route::get('/listings', [ListingController::class, 'index']); // List all
Route::get('/listings/{id}', [ListingController::class, 'show']); // Single
Route::post('/listings', [ListingController::class, 'store']); // Create
Route::put('/listings/{id}', [ListingController::class, 'update']); // Update
Route::delete('/listings/{id}', [ListingController::class, 'destroy']); // Delete