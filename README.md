# tx-scanner

## Project setup
```
npm install @txtony/tx-vue-scanner

```

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
