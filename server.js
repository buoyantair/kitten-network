require('dotenv').config();
const mongoose = require('mongoose');
const Koa = require('koa');
const Router = require('koa-router');
const koaBody = require('koa-bodyparser');

const Kitty = require('./models/kitty.js');

mongoose.connect(`mongodb://${process.env.DBUSER}:${process.env.DBPASSWORD}@ds046667.mlab.com:46667/mongoose-test-zone`);
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', console.log.bind(console, 'Connected to DB'));

