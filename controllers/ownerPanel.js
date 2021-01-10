const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
var express = require("express");
var router = express.Router();
var nodemailer = require("nodemailer");
mysql.createConnection({ multipleStatements: true });

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "Snoll",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    port: "8889" 
});

exports.event = (req,res) => {
    try {
    const { EventNo, EventName, EventDate, EventPlace, EventPrice, EventPhotoBackground,
    EventPhotoUrl, PerformerName, EventCategory, EventCapacity,EventAddress, EventCity} = req.body;
    db.query('INSERT INTO Events SET ?',
    {
        EventNo: EventNo,
        EventName: EventName,
        EventDate: EventDate,
        EventPlace: EventPlace,
        EventPrice: EventPrice,
        EventPhotoBackground: EventPhotoBackground,
        EventPhotoUrl: EventPhotoUrl,
        PerformerName: PerformerName,
        EventCategory: EventCategory,
        EventCapacity: EventCapacity,
        EventAddress: EventAddress,
        EventCity: EventCity,
    }, (err,results) => {
        if(err){
        console.log(err);
        }else{
        return res.redirect("/ownerPanel");
        }
    }
    )
    } catch (error) {
    console.log(error);
    }
};    