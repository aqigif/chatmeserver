'use strict'

const Route = use('Route')

//post Data

Route.group(() => {
    Route.post('login', 'AuthController.login').as('loginJwt')
    Route.get('profile', 'AuthController.profile').as('auth:jwt')
}).prefix('api/auth')

Route.group(() => {
    Route.get('users', 'UserController.index').middleware(['auth:jwt'])
    Route.get('users/:id', 'UserController.show').middleware(['auth:jwt'])
    Route.post('users', 'UserController.create').middleware(['auth:jwt'])
    Route.patch('users/:id', 'UserController.update').middleware(['auth:jwt'])
    Route.delete('users/:id', 'UserController.delete').middleware(['auth:jwt'])

    Route.get('rooms', 'RoomController.index').middleware(['auth:jwt'])
    Route.get('rooms/:id', 'RoomController.show').middleware(['auth:jwt'])

    Route.get('chats', 'ChatController.index').middleware(['auth:jwt'])
    Route.post('chats', 'ChatController.create').middleware(['auth:jwt'])
}).prefix('api/v1')
