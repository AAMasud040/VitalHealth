const {PrismaClient} = require("prisma/prisma-client");

const getProfile =async(req,res)=>{
    let id = req.id;
    const user = await prisma.user.findUnique({
        where: {
          id: id,
        },
      })
    const {pass, ...userData} = foundUser ;
    res.json({userData});
}

module.exports = { 
    getProfile
};