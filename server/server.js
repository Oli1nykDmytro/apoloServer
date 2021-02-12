"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
// const trip = require('../src/trips/trips.router');
var app = express_1.default();
var PORT = 1717;
var uri = 'mongodb+srv://Oliiynik_Dmt:test1@cluster0.nfppp.mongodb.net/<dbname>?retryWrites=true&w=majority';
mongoose_1.default.connect(uri, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
}, function () {
    console.log('conected to da base');
});
// app.use('/api',trip)
app.listen(PORT, function () {
    console.log("Server was run http://localhost:" + PORT);
});
