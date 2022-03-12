import express from "express";
import shortenRoute from "routes/shorten";
import db from "db";

const api = express();
api.use(express.json());
api.use(express.urlencoded({ extended : true}));
api.use(shortenRoute);
db.connect();

api.listen(5000, () => {
    console.log("Listening in port 5000");
});