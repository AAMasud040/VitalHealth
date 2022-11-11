const bcrypt = require("bcrypt");
const {PrismaClient} = require("prisma/prisma-client");
const jwt = require('jsonwebtoken');

const handleLogin = async(req, res)=>{
    const {user, pwd} = req.body;
    if(!user || !pwd) return res.status(400).json({"message": "username & password are required"});
    const prisma = new PrismaClient();
    const foundUser = await prisma.users.findUnique({where: {email: user}});
    if (!foundUser) return res.sendStatus(401);
    const match = await bcrypt.compare(pwd, foundUser.pass);
    if(match){
        const {name, ...userData} = foundUser ;
        const accessToken = jwt.sign(
            { "id": foundUser.id },
            process.env.ACCESS_TOKEN_SECRET,
            { expiresIn: '24h' }
        );
        res.json({name, accessToken});
    }else{
        res.sendStatus(401);
    }
}


module.exports = handleLogin;