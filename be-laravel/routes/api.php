<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\CartController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ProductFromCategoryController;
use App\Http\Controllers\ProductInCartForUserController;
use App\Http\Controllers\CategoryFromProductController;
use App\Http\Controllers\API\AuthController;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::resource('categories', CategoryController::class)->only(['index', 'show']);
Route::resource('products', ProductController::class)->only(['index', 'show']);
Route::resource('category/{id}/products', ProductFromCategoryController::class)->only(['index']);
Route::resource('product/{id}/category', CategoryFromProductController::class)->only(['index']);
Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout']);
Route::resource('carts', CartController::class)->only(['index', 'show', 'store', 'destroy']);
Route::resource('users', UserController::class)->only(['index', 'show', 'update']);
Route::resource('users/{id}/cart', ProductInCartForUserController::class)->only(['index']);