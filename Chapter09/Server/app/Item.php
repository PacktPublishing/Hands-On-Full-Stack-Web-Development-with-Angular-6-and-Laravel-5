<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

 /**
 * @SWG\Definition(
 *     definition="Item",
 *     required={"type", "name", "company", "bike_id"},
 *     @SWG\Property(
 *          property="type",
 *          type="string",
 *          description="Item Type",
 *          example="Exhaust"
 *    ),
 *     @SWG\Property(
 *          property="name",
 *          type="string",
 *          description="Item name",
 *          example="2 into 1 Exhaust"
 *    ),
 *     @SWG\Property(
 *          property="company",
 *          type="string",
 *          description="Produced by: some company",
 *          example="Vance and Hines"
 *    ),
 *    @SWG\Property(
 *          property="bike_id",
 *          type="string",
 *          description="Association with: bike_id",
 *          example="1"
 *    )
 * )
 */

class Item extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'items';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'type',
        'name',
        'company',
        'bike_id'
    ];

    /**
     * Relationship.
     *
     * @var string
     */

    public function bike() {
        return $this->belongsTo('App\Bike');
    }
}
