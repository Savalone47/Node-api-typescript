import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new​​ Schema({
    firstName: {
        type: String,
        required: 'Enter Your First name !'   
    },
    lastName: {
        type: String,
        required: 'Enter Your Last name!'
    },
    email:{
        type: String
    },

    company:{
        type: String
    },
    phone:{
        type: String
    },
    created_Date:{
        type: Date, 
        Default: Date.now
    }

});