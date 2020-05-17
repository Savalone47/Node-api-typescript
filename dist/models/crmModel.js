"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
exports.ContactSchema = new Schema({
    firstName: {
        type: String,
        require: 'Enter a first mame'
    },
    lastName: {
        type: String,
        require: 'Enter a last name'
    },
    email: {
        type: String
    },
    company: {
        type: String
    },
    phone: {
        type: Number
    },
    created_data: {
        type: Date,
        default: Date.now
    }
});
//# sourceMappingURL=crmModel.js.map