const {query} = require("../helper/db");

const getProfile = async (req, res) => {
    try {
        const patientid = req.query.id;

        let sqlCommand = "SELECT *  FROM users WHERE serial = '" + patientid + "'";
        let result = await query(sqlCommand);
        user = result[0];
        const { pass, ...userData } = user;

        let pastData = {}
        if(result[0].infoSr > 0){
            sqlCommand = "SELECT *  FROM info WHERE serial = '" + patientid + "'";
            result = await query(sqlCommand);
            pastData = result[0];
        }

        
        let sqlCommand2 = "SELECT * FROM `regularinfo` WHERE userId = " +patientid+ " ORDER BY cdate DESC LIMIT 7";
        result = await query(sqlCommand2);
        
        currProgress = result;

        res.json({ userData, pastData, currProgress});


    } catch (err) {
        res.json({ Message: err });
    }
};

module.exports = {
    getProfile,
};
