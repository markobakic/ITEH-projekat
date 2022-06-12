<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \App\Models\Category;
use \App\Models\Cart;

class Product extends Model
{
    protected $table = 'products';
    public $primaryKey = 'id';

    public function category() {
        return $this->belongsTo(Category::class);
    }

    public function cart() {
        return $this->belongsTo(Cart::class);
    }
}