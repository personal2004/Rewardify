
const SendOtp = () => {
    const otp = Math.floor(1000 + Math.random() * 9000).toString();
    return otp;
};

export default SendOtp