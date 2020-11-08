import React from 'react';
import { FontAwesomeIcon } from "@Fontawesome/react-fontawesome";
import {
    faTwitter,
    faYoutube
} from "@Fontawesome/free-brands-svg-icons"

function ContactIcons(props) {
    return(
        <div className="contact-icons">
            <a
                href="https://www.youtube.com/c/Flop"
                className="youtube-icon"

            
            >
                <FontAwesomeIcon icon={faYoutube} size="2x" />

            </a>

            <a
                href="https://twitter.com/Flop"
                className="twitter-icon"
            >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>

            <a
                href="https://discord.com/users/388788632686690305"
                className="discord-icon"
            >
                
            </a>
        </div>

    );
}

export default ContactIcons;