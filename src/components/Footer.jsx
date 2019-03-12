import React from 'react'

const Footer = () => (
    <footer>
        <span>
            written by <a href="http://lachie.co/">lachie.co</a>
        </span>
        <span>
            <a href="https://github.com/alachie/text-generators">github</a>
        </span>
        <span>{new Date().getFullYear()}</span>
    </footer>
);

export default Footer
