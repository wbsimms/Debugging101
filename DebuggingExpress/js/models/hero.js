'use strict';
/**
 *  * Created by wbsimms on 7/5/2017.
 */
// This is a PAClient's customer. Customers belong to to PA Clients.
// If this doesn't make sense please ask someone for help before changing this class!

let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let DBAccess = require('../dataAccess');
let conn = new DBAccess().getConnection();

let schema = new Schema({
    // _id: {type: Schema.Types.ObjectId },
    name: {type: String, required: true},
    power: {type: String, required: true},
    createdDate: {type: Date, required: true, default: new Date().toUTCString()},
    updatedDate: {type: Date, required: true, default: new Date().toUTCString()}
});

let Hero = conn.model('hero',schema);

module.exports = Hero;