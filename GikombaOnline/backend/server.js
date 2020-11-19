import data from './Data';
import dotenv from 'dotenv';
import config from './config';
import mongoose from 'mongoose';
import express from 'express';
import userRoute from './routes/userRoute';

dotenv.config();


const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();

app.use("/api/users", userRoute);
