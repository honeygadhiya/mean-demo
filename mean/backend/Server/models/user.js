var mongoose = require('mongoose');
mongoose.connect('mongodb://krishna:argusadmin@localhost:27017/admin');
const winston = require('winston');

var userSchema = mongoose.Schema({
    id:String,
    name:String,
    branch: String,
    gender: String
});
var User = mongoose.model("employee", userSchema);

module.exports.getusers = function () {
    winston.info("get users model");
    return User.find();
}

module.exports.get = function (uId) {
    return User.findOne({ "id": uId });
}

module.exports.post = function (body) {
    var userInfo = body; //Get the parsed information
    var newUser = new User(body);
    return newUser.save();

}

module.exports.put = function (uid, body) {
    return User.findOneAndUpdate({ "id": uid }, body);
}

module.exports.delete = function (uid) {
    return User.findOneAndRemove({ "id": uid });

}