import styled, { css } from 'styled-components';

type StylesProps = {
  color: string;
};

export const Container = styled.div(
  ({ theme }) => css`
    background-color: ${theme.colors.black + '29'};
    border-radius: 8px;
    width: 100%;
    margin-bottom: 1.5rem;
    position: relative;
  `
);

export const CodeContainer = styled.pre<StylesProps>(
  ({ color }) => css`
    background-color: ${color};
    border-radius: 0.5rem;
    padding: 1.5rem;
    position: relative;
  `
);

export const CodeBlock = styled.code(
  ({ theme }) => css`
    background-color: ${theme.colors.darkGray};
    border-radius: 0.5rem;
    box-shadow: ${theme.shadow};
    display: inline-block;
    font-family: 'Roboto Mono', monospace;
    font-size: 0.875rem;
    line-height: 1.125rem;
    min-height: 7.5rem;
    padding: 3.25rem 1rem 1rem;
    tab-size: 4;
    white-space: pre-wrap;
    width: 100%;
    -moz-tab-size: 4;
  `
);

export const CardContent = styled.div`
  padding: 1.5rem 1.5rem 6rem;

  h2 {
    margin-bottom: 0.5rem;
  }
`;

export const CardActions = styled.div`
  display: flex;
  margin-top: 1.5rem;
  position: absolute;
  bottom: 1.5rem;
  width: calc(100% - 3rem);

  span {
    align-items: center;
    display: flex;

    svg {
      margin-right: 0.625rem;
    }

    & + span {
      margin-left: 1.125rem;
    }
  }

  div {
    margin-left: auto;
  }
`;

export const DotsContainer = styled.div`
  background-color: ${(props) => props.theme.colors.darkGray};
  border-top-left-radius: 0.5rem;
  height: 2.75rem;
  position: absolute;
  top: 2rem;
  width: calc(100% - 5rem);
`;

export const Dots = styled.div`
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
