const express = require("express")
const router = express.Router()


router.post('/fibonacci', (req, res) => {
    const {n} = req.body
    if(isNaN(n) || !n){
        let result = {status : 400, code : 400, data: null, message: "N is required"}
        return res.status(200).send(result)
    }
    parseInt(n)
    let n1 = 0, n2 = 1, nextTerm;
    let string = ""
    for (let i = 1; i <= n; i++) {
        // let string = []
        console.log(n1);
        string += `${n1} `
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
        if(n1 > n){
            let result = {status : 200, code : 200, data: {result: string}, message: "Success"}
            return res.status(200).send(result)
        }
    }
})


module.exports = router