<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

 /**
 * @SWG\Definition(
 *     definition="Bike",
 *     required={"make", "model", "year", "mods"},
 *     @SWG\Property(
 *          property="make",
 *          type="string",
 *          description="Company name",
 *          example="Harley Davidson, Honda, Yamaha"
 *    ),
 *     @SWG\Property(
 *          property="model",
 *          type="string",
 *          description="Motorcycle model",
 *          example="Xl1200, Shadow ACE, V-Star"
 *    ),
 *     @SWG\Property(
 *          property="year",
 *          type="string",
 *          description="Fabrication year",
 *          example="2009, 2008, 2007"
 *    ),
 *     @SWG\Property(
 *          property="mods",
 *          type="string",
 *          description="Motorcycle description of modifications",
 *          example="New exhaust system"
 *    ),
 *     @SWG\Property(
 *          property="picture",
 *          type="string",
 *          description="Bike image URL",
 *          example="http://www.sample.com/my.bike.jpg"
 *    )
 * )
 */

class Bike extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'make',
        'model',
        'year',
        'mods',
        'picture'
    ];
}
