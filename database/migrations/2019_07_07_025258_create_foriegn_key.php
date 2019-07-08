<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateForiegnKey extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
//        Schema::table('products', function (Blueprint $table) {
//            $table->unsignedInteger('shop_id');
//            $table->foreign('shop_id')->references('id')->on('shops');
//        });
//        Schema::table('product_category', function (Blueprint $table) {
//            $table->unsignedInteger('product_id');
//            $table->foreign('product_id')->references('id')->on('products');
//            $table->unsignedInteger('category_id');
//            $table->foreign('category_id')->references('id')->on('categories');
//        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
    }
}
