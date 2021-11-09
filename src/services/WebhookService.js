const axios = require('axios');

class WebhookService {
    async WebhookResponse ({ body }) {
        return await axios({
            method: 'post',
            url: process.env.WEBHOOKCALLBACKP2P_URL, 
            data: body 
        });
    };
};

module.exports = new WebhookService()