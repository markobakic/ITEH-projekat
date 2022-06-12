<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use \App\Models\Product;

class Category extends Model
{
    protected $table = 'categories';
    public $primaryKey = 'id';

    public function product() {
        return $this->hasMany(Product::class, 'id'); 
    }
}