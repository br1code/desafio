"use strict";

var socket = io();

socket.on('connect', function() {
    console.log('New player connected (from client)');
});