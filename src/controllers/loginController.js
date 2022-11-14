const bcrypt = require("bcrypt");
const {PrismaClient} = require("prisma/prisma-client");
const jwt = require('jsonwebtoken');
const {query} = require("../helper/db");

const handleLogin = async(req, res)=>{
    const {email, password} = req.body;
    if(!email || !password) return res.status(400).json({"message": "username & password are required"});
    
    let sqlCommand = "SELECT COUNT(*)  AS c FROM users WHERE email = '" + email + "'";
    let result = await query(sqlCommand);
    const foundUser =  result[0].c;
    
    if (!foundUser) return res.sendStatus(401);

    sqlCommand = "SELECT * FROM users WHERE email = '" + email + "'";
    result = await query(sqlCommand);
    
    const match = await bcrypt.compare(password, result[0].pass);

    console.log(result[0].serial)
    if(match){

        const {name,account,infoSr, ...userData} = result[0] ;

        const accessToken = jwt.sign(
            { "id": result[0].serial },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '24h' }
        );
        res.json({name, account, infoSr, accessToken});
    }else{
        res.sendStatus(401);
    }
}


module.exports = handleLogin;