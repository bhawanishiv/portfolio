import React, { useEffect, useState, useMemo } from 'react';

import FireBase from 'app/contexts/FireBase';

import {
  getThemeByThemeName,
  createCSSVariable,
  DEFAULT_THEME,
} from 'app/themes';

// eslint-disable-next-line import/no-unresolved
import { ReactComponent as GithubIcon } from 'app/assets/icons/github.svg';
import { ReactComponent as LinkedinIcon } from 'app/assets/icons/linkedin.svg';
import { ReactComponent as TwitterIcon } from 'app/assets/icons/twitter.svg';
import { ReactComponent as OpenLinkIcon } from 'app/assets/icons/open-link.svg';
import { ReactComponent as MoonIcon } from 'app/assets/icons/moon.svg';
import { ReactComponent as SunIcon } from 'app/assets/icons/sun.svg';

import HomePage from './routes/home/HomePage';

import 'app/styles/styles.css';
import 'app/styles/main.scss';

const user = {
  displayName: 'Bhawani Shankar Bharti',
  imageUrl: 'images/avatar_2.jpeg',
  email: 'bhawanishiv@gmail.com',
};

const icons = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  'open-link': OpenLinkIcon,
  moon: MoonIcon,
  sun: SunIcon,
};
// {
/* <div className="app-avatar__container">
            <img
              className="app-avatar"
              src="images/avatar_2.jpeg"
              alt={user.displayName}
            />
            <h1>{user.displayName}</h1>
          </div>
          <button type="button" className="app-btn__contained primary">
            Send email
          </button> */
// }

const firebaseConfig = {
  apiKey: 'AIzaSyAb8Yuoa55FE-laro1CPuI76XcgNQEG3c4',
  authDomain: 'bhawanishiv-portfolio.firebaseapp.com',
  projectId: 'bhawanishiv-portfolio',
  storageBucket: 'bhawanishiv-portfolio.appspot.com',
  messagingSenderId: '340310770291',
  appId: '1:340310770291:web:57d2c49f96da2016156006',
  measurementId: 'G-CL026KWRLS',
};

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(DEFAULT_THEME);

  const handleThemeChange = () => {
    const nextTheme = currentTheme === 'theme1' ? 'theme2' : 'theme1';
    setCurrentTheme(nextTheme);
  };

  const renderApp = () => (
    <FireBase config={firebaseConfig}>
      <HomePage
        currentTheme={currentTheme}
        onThemeChange={handleThemeChange}
        icons={icons}
        user={user}
      />
    </FireBase>
  );

  const themeObj = useMemo(
    () => getThemeByThemeName(currentTheme),
    [currentTheme]
  );

  useEffect(() => {
    Object.keys(themeObj.colors).forEach((key) => {
      // eslint-disable-next-line no-undef
      document.documentElement.style.setProperty(
        createCSSVariable(key, 'app-sys-color'),
        themeObj.colors[key]
      );
    });

    const themeMeta = document.getElementById('theme-color-meta');
    if (themeMeta) {
      themeMeta.content = themeObj.colors.background;
    }
  }, [themeObj]);

  return renderApp();
};

App.propTypes = {};

App.defaultProps = {};

export default App;
