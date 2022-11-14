const { PrismaClient } = require("prisma/prisma-client");

const {query} = require("../helper/db");

const getProfile = async (req, res) => {
    try {
        let id = req.id;
        
        let sqlCommand = "SELECT *  FROM users WHERE serial = '" + id + "'";
        let result = await query(sqlCommand);
        
        user = result[0];

        sqlCommand = "SELECT name,email,phone,address,account,infoSr FROM drpatient INNER JOIN users ON users.serial=drpatient.patientSerial WHERE drSerial ="+id;
        let Patientresult = await query(sqlCommand)

        console.log(Patientresult);

        const { pass, ...userData } = user;
        userList = Patientresult;
        res.json({ userData, userList });
    } catch (err) {
        res.json({ Message: err });
    }
};

module.exports = {
    getProfile,
};
