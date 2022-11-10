const bcrypt = require("bcrypt");
const {PrismaClient} = require("prisma/prisma-client");

const handleNewUser = async (req, res) => {
    console.log(req.body)
    const { name, email, pass, phone, address, account } = req.body;
    if (!name || !email || !pass || !phone || !address || !account)
        return res.status(400).json({ message: "Credentials are missing" });
    const prisma = new PrismaClient();
    const duplicate = await prisma.user.count({
        where: {
            email: email,
        },
    });
    if (duplicate != 0) return res.sendStatus(409);

    try {
        const hashedpwd = await bcrypt.hash(pass, 10);
        const newUser = await prisma.user.create({
            data: {
                name: name,
                email: email,
                pass: hashedpwd,
                phone: phone,
                address: address,
                account: account,
                infoSr: 1,
            },
        });
        console.log(newUser);
        res.status(201).json({ success: `New user ${name} created!` });
        await prisma.$disconnect();
    } catch (err) {
        await prisma.$disconnect();
        res.status(500).json({ message: err.message });
    }
};

module.exports = handleNewUser;
