"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trip = void 0;
var mongoose_1 = require("mongoose");
var tripSchema = new mongoose_1.Schema({
    from: {
        type: String,
        requeired: true
    },
    to: {
        type: String,
        requeired: true
    }
});
var Trip = mongoose_1.model('Trip', tripSchema);
exports.Trip = Trip;
