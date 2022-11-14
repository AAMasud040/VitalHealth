const { PrismaClient } = require("prisma/prisma-client");

const getProfile = async (req, res) => {
    try {
        let id = req.id;
        const prisma = new PrismaClient();
        
        const patient = await prisma.users.findUnique({
            where: {
                id: id,
            },
            select: {
                name: true,
                id: true,
                email: true,
                phone: true,
                address: true,
                account: true,
                infoSr: true,
            },
        });
        
        const userList = await prisma.users.findUnique({
            where: {
                id: id,
            },
            select: {
                name: true,
                id: true,
                email: true,
                phone: true,
                address: true,
                account: true,
                infoSr: true,
            },
        });
        const { pass, ...userData } = user;
        
        res.json({ userData, userList });
    } catch (err) {
        res.json({ Message: err });
    }
};

module.exports = {
    getProfile,
};
