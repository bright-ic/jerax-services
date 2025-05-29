import {Request, Response, NextFunction} from "express";
import expressConfig from "./app";

import IndexController from "./controllers";
import TrainingController from "./controllers/training";
import ServicesController from "./controllers/services";
import AdminController from "./controllers/admin";
import BlogController from "./controllers/blog";
import { ADMIN_ROUTES} from "./lib/route-constants";

// Route groups
import index_route from "./routes/index";
import training from "./routes/training";
import contact from "./routes/contact";
import services from "./routes/services";
import admin from "./routes/admin";
import blog from "./routes/blog";


const AppRoutes = () => {
    const app = expressConfig();

    // Routes
    app.use('/', index_route);
    app.use('/', training);
    app.use('/', contact);
    app.use('/', services);
    app.use('/', admin);
    app.use('/', blog);
    app.use(ADMIN_ROUTES.ROUTE_ADD_BLOG, admin);
    app.use(ADMIN_ROUTES.ROUTE_LIST_BLOG, admin);
    

    // No matching route
    app.use((req: Request, res: Response, next: NextFunction) => {
        const indexController = new IndexController(req);
        return indexController.error404(req, res);
    })
    // Internal server error route
    app.use((req: Request, res: Response, next) => {
        const indexController = new IndexController(req);
        return indexController.error500(req, res);
    });

    return app;
}


export default AppRoutes;
