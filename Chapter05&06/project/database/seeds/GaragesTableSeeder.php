<?php

use Illuminate\Database\Seeder;
use App\Garage;

class GaragesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('garages')->delete();
        $json = File::get("database/data-sample/garages.json");
        $data = json_decode($json);
        foreach ($data as $obj) {
            Garage::create(array(
                'id' => $obj->id,
                'name' => $obj->name,
                'customer_level' => $obj->customer_level
            ));
        }
    }
}
