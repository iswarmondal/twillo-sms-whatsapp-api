require('dotenv').config();

const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID;
const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN;
const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER;

const client = require('twilio')(twilioAccountSid, twilioAuthToken);

const sendSms = async(phoneNumber, message) => {
    let messageId = await client.messages.create({
        body: message,
        from: twilioPhoneNumber,
        to: phoneNumber
    })
    console.log(messageId);
};

const sendWhatsapp = async(message) => {
    let messageId = await client.messages
    .create({
        body: message,
        from: 'whatsapp:+14155238886',
        to: 'whatsapp:+919153459675'
    })
    console.log(messageId);
};

module.exports =  { sendSms, sendWhatsapp};