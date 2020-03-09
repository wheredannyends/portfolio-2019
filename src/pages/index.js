import React from 'react';
import Logo from '../components/logo';

const App = () => {
  return (
    <div className="intro">
      <Logo />
      <h2>Hi. I&apos;m Danny Burton.</h2>
      <h3>I&apos;m a Front-End Developer.</h3>
      <ul>
        <li>Currently a <strong>Frontend Developer</strong> at <a target="_blank" rel="noopener noreferrer" href="https://www.pixelunion.net">Pixel Union</a>.</li>
        <li>Previously a <strong>Senior Frontend Developer</strong> at <a target="_blank" rel="noopener noreferrer" href="https://www.convertus.com">Convertus</a>.</li>
        <li>I also <strong>freelance</strong> on the side. Check out <a target="_blank" rel="noopener noreferrer" href="https://www.ocin.co">OCIN</a> and <a target="_blank" rel="noopener noreferrer" href="https://www.rodengray.com">Roden Gray</a>.</li>
        <li>Want to chat about a project? Feel free to <a target="_blank" rel="noopener noreferrer" href="mailto:iam@dannyburton.dev">send me an email</a>.</li>
      </ul>
    </div>
  );
};

export default App;
