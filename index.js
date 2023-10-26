const express = require('express');
const {sendSms, sendWhatsapp} = require('./twilio');

const app = express();

app.use(express.json());
const port = process.env.SERVER_PORT || 5050;

app.post("/send-sms", async(req, res) => {
    const {phoneNumber, message} = req.body;

    await sendSms(phoneNumber, message);

    res.send("Message is sent")
})

app.post("/send-whatsapp", async(req, res) => {
    const {message} = req.body;

    await sendWhatsapp(message);

    res.send("Message is sent")
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});