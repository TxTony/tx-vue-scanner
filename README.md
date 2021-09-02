# tx-scanner

## Project setup
```
npm install @txtony/tx-vue-scanner

```
## Additionnal Informations
Access to your camera device must be granted. To access to your camera your page must be served
by https or could be in localhost ( great for testing ). This vue component use
https://github.com/zxing-js/library

## accepted format
barcode 1d (UPC-A,UPC-E,EAN-8,EAN-13,Code 39, Code 128, ITF, RSS-14)
barcode 2d (QRCODE,Data matrix, Aztec, PDF417)

## Basic exemple
```html
<template>

    <tx-vue-scanner @scan-success="handleScanSuccess"> </tx-vue-scanner>

</template>

<script>
import * as TxScanner from "@txtony/tx-vue-scanner";

export default {
  name: 'your-component',
  components: {
      TxScanner
  },
  methods:{
      /**
      * @param {string} code
      */
      handleScanSuccess:function(code){

      }
  }
}
</script>
```
