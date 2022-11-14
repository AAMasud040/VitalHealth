const {query} = require("../helper/db");

const storeInfo = async (req, res) => {
    console.log(req.body);
    // insert into the table
    try{
        let sqlCommand =  "INSERT INTO `info`(`goalwl`, `motivation`, `targetweight`, `healthproblemshistory`, `bfood`, `btime`, `msnacks`, `mtime`, `lfood`, `ltime`, `esnack`, `etime`, `dfood`, `dtime`, `nsnacks`, `ntime`, `glassesofwater`, `sleeptime`, `sleepTotal`, `exercise`, `currentwt`) VALUES ('"+req.body.goalwl+"','"+req.body.motivation+"',"+req.body.targetweight+",'"+req.body.healthproblemhistory+"','"+req.body.bfood+"','"+req.body.btime+"','"+req.body.msnacks+"','"+req.body.mtime+"','"+req.body.lfood+"','"+req.body.ltime+"','"+req.body.esnack+"','"+req.body.etime+"','"+req.body.dfood+"','"+req.body.dtime+"','"+req.body.nsnacks+"','"+req.body.ntime+"','"+req.body.glassesofwater+"','"+req.body.sleeptime+"','"+req.body.sleeptotal+"','"+req.body.exercise+"',"+req.body.currentwt+")"
        let result = await query(sqlCommand);

        // get latest record
        sqlCommand = "SELECT MAX(serial) as mp FROM info"
        result = await query(sqlCommand);

        // connecting users and their info table
        let sqlCommand2 = "UPDATE `users` SET `infoSr`="+result[0].mp +" WHERE serial="+req.id
        result = await query(sqlCommand2);
        
        res.json({Message: 'Successfully Added'})
    }catch(err){
        console.log(err)
        res.json({ Message: err })
    }
}   

module.exports = {
    storeInfo,
};
