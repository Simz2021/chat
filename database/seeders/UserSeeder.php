<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Jimmy Allen',
            'email' => 'jimmy@example.com',
            'password' => Hash::make('password')
        ]);

        User::create([
            'name' => 'Timmy Kelly',
            'email' => 'timmy@example.com',
            'password' => Hash::make('password')
        ]);

        User::create([
            'name' => 'Jess Ryan',
            'email' => 'jess@example.com',
            'password' => Hash::make('password')
        ]);
    }
}
