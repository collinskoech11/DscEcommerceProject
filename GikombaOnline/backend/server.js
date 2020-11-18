import data from './Data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';

dotenv.config();


const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true
}).catch(error => console.log(error.reason));
