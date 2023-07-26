const fs = require('fs')
const path = require('path')
const express = require('express')

const  userRouter  = require('./router/user')
const {func} = require('./hash.js')
const dataFile = path.join('./','blockData.json')

const app = express()
const port = process.env.PORT || 3000


// create Genesis block 
// const node = new Object()
// node.blockNo= 0
// node.data = "0000"
// node.prevHash = "0000000000000000000000000000000000000000000000000000000000000000"
// const block = func.calculateHash(node)

// console.log(node)
// const saveNotes = (block) => {
//     const dataJson = JSON.stringify(block)
//    fs.writeFileSync(dataFile, dataJson)

// }
// saveNotes(node)

app.use(express.json())
app.use(userRouter)

app.listen(port , (error) => {
    if(error)
    {
        throw new Error('Cant connect')
    }
    console.log('Chl gya')
})
