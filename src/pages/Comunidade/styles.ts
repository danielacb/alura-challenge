import styled, { css } from 'styled-components';

type StylesProps = {
  columnWidth: number;
};

export const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
`;

export const Content = styled.section<StylesProps>(
  ({ columnWidth }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    & > div {
      display: inline-block;
    }

    @media (min-width: 698px) and (max-width: 1199px) {
      max-width: 47rem;
      margin: 0 auto;
    }

    @media (min-width: 1200px) {
      max-width: ${`calc(100% - ${columnWidth}px)`};
      & > div {
        max-width: calc(50% - 0.75rem);
      }
    }
  `
);

export const Column = styled.aside<StylesProps>(
  ({ columnWidth }) => css`
    @media (min-width: 1200px) {
      display: block;
      max-width: ${columnWidth + 'px'};
      width: 100%;
    }
    @media (max-width: 1199px) {
      &:first-of-type {
        display: none;
      }
    }
  `
);

export const ColumnResizer = styled.div`
  width: 100%;
  height: 0;
  display: flex;

  div {
    max-width: 47rem;
    width: 100%;
    &:first-child,
    &:last-child {
      width: 33.333%;
    }
  }
`;
