import express from 'express';
import mongoose from 'mongoose';
import auth from "./routes/auth.js";
import seed from "./routes/seed/seed.js";
import users from "./routes/users/users.js";
import cases from './routes/cases/cases.js';

const app = express();
const port = process.env.PORT || 3000;
const db = process.env.DB;
const dbPort = process.env.DB_PORT;
const dbURL = process.env.DB_URL;

mongoose.connect(`mongodb://${dbURL}:${dbPort}/${db}`).then(() => {console.log(`Connected to MongoDB:${dbPort}`)}).catch( () => {console.log('Not Able to Connect to Mongo DB')});

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
  });
app.use("/api/auth", auth);
app.use("/api/users", users);
app.use('/api/cases', cases);
app.use('/api/seed', seed);


app.listen(port,() => {
    console.log(`App Running, Listen on port ${port}...`);
})