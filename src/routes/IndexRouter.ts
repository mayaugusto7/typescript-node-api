import { Router, Request, Response, NextFunction } from 'express';

export class IndexRouter {
    router: Router;

    constructor() {
       this.router = Router();
       this.init();
    }

    public indexPage(req: Request, res: Response, next: NextFunction) {
        res.render('index', {title: 'Express JS'});
    }


    init() {
        this.router.get('/', this.indexPage);
    }
}

const indexRouter = new IndexRouter();
indexRouter.init();

export default indexRouter.router;