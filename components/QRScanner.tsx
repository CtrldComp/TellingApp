import React from 'react';
import { Scanner, IDetectedBarcode } from '@yudiel/react-qr-scanner';

interface QRScannerProps {
  onScan: (result: IDetectedBarcode[]) => void;
}

const QRScanner: React.FC<QRScannerProps> = ({ onScan }) => {
  const scannerStyles = {
    container: { width: '100%' }, // Set width for the container
  };

  return (
    <Scanner
      onScan={(result: IDetectedBarcode[]) => {
        if (result.length > 0) {
          onScan(result);
        }
      }}
      constraints={{ facingMode: 'environment' }}
      styles={scannerStyles} // Pass the styles object
    />
  );
};

export default QRScanner;
