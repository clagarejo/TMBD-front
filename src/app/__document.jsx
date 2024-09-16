'use client'

import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }) {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://accounts.google.com/gsi/client';
        script.async = true;
        script.onload = () => {
            console.log('Google Identity Services script loaded.');
        };
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return <Component {...pageProps} />;
}
