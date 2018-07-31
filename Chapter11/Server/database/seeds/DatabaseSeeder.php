<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $this->call(UsersTableSeeder::class);
        $this->call(BikesTableSeeder::class);
        $this->call(BuildersTableSeeder::class);
        $this->call(ItemsTableSeeder::class);
        $this->call(GaragesTableSeeder::class);
        $this->call(BikeGarageTableSeeder::class);
        $this->call(RatingsTableSeeder::class);
    }
}
