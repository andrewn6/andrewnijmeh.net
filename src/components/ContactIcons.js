import React from 'react';

import { FontAwesomeIcon } from "@Fontawesome/react-fontawesome";
import {
    FaTwitter,
    faYoutube
} from "@Fontawesome/free-brands-svg-icons"

export default function ContactIcons() {
    return(
        <div className="contact-icons">
            <h3>My socials!</h3>
            <a
                href="https://www.youtube.com/c/Flop"
                className="youtube-icon"
            >
                <FontAwesomeIcon icon={faYoutube} size="2x" />
            </a>
        </div>

    );
}

