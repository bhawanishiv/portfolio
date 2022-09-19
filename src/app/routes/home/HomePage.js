import React, { useEffect, useState, useMemo } from 'react';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import cx from 'classnames';

import useFireBase from 'app/hooks/useFireBase';

import Header from 'app/components/Header';
import AnimatedLogo from 'app/components/AnimatedLogo';

import Introduction from 'app/components/Introduction';
import AboutMe from 'app/components/AboutMe';
import MyProject from 'app/components/MyProject';
import Works from 'app/components/Works';

const minorProjects = [
  {
    id: 'start-my-app',
    category: 'Tooling',
    title: 'Start my app',
    tags: ['CLI', 'React Native', 'Android development', 'Emulator'],
    links: [
      {
        id: 'github',
        icon: 'github',
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
        icon: 'github',
        href: 'https://github.com/bhawanishiv/aspirine-nbars',
      },
    ],
    description: (
      <p>A micro-controller based line follower autonomous robot.</p>
    ),
  },
];

const HomePage = (props) => {
  const { icons, currentTheme, user, onThemeChange } = props;

  const [appLoaded, setAppLoaded] = useState(false);
  const [socialLinks, setSocialLinks] = useState([]);
  const [works, setWorks] = useState([]);
  const [skills, setSkills] = useState([]);
  const [projects, setProjects] = useState([]);

  const { db } = useFireBase();

  const ThemeIcon = useMemo(
    () => (currentTheme === 'theme1' ? icons.moon : icons.sun),
    [currentTheme, icons]
  );

  const handleAppLoad = () => {
    setAppLoaded(true);
  };

  const handleContactClick = () => {
    window.location.href = `mailto:${user.email}`;
  };

  const renderLink = (link) => {
    if (link.icon) {
      const Icon = icons[link.icon];
      return <Icon className="app-icon active" />;
    }

    return link.label;
  };

  const renderHomePage = () => (
    <div>
      <Header
        icons={icons}
        currentTheme={currentTheme}
        links={socialLinks}
        themeIcon={<ThemeIcon className="app-icon active" />}
        onThemeChange={onThemeChange}
      />
      <main className="pt-20">
        <div className="app-container">
          <Introduction user={user} />
        </div>
        <div className="app-container py-24">
          <AboutMe skills={skills} user={user} />
        </div>

        <div className="app-container">
          <h2 className="text-3xl font-semibold">Where I&apos;ve worked</h2>
          <Works works={works} />
        </div>
        <div className="py-8">
          <div className="app-container">
            <h2 className="text-3xl font-semibold">Things I&apos;ve built</h2>
            {projects.map((project, i) => (
              <div key={project.key}>
                <MyProject>
                  {i % 2 !== 0 && (
                    <MyProject.Content
                      icons={icons}
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
                      icons={icons}
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
                // eslint-disable-next-line react/no-array-index-key
                <div key={`${project.key}-${i}`}>
                  <MyProject.Content
                    className=""
                    icons={icons}
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
                {socialLinks.map((link) => {
                  if (link.hide || link.hideInFooter) return null;
                  return (
                    <li key={link.href}>
                      <a target="_blank" href={link.href} rel="noreferrer">
                        {renderLink(link)}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  const renderHomePageContainer = () => {
    if (!appLoaded)
      return (
        <div className="h-screen w-screen flex flex-col items-center justify-center">
          <div className="w-[20rem] text-center ">
            <AnimatedLogo
              trigger={works.length && skills.length && socialLinks.length}
              duration={3000}
              onDone={handleAppLoad}
            />
          </div>
          <div
            className={cx(
              'relative my-6 h-3 w-3',
              works.length && skills.length && socialLinks.length && 'invisible'
            )}
          >
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary-light" />
          </div>
        </div>
      );

    return renderHomePage();
  };

  useEffect(() => {
    const q = query(collection(db, 'skills'), orderBy('order'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newSkills = [];
      querySnapshot.forEach((doc) => {
        const skill = {
          key: doc.id,
          ...doc.data(),
        };
        newSkills.push(skill);
        setSkills(newSkills);
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const q = query(collection(db, 'socialLinks'), orderBy('order'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newSocialLinks = [];
      querySnapshot.forEach((doc) => {
        const socialLink = {
          key: doc.id,
          ...doc.data(),
        };
        newSocialLinks.push(socialLink);
      });
      setSocialLinks(newSocialLinks);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const q = query(collection(db, 'works'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newWorks = [];
      querySnapshot.forEach((doc) => {
        const work = {
          key: doc.id,
          ...doc.data(),
        };
        newWorks.push(work);
        setWorks(newWorks);
      });
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    const q = query(collection(db, 'projects'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const newProjects = [];
      querySnapshot.forEach((doc) => {
        const project = {
          key: doc.id,
          ...doc.data(),
        };
        newProjects.push(project);
      });

      setProjects(newProjects);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return renderHomePageContainer();
};

HomePage.propTypes = {};

HomePage.defaultProps = {};

export default HomePage;
