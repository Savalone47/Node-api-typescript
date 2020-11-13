"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
class Routes {
    constructor() {
        this.contactController = new crmController_1.ContactController();
    }
    routes(app) {
        // GET request
        app.route('/')
            .get((req, res) => {
            res.status(200).send({ message: 'GET request successfull!' });
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
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map