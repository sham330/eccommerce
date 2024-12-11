// src/components/CookieConsent.js
import React, { useState, useEffect } from 'react';

const CookieConsent = () => {
    const [showConsent, setShowConsent] = useState(false);

    useEffect(() => {
        const consentGiven = localStorage.getItem('cookieConsent');
        if (!consentGiven) {
            // Wait for 5 seconds before showing the consent
            const timer = setTimeout(() => {
                setShowConsent(true);
            }, 5000); // 5 seconds

            // Cleanup timer on component unmount
            return () => clearTimeout(timer);
        }
    }, []);

    const handleConsent = (accept) => {
        localStorage.setItem('cookieConsent', accept ? 'true' : 'false');
        setShowConsent(false);
    };

    if (!showConsent) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gray-800 text-white text-center">
            <p>We use cookies to enhance your experience. Do you accept our use of cookies?</p>
            <div className="mt-2">
                <button onClick={() => handleConsent(true)} className="bg-blue-500 text-white px-4 py-2 mr-2 rounded">Accept</button>
                <button onClick={() => handleConsent(false)} className="bg-gray-500 text-white px-4 py-2 rounded">Decline</button>
            </div>
        </div>
    );
};

export default CookieConsent;
