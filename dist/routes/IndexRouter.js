"use strict";
const express_1 = require("express");
class IndexRouter {
    constructor() {
        this.router = express_1.Router();
        this.init();
    }
    indexPage(req, res, next) {
        res.render('index', { title: 'Express JS' });
    }
    init() {
        this.router.get('/', this.indexPage);
    }
}
exports.IndexRouter = IndexRouter;
const indexRouter = new IndexRouter();
indexRouter.init();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = indexRouter.router;
