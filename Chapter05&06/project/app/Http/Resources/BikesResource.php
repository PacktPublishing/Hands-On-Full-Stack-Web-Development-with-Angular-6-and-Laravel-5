<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use App\Builder;

class BikesResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
      return [
        'id' => $this->id,
        'make' => $this->make,
        'model' => $this->model,
        'year' => $this->year,
        'mods' => $this->mods,
        'picture' => $this->picture,
        'garages' => $this->garages,
        'items' => $this->items,
        'builder' => $this->builder,
        'user' => $this->user,
        'ratings' => $this->ratings,
        'average_rating' => $this->ratings->avg('rating'),
        // Casting objects to string, to avoid receive create_at and update_at as object
        'created_at' => (string) $this->created_at,
        'updated_at' => (string) $this->updated_at
      ];
    }
}
