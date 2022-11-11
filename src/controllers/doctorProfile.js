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
        const { pass, ...userData } = user;
        res.json({ userData });
    } catch (err) {
        res.json({ Message: err });
    }
};

module.exports = {
    getProfile,
};
