import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({

	firstName:{ type: String, required: true },
	lastName: { type: String, required: true },
	email: 	  { type: String, required: true }, 
	company:  { type: String, required: true },
	phone: 	  { type: Number, required: true },

	created_data: { type: Date, default: Date.now }
});
