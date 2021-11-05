"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trackingEndPoint = 'https://kgelfdz7mf.execute-api.us-east-1.amazonaws.com/staging/sendevent';
const packageVersion = '1.0.3';
const language = 'Vue V3';
/**
 * @param {Object} data
 * @param {Object} data.paymentData - The payment data passed to Inline JS
 * @param {Object} data.response - The callback response
 * @param {string} data.responseTime - The response time
 */
const ApiTracker = function (data) {
    const trackingData = {
        publicKey: data.paymentData.public_key,
        language: language,
        version: packageVersion,
        title: '',
        message: '0' // data.responseTime
    };
    const paymentOptions = data.paymentData.payment_options || '';
    const paymentOptionsArray = paymentOptions ? paymentOptions.split(',') : [];
    let title = '';
    if (paymentOptionsArray.length === 0) {
        title = 'Initiate-Charge-Dashboard';
    }
    else if (paymentOptionsArray.length === 1) {
        title = 'Initiate-Charge-' + paymentOptions;
    }
    else {
        title = 'Initiate-Charge-Multiple';
    }
    trackingData.title = data.response.status === 'successful' ? title : title + '-error';
    submitTracking(trackingData);
};
const submitTracking = function (trackingData) {
    fetch(trackingEndPoint, {
        method: 'POST',
        body: JSON.stringify(trackingData)
    }).then((res) => {
    });
};
exports.default = ApiTracker;
