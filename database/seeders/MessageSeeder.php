<?php

namespace Database\Seeders;

use App\Models\Message;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class MessageSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        $jimmy = User::where('name', 'Jimmy Allen')->first();
        $timmy = User::where('name', 'Timmy Kelly')->first();

        Message::create([
            'message' => 'Hi Rekha',
            'user_id' => $jimmy->id
        ]);
        Message::create([
            'message' => 'Hi',
            'user_id' => $timmy->id
        ]);
        Message::create([
            'message' => 'How are you?',
            'user_id' => $jimmy->id
        ]);
        Message::create([
            'message' => 'I am good, how about you?',
            'user_id' => $timmy->id
        ]);
        Message::create([
            'message' => 'I am good too.',
            'user_id' => $jimmy->id
        ]);
        Message::create([
            'message' => 'I wanna discuss something with you.',
            'user_id' => $jimmy->id
        ]);
        Message::create([
            'message' => 'Sure, let me know what happened.',
            'user_id' => $timmy->id
        ]);
    }
}
