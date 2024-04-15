document.addEventListener("DOMContentLoaded", function() {
    const btnScan = document.getElementById('btnScan');
    const barcodeInput = document.getElementById('barcode');

    btnScan.addEventListener('click', () => {
        Quagga.init({
            inputStream: {
                name: "Live",
                type: "LiveStream",
                target: document.querySelector('#scannerVideo'),
                constraints: {
                    width: window.innerWidth,
                    height: window.innerHeight,
                    facingMode: "environment" // Use rear camera
                }
            },
            decoder: {
                readers: ["ean_reader", "upc_reader"] // List of barcode types to detect
            }
        }, function(err) {
            if (err) {
                console.error(err);
                alert('Error initializing barcode scanner. Please try again.');
                return;
            }
            Quagga.start();
            Quagga.onDetected(scanResult); // Callback when barcode is detected
        });
    });

    function scanResult(result) {
        barcodeInput.value = result.codeResult.code; // Update input field with scanned barcode value
        Quagga.stop(); // Stop the scanner after successful detection
    }
});
