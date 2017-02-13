<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::get("/users",['middleware'=>'auth:api'],'api\v1\UserController@index');

Route::middleware('api.auth')->get('/users', 'api\v1\UserController@index');
