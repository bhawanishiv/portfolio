import React from 'react';

const Introduction = (props) => {
  const { user } = props;

  const renderIntroduction = () => (
    <div>
      <h1>
        <span className="app-introduction__title">Hi! my name is</span> <br />
        <span className="app-introduction__title-main">{user.displayName}</span>
      </h1>
      <p className="app-introduction__description">
        I am an <span className="">explorer</span>
        ,<br />
        and is eager to know about how things work.
      </p>

      <div className="app-introduction__role-container">
        I&apos;m designated as a Software Engineer who designs and builds
        extensible, efficient and easy applications. I&apos;ve worked for Web,
        Mobile, TV and RokuTV.
      </div>
    </div>
  );

  return renderIntroduction();
};

Introduction.propTypes = {};

Introduction.defaultProps = {};

export default Introduction;
