<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Orders;

class OrderController extends Controller
{
    //? Create API --> Orders

    public function index(){
        $orders = Orders::all();

        return response() -> json($orders);
    }

    public function create(Request $request){
        $orders = new Orders;
        $orders->type = $request->type;
        $orders->price = $request->price;
        $orders->save();
        return response()->json(["message"=>"Order Created"],201);
    }
}
