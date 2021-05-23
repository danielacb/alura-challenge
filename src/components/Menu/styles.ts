import styled, { css } from 'styled-components';

export const Container = styled.ul`
  width: 100%;
  list-style: none;
`;

export const Icon = styled.span(
  ({ theme }) => css`
    border-radius: 1rem;
    width: 3rem;
    height: 3rem;
    transition: 0.4s;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1rem;

    background-color: ${theme.colors.blue300 + '16'};
  `
);

export const MenuItem = styled.li(
  ({ theme }) => css`
    margin-bottom: 1rem;

    a {
      font-size: 16px;
      line-height: 24px;
      color: ${theme.colors.white + '56'};
      text-decoration: none;
      display: flex;
      align-items: center;
      transition: 0.4s;

      &:hover {
        color: ${theme.colors.white + '72'};

        span {
          background-color: ${theme.colors.blue300 + '64'};
        }
      }

      &.active {
        color: ${theme.colors.white};

        span {
          background-color: ${theme.colors.blue300};
        }
      }
    }
  `
);
