import React from 'react'

import styled from 'styled-components';

const StyledFooter = styled.footer`
	width: 100%;
	background: var(--bg-color);
	padding: 10px;
	font-size: 10px;
	display: flex;
	flex-grow: 0;
	flex-shrink: 0;
    flex-bias: auto;
    border-top: 2px solid var(--border-color);
    margin-top: auto;

	span:nth-child(2){
		margin-left: 10px
		width: 100%
        flex: 1
    }

	&, 
	a {
        color:  var(--fg-color)
    }
`;

const Footer = () => (
    <StyledFooter>
        <span>
            made by <a href="http://lachie.co/">lachie.co</a>
        </span>
        <span>
            <a href="https://github.com/alachie/text-generators">github</a>
        </span>
        <span>&copy; {new Date().getFullYear()}</span>
    </StyledFooter>
);

export default Footer
