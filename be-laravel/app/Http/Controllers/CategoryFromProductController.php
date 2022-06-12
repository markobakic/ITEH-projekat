<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\Models\Product;
use \App\Models\Category;
use App\Http\Resources\CategoryCollection;

class CategoryFromProductController extends Controller
{
    public function index($id) {
        $product = Product::get()->where('id', $id);
        $catId = $product[strval($id - 1)]['categoryId'];
        $category = Category::get()->where('id', $catId);

        if (count($product) == 0) {
            return response()->json('No data!', 404);
        }

        return $category[strval($catId - 1)];
    }
}
