import styled, { css } from 'styled-components';

export const Input = styled.input(
  ({ theme }) => css`
    background-color: ${theme.colors.white + '29'};
    border-radius: 0.5rem;
    border: none;
    color: ${theme.colors.white + 'A3'};
    padding: 1rem 0.875rem;
    transition: 0.4s;
    width: 100%;

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;

    &,
    &:focus {
      outline: 2px;
      outline-color: transparent;
    }

    &::placeholder {
      color: ${theme.colors.white + 'A3'};
    }

    &:hover {
      background-color: ${theme.colors.white + '3D'};
    }
  `
);
