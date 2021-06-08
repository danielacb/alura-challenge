import styled, { css } from 'styled-components';

type ButtonProps = {
  variant: 'primary' | 'secondary';
};

export const Button = styled.button<ButtonProps>(
  ({ theme, variant }) => css`
    border-radius: 0.5rem;
    border: none;
    border: transparent 0.25rem solid;
    font-size: 1rem;
    line-height: 0.875rem;
    padding: 1rem;
    transition: 0.4s;
    width: 100%;

    &,
    &:focus {
      outline: 2px;
      outline-color: transparent;
    }

    ${variant === 'primary' &&
    `
      background-color: ${theme.colors.blue300};
      color: ${theme.colors.darkBlue};

      &:hover {
        background-color: ${theme.colors.blue200};

      }

      &:focus {
        background-color: ${theme.colors.blue100};

      }

      &:active {
        background-color: ${theme.colors.blue200};
        border-color: ${theme.colors.blue300 + 'B8'};
      }
    `}

    ${variant === 'secondary' &&
    `
      background-color: ${theme.colors.blue300 + '14'};
      color: ${theme.colors.white};

      &:hover {
        background-color: ${theme.colors.blue300 + '29'};
      }

      &:focus {
        background-color: ${theme.colors.blue300 + '3D'};
      }

      &:active {
        background-color: ${theme.colors.blue300 + '29'};
        border-color: ${theme.colors.blue300 + '3D'};
      }
    `}
  `
);
