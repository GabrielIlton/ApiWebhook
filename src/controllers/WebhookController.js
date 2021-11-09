const axios = require('axios');

class WebhookController {
    async WebhookSuccessful(req, res) {
        try {
            const response = await axios({
                method: 'post',
                url: "http://localhost:3333/callbackp2p", 
                data: req.body 
            });
            return res.status(200).json({ Sucesso: response.data });
        } catch (error) {
            return res.status(400).json({ message: error });
        }
    }
};

module.exports = new WebhookController();