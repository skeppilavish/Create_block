const express = require('express')
const router = new express.Router()
const controlUser = require('../controller/logic')

router.post('/block',controlUser.createBlock)
router.get('/block',controlUser.blockInfo)
router.get('/block/status', controlUser.chainInfo)

module.exports = router