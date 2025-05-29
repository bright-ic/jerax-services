
import _ from 'lodash';
import BaseController from './base';
import { ObjectType } from '../types';
import { Request, Response } from "express";

import { ADMIN_ROUTES, BASE_ADMIN  } from '../lib/route-constants';

class BlogController extends BaseController {


	async blog_home(req:Request, res:Response) {
		const view_data:ObjectType = {};

		try {
            // console.log("ADMIN_ROUTES before render:", ADMIN_ROUTES);
			res.render('admin/blog/index', this.setTemplateParameters(req, {
				page_styles: ['css/admin.css'],
				page_title: '',
				selected_page: 'admin_page blog_page',
                ADMIN_ROUTES: ADMIN_ROUTES,
                BASE_ADMIN ,
				...view_data
			}));
		} catch (e) {
			console.log(e)
			let error = 'An error occurred processing your request. Please check your request and try again';
			return BaseController.sendFailResponse(res, error);
		}
	}
    async add_blog(req:Request, res:Response) {
		const view_data:ObjectType = {};

		try {
			res.render('admin/blog/add_blog', this.setTemplateParameters(req, {
				page_styles: ['css/admin.css'],
				page_title: '',
				selected_page: 'admin_page add_blog_page',
                ADMIN_ROUTES: ADMIN_ROUTES,
                BASE_ADMIN ,
				...view_data
			}));
		} catch (e) {
			console.log(e)
			let error = 'An error occurred processing your request. Please check your request and try again';
			return BaseController.sendFailResponse(res, error);
		}
	}
    async add_blog_category(req:Request, res:Response) {
		const view_data:ObjectType = {};

		try {
			res.render('admin/blog/add_blog_category', this.setTemplateParameters(req, {
				page_styles: ['css/admin.css'],
				page_title: '',
				selected_page: 'admin_page add_blog_category_page',
                ADMIN_ROUTES: ADMIN_ROUTES,
                BASE_ADMIN ,
				...view_data
			}));
		} catch (e) {
			console.log(e)
			let error = 'An error occurred processing your request. Please check your request and try again';
			return BaseController.sendFailResponse(res, error);
		}
	}
    async list_blog(req:Request, res:Response) {
		const view_data:ObjectType = {};

		try {
			res.render('admin/blog/list_blog', this.setTemplateParameters(req, {
				page_styles: ['css/admin.css'],
				page_title: 'Blog List', 
				selected_page: 'admin_page list_blog_page',
                ADMIN_ROUTES: ADMIN_ROUTES,
                BASE_ADMIN ,
				...view_data
			}));
		} catch (e) {
			console.log(e)
			let error = 'An error occurred processing your request. Please check your request and try again';
			return BaseController.sendFailResponse(res, error);
		}
	}
    async list_blog_category(req:Request, res:Response) {
		const view_data:ObjectType = {};

		try {
			res.render('admin/blog/list_blog_category', this.setTemplateParameters(req, {
				page_styles: ['css/admin.css'],
				page_title: '',
				selected_page: 'admin_page list_blog_category_page page-profile',
                ADMIN_ROUTES: ADMIN_ROUTES,
                BASE_ADMIN ,
				...view_data
			}));
		} catch (e) {
			console.log(e)
			let error = 'An error occurred processing your request. Please check your request and try again';
			return BaseController.sendFailResponse(res, error);
		}
	}
    async user_blog(req:Request, res:Response) {
		const view_data:ObjectType = {};

		try {
			res.render('blog', this.setTemplateParameters(req, {
				page_styles: [],
				page_title: '',
				selected_page: 'blog_post_page',
				...view_data
			}));
		} catch (e) {
			console.log(e)
			let error = 'An error occurred processing your request. Please check your request and try again';
			return BaseController.sendFailResponse(res, error);
		}
	}

}


export default BlogController;
