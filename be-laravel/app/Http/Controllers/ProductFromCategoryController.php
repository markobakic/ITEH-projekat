<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\Product;
use App\Http\Resources\ProductCollection;

class ProductFromCategoryController extends Controller
{
    public function index($id) {
        $products = Product::get()->where('categoryId', $id);

        if (count($products) == 0) {
            return response()->json('No data!', 404);
        }

        return new ProductCollection($products);
    }
}
