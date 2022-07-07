<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/
/*
$router->get('/', function () use ($router) {
    return $router->app->version();
});
Route::get('/', function () {
    return view('api.index');    
});
*/
$router->get('/', 'Api\ArticleController@index');
$router->get('/api/article/{id}', 'Api\ArticleController@getArticle');
$router->delete('/api/article/{id}', 'Api\ArticleController@deleteArticle');
$router->put('/api/article/{id}', 'Api\ArticleController@updateArticle');
$router->post('/api/article', 'Api\ArticleController@createArticle');
/*
Route::group(['namespace' => 'Api', 'as' => 'api.'], function () {
    Route::get('/', 'ArticleController@index')->name('index');
    Route::get('/article/{id}', 'ArticleController@getArticle')->name('indsex');

});*/
