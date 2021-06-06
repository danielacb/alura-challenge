import styled, { css } from 'styled-components';

export const ColorInput = styled.input(
  ({ theme }) => css`
    background-color: ${theme.colors.darkBlue};
    border-radius: 0.5rem;
    border: 1px solid ${theme.colors.white};
    height: 3.5rem;
    padding: 0;
    width: 100%;

    -webkit-appearance: none;

    &::-webkit-color-swatch-wrapper {
      background-color: ${theme.colors.darkBlue};
      border-radius: 0.5rem;
      border: none;
      padding: 0.5rem 0.5rem 0;
    }
    &::-webkit-color-swatch {
      border-radius: 0.25rem;
      border: none;
      height: 2.375rem;
    }

    &::-moz-color-swatch {
      border-radius: 0.25rem;
      height: 2.375rem;
      width: calc(100% - 1rem);
    }
  `
);
