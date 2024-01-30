import dotenv from "dotenv";
import nodemailer from "nodemailer";


dotenv.config();
const service = process.env.MAIL_SERVICE;
const mail_user = process.env.MYEMAIL;
const mail_pass = process.env.MYPASS;


export const DB = process.env.DB!;
export const PORT = parseInt(process.env.PORT!);
export const JWT_KEY = process.env.JWT_KEY!;
export const FRONTEND_URL = process.env.FRONTEND_URL!;

// let testAccount = {
//   user: "mupacauxp4mgw2mi@ethereal.email",
//   pass: "eQVNHXGY9NFcWYzMWB",
// };

// export let transporter = nodemailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, // true for 465, false for other ports
//   auth: {
//     user: testAccount.user, // generated ethereal user
//     pass: testAccount.pass, // generated ethereal password
//   },
export var transporter = nodemailer.createTransport({
  service: service,
  auth: {
    user: mail_user,
    pass: mail_pass,
  },
});
