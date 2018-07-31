<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

 /**
 * @SWG\Definition(
 *     definition="Builder",
 *     required={"name", "description", "location"},
 *     @SWG\Property(
 *          property="name",
 *          type="string",
 *          description="Builder name",
 *          example="Jesse James"
 *    ),
 *     @SWG\Property(
 *          property="description",
 *          type="string",
 *          description="Famous Motorcycle builder from Texas",
 *          example="Austin Speed Shop"
 *    ),
 *     @SWG\Property(
 *          property="location",
 *          type="string",
 *          description="Texas/USA",
 *          example="Austin, Texas"
 *    )
 * )
 */


class Builder extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'builders';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'location'
    ];

    /**
     * Relationship.
     *
     * @var array
     */

    public function bike() {
        return $this->hasOne('App\Bike');
    }
}
