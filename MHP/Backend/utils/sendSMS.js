const axios = require("axios");

const sendSMS = async (mobile, message) => {
  await axios.post(
    "https://www.fast2sms.com/dev/bulkV2",
    {
      route: "v3",
      message,
      numbers: mobile
    },
    {
      headers: {
        authorization: process.env.FAST2SMS_API_KEY,
        "Content-Type": "application/json"
      }
    }
  );
};

module.exports = sendSMS;
