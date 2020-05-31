const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
	host: "smtp.mailtrap.io",
	port: 2525,
	auth: {
		user: "1b682071f5968c",
		pass: "041d7ea2d389fc"
	}
});

const message = {
    from: 'hoangdq@hust.edu.vn', // Sender address
    to: 'hoangdq@gmail.com',         // List of recipients
    subject: 'Register Confirmation', // Subject line
    html: '<h1>Xin Chào Hoàng!</h1> <p>Hãy kích hoạt trong vòng <b>24h</b> để sử dụng tài khoản!</p>', // Plain text body
    attachments: [
        { // Use a URL as an attachment
          filename: 'chim-canh-cut-hoang-de.png',
          path: 'https://lauf1.com/wp-content/uploads/2019/07/chim-canh-cut-hoang-de.png'
      }
    ]
};

transport.sendMail(message, function(err, info) {
    if (err) {
      console.log(err)
    } else {
      console.log(info);
    }
});