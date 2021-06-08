import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    position: relative;
    height: 3.5rem;
    width: 100%;

    &::before {
      border-bottom: 1px solid ${theme.colors.white};
      border-right: 1px solid ${theme.colors.white};
      content: '';
      height: 6px;
      position: absolute;
      right: 0.875rem;
      top: 50%;
      transform: translateY(-50%) rotate(45deg);
      width: 6px;
    }
  `
);

export const Select = styled.select(
  ({ theme }) => css`
    background-color: ${theme.colors.white + '29'};
    border-radius: 0.5rem;
    border: none;
    color: ${theme.colors.white + 'A3'};
    height: 3.5rem;
    padding: 1rem 0.875rem;
    transition: 0.4s;
    width: 100%;

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;

    -moz-appearance: none;
    -webkit-appearance: none;

    &,
    &:focus {
      outline: 2px;
      outline-color: transparent;
    }

    & * {
      background-color: ${theme.colors.darkBlue};

      &:hover {
        background-color: ${theme.colors.blue100};
      }
    }

    &:hover {
      background-color: ${theme.colors.white + '3D'};
    }
  `
);
