const database = require('../config/database')

class UserService {
    async getUsers(req, res, next){
        try{
        let data = await database.getList();
        res.send({message: data})
        }catch(err){
            console.log("error",err);
            res.send({message: "failed"})
        }
    }
    async postData(req, res, next){
        try{
        console.log("user from service req body: ", req.body);
        let data = await database.postList(req.body);
        res.send({message: data})
        }catch(err){
            console.log("error",err);
            res.send({message: "failed"})
        }
    }
}

module.exports = new UserService();