// lib/routes/Routes.ts

import {Request, Response}  from 'express';

export class Routes {

    public routes(app): void{
        app.route('/')
        .get((req: Request, res: Response)=>{
            res.status(200).send({
                message: 'get home page request successfuly'
            });
        });

        // contact (Get information about)
        app.route('/contact')
        .get((req: Request, res: Response)=>{
            res.status(200).send({
                message: 'get contact request successfuly'
            });
        });

        app.route('/contact')
        .post((req: Request, res: Response)=>{
            res.status(200).send({
                message: 'Post request successfuly'
            });
        });

        //contact detail
        app.route('/contact/:contactId')
        // get specific contact
        .get((req: Request, res: Response)=>{
            res.status(200).send({
                message: 'Get request successfuly'
            });
        });

        app.route('/contact/:contactId')
        //Update a contact
        .put((req: Request, res: Response)=>{
            res.status(200).send({
                message: 'Put request successfuly'
            });
        });
        app.route('/contact/:contactId')
        // Delete a contact
        .delete((req: Request, res: Response)=>{
            res.status(200).send({
                message: 'Delete request successfuly'
            });
        });
        
    }
}