import nodemailer from "nodemailer";

export default async function sendEmail(req, res) {
  try {
    const transporter = nodemailer.createTransport({
      host: "onlinedigital-es.correoseguro.dinaserver.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        ciphers: "SSLv3",
      },
      requireTLS: true,
      authMethod: "PLAIN",
    });

    const options = {
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `Contacto de ${req.body.name}`,
      html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>The HTML5 Herald</title>
        <meta name="description" content="The HTML5 Herald">
        <meta name="author" content="SitePoint">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      
        <link rel="stylesheet" href="css/styles.css?v=1.0">
      
      </head>
      
      <body>
        <div class="img-container" style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden; font-family: 'helvetica', 'ui-sans';">              
              </div>
                <div class="container" style="margin-left: 20px;margin-right: 20px;">
                  <h3>Nombre:  ${req.body.name}</h3>
                  <h3>Email:  ${req.body.email}</h3>
                  <h3>Teléfono:  ${req.body.phone}</h3>
                <div style="font-size: 16px;">
                  <h3>Mensaje:</h3>
                  <p>${req.body.message}</p>
                  <br>
                  </div>
                </div>
              </div>
      </body>
      </html>`,
    };

    await transporter.sendMail(options);
  } catch (error) {
    return res.status(error.statusCode || 500).json({ error: error.message });
  }
  return res.status(200).json({ error: "" });
}
