import PaymentData from "./types/PaymentData";
import ApiTracker from "./ApITracker";
export default function (paymentData: PaymentData) {
    console.log({paymentData})

    if (!paymentData.public_key)
        throw new Error('Please specify your public key')



    let payData = {
        ...paymentData,
        public_key: paymentData.public_key ?? '',
        callback: (response) => {
            ApiTracker(
                {
                    paymentData: payData,
                    response: response,
                    responseTime: 1000
                })
            paymentData.callback(response)
        }
    }

    // @ts-ignore
    window.FlutterwaveCheckout(payData)


}