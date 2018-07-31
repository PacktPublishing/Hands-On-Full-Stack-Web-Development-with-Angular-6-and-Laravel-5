<?php

use Illuminate\Database\Seeder;
use App\Item;

class ItemsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('items')->delete();
        $json = File::get("database/data-sample/items.json");
        $data = json_decode($json);
        foreach ($data as $obj) {
            Item::create(array(
                'id' => $obj->id,
                'type' => $obj->type,
                'name' => $obj->name,
                'company' => $obj->company,
                'bike_id' => $obj->bike_id
            ));
        }
    }
}
