/**
 * Blog Page and Static Pages
 * @type {e | (() => Express)}
 */

import { Router, Request, Response } from 'express';
const router = Router();


// import { ROUTE_BLOG, ROUTE_ADD_BLOG, ROUTE_ADD_BLOG_CATEGORY, ROUTE_LIST_BLOG, ROUTE_LIST_BLOG_CATEGORY} from '../lib/route-constants';

import { ADMIN_ROUTES, ROUTE_BLOG } from '../lib/route-constants';
import BlogController from '../controllers/blog';


router.get(ADMIN_ROUTES.ROUTE_BLOG, async (req: Request, res: Response) => {
	const blogController = new BlogController(req);
	return blogController.blog_home(req, res);
});

router.get(ADMIN_ROUTES.ROUTE_ADD_BLOG, async (req: Request, res: Response) => {
	const blogController = new BlogController(req);
	return blogController.add_blog(req, res);
});

router.get(ADMIN_ROUTES.ROUTE_ADD_BLOG_CATEGORY, async (req: Request, res: Response) => {
	const blogController = new BlogController(req);
	return blogController.add_blog_category(req, res);
});
router.get(ADMIN_ROUTES.ROUTE_LIST_BLOG, async (req: Request, res: Response) => {
	const blogController = new BlogController(req);
	return blogController.list_blog(req, res);
});
router.get(ADMIN_ROUTES.ROUTE_LIST_BLOG_CATEGORY, async (req: Request, res: Response) => {
	const blogController = new BlogController(req);
	return blogController.list_blog_category(req, res);
});
router.get(ROUTE_BLOG, async (req: Request, res: Response) => {
	const blogController = new BlogController(req);
	return blogController.user_blog(req, res);
});

export default router;
