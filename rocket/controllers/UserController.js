const {UserService} = require('../services/index');

class UserController {
    async getUsers(req, res, next){
        try{
            await UserService.getUsers(req,res, next)
        }catch(err){
            res.send({message: "failed"})
        }
    }
    async postData(req, res, next){
        try{
            await UserService.postData(req,res, next)
        }catch(err){
            res.send({message: "failed"})
        }
    }
}

module.exports = new UserController();