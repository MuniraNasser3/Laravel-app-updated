<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\WorkoutController;

// Auth (still allowed, but not enforced)
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

// 🟢 Workout routes (open to all)
Route::get('/workouts', [WorkoutController::class, 'index']);
Route::post('/workouts', [WorkoutController::class, 'store']);
Route::get('/workouts/{id}', [WorkoutController::class, 'show']);
Route::put('/workouts/{id}', [WorkoutController::class, 'update']);
Route::delete('/workouts/{id}', [WorkoutController::class, 'destroy']);



