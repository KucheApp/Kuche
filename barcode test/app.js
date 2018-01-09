//Quagga Dependency
var Quagga = require('quaggajs/dist/quagga.min.js');

Quagga.init({
  inputStream : {
    name : "Live",
    type : "LiveStream",
    target: document.querySelector('#test')    // Or '#yourElement' (optional)
  },
  decoder : {
    readers : ["UPC"]
  }
}, function(err) {
    if (err) {
        console.log(err);
        return
    }
    console.log("Initialization finished. Ready to start");
    Quagga.start();
});

Quagga.decodeSingle(config, data) {
  console.log(data);
}