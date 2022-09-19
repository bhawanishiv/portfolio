import React from 'react';

const AboutMe = (props) => {
  const { user, skills } = props;

  const renderAboutMe = () => (
    <div className="md:flex ">
      <div className="max-w-lg">
        <h2 className="text-3xl">About me</h2>

        <p className="py-2">
          My name is {user.displayName} and I am from Jharkhand, India.
        </p>
        <p className="py-2">
          I completed my{' '}
          <span className="font-semibold">
            Electronics and Communication Engineering
          </span>{' '}
          in 2020, and am interested in exploring things that I don&apos;t know.
        </p>
        <p className="py-2">
          During my engineering, I found that &quot;Software&quot; is the core
          of a system that makes it more dynamic, which fascinated me a lot and
          I started my professional journey as a{' '}
          <span className="font-semibold">Software Engineer</span>.
        </p>

        <p className="">Following are tools/technologies I mostly work with:</p>
        <ul className="app-about__technologies-list">
          {skills.map((item) => (
            <li className="list__item" key={item.key}>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2 p-4 flex justify-center">
        <img
          className="rounded-full w-64 h-64"
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
