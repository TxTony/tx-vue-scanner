<template>
  <div id="app">
    <tx-vue-scanner @scan-success="handleScanSuccess"> </tx-vue-scanner>
  </div>
</template>

<script>
import TxVueScanner from "./components/TxVueScanner.vue"

export default {
  name: 'app',
  components: {
      TxVueScanner
  },
  methods:{
      handleScanSuccess:function(){

      }
  }
}
</script>

<style lang="scss">
#app {

}
</style>
