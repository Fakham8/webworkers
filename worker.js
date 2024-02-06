onmessage = function(event) {
    const data = event.data;
  
    // Heavy data processing (e.g., sorting large arrays, complex calculations)
    const result = data.sort((a, b) => a - b);
  
    // Send result back to main thread
    postMessage(result);
  };
  