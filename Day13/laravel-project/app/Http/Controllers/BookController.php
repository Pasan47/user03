<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    //? Create API --> Book


    public function index(){
        $books = Book::all();

        return response()->json($books);
    }

    public function create(Request $request){
        $book = new Book;
        $book-> name = $request->name;
        $book->details = $request->details;
        $book->save();
        return response()->json(["message"=>"Book Added"],201);
    }

    public function show ($id){
        $book = Book::find($id);

        if(!empty($book)){
            return response()->json($book);
        }else{
            return response()->json([
                "message"=>"book not found"
            ],400);
        }
    }

    public function edit (Request $request, $id){
        $book = Book::find($id);

        if(!empty($book)){
            $book->name = $request->name;
            $book->details = $request->details;
            $book->save();
            return response() ->json(["message"=>"Book Edited", "user"=> $book],201);

        }else{
            return response()->json([
                "message"=>"book not found"
            ],400);
        }
    }

    public function distroy($id){
        $book = Book::findOrFail($id);
        $book->delete();
        return response() ->json(["message"=>"Book Deleted"],201);
    }


}
