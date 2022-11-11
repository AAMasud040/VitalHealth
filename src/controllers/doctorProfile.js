const { PrismaClient } = require("prisma/prisma-client");

const getProfile = async (req, res) => {
    try {
        let id = req.id;
        const prisma = new PrismaClient();
        const user = await prisma.users.findUnique({
            where: {
                id: id,
            },
        });
        const userList = await prisma.users.findMany({
            where: {
                account: 2,
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
