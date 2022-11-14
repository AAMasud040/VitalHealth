const {query} = require("../helper/db");

const storeInfo = async (req, res) => {
    // insert into the table
    try{
        let sqlCommand =  "INSERT INTO `info`(`goalwl`, `motivation`, `targetweight`, `healthproblemshistory`, `bfood`, `btime`, `msnacks`, `mtime`, `lfood`, `ltime`, `esnack`, `etime`, `dfood`, `dtime`, `nsnacks`, `ntime`, `glassesofwater`, `sleeptime`, `sleepTotal`, `exercise`, `currentwt`) VALUES ('"+req.goalwl+"','"+req.motivation+"',"+req.targetweight+",'"+req.healthproblemhistory+"','"+req.bfood+"','"+req.btime+"','"+req.msnacks+"','"+req.mtime+"','"+req.lfood+"','"+req.ltime+"','"+req.esnack+"','"+req.time+"','"+req.dfood+"','"+req.dtime+"','"+req.nsnacks+"','"+req.ntime+"','"+req.glassesofwater+"','"+req.sleeptime+"','"+req.sleeptotal+"','"+req.exercise+"',"+req.currentwt+")"
        let result = await query(sqlCommand);

        // get latest record
        sqlCommand = "SELECT MAX(serial) as mp FROM info"
        result = await query(sqlCommand);

        // connecting users and their info table
        let sqlCommand2 = "UPDATE `users` SET `infoSr`="+result[0].mp +" WHERE serial="+req.id
        result = await query(sqlCommand2);
        
        res.json({Message: 'Successfully Added'})
    }catch(err){
        res.json({ Message: err })
    }
}   

module.exports = {
    storeInfo,
};
