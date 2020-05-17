"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmController_1 = require("../controllers/crmController");
class Routes {
    constructor() {
        this.contactController = new crmController_1.ContactController();
    }
    routes(app) {
        app.route('/')
            .get((req, res) => {
            res.status(200).send({ message: 'GET request successfull!' });
        });
        app.route('/contact')
            .get(this.contactController.getContacts);
        app.route('/contact')
            .post(this.contactController.addNewContact);
        app.route('/contact/:contactId')
            .get(this.contactController.getContactWithID);
        app.route('/contact/:contactId')
            .put(this.contactController.updateContact);
        app.route('/contact/:contactId')
            .delete(this.contactController.deleteContact);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map