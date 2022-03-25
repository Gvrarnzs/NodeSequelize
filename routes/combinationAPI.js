const express = require("express")
const router = express.Router()


router.post('/combination', (req, res) => {
    console.log("Hi")
    let {n, r} = req.body
    if(isNaN(n) || !n || isNaN(r) || !r){
        let result = {status : 400, code : 400, data: null, message: "n and r is required"}
        return res.status(200).send(result)
    }
    parseInt(n)
    parseInt(r)
    let range = (a, b) => {
        let n1 = a, n2 = a 
        while (n2++ < b){
            n1 *= n2
        }
        return n1
    }
    if(n == r || r == 0){
        return 1
    }else {
        r= (r < n-r) ? n-r : r
        let result = {status : 200, code : 200, data: {result: range(r+1, n)/range(1, n-r)}, message: "Success"}
        return res.status(200).send(result)
    }
})


module.exports = router