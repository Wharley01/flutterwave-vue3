<script setup lang="ts">
import { ref } from 'vue'
import useFlutterwave from '../useFlutterwave';

defineProps({
  msg: String
})

function openFlutterwave(){
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
}


const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>

  <p>
    Recommended IDE setup:
    <a href="https://code.visualstudio.com/" target="_blank">VSCode</a>
    +
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
  </p>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank">
      Vite Documentation
    </a>
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button type="button" @click="openFlutterwave">Click here to test flutterwave V3</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
