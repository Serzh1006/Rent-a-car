import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './navigation.module.css';

const StyledLinks = styled(NavLink)`
  color: rgba(0, 0, 0, 0.664);
  &.active {
    color: tomato;
  }
`;

const Navigation = () => {
  return (
    <>
      <StyledLinks className={css.linkPage} to="/">
        Home
      </StyledLinks>
      <StyledLinks className={css.linkPage} to="/catalog">
        Catalog
      </StyledLinks>
      <StyledLinks className={css.linkPage} to="/favorite">
        Favorites
      </StyledLinks>
    </>
  );
};

export default Navigation;
