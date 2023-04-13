// import nodemailer from 'nodemailer';

// export async function Mailer(email, msg, firstName, lastName) {
//   const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true,
//     auth: {
//       user: "mount.photos@gmail.com",
//       pass: "gtmkphruczuicrnq",
//     },
//   });

//   const options = {
//     from: email,
//     to: "mount.photos@gmail.com",
//     subject: "New Response",
//     text: `Message from ${firstName}  ${lastName}!
//       They say:  ${msg}
      
//       They can be reached at ${email}`,
//   };

//   return transporter.sendMail(options, (err, info) => {
//     if (err) {
//       console.log(err);
//       return;
//     }
//     console.log(`Email ${info.response} was successfully sent`);
//   });
// }
