import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const WhatsAppIcon = () => {
  const whatsappNumber = '919039397884'; // Replace with your WhatsApp number

  return (
    <OverlayTrigger
      placement="left"
      overlay={<Tooltip id="tooltip-left"  className="custom-tooltip">WhatsApp Chat</Tooltip>}
    >
      <a href={`https://wa.me/${whatsappNumber}`} target="_blank" rel="noopener noreferrer" style={{ position: 'fixed', bottom: '20px', left: '20px', backgroundColor: '#25D366', padding: '10px', borderRadius: '50%', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)', transition: 'background-color 0.3s' }}>
        <FontAwesomeIcon icon={faWhatsapp} size="2x" style={{ color: 'white' }} />
      </a>
    </OverlayTrigger>
  );
};

export default WhatsAppIcon;
