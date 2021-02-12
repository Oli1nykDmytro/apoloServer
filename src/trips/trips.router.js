"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var tripRouter = express_1.default.Router();
tripRouter.get('alltrip', function (req, res) {
    console.log('this router trip');
});
module.exports = tripRouter;
