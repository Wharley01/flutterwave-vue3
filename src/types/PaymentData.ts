type PaymentData = {
    public_key: string,
    tx_ref: string | number,
    amount: number,
    currency: string,
    country: string,
    payment_options: string,
    redirect_url: string,
    meta: {
        [k: string]: any
    },
    customer: {
        email: string,
        phone_number: string,
        name: string,
    },
    callback: (data: any) => void,
    onclose: () => void,
    customizations: {
        title: string,
        description: string,
        logo: string,
    },
}

export default PaymentData