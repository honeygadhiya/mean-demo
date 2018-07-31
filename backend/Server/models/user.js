var mongoose = require('mongoose');
// mongoose.connect('mongodb://krishna:argusadmin@localhost:27017/admin');
mongoose.connect('mongodb://localhost/user-data');
const winston = require('winston');

var userSchema = mongoose.Schema({
    name:String,
    username:String,
    password:String
});
var User = mongoose.model("student", userSchema);

module.exports.getusers = function () {
    winston.info("get users model");
    return User.find();
}

module.exports.get = function (uId) {
    return User.findOne({ "id": uId });
}

module.exports.post = function (user) {
    let newUser = new User(user);
    console.log('newuser');
    console.log(newUser);
    return newUser.save();

}

module.exports.put = function (uid, body) {
    return User.findOneAndUpdate({ "id": uid }, body);
}

module.exports.delete = function (uid) {
    return User.findOneAndRemove({ "_id": uid });

}