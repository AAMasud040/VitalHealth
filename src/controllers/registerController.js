const bcrypt = require("bcrypt");
const {query} = require("../helper/db");

const handleNewUser = async (req, res) => {
    console.log(req.body)
    const { name, email, pass, phone, address, account } = req.body;
    if (!name || !email || !pass || !phone || !address || !account)
        return res.status(400).json({ message: "Credentials are missing" });

    let sqlCommand = "SELECT COUNT(*)  AS c FROM users WHERE email = '" + email + "'";
    let result = await query(sqlCommand);
    let duplicate =  result[0].c;
    
    console.log(duplicate)

    if (duplicate!=0) return res.sendStatus(409);

    try {
        const hashedpwd = await bcrypt.hash(pass, 10);
        
        let sqlCommand = "INSERT INTO `users`(`name`, `email`, `pass`, `phone`, `address`, `account`) VALUES ('"+name+"','"+email+"','"+hashedpwd+"','"+phone+"','"+address+"',"+account+")"
        let result = await query(sqlCommand)

        res.status(201).json({ success: `New user ${name} created!` });

    } catch (err) {
        
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    handleNewUser
};
