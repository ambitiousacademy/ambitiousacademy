import React from 'react';

<link rel='stylesheet' href='src\app\globals.css'></link>

const Podcast = () => {
  // Sample data for links with logos
  const links = [
    { name: 'Youtube', url: 'https://www.youtube.com/@Beyondthebrief-podcast?feature=shared&sub_confirmation=1', logo: '/photos/youtube.png' },
    { name: 'Spotify', url: 'https://tr.ee/_ADGwJpjbb', logo: '/photos/spotify.png' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/beyond-the-brief-podcast/', logo: '/photos/linkdin.png' },
    { name: 'Instagram', url: 'https://www.instagram.com/beyondthe.brief?igsh=MzY1NDJmNzMyNQ==', logo: '/photos/insta.png' },
  ];

  return (
    <div className="podcast-container">
      <div className="profile-section">
        <img
          src="./photos/podcastposter.jpg" // Replace with your podcast logo URL
          alt="Podcast Logo"
          className="profile-pic"
        />
        <h1 className="name">Our Podcast</h1>
      </div>
      <div className="links-section">
        {links.map((link, index) => (
          <a key={index} href={link.url} className="link-item" target="_blank" rel="noopener noreferrer">
            <img src={link.logo} alt={`${link.name} Logo`} className="link-logo" />
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Podcast;
