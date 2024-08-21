import React,{ useEffect } from 'react'
import './ChatWidget.css'

const ChatWidget = () => {
  
   

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://embed.tawk.to/66b5eb3f0cca4f8a7a73c8d3/1i4r9tsu0';
        script.async = true;
        script.charset = 'UTF-8';
        script.setAttribute('crossorigin', '*');
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
      return null;
}

export default ChatWidget
