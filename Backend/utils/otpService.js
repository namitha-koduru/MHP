const axios = require("axios")

const sendOTP = async (mobile, otp) => {

  const url = "https://www.fast2sms.com/dev/bulkV2"

  await axios.get(url,{
    params:{
      authorization: process.env.FAST2SMS_API_KEY,
      route: "otp",
      variables_values: otp,
      numbers: mobile
    }
  })

}

module.exports = { sendOTP }