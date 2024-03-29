import { styled } from 'styled-components';

export const StyleContainer = styled.div`
  min-height: calc(100vh);
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.background};
  color: white;
`;

export const StyleTitle = styled.h1`
  font-weight: 500;
  font-size: ${props => props.theme.fontSize.fs48};
  text-align: 'center';
`;

export const StyleContactsPageContainer = styled.div`
  min-height: calc(100vh);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${p => p.theme.spacing(8)};
  background: ${props => props.theme.colors.background};
  color: white;
`;

export const StyleContactsPage = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
`;
