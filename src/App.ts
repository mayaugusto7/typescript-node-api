import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as bodyParser from 'body-parser';
import * as favicon from 'serve-favicon';

/**
 * Routes import
 */
import IndexRouter from './routes/IndexRouter';
import HeroRouter from './routes/HeroRouter';

// Creates and configures an ExpressJS web server.
class App {

    // ref to Express istance
    public express: express.Application;

    //Run configuration methods on the Express instance.
    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.set('views', path.join(__dirname, 'views'));
        this.express.set('view engine', 'jade');
        this.express.use(logger('dev'));
        this.express.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    // Configure API endpoints.
    private routes(): void {
        /* This is just to get up and running, and to make sure what we've got is
        * working so far. This function will change when we start to add more
        * API endpoints */

        let router = express.Router();

        // placeholder route handler
        router.get('/', (req, res, next) => {
            res.json({
                message: 'Hello World!'
            });
        });

        this.express.use('/', IndexRouter);
        this.express.use('/api/v1/heroes', HeroRouter);
    }

}

export default new App().express;
