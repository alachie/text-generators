import React from 'react'

import styled from 'styled-components';

const StyledAbout = styled.div`
    flex: 1;
    text-align: center;
    padding: 80px 0;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;

    h2 {
        margin: 40px;
        text-transform: uppercase;
        font-weight: normal;
        display: inline-block;
        position: relative;
        color: var(--fg-color);

        &:first-child {
            margin-top: 0;
        }
    }

    a,
    .inline-emoji {
        color: var(--fg-color);
    }

    p {
        max-width: 600px;
        font-size: 22px;
        text-align: left;
        line-height: 1.5em;
        margin: 0;
        margin-bottom: 20px;
        margin: auto;
        font-weight: normal;
        color: var(--fg-color);

        &:last-child {
            margin-bottom: 0;
        }
    }

    .large {
        font-size: 60px;
    }

    .row {
        width: 600px;
        margin: auto;
        height: auto;
        clear: both;
        margin-bottom: 20px;

        &:after {
            visibility: hidden;
            display: block;
            font-size: 0;
            content: " ";
            clear: both;
            height: 0;
        }

        &:last-child {
            margin-bottom: 0;
        }
    }

    .row .col {
        text-align: left;
        width: 75%;
        float: left;
        display: inline-block;

        &:first-child {
            width: 25%;
        }
    }
    @media (max-height: 700px), (max-width: 500px) {
        padding-top: 80px;
        align-items: stretch;
        justify-content: flex-start;

        h2 {
            margin: 40px;
            margin-top: 0;
        }

        h2:first-child {
            margin-top: 40px;
        }

        p,
        .row {
            width: 100% !important;
            display: block;
            margin-left: auto !important;
            margin-right: auto !important;
            margin-bottom: 20px;
        }

        .row:last-child {
            padding-bottom: 80px;
        }
    }

    @media (max-width: 500px) {
        padding-top: 40px;

        .row:last-child {
            padding-bottom: 40px;
        }

        p {
            font-size: 16px !important;
        }

        h2 {
            font-size: 20px;
        }
    }
`;

const About = () => (
    <StyledAbout>
        <h2>About</h2>
        <p>
            This app is a collection of text processors that I have written in
            JavaScript. I originally wrote them as seperate services and
            websites, but for simplicity and for future expansion, I've decided
            to combine them into one app.
        </p>
        <p>
            Due to{" "}
            <a href="https://en.wikipedia.org/wiki/Emoji#Implementation">
                disparities
            </a>{" "}
            in emoji cross platform, this app appears best on iOS or macOS
            devices, running up to date versions.
        </p>
        <h2>Glossary</h2>
        <div className="row">
            <div className="col">
                <span className="large">👏</span>
            </div>
            <div className="col">
                <p>
                    Clap is a processor that replaces spaces in Sentences with a
                    clap emoji (<span className="inline-emoji">👏</span>) based
                    on{" "}
                    <a href="http://knowyourmeme.com/memes/clap-emoji">
                        this meme
                    </a>
                    .
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <span className="large">🎺</span>
            </div>
            <div className="col">
                <p>
                    Toot is a processor that replaces all regular characters
                    with{" "}
                    <a href="https://en.wikipedia.org/wiki/Halfwidth_and_fullwidth_forms">
                        full width characters
                    </a>
                    .
                </p>
            </div>
        </div>
        <div className="row">
            <div className="col">
                <span className="large">🅱️</span>
            </div>
            <div className="col">
                <p>
                    B is a processor that replaces the letter b with a "blood
                    type b" emoji. Based on{" "}
                    <a href="http://knowyourmeme.com/memes/b-button-emoji-%F0%9F%85%B1">
                        this meme
                    </a>
                    .
                </p>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <span className="large">🧽</span>
            </div>
            <div className="col">
                <p>
                    Mock is a processor that randomly capitalises sentences.
                    Based on{" "}
                    <a href="https://knowyourmeme.com/memes/mocking-spongebob">
                        this meme
                    </a>
                    .
                </p>
            </div>
        </div>

        <div className="row">
            <div className="col">
                <span className="large">🎲</span>
            </div>
            <div className="col">
                <p>
                    Random will randomly select an emoji from a list. The aim is
                    to update this frequently.
                </p>
            </div>
        </div>
    </StyledAbout>
);
export default About
