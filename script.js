document.getElementById('processButton').addEventListener('click', processData);

function processData() {
  // Generate large array (for demonstration)
  const array = Array.from({ length: 100000 }, () => Math.floor(Math.random() * 1000));

  // Start Web Worker for processing
  const worker = new Worker('worker.js');
  
  // Send data to Web Worker
  worker.postMessage(array);

  // Receive result from Web Worker
  worker.onmessage = function(event) {
    document.getElementById('result').textContent = 'Processing complete. Result: ' + event.data;
    // Terminate the worker after processing
    worker.terminate();
  };
}
