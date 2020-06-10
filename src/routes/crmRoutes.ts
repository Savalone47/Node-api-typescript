import { Request, Response } from "express";
import { ContactController } from "../controllers/crmController";

export class Routes {
	public contactController: ContactController = new ContactController();
	
	public routes(app):void {

		// GET request
		app.route('/')
			.get((req: Request, res: Response) => {
			res.status(200).send({message: 'GET request successfull!'});
		});

		// GET All items
		app.route('/contact')
			.get(this.contactController.getContacts);

		// GET The item specified Id
		app.route('/contact/:contactId')
			.get(this.contactController.getContactWithID);

	    // POST New item
		app.route('/contact')
			.post(this.contactController.addNewContact);

		
		// PUT Edited item in-place of item with specified Id
		app.route('/contact/:contactId')
			.put(this.contactController.updateContact);

		// DELETE item specified Id
		app.route('/contact/:contactId')
			.delete(this.contactController.deleteContact);
	}
}