import React, { useRef } from 'react';

import Header from 'app/components/Header';
import Introduction from 'app/components/Introduction';
import AboutMe from 'app/components/AboutMe';
import MyProject from 'app/components/MyProject';

// eslint-disable-next-line import/no-unresolved
import { ReactComponent as GithubIcon } from 'app/assets/icons/github.svg';
import { ReactComponent as OpenLinkIcon } from 'app/assets/icons/open-link.svg';

import 'app/styles/main.scss';

const user = {
  displayName: 'Bhawani Shankar Bharti',
  imageUrl: 'images/avatar_2.jpeg',
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

const projects = [
  {
    id: 'kahanika',
    category: 'Social Media',
    title: 'Kahanika',
    imageUrl: 'images/machinessystem_preview.png',
    tags: ['React', 'Next.js', 'Node.js', 'Express', 'GraphQL'],
    previewUrl: '/',
    links: [
      { id: 'github', icon: GithubIcon, href: '/' },
      { id: 'demo', icon: OpenLinkIcon, href: '/' },
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
    id: 'start-my-app',
    category: 'Tooling',
    title: 'Start My App',
    imageUrl: 'images/machinessystem_preview.png',
    tags: ['CLI', 'React Native', 'Android development', 'Emulator'],
    links: [
      { id: 'github', icon: GithubIcon, href: '/' },
      { id: 'demo', icon: OpenLinkIcon, href: '/' },
    ],
    description: (
      <p>
        A command line tool to help launch an android emulator. Available on{' '}
        <a href="/">npm</a>.
      </p>
    ),
  },
];

const App = () => {
  const refs = useRef([]);

  const renderApp = () => (
    <div>
      <div
        ref={(ref) => {
          refs.current[0] = ref;
        }}
      >
        <Header logoUrl="images/app_logo.png" />
      </div>
      <main>
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

        <div className="app-container">
          <h2 className="text-md">Things I have built</h2>
          {projects.map((project, i) => (
            <div
              ref={(ref) => {
                refs.current[3 + i] = ref;
              }}
              key={project.id}
            >
              <MyProject
                previewUrl={project.previewUrl}
                imageUrl={project.imageUrl}
                category={project.category}
                title={project.title}
                description={project.description}
                tags={project.tags}
                links={project.links}
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  );

  return renderApp();
};

App.propTypes = {};

App.defaultProps = {};

export default App;
