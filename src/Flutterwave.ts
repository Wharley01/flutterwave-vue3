let hasExecuted = false
export default {
    install(Vue, userOptions:{pubKey?: string} = {}) {

        if (userOptions?.pubKey)
            Vue.config.globalProperties.$public_key = userOptions.pubKey

        Vue.mixin({
            mounted(){
                if (!hasExecuted) {
                    let script = document.createElement('script')
                    script.src = "https://checkout.flutterwave.com/v3.js"
                    document.body.appendChild(script)
                    console.log('coming from mounted in my plugin')
                    hasExecuted = true
                }
            }
        })
    }
}