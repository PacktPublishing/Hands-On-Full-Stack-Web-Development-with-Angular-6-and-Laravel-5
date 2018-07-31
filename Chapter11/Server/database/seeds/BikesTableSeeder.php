<?php

use Illuminate\Database\Seeder;
use App\Bike;

class BikesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('bikes')->delete();
        $json = File::get("database/data-sample/bikes.json");
        $data = json_decode($json);
        foreach ($data as $obj) {
            Bike::create(array(
                'id' => $obj->id,
                'make' => $obj->make,
                'model' => $obj->model,
                'year' => $obj->year,
                'mods' => $obj->mods,
                'picture'=> $obj->picture,
                'user_id' => $obj->user_id,
                'builder_id' => $obj->builder_id
            ));
        }
    }
}
