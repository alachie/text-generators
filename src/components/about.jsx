import React from 'react'
const About = () => (
    <div className="about">
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
        <div class="row">
            <div class="col">
                <span className="large">👏</span>
            </div>
            <div class="col">
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
        <div class="row">
            <div class="col">
                <span className="large">🎺</span>
            </div>
            <div class="col">
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
        <div class="row">
            <div class="col">
                <span className="large">🅱️</span>
            </div>
            <div class="col">
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

        <div class="row">
            <div class="col">
                <span className="large">🧽</span>
            </div>
            <div class="col">
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

        <div class="row">
            <div class="col">
                <span className="large">🎲</span>
            </div>
            <div class="col">
                <p>
                    Random will randomly select an emoji from a list. The aim is
                    to update this frequently.
                </p>
            </div>
        </div>
    </div>
);
export default About
