"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ApITracker_1 = __importDefault(require("./ApITracker"));
function default_1(paymentData) {
    var _a;
    console.log({ paymentData });
    if (!paymentData.public_key)
        throw new Error('Please specify your public key');
    let payData = Object.assign(Object.assign({}, paymentData), { public_key: (_a = paymentData.public_key) !== null && _a !== void 0 ? _a : '', callback: (response) => {
            (0, ApITracker_1.default)({
                paymentData: payData,
                response: response,
                responseTime: 1000
            });
            paymentData.callback(response);
        } });
    // @ts-ignore
    window.FlutterwaveCheckout(payData);
}
exports.default = default_1;
