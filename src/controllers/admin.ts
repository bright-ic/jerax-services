/**
 * All Admin controller actions
 * Only service calls should be made here
 */

import _ from 'lodash';
import BaseController from './base';
import { ObjectType } from '../types';
import { Request, Response } from "express";

import { ADMIN_ROUTES, BASE_ADMIN  } from '../lib/route-constants';



class AdminController extends BaseController {

	async admin(req:Request, res:Response) {
		const view_data:ObjectType = {};
		// console.log('ADMIN_ROUTES:', ADMIN_ROUTES);  
		try {
			
			res.render('admin/index', this.setTemplateParameters(req, {
				page_styles: ['css/admin.css'],
				page_title: '',
				selected_page: 'admin_page',
				ADMIN_ROUTES: ADMIN_ROUTES,
				BASE_ADMIN,
				...view_data
			}));
		} catch (e) {
			console.log(e)
			let error = 'An error occurred processing your request. Please check your request and try again';
			return BaseController.sendFailResponse(res, error);
		}
	}

}


export default AdminController;
