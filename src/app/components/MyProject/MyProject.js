import React from 'react';

const MyProject = (props) => {
  const { title, category, imageUrl, previewUrl, description, tags, links } =
    props;

  const renderLink = (link) => {
    if (link.icon) {
      const Icon = link.icon;
      return <Icon className="app-icon active" />;
    }

    return link.label;
  };

  const renderMyProject = () => (
    <div className="app-project__container">
      <a href={previewUrl} className="app-project__preview-container">
        <img src={imageUrl} alt={title} />
      </a>
      <div className="app-project__info">
        <p className="app-project__category">{category}</p>
        <h2 className="app-project__title font-semibold">{title}</h2>
        <div className="app-project__description">{description}</div>
        <div>
          <ul className="app-project__tags">
            {tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        </div>
        <div>
          <ul className="app-project__links">
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.href} className="link">
                  {renderLink(link)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  return renderMyProject();
};

export default MyProject;
