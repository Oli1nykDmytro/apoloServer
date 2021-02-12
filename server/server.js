"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var trip = require('../src/trips/trips.router');
var app = express_1.default();
var PORT = 1717;
app.use('/api', trip);
app.listen(PORT, function () {
    console.log("Server was run http://localhost:" + PORT);
});
