import React from 'react';
import profilePic from '../assets/profile-pic.jpg';
import { rhythm } from '../utils/typography';

class Bio extends React.Component {
  render() {
    return (
      <div
        style={{
          display: 'flex',
          marginBottom: rhythm(2),
        }}
      >
        <img
          src={profilePic}
          alt={`Youssef Fares`}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: rhythm(2),
            height: rhythm(2),
            borderRadius: '50%',
          }}
        />
        <p style={{ maxWidth: 360 }}>
          Something no one asked for by{' '}
          <a href="https://mobile.twitter.com/youssefares">Youssef Fares</a>.{' '}
          Tech,&nbsp;football and other artsy things
        </p>
      </div>
    );
  }
}

export default Bio;
