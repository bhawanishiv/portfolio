import React, { useEffect, useState } from 'react';
import cx from 'classnames';

import { ReactComponent as AppLogoFull } from 'app/assets/app-logo-full.svg';
import { ReactComponent as AppLogo } from 'app/assets/app-logo.svg';

const scrollOffset = 140;
const scrollDelta = 10;

const Header = ({ icons, links, themeIcon, onThemeChange }) => {
  const [{ scrolling, previousTop, hide }, setScrollState] = useState({
    scrolling: false,
    previousTop: 0,
    hide: false,
  });

  const checkSimpleNavigation = (currentTop) => {
    if (previousTop - currentTop > scrollDelta) {
      setScrollState((p) => ({
        ...p,
        hide: false,
      }));
    } else if (
      currentTop - previousTop > scrollDelta &&
      currentTop > scrollOffset
    ) {
      setScrollState((p) => ({
        ...p,
        hide: true,
      }));
    }
  };

  const autoHideHeader = () => {
    const currentTop = window.scrollY;
    checkSimpleNavigation(currentTop);
    setScrollState((p) => ({
      ...p,
      previousTop: currentTop,
      scrolling: false,
    }));
  };

  const onScroll = () => {
    if (!scrolling) {
      setScrollState((p) => ({ ...p, scrolling: true }));
      if (!window.requestAnimationFrame) {
        setTimeout(autoHideHeader, 250);
      } else {
        requestAnimationFrame(autoHideHeader);
      }
    }
  };

  const renderLink = (link) => {
    if (link.icon) {
      const Icon = icons[link.icon];
      return <Icon className="app-icon active" />;
    }

    return link.label;
  };

  const renderHeader = () => (
    <header
      className={cx(
        'app-header fixed left-0 w-full bg-primary-light py-4 z-50 shadow-md',
        'bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60'
        // hide && 'scroll'
      )}
    >
      <div className="app-container">
        <div className="flex items-center">
          <a href="/">
            <AppLogoFull className="h-12 w-auto hidden md:block" />
            <AppLogo className="h-12 w-auto md:hidden" />
          </a>
          <div className="ml-auto">
            <nav>
              <ul className="flex items-center gap-4">
                <li>
                  <button
                    type="button"
                    className="text-primary"
                    onClick={onThemeChange}
                  >
                    {themeIcon}
                  </button>
                </li>
                {links.map((link, i) => {
                  if (link.hide) return null;
                  const {
                    className: linkClassName,
                    variant,
                    href: linkHref,
                  } = link;
                  return (
                    // eslint-disable-next-line react/no-array-index-key
                    <li key={i}>
                      <a
                        target="_blank"
                        href={linkHref}
                        className={cx(
                          linkClassName,
                          variant === 'primary' &&
                            'text-on-primary bg-primary px-4 py-2 rounded-xl'
                        )}
                        rel="noreferrer"
                      >
                        {renderLink(link)}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [scrolling, previousTop, hide]);
  return renderHeader();
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
