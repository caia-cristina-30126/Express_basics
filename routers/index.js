"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const path_1 = require("path");
const api_1 = __importDefault(require("./api"));
function configure(app) {
    app
        .get('/', (req, res, next) => {
        res.sendFile((0, path_1.resolve)(__dirname, '../index.html'));
    })
        .use(express_1.default.static('public')) // it s gonna be looking for a file in the public folder. If it s not gonna find it => call next
        // make a req through the router
        .use((0, body_parser_1.json)()) // go through every single request after checks for all static files and before gets the api
        .use('/api', (0, api_1.default)())
        .use('/error', (req, res, next) => {
        next(new Error('Other error'));
    })
        .use((req, res, next) => {
        next(new Error('Not found!'));
    })
        .use((error, req, res, next) => {
        switch (error.message) {
            case 'Not Found':
                res.sendFile((0, path_1.resolve)(__dirname, '../notFound.html'));
                return;
        }
        res.sendFile((0, path_1.resolve)(__dirname, '../error.html')); //parse the error from error.html
    });
}
exports.default = configure;
