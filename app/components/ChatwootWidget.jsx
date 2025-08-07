'use client';

import { useEffect } from 'react';

export default function ChatwootWidget() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://app.chatwoot.com/packs/js/sdk.js';
    script.async = true;
    script.defer = true;
    script.onload = () => {
      window.chatwootSDK.run({
        websiteToken: 'ubz75hFeABKsBZihAZhHsGsi',
        baseUrl: 'https://app.chatwoot.com',
      });
    };
    document.body.appendChild(script);
  }, []);

  return null;
}
