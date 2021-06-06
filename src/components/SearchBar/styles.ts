import styled, { css } from 'styled-components';

export const Input = styled.input(
  ({ theme }) => css`
    background-color: ${theme.colors.white + '16'};
    border-radius: 0.5rem;
    border: 0;
    color: ${theme.colors.white + '64'};
    font-size: 1rem;
    line-height: 1.5rem;
    padding: 1rem 0.875rem;
    transition: 0.4s;
    width: 100%;

    &,
    &:focus {
      outline: 2px;
      outline-color: transparent;
    }

    &::placeholder {
      color: ${theme.colors.white + '64'};
      font-size: 1rem;
      line-height: 1.5rem;
    }

    &:hover,
    &:focus {
      background-color: ${theme.colors.white + '24'};
    }
  `
);
