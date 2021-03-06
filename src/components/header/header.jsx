import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import {connect} from 'react-redux';
import {AuthorizationStatus, AppRoute} from "../../utils/const";

const Header = ({authorizationStatus, email}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              to={AppRoute.ROOT}
              className="header__logo-link" href="#">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  to={authorizationStatus === AuthorizationStatus.NO_AUTH ? AppRoute.LOGIN : AppRoute.FAVORITES}
                  className="header__nav-link header__nav-link--profile" href="#">
                  <div
                    className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span
                    className="header__login">
                    {email ? email : `Sign in`}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authorizationStatus: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

const mapStateToProps = ({USER}) => ({
  authorizationStatus: USER.authorizationStatus,
  email: USER.email
});

export {Header};
export default connect(mapStateToProps)(Header);
