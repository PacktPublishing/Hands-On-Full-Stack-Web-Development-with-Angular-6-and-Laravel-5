<?php

namespace App\Exceptions;

use Exception;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Database\Eloquent\ModelNotFoundException as ModelNotFoundException;
use Symfony\Component\HttpKernel\Exception\MethodNotAllowedHttpException as MethodNotAllowedHttpException;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException as UnauthorizedHttpException;
use Tymon\JWTAuth\Exceptions\JWTException as JWTException;
use Tymon\JWTAuth\Exceptions\TokenExpiredException as TokenExpiredException;
use Tymon\JWTAuth\Exceptions\TokenInvalidException as TokenInvalidException;


class Handler extends ExceptionHandler
{
    /**
     * A list of the exception types that are not reported.
     *
     * @var array
     */
    protected $dontReport = [
        //
    ];

    /**
     * A list of the inputs that are never flashed for validation exceptions.
     *
     * @var array
     */
    protected $dontFlash = [
        'password',
        'password_confirmation',
    ];

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $exception
     * @return void
     */
    public function report(Exception $exception)
    {
        parent::report($exception);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $exception
     * @return \Illuminate\Http\Response
     */
    public function render($request, Exception $exception)
    {
        // This will replace our 404 response from the MVC to a JSON response.
        if ($exception instanceof ModelNotFoundException
            && $request->wantsJson() // Enable header Accept: application/json to see the proper error msg
        ) {
            return response()->json(['error' => 'Resource not found'], 404);
        }


        if ($exception instanceof MethodNotAllowedHttpException) {
            return response()->json(['error' => 'Method Not Allowed'], 405);
        }

        if ($exception instanceof UnauthorizedHttpException) {
            return response()->json(['error' => 'Token not provided'], 401);
        }

        // JWT Auth related errors
        if ($exception instanceof JWTException) {
            return response()->json(['error' => $exception], $exception->getStatusCode());
        }

        if ($exception instanceof TokenExpiredException) {
            return response()->json(['error' => 'token_expired'], $exception->getStatusCode());
        
        } else if ($exception instanceof TokenInvalidException) {
            return response()->json(['error' => 'token_invalid'], $exception->getStatusCode());
        }

        return parent::render($request, $exception);
    }
}
