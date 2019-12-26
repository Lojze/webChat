'use strict'

const Koa = require('koa')
const fs = require('fs')
const mongoose = require('mongoose')
const Promise = require('bluebird')
const options = require('./options.json')
const { join } = require('path')



const app = new Koa()

// logger
app.use(async (ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

// x-response-time

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}ms`);
});

// response

app.use(async ctx => {
    ctx.body = 'Hello World';
});
app.listen(options.port)
console.log('Listening: ' + options.port)