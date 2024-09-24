<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{

    //* Show the latest 5 prroducts from the product list
   public function index(){

     $products = Product::latest()->paginate(5);

     return view('products.index', compact('products')) ->with(request()->input('page'));
   }

   //* Create function
   public function create(){
    return view('products.create');
   }

   //* Create product function
   public function store(Request $request)
   {

    // validate the input
    $request ->validate([
        'name' => 'required',
        'detail' => 'required'
    ]);

    // Create new product in database
    Product::create($request->all());

    // Redirect the user amd send friendly messages
    return redirect()->route('products.index')->with('success', 'product created successfully');
   }

   //* Display edit view
   public function edit(Product $product)
   {
    return view('products.edit', compact('product'));
   }

   //* Update function (request --> new details , product --> get the current details)
   public function update(Request $request, Product $product){

    $request->validate([
        'name' => 'required',
        'detail' => 'required'
    ]);

    Product::update($request->all());

    return redirect()->route('products.index')->with('success', 'product updated successfully');
   }

   //* Delete function
   public function destroy(Product $products){
    $products->delete();

    return redirect()->route('products.index')->with('success', 'product updated successfully');
   }


}
