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
import TxVueScanner from "./components/TxVueScanner.vue"

export default {
  name: 'your-component',
  components: {
      TxVueScanner
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
