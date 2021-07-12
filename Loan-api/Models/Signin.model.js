const SignIn = mongoose.Schema({
    firstName: String,
    lastName: String,
    emailId: String,
    passWord: String,
    dob: String,
    phoneeNo: String
});

const signInModel = mongoose.model('signin', SignIn);

module.exports = signInModel;