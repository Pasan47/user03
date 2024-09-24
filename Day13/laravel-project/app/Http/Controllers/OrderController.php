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

    public function show ($id){
        $orders = Orders::find($id);

        if(!empty($orders)){
            return response()->json($orders);
        }else{
            return response()->json([
                "message"=>"Order not found"
            ],400);
        }
    }

    public function edit (Request $request, $id){
        $orders = Orders::find($id);

        if(!empty($orders)){
            $orders->name = $request->name;
            $orders->details = $request->details;
            $orders->save();
            return response() ->json(["message"=>"Orders Edited", "user"=> $orders],201);

        }else{
            return response()->json([
                "message"=>"Orders not found"
            ],400);
        }
    }

    public function distroy($id){
        $orders = Orders::findOrFail($id);
        $orders->delete();
        return response() ->json(["message"=>"Orders Deleted"],201);
    }
    
}
