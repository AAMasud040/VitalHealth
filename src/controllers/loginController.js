const bcrypt = require("bcrypt");
const {PrismaClient} = require("prisma/prisma-client");
const jwt = require('jsonwebtoken');

const handleLogin = async(req, res)=>{
    const {email, password} = req.body;
    if(!email || !password) return res.status(400).json({"message": "username & password are required"});
    const prisma = new PrismaClient();
    const foundUser = await prisma.users.findUnique({where: {email: email}});
    if (!foundUser) return res.sendStatus(401);
    const match = await bcrypt.compare(password, foundUser.pass);
    if(match){
        const {name,account, ...userData} = foundUser ;
        
        const accessToken = jwt.sign(
            { "id": foundUser.id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '24h' }
        );
        res.json({name, account, accessToken});
    }else{
        res.sendStatus(401);
    }
}


module.exports = handleLogin;