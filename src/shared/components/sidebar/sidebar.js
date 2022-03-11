import React, { useState, useEffect } from 'react';
import './sidebar.scss';
import Logo from '../logo/logo';
import { ChevronDown, List } from 'react-bootstrap-icons';
import Height from '../height/height';
import CustomText from '../customtext/customtext';
import { colorScheme, sudoUserType } from '../../../default';
import { useMediaQuery } from 'react-responsive';
import { gridBreakpoints } from '../../../default';
import PullUp from '../pullup/pullup';
import { appPages } from '../../../routes';
import { Link } from 'react-router-dom';
import { userTypes } from '../../utils/userTypes';

function Sidebar({ ...props }) {
  const [minimize, setMinimize] = useState(false);
  const [toggleSubmenu, setToggleSubmenu] = useState(false);

  const isSmallerThanLgScreen = useMediaQuery({
    query: `(max-width: ${gridBreakpoints.lg})`,
  });
  const isSmallerThanMdScreen = useMediaQuery({
    query: `(max-width: ${gridBreakpoints.md})`,
  });

  useEffect(() => {
    if (isSmallerThanLgScreen) {
      setMinimize(true);
    } else {
      setMinimize(false);
    }
    if (!isSmallerThanMdScreen) {
      props.setCols(props.defaultCols);
    }
  }, [isSmallerThanLgScreen, isSmallerThanMdScreen]);

  const toggleMinimize = () => {
    setMinimize(!minimize);
    if (!minimize) {
      window.$(`.fill`).removeClass('show-sub-menu');
      window.$(`.dgh`).toggleClass('rotate-icon');

      if (isSmallerThanMdScreen) {
        props.setCols(props.defaultCols);
      } else {
        props.setCols({
          sidebarCol: 'col-0half paddingNone',
          mainCol: 'col-11half paddingNone',
        });
      }
    } else {
      if (isSmallerThanMdScreen) {
        props.setCols({
          sidebarCol: 'col-12 paddingNone',
          mainCol: 'paddingNone',
        });
      } else {
        props.setCols(props.defaultCols);
      }
    }
  };

  const checkPermission = permission => {
    if (permission == undefined) {
      return true;
    } else {
      if (permission.includes(sudoUserType)) {
        return true;
      } else {
        return false;
      }
    }
  };

  const submenufunction = (label, options) => {
    if (options) {
      window.$(`#${label}`).toggleClass('show-sub-menu');
      window.$(`.${label}`).toggleClass('rotate-icon');

      // setToggleSubmenu(!toggleSubmenu);
    }
  };
  const submenuleave = (label, options) => {
    if (options) {
      window.$(`#${label}`).removeClass('show-sub-menu');
    }
  };

  const anothersubmenuleave = (label, options) => {
    setTimeout(() => {
      submenuleave(label, options);
    }, 1000);
  };

  return (
    <div className="sidebar">
      <div className="inner-bar">
        <div className="header">
          {!minimize && <Logo width={145} className={`sidebar-logo`} />}
          <List
            size={35}
            color="white"
            className={`hoverPointer ${minimize && 'left adjust-menu-bar'}`}
            onClick={toggleMinimize}
          />
        </div>
        <Height val={20} />
        <div className="main">
          {!minimize ? (
            <CustomText
              type="h3"
              size={minimize ? 12 : 13.5}
              color={colorScheme.sidebarSectionTitleColor}
            >
              MAIN
            </CustomText>
          ) : (
            <PullUp val={20} />
          )}
          <Height val={20} />

          {appPages.map((page, i) => {
            if (page.sidebar) {
              if (!page.bottom) {
                if (checkPermission(page.permission)) {
                  return (
                    <div
                      style={{ position: 'relative' }}
                      key={i}
                      // onMouseOut={() =>
                      //   anothersubmenuleave(page.label, page.options)
                      // }
                    >
                      <div className="">
                        <div className="dflex alc jcb">
                          <Link
                            className="linkFree"
                            to={!page.multiple && page.path}
                          >
                            <div
                              className="option"
                              onClick={() =>
                                page.multiple &&
                                submenufunction(page.label, page.options)
                              }
                            >
                              {page.icon}
                              {!minimize && <span>{page.label}</span>}
                              {page.label == 'Message' && (
                                <span className="messagesNum">10</span>
                              )}
                            </div>
                          </Link>
                          <div>
                            {!minimize && page.options && (
                              <ChevronDown
                                size={18}
                                color="white"
                                className={`dgh ${page.label}`}
                                style={{ marginRight: '10px' }}
                                onClick={() =>
                                  submenufunction(page.label, page.options)
                                }
                              />
                            )}
                          </div>
                        </div>

                        {page.options && (
                          <div className={`fill`} id={page.label}>
                            <div className="sub-menu-wrapper">
                              {page.options.map(e => {
                                return (
                                  <Link
                                    to={e.path}
                                    key={e.label}
                                    className="linkFree sublink"
                                  >
                                    {e.label}
                                  </Link>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }
              }
            }
          })}
        </div>
        <Height val={minimize ? 9.8 : 14.5} />
        <div className="settings">
          {!minimize ? (
            <CustomText
              type="h3"
              size={minimize ? 11.5 : 13.5}
              color={colorScheme.sidebarSectionTitleColor}
            >
              <span style={minimize ? { marginLeft: '-5.6px' } : {}}>
                {sudoUserType != userTypes.Admin ? 'NOTIFICATIONS' : 'SETTINGS'}
              </span>
            </CustomText>
          ) : (
            <PullUp val={9.5} />
          )}
          <Height val={20} />
          {appPages.map((page, i) => {
            if (page.sidebar) {
              if (page.bottom) {
                if (checkPermission(page.permission)) {
                  return (
                    <div
                      style={{ position: 'relative' }}
                      onMouseEnter={() =>
                        submenuenter(page.label, page.options)
                      }
                      key={i}
                    >
                      <Link
                        className="linkFree"
                        to={!page.multiple && page.path}
                      >
                        <div className="option">
                          {page.icon}
                          {!minimize && <span>{page.label}</span>}
                          {page.label == 'Message' && (
                            <span className="messagesNum">10</span>
                          )}
                        </div>
                      </Link>
                      {page.options && (
                        <div className="fill" id={page.label}>
                          <div className="arrow-left"></div>
                          <div
                            className="sub-menu-wrapper"
                            onMouseLeave={() =>
                              submenuleave(page.label, page.options)
                            }
                          >
                            {page.options.map(e => {
                              return (
                                <Link
                                  to={e.path}
                                  key={e.label}
                                  className="linkFree sublink"
                                >
                                  {e.label}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }
              }
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
