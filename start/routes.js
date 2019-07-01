'use strict'

const Route = use('Route')

//post Data

Route.group(() => {
    Route.post('login', 'AuthController.postLoginJwt').as('loginJwt')
}).prefix('api/auth')

Route.group(() => {
    Route.get('users', 'UserController.index').middleware(['auth:jwt'])
    Route.get('users/:id', 'UserController.show').middleware(['auth:jwt'])
    Route.post('users', 'UserController.register').middleware(['auth:jwt'])
    Route.patch('users/:id', 'UserController.update').middleware(['auth:jwt'])
    Route.delete('users/:id', 'UserController.delete').middleware(['auth:jwt'])
}).prefix('api/v1')