import React from 'react';

const Work = ({ works }) => {
  const renderWork = () =>
    works.map((work, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <div key={i} className="py-2">
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
    ));

  return renderWork();
};

Work.propTypes = {};

Work.defaultProps = {};

export default Work;
