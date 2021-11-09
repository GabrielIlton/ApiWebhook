require("dotenv").config()
const axios = require('axios');
const WebhookService = require('../services/WebhookService')

class WebhookController {
    async WebhookSuccessful(req, res) {
        try {
            const response = await WebhookService.WebhookResponse({ body: req.body })
            return res.status(200).json({ Sucesso: response.data });
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }
};

module.exports = new WebhookController();