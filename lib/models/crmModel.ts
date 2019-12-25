import * as mongoose from "mongoose";
import app from "../app";

const Schema = mongoose.Schema;


export const ContactSchema = new Schema({

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