var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors('*'));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
var nm = require('nodemailer');
let savedOTPS = {

};
var transporter = nm.createTransport(
    {
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: 'pizzaboyze2@gmail.com',
            pass: 'qgsumbioqxtfakzv'
        }
    }
);
app.post('/sendotp', (req, res) => {
    let email = req.body.email;
    

    var digits = '0123456789'; 
    let otp = ''; 
    for (let i = 0; i < 6; i++ ) { 
        otp += digits[Math.floor(Math.random() * 10)]; 
    } 

    var options = {
        from: 'Book N Order',
        to: `${email}`,
        subject: "Login OTP",
        html: `<p>Your email login code is - ${otp} <br/>
        It is only valid for the next 10 minutes.
        </p>`

    };
    transporter.sendMail(
        options, function (error, info) {
            if (error) {
                console.log(error);
                res.status(500).send("couldn't send")
            }
            else {
                savedOTPS[email] = otp;
                setTimeout(
                    () => {
                        delete savedOTPS.email
                    }, 600
                )
                res.send("sent otp")
            }

        }
    )
})

app.post('/verify', (req, res) => {
    let otprecived = req.body.otp;
    let email = req.body.email;
    if (savedOTPS[email] == otprecived) {
        res.send("Verfied");
    }
    else {
        res.status(500).send("Invalid OTP")
    }
})

app.listen(4005, () => {
    console.log("started")
})