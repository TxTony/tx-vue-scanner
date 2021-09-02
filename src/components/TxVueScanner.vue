<template>
  <div id="tx-scanner">
    <video id="video"></video>
  </div>
</template>

<script>
import * as ZXing from "@zxing/library";

export default {
  name: "tx-vue-scanner",
  props: {
    format: {
      type: String,
      default: "qrcode", // qrcode || barcode
    },
  },
  data: function () {
    return {
      selectedCodeReader: "qrCode",
      codeReader: null,
    };
  },
  methods: {
    /**
     * @param {string} text
     */
    emitSuccess: function (text) {
      this.$emit("scan-success", text);
    },
    initCodeReader: function () {
      this.killCodeReader();
      let codeReader = this.setCodeReader(this.format);
      codeReader = this.decodeDeviceCamera(codeReader);
      this.codeReader = codeReader;
    },
    /**
     * @param {object} result from decodeInputVideoDevice
     */
    onDecodeVideoInput: function (result) {
      this.emitSuccess(result.text);
    },
    /**
     * Read code from main device camera.
     *
     * @param {ZXing.BrowserQRCodeReader || ZXing.BrowserBarcodeReader} codeReader
     */
    decodeDeviceCamera: function (codeReader) {
      codeReader
        .getVideoInputDevices()
        .then((cameras) => {
          if (!this.hasCamera(cameras)) {
            return;
          }
          const mainCamera = cameras[cameras.length - 1].deviceId;
          codeReader
            .decodeFromInputVideoDevice(mainCamera, "video")
            .then((result) => {
              this.onDecodeVideoInput(result);
              codeReader.reset();
            })
            .catch((err) => alert(err));
        })
        .catch((err) => console.error(err));
      return codeReader;
    },
    /**
     * Remove code reader locally.
     */
    killCodeReader: function () {
      if (this.codeReader !== null) {
        this.codeReader.reset();
        this.codeReader = null;
      }
    },
    /**
     * @param {array} cameras list of avalaible cameras
     */
    hasCamera: function (cameras) {
      let hasCamera = true;
      if (cameras.length === 0) {
        let message = "No camera found on this device.";
        this.$emit("error", { message: message });
        console.warn(message);
        hasCamera = false;
      }
      return hasCamera;
    },
    /**
     * @param {string} qrcode || barcode
     * @return {ZXing.BrowserQRCodeReader || ZXing.BrowserBarcodeReader}
     */
    setCodeReader: function (reader) {
      return reader === "qrcode"
        ? new ZXing.BrowserQRCodeReader()
        : new ZXing.BrowserBarcodeReader();
    },
    /**
     * Reset current reader and select 1d barcode reader.
     */
    useBarcodeReader: function () {
      this.selectedCodeReader = "barcode";
      this.initCodeReader();
    },
    /**
     * Reset current reader and select qrCode barcode reader.
     */
    useQrCodeReader: function () {
      this.selectedCodeReader = "qrCode";
      this.initCodeReader();
    },
  },
  mounted: function () {
    this.initCodeReader();
  },
  beforeDestroy: function () {
    this.killCodeReader();
  },
};
</script>
<style  scoped>
</style>
