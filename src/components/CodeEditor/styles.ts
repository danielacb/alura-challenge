import styled, { css } from 'styled-components';

type StylesProps = {
  bgcolor?: string;
};

export const Container = styled.div<StylesProps>(
  ({ theme, bgcolor }) => css`
    background-color: ${bgcolor ? bgcolor : theme.colors.defaultCodeBgColor};
    border-radius: 0.5rem;
    padding: 2rem;
    position: relative;
    width: 100%;
  `
);

export const CodeInput = styled.textarea(
  ({ theme }) => css`
    background-color: ${theme.colors.darkGray};
    border-radius: 0.5rem;
    border: none;
    box-shadow: ${theme.shadow};
    color: ${theme.colors.white};
    max-height: 18.875rem;
    overflow: visible;
    padding: 3.25rem 1rem 1rem;
    resize: none;
    width: 100%;

    &::placeholder {
      color: ${theme.colors.white};
    }

    &,
    &:focus {
      outline: 2px;
      outline-color: transparent;
    }

    font-family: 'Roboto Mono', monospace;
    font-size: 0.875rem;
    line-height: 1.125rem;

    ::-webkit-scrollbar {
      width: 0.625rem;
    }
    ::-webkit-scrollbar-track {
      background-color: ${theme.colors.darkGray};
      border-radius: 0.5rem;
    }
    ::-webkit-scrollbar-thumb {
      border-radius: 0.5rem;
      background-color: ${theme.colors.white + '24'};
    }
    ::-webkit-scrollbar-thumb:hover {
      background-color: ${theme.colors.white + '42'};
    }
  `
);

export const DotsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.darkGray};
  border-top-left-radius: 0.5rem;
  height: 2.75rem;
  position: absolute;
  top: 2rem;
  width: calc(100% - 5rem);
`;

export const Dots = styled.div<StylesProps>`
  &,
  &::before,
  &::after {
    border-radius: 50%;
    height: 0.75rem;
    position: absolute;
    width: 0.75rem;
  }

  background-color: #ffbd2e;
  top: 1rem;
  left: 2.25rem;

  &::before {
    background-color: #ff5f56;
    content: '';
    left: -1.25rem;
  }

  &::after {
    background-color: #27c93f;
    content: '';
    left: 1.25rem;
  }
`;
