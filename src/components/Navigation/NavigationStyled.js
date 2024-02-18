import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledHeaderConteiner = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const StyledHeaderNav = styled(NavLink)`
  font-size: ${p => p.theme.fontSize.fs28};
  color: ${p => p.theme.colors.colorTextHeader};
  font-weight: 900;
`;
