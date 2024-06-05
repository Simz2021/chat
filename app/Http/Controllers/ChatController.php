<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use Illuminate\Http\Request;
use App\Models\Message;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;
use Inertia\Inertia;

class ChatController extends Controller
{
    public function index()
    {

        $messages = Message::with('user')->get();
        $currentUser = User::first();

        return Inertia::render('ChatPage', [
            'messages' => $messages,
            'currentUser' => $currentUser
        ]);
    }

    public function sendMessage(Request $request)
    {
        $request->validate([
            'user_id' => 'required|exists:users,id',
            'message' => 'required|string',
        ]);

        $message = Message::create([
            'user_id' => $request->user_id,
            'message' => $request->message,
        ]);

        $message =  Message::with('user')->where('id', $message->id)->first();

        MessageSent::dispatch($message);

        return redirect()->back()->with('success', 'Message sent!');
    }
}
