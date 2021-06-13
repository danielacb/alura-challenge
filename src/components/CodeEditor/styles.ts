import styled, { css } from 'styled-components';

type StylesProps = {
  color?: string;
};

export const Container = styled.div<StylesProps>(
  ({ theme, color }) => css`
    background-color: ${color ? color : theme.colors.defaultCodeBgColor};
    border-radius: 0.5rem;
    padding: 2rem;
    position: relative;
    width: 100%;

    code,
    textarea {
      font-family: 'Roboto Mono', monospace;
      font-size: 0.875rem;
      line-height: 1.125rem;
      tab-size: 4;
      -moz-tab-size: 4;
    }
  `
);

export const CodeBlock = styled.div(
  ({ theme }) => css`
    background-color: ${theme.colors.darkGray};
    border-radius: 0.5rem;
    box-shadow: ${theme.shadow};
    min-height: 7.5rem;
    padding: 3.25rem 1rem 1rem;
    position: relative;
  `
);

export const CodeInput = styled.textarea(
  ({ theme }) => css`
    background: transparent;
    border: none;
    color: ${theme.colors.white};
    display: block;
    height: calc(100% - 3.25rem);
    position: absolute;
    resize: none;
    width: calc(100% - 2rem);
    -webkit-text-fill-color: transparent;

    &,
    &:focus {
      outline: 2px;
      outline-color: transparent;
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
