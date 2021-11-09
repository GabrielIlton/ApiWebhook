const { Router } = require('express');
const router = Router();
const WebhookController = require('../controllers/WebhookController')

router.post("/webhookp2p", WebhookController.WebhookSuccessful);

module.exports = router;