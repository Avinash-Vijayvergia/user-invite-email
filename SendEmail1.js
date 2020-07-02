public async sendInviteEmail(email, code) {
    const nodemailer = require('nodemailer');
    const inviteUrl = `website/url/for/signup/${email}/${code}`;

    let transporter = nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      secure: false,
      auth: {
        user: 'user',
        pass:
          'password',
      },
    });

    let mailOptions = {
      from: 'admin@xyz.com',
      to: email,
      subject: 'You are invited',
      text: 'Error loading HTML template',
      html: `
      <!DOCTYPE html>
      <html>
      <head>
      <meta charset="utf-8">
      <title>You are invited to XYZ</title>
      </head>
      <body bgcolor="#f6f6f6" style="font-family: Arial, sans-serif; font-size: 100%; line-height: 1.6; -webkit-font-smoothing: antialiased; -webkit-text-size-adjust: none; width: 100% !important; height: 100%; margin: 0; padding: 0;">
      
      
      <table style="font-family: Arial, sans-serif; font-size: 100%; line-height: 1.6; width: 100%; margin: 0; padding: 20px;"><tr style="font-family: Arial, sans-serif; font-size: 100%; line-height: 1.6; margin: 0; padding: 0;"><td style="font-family: Arial, sans-serif; font-size: 100%; line-height: 1.6; margin: 0; padding: 0;"></td>
          <td bgcolor="#FFFFFF" style="font-family: Arial, sans-serif; font-size: 100%; line-height: 1.6; display: block !important; max-width: 600px !important; clear: both !important; margin: 0 auto; padding: 20px; border: 1px solid #f0f0f0;">
      
            
            <div style="font-family: Arial, sans-serif; font-size: 100%; line-height: 1.6; max-width: 600px; display: block; margin: 0 auto; padding: 0;">
            <table style="font-family: Arial, sans-serif; font-size: 100%; line-height: 1.6; width: 100%; margin: 0; padding: 0;"><tr style="font-family: Arial, sans-serif; font-size: 100%; line-height: 1.6; margin: 0; padding: 0;"><td style="font-family: Arial, sans-serif; font-size: 100%; line-height: 1.6; margin: 0; padding: 0;">
            <img style= "display: block; vertical-align: middle; height: 140px; width: auto; margin: 30px auto;" src="https://via.placeholder.com/280x60.png" href="#" alt="logo" />
            <h2 style="font-family: Arial, sans-serif; font-size: 24px; text-align: center; line-height: 1.2; color: #666666; font-weight: 200; margin: 10px auto 20px auto; padding: 0;">Invitation to Create Your Account</h2>
                  <p style="font-family: Arial, sans-serif; font-size: 11px; line-height: 1.6; font-weight: normal; color: #666666; margin: 0 0 10px; padding: 0;">Welcome to XYZ</p>
                  <p style="font-family: Arial, sans-serif; font-size: 11px; line-height: 1.6; font-weight: normal; color: #666666; margin: 0 0 10px; padding: 0;">Your invite code is: <b>${code}</b></p>
                  <p style="font-family: Arial, sans-serif; font-size: 11px; line-height: 1.6; font-weight: normal; color: #666666; margin: 0 0 10px; padding: 0;"><i>code is valid for 30 days</i></p>
                  <table style="font-family: Arial, sans-serif; font-size: 100%; line-height: 1.6; width: 100%; margin: 0; padding: 0;"><tr style="font-family: Arial, sans-serif; font-size: 100%; line-height: 1.6; margin: 0; padding: 0;"><td style="font-family: Arial, sans-serif; font-size: 100%; line-height: 1.6; margin: 0; padding: 10px 0;">
                        <p style="font-family: Arial, sans-serif; font-size: 14px; line-height: 1.6; font-weight: normal; text-align: center; margin: 10 auto; padding: 0;"><a href=${inviteUrl} style="font-family: Arial, sans-serif; font-size: 100%; line-height: 2; color: #FFF; text-decoration: none; font-weight: normal; text-align: center; cursor: pointer; display: inline-block; border-radius: 8px; background-color: #00558d; margin: 0 10px 0 0; padding: 0; border-color: #00558d; border-style: solid; border-width: 10px 20px;">Create Account</a></p>
                      </td>
                    </tr></table><p style="font-family: Arial, sans-serif; font-size: 10.5px; line-height: 1.6; font-weight: normal; color: #666666; margin: 0 0 10px; padding: 0;"><i>This email account is not monitored. If you encounter issues please contact <a href = "mailto: info@xyz.com" style="color: #666666;">info@xyz.com</a></i></p>
                 
                </td>
              </tr></table></div>
          </td>
        </tr></table></body>
      </html>
`,
    };

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
        return 'Email sent: ' + info.response;
      }
    });
  }