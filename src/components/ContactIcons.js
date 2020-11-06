import React from 'react';

import { FontAwesomeIcon } from "@Fontawesome/react-fontawesome";
import {
    faTwitter,
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

            <a
                href="https://twitter.com/Flop"
                className="twitter-icon"
            >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>

            <a
                href="https://discord.com/channels/@me/388788632686690305"
                className="discord-icon"
            >

            </a>
        </div>

    );
}

