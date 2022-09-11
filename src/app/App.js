import React, { useEffect, useState, useMemo, useRef } from 'react';

import scrollama from 'scrollama';

import Header from 'app/components/Header';
import Introduction from 'app/components/Introduction';
import AboutMe from 'app/components/AboutMe';
import MyProject from 'app/components/MyProject';

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
import { ReactComponent as SubIcon } from 'app/assets/icons/sun.svg';

import 'app/styles/styles.css';
import 'app/styles/main.scss';

const user = {
  displayName: 'Bhawani Shankar Bharti',
  imageUrl: 'images/avatar_2.jpeg',
  email: 'bhawanishiv@gmail.com',
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

const socialLinks = [
  { id: 'github', icon: GithubIcon, href: 'https://github.com/bhawanishiv' },
  {
    id: 'linkedin',
    icon: LinkedinIcon,
    href: 'https://www.linkedin.com/in/bhawanishiv/',
  },
  {
    id: 'twitter',
    icon: TwitterIcon,
    href: 'https://www.twitter.com/bhawanishiv/',
  },
];

const projects = [
  {
    id: 'kahanika',
    category: 'Social Media',
    title: 'Kahanika',
    imageUrl: 'images/kahanika_preview.png',
    tags: ['React', 'Next.js', 'Node.js', 'Express', 'GraphQL'],
    previewUrl: 'https://kahanika.mahilakalyansamiti.org',
    links: [
      { id: 'github', icon: GithubIcon, href: 'https://github.com/kahanika' },
      {
        id: 'demo',
        icon: OpenLinkIcon,
        href: 'https://kahanika.mahilakalyansamiti.org',
      },
    ],
    description: (
      <p>
        An online platform for writers to write stories, poems and such contents
        and showcase their talent. People can like, comment, rate other&apos;s
        contents as well.
      </p>
    ),
  },
  {
    id: 'machines-system',
    category: 'Internet of Things',
    title: 'Machines System',
    imageUrl: 'images/machinessystem_preview.png',
    tags: ['Angular', 'Node.js', 'Micro-Controller', 'Embedded C++', 'ESP8266'],
    description: (
      <p>
        A Remote Devices Operation Management System with Energy measurement
        that helps to monitor and control our devices remotely
      </p>
    ),
    previewUrl: 'https://machinesproject.web.app',
    links: [
      {
        id: 'github',
        icon: GithubIcon,
        href: 'https://github.com/machinessystem',
      },
      {
        id: 'demo',
        icon: OpenLinkIcon,
        href: 'https://machinesproject.web.app',
      },
    ],
  },
];

const minorProjects = [
  {
    id: 'start-my-app',
    category: 'Tooling',
    title: 'Start my app',
    tags: ['CLI', 'React Native', 'Android development', 'Emulator'],
    links: [
      {
        id: 'github',
        icon: GithubIcon,
        href: 'https://github.com/bhawanishiv/start-my-app',
      },
    ],
    description: (
      <>
        <p>
          A command line tool to help launch an android emulator. Available on{' '}
          <a
            target="_blank"
            href="https://github.com/www.npmjs.com/package/start-my-app"
            rel="noreferrer"
          >
            npm
          </a>
          .
        </p>
        <div className="">
          <p>Run following command to open an emulator:</p>
          <div className="bg-surface-variant p-2 rounded-xl my-2">
            <code>npx start-my-app</code>
          </div>
        </div>
      </>
    ),
  },
  {
    id: 'aspirine-nBars',
    category: 'Robotics',
    title: 'ASPIRINE nBARS 98.1',
    tags: ['Robot', 'Micro-Controller', 'Embedded C++'],
    links: [
      {
        id: 'github',
        icon: GithubIcon,
        href: 'https://github.com/bhawanishiv/aspirine-nbars',
      },
    ],
    description: (
      <p>A micro-controller based line follower autonomous robot.</p>
    ),
  },
];

const works = [
  {
    id: '1',
    role: 'Software Engineer',
    from: 'Dec 2020',
    to: 'Present',
    company: 'Inflolabs Private Limited (Log.os India Pvt. Ltd.)',
    activities: [
      'Integrated Auth for storefronts and admin panel which enable certain modules based on authorized role of the user',
      'Integrated Stripe and RazorPay payment APIs',
      'Built Mobile (Android and iOS) and TV (Android, TVOS and Roku TV) apps',
      'Analytics of videos, usage and interactions',
      'Theme integrate on storefronts',
      'Infinite scroll and Pagination in tables and various pages',
      'Dynamic Page builder used to build a page with drag and drop of components',
    ],
  },
];

const App = () => {
  const [currentTheme, setCurrentTheme] = useState(DEFAULT_THEME);
  const refs = useRef([]);
  const scroller = scrollama();

  const handleContactClick = () => {
    window.location.href = `mailto:${user.email}`;
  };

  const renderLink = (link) => {
    if (link.icon) {
      const Icon = link.icon;
      return <Icon className="app-icon active" />;
    }

    return link.label;
  };

  const handleThemeChange = () => {
    const nextTheme = currentTheme === 'theme1' ? 'theme2' : 'theme1';
    setCurrentTheme(nextTheme);
  };

  const renderApp = () => (
    <div>
      <div
        ref={(ref) => {
          refs.current[0] = ref;
        }}
      >
        <Header
          logoUrl="images/app_logo.png"
          links={[
            ...socialLinks,
            {
              href: 'https://drive.google.com/file/d/1mLV8FrPFsaegpHICJY2A1oXvn7feke50/view?usp=sharing',
              label: 'Resume',
              className: 'text-on-primary bg-primary px-4 py-2 rounded-xl',
            },
          ]}
          currentTheme={currentTheme}
          themeIcon={
            currentTheme === 'theme1' ? (
              <MoonIcon className="app-icon active" />
            ) : (
              <SubIcon className="app-icon active" />
            )
          }
          onThemeChange={handleThemeChange}
        />
      </div>
      <main className="pt-20">
        <div
          className="app-container"
          ref={(ref) => {
            refs.current[1] = ref;
          }}
        >
          <Introduction user={user} />
        </div>
        <div
          className="app-container"
          ref={(ref) => {
            refs.current[2] = ref;
          }}
        >
          <AboutMe user={user} />
        </div>
        <div
          className="app-container"
          ref={(ref) => {
            refs.current[2] = ref;
          }}
        >
          <h2 className="text-3xl font-semibold">Where I&apos;ve worked</h2>
          {works.map((work) => (
            <div key={work.id} className="py-2">
              <div className="py-2">
                <div className="text-xl leading-6">
                  {' '}
                  <h3>
                    {work.role} at{' '}
                    <span className="text-primary">{work.company}</span>
                  </h3>
                </div>
                <p className="text-on-surface-variant">
                  <span>{work.from}</span>
                  {' - '}
                  <span>{work.to}</span>
                </p>
              </div>
              <div className="md:max-w-lg">
                <ul>
                  {work.activities.map((activity) => (
                    <li className="list__item" key={activity}>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        <div className="py-8">
          <div className="app-container">
            <h2 className="text-3xl font-semibold">Things I&apos;ve built</h2>
            {projects.map((project, i) => (
              <div
                ref={(ref) => {
                  refs.current[3 + i] = ref;
                }}
                key={project.id}
              >
                <MyProject>
                  {i % 2 !== 0 && (
                    <MyProject.Content
                      className="md:w-1/2"
                      previewUrl={project.previewUrl}
                      category={project.category}
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      links={project.links}
                    />
                  )}
                  <MyProject.Image
                    className="md:w-1/2"
                    previewUrl={project.previewUrl}
                    imageUrl={project.imageUrl}
                    title={project.title}
                  />
                  {i % 2 === 0 && (
                    <MyProject.Content
                      className="md:w-1/2"
                      previewUrl={project.previewUrl}
                      category={project.category}
                      title={project.title}
                      description={project.description}
                      tags={project.tags}
                      links={project.links}
                    />
                  )}
                </MyProject>
              </div>
            ))}
          </div>
        </div>
        <div className="py-8">
          <div className="app-container">
            <h2 className="text-3xl  font-semibold">
              Other Noteworthy Projects
            </h2>
            <div className="flex flex-wrap gap-6 py-6">
              {minorProjects.map((project, i) => (
                <div
                  ref={(ref) => {
                    refs.current[3 + i] = ref;
                  }}
                  key={project.id}
                >
                  <MyProject.Content
                    className=""
                    category={project.category}
                    previewUrl={project.previewUrl}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    links={project.links}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="app-container">
          <div className="py-8 flex flex-col items-center ">
            <p className="py-2 text-primary">What&apos;s next</p>
            <h2 className="text-3xl font-semibold">Get In Touch</h2>
            <div className="max-w-lg flex flex-col items-center text-center">
              <p className="py-6">
                I am open to talk if there is something interesting going on.
                For any queries, you can contact me.
              </p>
              <button
                type="button"
                className="text-on-primary bg-primary rounded-xl px-6 py-2"
                onClick={handleContactClick}
              >
                Contact me
              </button>
              <ul className="py-6 flex items-center gap-6">
                {socialLinks.map((link) => (
                  <li key={link.id}>
                    <a target="_blank" href={link.href} rel="noreferrer">
                      {renderLink(link)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  useEffect(() => {
    // setup the instance, pass callback functions
    scroller
      .setup({
        step: refs.current,
      })
      .onStepEnter((response) => {
        // { element, index, direction }
        console.log(`response1->`, response);
      })
      .onStepExit((response) => {
        // { element, index, direction }
        console.log(`response2->`, response);
      });
  }, []);

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
