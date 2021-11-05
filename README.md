# Flutterwave vue3 library

The current official Flutterwave vue library is incompatible with vue3 and nuxt 3, why i created this fully typed with typescript version, 


## installation

you can add flutterwave-vue3 to your project using:

```bash
yarn add flutterwave-vue3 //or npm i flutterwave-vue3
```

## Add to project (Core Vue3)

import the installed flutterwave-vue3 in your main.js file

```javascript
import Flutterwave from './Flutterwave'
```

then use the .use() method to add Flutterwave to plugin lists

```javascript
createApp(App).use(Flutterwave).mount('#app')
```


## Add to project (nuxt3)

create a file called ravePlugin in your plugins folder, then go ahead to define your plugin according to nuxt3 doc, sample code below:

```javascript
import { defineNuxtPlugin } from "#app";
import Flutterwave from "flutterwave-vue3";

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(Flutterwave, {});
});
```

## Open payment modal

you can now upen payment modal using the `useFlutterwave` composable,

```javascript
import {useFlutterwave} from "flutterwave-vue3"
//this will launch Fluterwave payment modal
useFlutterwave({
    amount: 4000,//amount
    callback(data: any): void {
      //  TODO: handle callbacks
    },
    country: "NG",
    currency: "NGN",
    customer: {email: 'test@me.com', name: 'adewale', phone_number: '+2347086967055'},
    customizations: {description: "Pay with yourCompanyname", logo: "", title: "YourCompany"},
    meta: {
      user_id: 1,
      token: "jdjdjdjdjd"
    },
    onclose(): void {

    },
    payment_options:  "card",
    public_key: "FLWPUBK_TEST-8b0ef2eef5b71b2922996d16a2dc0292-X",
    redirect_url: undefined,
    tx_ref: "tx_ref_herer_h92hjyj3"
  })

```

## DISCLAIMER

This is not the official Vue3 Library for flutterwave, it was created out of necessity, star the repo if you find it useful
