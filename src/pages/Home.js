import React from 'react';

const Home = props => {
    return(
        <div className='home'>
        <img src = '/logo.gif' className="App-logo" alt="logo" />
        <h3>Mental Health Peer Coaching</h3>
        <p>Promoting activites and actions that help improve a peer's quality of life and ability to cope with the stress(ors) of daily life.
        </p>
        <h5>Mental health therapy from the practive of a peer specialist</h5>
        <p>
        Fuel your mind, find your voice.
        </p>
        <ul>
        <li>Strength Focused</li>
        <li>Trauma Informed</li>
        <li>Person Centered</li>    
        </ul>
        <a class="btn btn-primary" href="/Shop.js" role="button">Exercises for your mental</a>
        <p>
        Helping relationship provided by community peer educators and specialists promoting respect, trust, warmth, and empowering individuals to make changes and decisions to enhance their lives.
        </p>
        </div>
    )
};

export default Home;