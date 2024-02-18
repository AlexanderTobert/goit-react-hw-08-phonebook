import { useAuth } from '../../hooks/useAuth';
import {
  StyledHeaderNav,
  StyledHeaderConteiner,
} from './NavigationStyled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledHeaderConteiner>
      <StyledHeaderNav to="/">PHONEBOOK</StyledHeaderNav>

      {isLoggedIn && (
        <StyledHeaderNav to="/contacts">
          CONTACTS
        </StyledHeaderNav>
      )}
    </StyledHeaderConteiner>
  );
};
