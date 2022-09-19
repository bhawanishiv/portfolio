import React from 'react';

const Introduction = (props) => {
  const { user } = props;

  const renderIntroduction = () => (
    <div>
      <h1>
        <span className="text-primary">Hi! my name is</span> <br />
        <span className="text-3xl md:text-6xl font-semibold">
          {user.displayName}
        </span>
        .
      </h1>
      <p className="text-2xl md:text-4xl leading-6 md:leading-10 py-4">
        I am an <span className="">explorer</span>
        ,<br />
        and is eager to know about how things work.
      </p>

      <div className="md:max-w-lg">{user.description}</div>
    </div>
  );

  return renderIntroduction();
};

Introduction.propTypes = {};

Introduction.defaultProps = {};

export default Introduction;
