/**
 * Admin Page and Static Pages
 * @type {e | (() => Express)}
 */

import { Router, Request, Response } from 'express';
const router = Router();

import { BASE_ADMIN} from '../lib/route-constants';
import AdminController from '../controllers/admin';
import { ADMIN_ROUTES } from '../lib/route-constants';
// console.log("ADMIN_ROUTES:", ADMIN_ROUTES);

router.get(BASE_ADMIN, async (req: Request, res: Response) => {
	const adminController = new AdminController(req);
	return adminController.admin(req, res);
});


export default router;
