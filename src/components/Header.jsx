import PropTypes from "prop-types";
import './header.css'
const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.propTypes = { title: PropTypes.string.isRequired };

export default Header;
