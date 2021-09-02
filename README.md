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
barcode 2d (QRCODE,Data matrix, Aztec)

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
# Limitations
On iOS-Devices with iOS < 14.3 camera access works only in native Safari and not in other Browsers (Chrome,...) or Apps that use an UIWebView or WKWebView. This is not a restriction of this library but of the limited WebRTC support by Apple. The behavior might change in iOS 11.3 (Apr 2018?, not tested) as stated here

>iOS 14.3 (released in december 2020) now supports WebRTC in 3rd party browsers as well 🎉

# Browser Support
The browser layer is using the MediaDevices web API which is not supported by older browsers.
You can use external polyfills like WebRTC adapter to increase browser compatibility.
Also, note that the library is using the TypedArray (Int32Array, Uint8ClampedArray, etc.) which are not available in older browsers (e.g. Android 4 default browser).
You can use core-js to add support to these browsers.
