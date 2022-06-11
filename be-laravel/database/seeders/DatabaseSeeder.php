<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\Cart;
use \App\Models\Category;
use \App\Models\Product;
use \App\Models\User;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
       Category::truncate();
       Product::truncate();

       $category1 = Category::create([
        'categoryName' => 'Ski'
       ]);
       $category2 = Category::create([
        'categoryName' => 'Helmet'
       ]);
       $category3 = Category::create([
        'categoryName' => 'Boot'
       ]);

       $product1 = Product::create([
        'productName' => 'Atomic',
        'price' => 36000,
        'gender' => 'M',
        'size' => '70.2',
        'color' => 'Black',
        'imageUrl' => 'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AASS02844-01_1.jpg',
        'categoryId' => 1
       ]);
       $product2 = Product::create([
        'productName' => 'Salomon',
        'price' => 34000,
        'gender' => 'F',
        'size' => '68.4',
        'color' => 'Pink',
        'imageUrl' => 'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/S/E/SET391462-01_1_2.jpg',
        'categoryId' => 1
       ]);
       $product3 = Product::create([
        'productName' => 'Atomic Redster',
        'price' => 68000,
        'gender' => 'M',
        'size' => '74.6',
        'color' => 'Red',
        'imageUrl' => 'https://rs.beosport.com/media/catalog/product/cache/d126437ea08815d46d162dcf984c64cc/A/A/AA0026596-01.jpg',
        'categoryId' => 1
       ]);
       $product4 = Product::create([
        'productName' => 'Fischer',
        'price' => 105000,
        'gender' => 'M/F',
        'size' => '80.6',
        'color' => 'Yellow',
        'imageUrl' => 'https://www.intersport.rs/media/catalog/product/cache/7f6b40782d8703cf49e835b0be757464/a/0/a06920_rc4_ct-.jpg',
        'categoryId' => 1
       ]);
       $product5 = Product::create([
        'productName' => 'Elan',
        'price' => 33000,
        'gender' => 'F',
        'size' => '66.2',
        'color' => 'Black',
        'imageUrl' => 'https://www.intersport.rs/media/catalog/product/cache/7f6b40782d8703cf49e835b0be757464/a/m/amphibio_13_c_ps_ps_screw_l-xl_-s-_blk_damp_grn_lift_grn_scal_grn_glt.png',
        'categoryId' => 1
       ]);
       $product6 = Product::create([
        'productName' => 'Alpina helmet',
        'price' => 6000,
        'gender' => 'M/F',
        'size' => '11.6',
        'color' => 'Grey',
        'imageUrl' => 'https://www.intersport.rs/media/catalog/product/cache/7f6b40782d8703cf49e835b0be757464/a/9/a9229-232.jpg',
        'categoryId' => 2
       ]);
       $product7 = Product::create([
        'productName' => 'Smith helmet',
        'price' => 11000,
        'gender' => 'F',
        'size' => '11.6',
        'color' => 'White',
        'imageUrl' => 'https://www.intersport.rs/media/catalog/product/cache/7f6b40782d8703cf49e835b0be757464/2/1/2122_snow_glide_jr_mips_gambler_combo_white_e005293325155.jpg',
        'categoryId' => 2
       ]);
       $product8 = Product::create([
        'productName' => 'McKinley helmet',
        'price' => 7000,
        'gender' => 'M',
        'size' => '11.8',
        'color' => 'Blue',
        'imageUrl' => 'https://www.intersport.rs/media/catalog/product/cache/7f6b40782d8703cf49e835b0be757464/m/c/mckinley_420642_545_hero.png',
        'categoryId' => 2
       ]);
       $product9 = Product::create([
        'productName' => 'Salomon helmet',
        'price' => 6000,
        'gender' => 'F',
        'size' => '11.2',
        'color' => 'Pink',
        'imageUrl' => 'https://www.intersport.rs/media/catalog/product/cache/7f6b40782d8703cf49e835b0be757464/3/9/399149_0_jr_grom_glossy_pink_hel.jpg',
        'categoryId' => 2
       ]);
       $product10 = Product::create([
        'productName' => 'Bolle MUTE helmet',
        'price' => 8000,
        'gender' => 'M',
        'size' => '11.8',
        'color' => 'Black',
        'imageUrl' => 'https://www.intersport.rs/media/catalog/product/cache/7f6b40782d8703cf49e835b0be757464/m/u/mute_black_and_white_matte.jpg',
        'categoryId' => 2
       ]);
       $product11 = Product::create([
        'productName' => 'Atomic helmet',
        'price' => 11000,
        'gender' => 'M/F',
        'size' => '11.1',
        'color' => 'White',
        'imageUrl' => 'https://www.intersport.rs/media/catalog/product/cache/7f6b40782d8703cf49e835b0be757464/a/n/an5005788_white_-.jpg',
        'categoryId' => 2
       ]);
       $product12 = Product::create([
        'productName' => 'Fischer boots',
        'price' => 34000,
        'gender' => 'M',
        'size' => '12.2',
        'color' => 'Space Grey',
        'imageUrl' => 'https://www.intersport.rs/media/catalog/product/cache/7f6b40782d8703cf49e835b0be757464/u/3/u32621.jpg',
        'categoryId' => 3
       ]);
       $product13 = Product::create([
        'productName' => 'McKinley boots',
        'price' => 17000,
        'gender' => 'F',
        'size' => '10.2',
        'color' => 'White',
        'imageUrl' => 'https://www.intersport.rs/media/catalog/product/cache/7f6b40782d8703cf49e835b0be757464/m/g/mg60-4_409206_900_hero.jpeg',
        'categoryId' => 3
       ]);
       $product14 = Product::create([
        'productName' => 'Atomic boots',
        'price' => 22000,
        'gender' => 'M/F',
        'size' => '10.9',
        'color' => 'Orange',
        'imageUrl' => 'https://www.intersport.rs/media/catalog/product/cache/7f6b40782d8703cf49e835b0be757464/a/e/ae5024880.jpg',
        'categoryId' => 3
       ]);
       $product15 = Product::create([
        'productName' => 'Head boots',
        'price' => 18000,
        'gender' => 'M',
        'size' => '11.2',
        'color' => 'Black',
        'imageUrl' => 'https://www.intersport.rs/media/catalog/product/cache/7f6b40782d8703cf49e835b0be757464/6/0/608227_advant_edge_65_w.jpg',
        'categoryId' => 3
       ]);


    }
}
