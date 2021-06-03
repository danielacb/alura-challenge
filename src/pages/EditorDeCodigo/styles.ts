import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.section`
  max-width: 47rem;
  width: 100%;
`;

export const Column = styled.aside`
  @media (min-width: 1200px) {
    display: block;
    width: 33.333%;
  }
  @media (max-width: 1199px) {
    &:first-of-type {
      display: none;
    }
  }
`;
