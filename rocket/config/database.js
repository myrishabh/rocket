const { get } = require('../routes');
const moment = require('moment');
const mysql = require('mysql2/promise');


let getList = async () => {
    try{
    // create the connection
    const connection = await mysql.createConnection({host:'localhost', user: 'root', password: '1234', database: 'dashboard'});
    // query database
    const rows = await connection.execute('SELECT * FROM certificate');
    return rows;
    }
    catch(err){
        console.log("error from database: ",err);
    }
}

let postList = async (body) => {
    try{
    console.log(body);
    let certificate_name = body.certificate_name;
    let user_enrolled = body.user_enrolled;
    let certificate_code = body.certificate_code;
    let issuer = body.issuer;
    let overview = body.overview;
    let from_date = body.from_date;
    let month = body.month
    let action = body.action

    //calculating state
    const moment = require('moment');
    const today = new Date();
    present_date = today.toISOString().split('T')[0];

    console.log("today is: ",today);
    var myDate = new Date(from_date);
    myDate.setMonth(myDate.getMonth() +month);

    Date.prototype.yyyymmdd = function() {
        var mm = this.getMonth() + 1;
        var dd = this.getDate();
    
        return [this.getFullYear(),
                (mm>9 ? '' : '0') + mm,
                (dd>9 ? '' : '0') + dd
            ].join('-');
    };
    to_date = myDate.yyyymmdd();

    console.log(from_date);
    console.log(to_date)
    console.log(present_date)
    var from_dateupdated = new Date(from_date.replace(/-/g,'/')); 
    var to_dateupdated = new Date(to_date.replace(/-/g,'/')); 
    var present_dateupdated = new Date(present_date.replace(/-/g,'/')); 

    var state;
    if(action==="save"){
        console.log("draft");
        state = "draft";
    }else{
        if(to_dateupdated>present_dateupdated){
            console.log("active");
            state = "active";
        }else if(from_dateupdated>present_dateupdated){
            console.log("published");
            state = "published";
        }else if(to_dateupdated<present_dateupdated){
            console.log("expired");
            state = "expired";
        }
    }

    // create the connection
    const connection = await mysql.createConnection({host:'localhost', user: 'root', password: '1234', database: 'dashboard'});
    // query database
    const rows = await connection.execute(`insert into certificate(certificate_name, user_enrolled, state, certificate_code, issuer, overview, from_date, to_date) values('${certificate_name}', ${user_enrolled}, '${state}', '${certificate_code}', '${issuer}', '${overview}', '${from_date}', '${to_date}')`);
    return rows;
    }
    catch(err){
        console.log("error from database: ",err);
    }
}

module.exports = {
    getList,
    postList
}