const UsersLogin = mongoose.Schema({
    emailId: String,
    passWord: String,
    phoneeNo: String
});

const UserModel = mongoose.model('Login', UsersLogin);

module.exports = UserModel;