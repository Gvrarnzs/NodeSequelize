const express = require("express")
const router = express.Router()
const fetch = require('node-fetch')

const url = "https://gist.githubusercontent.com/herysepty/ba286b815417363bfbcc472a5197edd0/raw/aed8ce8f5154208f9fe7f7b04195e05de5f81fda/coutries.json"
router.get('/countries', async(req, res) => {
    let settings = { method: "Get" };
    fetch(url, settings)
    .then(res => res.json())
    .then((json) => {
        let newArr = json.map((val) => {
            return {name : val.name, region : val.region, timezones: val.timezones}
        })
        let result = {status : 200, code : 200, data: newArr, message: "Success"}
        res.status(200).send(result)
    });
   
})


module.exports = router