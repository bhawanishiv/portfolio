import React from 'react';
import cx from 'classnames';

const MyProject = (props) => {
  const { children } = props;

  const renderMyProject = () => <div className="md:flex py-12">{children}</div>;

  return renderMyProject();
};

const MyProjectImage = (props) => {
  const { title, imageUrl, previewUrl, className } = props;

  const renderMyProjectImage = () => (
    <a
      target="_blank"
      href={previewUrl}
      className={cx(className)}
      rel="noreferrer"
    >
      <img src={imageUrl} alt={title} />
    </a>
  );

  return renderMyProjectImage();
};

const MyProjectContent = (props) => {
  const { title, category, description, tags, links, previewUrl, className } =
    props;

  const renderLink = (link) => {
    if (link.icon) {
      const Icon = link.icon;
      return <Icon className="app-icon active" />;
    }

    return link.label;
  };

  const renderContent = () => (
    <div className={cx('md:px-6', className)}>
      <p className="text-primary py-2">{category}</p>
      <a
        target="_blank"
        className={cx(
          'text-on-background ',
          previewUrl && 'hover:text-primary'
        )}
        href={previewUrl}
        rel="noreferrer"
      >
        <h2 className="text-4xl">{title}</h2>
      </a>
      <div className="py-4">{description}</div>
      <div>
        <ul className="text-on-surface-variant flex gap-6 flex-wrap">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <div className="py-6">
        <ul className="flex flex-wrap gap-6">
          {links.map((link) => (
            <li key={link.id}>
              <a target="_blank" href={link.href} rel="noreferrer">
                {renderLink(link)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  return renderContent();
};

MyProject.Content = MyProjectContent;
MyProject.Image = MyProjectImage;

export default MyProject;
