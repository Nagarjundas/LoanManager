const SignIn = mongoose.Schema({
    firstName: String,
    lastName: String,
    dob: String,
    emailId: String,
    passWord: String, 
    phoneeNo: String,
    Address: String
});

const signInModel = mongoose.model('signin', SignIn);

module.exports = signInModel;