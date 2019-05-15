import React    from 'react'
import ReactDOM from 'react-dom'

import _Router from './router'
import reducer from './reducers'

import { Provider } from 'react-redux'
import { createStore } from 'redux'

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }

    html {
        --bg-color: #fff;
        --fg-color: #000;
        --secondary-color: #eee;
        --border-color: #eee;
    }

    html {
        font-size: 10px;
        background: var(--bg-color);
        box-sizing: border-box;

    }

    html, body, h1, h2, h3, h4, h5, h6, p, blockquote {
        margin: 0;
        padding: 0;
    }

    a {
        color: black;
        color: var(--fg-color);
    }

    body {
        font-family: sans-serif;
        font-size: 3rem;
        font-family: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", -apple-system, BlinkMacSystemFont, "Helvetica Neue", Roboto, sans-serif;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        color: var(--fg-color);
        letter-spacing: -0.01em;
        overflow: hidden
        background: var(--bg-color)
    }

    // .emoji {
    //     font-family: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    // }


    html, 
    body, 
    #root, 
    #App {
        height: 100%;
        max-height: 100%;
    }

    #App {
        position: fixed;
        top: 0;	
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex-direction: column;
        max-height: 100vh;
    }

    #AppChild {
        flex-grow: 1;
        padding: 0px 10px;
        display: flex;
        overflow: auto;
        // height: 500px;
    }
    .random,
    .TextGen {
        button {
            border: 0
            background: transparent
            outline: none
            color: inherit
            font: inherit
        }
    }

`;


const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle />
        <_Router />
    </Provider>,
    document.getElementById("root")
);
