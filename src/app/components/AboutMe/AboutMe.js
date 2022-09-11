import React from 'react';

const AboutMe = (props) => {
  const { user } = props;

  const renderAboutMe = () => (
    <div className="app-about__container">
      <div className="app-about__info">
        <h2 className="text-md">About me</h2>

        <p className="app-about__description">
          My name is {user.displayName}, I am from Jharkhand, India.
        </p>
        <p className="app-about__description">
          I completed my{' '}
          <span className="font-semibold">
            Electronics and Communication Engieering
          </span>{' '}
          in 2020, and am interested in exploring things that I don&apos;t know.
        </p>
        <p className="app-about__description">
          During my engineering, I found that &quot;Software&quot; is the core
          of a system that makes it more dynamic, which fascinated me a lot and
          I started my professional journey as a{' '}
          <span className="font-semibold">Software Engineer</span>.
        </p>

        <p className="app-about__description">
          Following are tools/technologies I mostly work with:
        </p>
        <ul className="app-about__technologies-list">
          {[
            'Javascript',
            'React',
            'Angular',
            'Node.js',
            'Typescript',
            'Next.js',
            'GraphQL',
            'React Native',
            'Brightscript',
            'MongoDB',
            'SQL',
            'Java',
            'C++',
            'PHP',
          ].map((item) => (
            <li className="list__item" key={item}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <img
          className="app-avatar md"
          src={user.imageUrl}
          alt={user.displayName}
        />
      </div>
    </div>
  );

  return renderAboutMe();
};

AboutMe.propTypes = {};

AboutMe.defaultProps = {};

export default AboutMe;
