"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let hasExecuted = false;
exports.default = {
    install(Vue, userOptions = {}) {
        if (userOptions === null || userOptions === void 0 ? void 0 : userOptions.pubKey)
            Vue.config.globalProperties.$public_key = userOptions.pubKey;
        Vue.mixin({
            mounted() {
                if (!hasExecuted) {
                    let script = document.createElement('script');
                    script.src = "https://checkout.flutterwave.com/v3.js";
                    document.body.appendChild(script);
                    console.log('coming from mounted in my plugin');
                    hasExecuted = true;
                }
            }
        });
    }
};
