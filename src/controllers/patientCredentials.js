const {query} = require("../helper/db");

const getProfile = async (req, res) => {
    try {
        let id = req.id;
        let sqlCommand = "SELECT *  FROM users WHERE serial = '" + id + "'";
        let result = await query(sqlCommand);
        user = result[0];

        const { pass, ...userData } = user;

        let sqlCommand1 = "SELECT COUNT(*) as c FROM `regularinfo` WHERE cdate = CURDATE() AND userId="+id;
        result = await query(sqlCommand1);

        // later needs to be updated with server time
        if(result[0].c>=0){
            let sqlCommand2 = "INSERT INTO `regularinfo`(`cdate`, `userId`) VALUES (CURDATE()," +id+ ")";
            result = await query(sqlCommand2);
        }

        sqlCommand1 = "SELECT * FROM `regularinfo` WHERE cdate = CURDATE() AND userId="+id;
        result = await query(sqlCommand1);

        todaysInfo = result[0]

        res.json({ userData, todaysInfo});

    } catch (err) {
        res.json({ Message: err });
    }
};

module.exports = {
    getProfile,
};
