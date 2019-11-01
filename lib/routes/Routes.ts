// lib/routes/Routes.ts

import app from 'app';

import { Request, Response }  from 'express';

import { ContactController } from './../controllers/controller';

export class Routes {
    
    public routes(app): void{
        // get specific contact           
        app.route('/')
        .get(this.contactController.getContacts);
        
        app.route('/contact')
        .get(this.contactController.getContacts)

        // post contact information
        app.route('/contact')
        .post(this.contactController.addNewContact);

         //contact detail
        app.route('/contact/:contactId')
        .get(this.contactController.getContactWithID);
        
         // Update a contact
        app.route('/contact/:contactId')
        .put(this.contactController.updateContact);
        
        // Delete a contact
        app.route('/contact/contactId')
        .delete(this.contactController.deleteContact);
        
    }
    public contactController : ContactController = new ContactController();
    
}
    //=====================================================//
        // contact (Get information about)
        // app.route('/contact')
        // .get((req: Request, res: Response)=>{
        //     res.status(200).send({
        //         message: 'get contact request successfuly'
        //     });
        // });
    //=======================================================//
        // app.route('/contact')
        // .post((req: Request, res: Response)=>{
        //     res.status(200).send({
        //         message: 'Post request successfuly'
        //     });
        // });
    //=======================================================//
        //contact detail
        // app.route('/contact/:contactId')
        // get specific contact
        // .get((req: Request, res: Response)=>{
        //     res.status(200).send({
        //         message: 'Get request successfuly'
        //     });
        // });
    //======================================================//
        // app.route('/contact/:contactId')
        // //Update a contact
        // .put((req: Request, res: Response)=>{
        //     res.status(200).send({
        //         message: 'Put request successfuly'
        //     });
        // });
    //=======================================================//
        // app.route('/contact/:contactId')
        // // Delete a contact
        // .delete((req: Request, res: Response)=>{
        //     res.status(200).send({
        //         message: 'Delete request successfuly'
        //     });
        // });
    //=========================================================//