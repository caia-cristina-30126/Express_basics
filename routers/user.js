"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
function users() {
    const router = (0, express_1.Router)();
    router
        .get('/', (req, res, next) => {
        res.json({
            id: 1,
            firstname: 'Cristina-Elena',
            lastname: 'Caia-Hoanas'
        });
    });
    return router;
}
exports.default = users;
