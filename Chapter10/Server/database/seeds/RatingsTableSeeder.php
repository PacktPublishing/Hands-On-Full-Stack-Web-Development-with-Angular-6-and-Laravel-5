<?php

use Illuminate\Database\Seeder;

class RatingsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('ratings')->delete();
        DB::table('ratings')->insert([
            'user_id' => '1',
            'bike_id' => '3',
            'rating' => '3'
        ]);
        DB::table('ratings')->insert([
            'user_id' => '2',
            'bike_id' => '1',
            'rating' => '3'
        ]);
    }
}