<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Bike;
use App\Rating;
use App\Http\Resources\RatingResource;

class RatingController extends Controller
{    
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     *
     * @SWG\Post(
     *     path="/api/bikes/{bike_id}/ratings",
     *     tags={"Ratings"},
     *     summary="rating a Bike",
     *     @SWG\Parameter(
     *          in="path",
     *          name="id",
     *          required=true,
     *          type="integer",
     *          format="int64",
     * 			description="Bike Id"
     * 		),
     *    @SWG\Parameter(
     * 			name="body",
     * 			in="body",
     * 			required=true,
     * 			@SWG\Schema(ref="#/definitions/Rating"),
     * 			description="Json format",
     * 		 ),
     *     @SWG\Response(
     *          response=201,
     *          description="Success: A Newly Created Rating",
     *          @SWG\Schema(ref="#/definitions/Rating")
     *     ),
     *     @SWG\Response(
     *          response=401,
     *          description="Refused: Unauthenticated"
     *     ),
     *     @SWG\Response(
     *          response="422",
     *          description="Missing mandatory field"
     *     ),
     *     @SWG\Response(
     *          response="404",
     *          description="Not Found"
     *     ),
     *     @SWG\Response(
	   * 		    response="405",
	   * 	      description="Invalid HTTP Method"
	   *      ),
     *      security={
     * 		   { "api_key":{} }
     *      }
     * ),
     */
    public function store(Request $request, Bike $bike)
    {
      $rating = Rating::firstOrCreate(
        [
          'user_id' => $request->user()->id,
          'bike_id' => $bike->id,
        ],
        ['rating' => $request->rating]
      );

      return new RatingResource($rating);
    }
}
