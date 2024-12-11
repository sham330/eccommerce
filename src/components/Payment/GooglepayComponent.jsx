/* global google */
import React from 'react';

const GooglePayComponent = ({ totalAmount, onPaymentSuccess }) => {
  // Initialize Google Pay API
  const paymentRequest = {
    apiVersion: 2,
    apiVersionMinor: 0,
    merchantInfo: {
      merchantId: 'your-merchant-id', // Replace with your merchant ID
      merchantName: 'Your Merchant Name', // Replace with your merchant name
    },
    transactionInfo: {
      totalPriceStatus: 'FINAL',
      totalPrice: totalAmount.toFixed(2),
      currencyCode: 'USD', // Change to your currency code
      countryCode: 'US', // Change to your country code
    },
    // Optional: Add payment options, card parameters, etc.
    // ...
  };

  const isReadyToPay = async () => {
    const paymentsClient = new google.payments.api.PaymentsClient({ environment: 'TEST' });

    try {
      const response = await paymentsClient.isReadyToPay({
        apiVersion: 2,
        apiVersionMinor: 0,
        allowedPaymentMethods: [
          {
            type: 'CARD',
            parameters: {
              allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
              allowedCardNetworks: ['VISA', 'MASTERCARD'],
            },
          },
        ],
      });

      return response.result;
    } catch (err) {
      console.error('Error determining if ready to pay: ', err);
      return false;
    }
  };

  const onGooglePayButtonClick = async () => {
    const paymentsClient = new google.payments.api.PaymentsClient({ environment: 'TEST' });

    const request = paymentRequest;

    try {
      const paymentData = await paymentsClient.loadPaymentData(request);
      // Handle the response
      processPayment(paymentData);
    } catch (err) {
      console.error('Error loading payment data: ', err);
    }
  };

  const processPayment = (paymentData) => {
    // Process the payment with your server here
    console.log('Payment data received: ', paymentData);

    // Simulate payment success
    onPaymentSuccess(); // Call this function to mark payment as successful
  };

  const renderGooglePayButton = async () => {
    const paymentsClient = new google.payments.api.PaymentsClient({ environment: 'TEST' });

    const button = paymentsClient.createButton({
      onClick: onGooglePayButtonClick,
    });

    document.getElementById('google-pay-button-container').appendChild(button);
  };

  React.useEffect(() => {
    const loadGooglePay = async () => {
      // Check if the Google Pay API is ready to use
      const readyToPay = await isReadyToPay();
      if (readyToPay) {
        renderGooglePayButton();
      } else {
        console.error('Google Pay is not available');
      }
    };

    loadGooglePay();
  }, []);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">Total Amount: ${totalAmount.toFixed(2)}</h3>
      <div id="google-pay-button-container"></div>
    </div>
  );
};

export default GooglePayComponent;
