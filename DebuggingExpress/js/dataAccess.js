'use strict';
/**
 * Created by wbs on 6/19/2017.
 */
let mongoose = require('mongoose');
mongoose.Promise = require('bluebird');


function DataAccess() {
    this.connectionString = "mongodb://localhost:27017/debugging";
    if (DataAccess.connection === undefined) {
        DataAccess.connection = mongoose.connect(this.connectionString);
    }
}

DataAccess.prototype.getConnection = function(){
    return DataAccess.connection;
};

module.exports = DataAccess;