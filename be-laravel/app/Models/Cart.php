<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \App\Models\Product;
use \App\Models\User;

class Cart extends Model
{
    protected $table = 'carts';
    public $primaryKey = 'id';
    protected $fillable = ['productId', 'userId'];

    public function product() {
        return $this->hasMany(Product::class, 'id');
    }

    public function user() {
        return $this->hasMany(User::class, 'id');
    }
}