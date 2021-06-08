import styled, { css } from 'styled-components';

export const Container = styled.header`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2.5rem;
`;

export const Search = styled.div(
  ({ theme }) => css`
    max-width: 47rem;
    transition: 0.3s;
    width: 100%;

    display: flex;
    align-items: center;

    svg {
      border-radius: 1rem;
      cursor: pointer;
      height: 3rem;
      margin-left: 0.5rem;
      padding: 0.75rem;
      width: 3rem;

      &:hover {
        background-color: ${theme.colors.blue300 + '14'};
      }

      &:focus {
        background-color: ${theme.colors.blue300 + '29'};
      }
    }

    &.open {
      opacity: 1;
      pointer-events: auto;
      top: 0;
    }

    @media (max-width: 697px) {
      background-color: ${theme.colors.darkBlue};
      left: 0;
      opacity: 0;
      padding: 0.7rem 1rem;
      pointer-events: none;
      position: absolute;
      top: -1rem;
      visibility: none;

      max-width: calc(100% - 4rem);
    }

    @media (min-width: 698px) {
      svg {
        display: none;
      }
    }
  `
);

export const SearchToggle = styled.button(
  ({ theme }) => css`
    background-color: transparent;
    border-radius: 1rem;
    border: 0;
    height: 3rem;
    line-height: 0;
    margin-left: auto;
    transition: 0.3s;
    width: 3rem;

    svg {
      cursor: pointer;
      fill: ${theme.colors.white};
    }

    &:hover {
      background-color: ${theme.colors.blue300 + '14'};
    }

    &:focus {
      background-color: ${theme.colors.blue300 + '29'};
    }

    svg {
      height: 3rem;
      padding: 0.75rem;
      width: 3rem;
    }

    @media (min-width: 698px) {
      display: none;
    }
  `
);

export const Column = styled.div`
  align-items: center;
  display: flex;

  @media (min-width: 1200px) {
    width: 33.333%;
  }

  &:last-of-type {
    justify-content: flex-end;

    & > div {
      @media (max-width: 1199px) {
        display: none;
      }
    }
  }
`;

export const Logo = styled.a`
  background-image: url('/alura-dev.svg');
  background-repeat: no-repeat;
  background-size: cover;
  cursor: pointer;
  display: inline-block;
  height: 34.05px;
  margin-right: 1rem;
  width: 145px;
`;

export const MenuToggle = styled.button(
  ({ theme }) => css`
    background-color: transparent;
    border-radius: 1rem;
    border: 0;
    height: 3rem;
    line-height: 0;
    margin-left: 1rem;
    transition: 0.3s;
    width: 3rem;

    svg {
      fill: ${theme.colors.white};
    }

    &:hover {
      background-color: ${theme.colors.blue300 + '14'};
    }

    &:focus {
      background-color: ${theme.colors.blue300 + '29'};
    }

    @media (min-width: 1200px) {
      display: none;
    }
  `
);

export const Drawer = styled.nav(
  ({ theme }) => css`
    background-color: ${theme.colors.darkBlue};
    border-radius: 0.5rem;
    height: calc(100vh - 14rem);
    overflow: hidden;
    padding: 1.5rem;
    width: 16rem;
    z-index: 999;

    position: absolute;
    right: 2rem;
    top: 5rem;

    opacity: 0;
    pointer-events: none;
    transition: 0.3s;
    visibility: none;

    &.open {
      opacity: 1;
      pointer-events: auto;
      top: 7rem;
      visibility: visible;
    }

    &::before {
      background-color: ${theme.colors.white + '29'};
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: -1;
    }

    @media (max-width: 697px) {
      right: 1rem;
      &.open {
        top: 5rem;
      }
    }
  `
);

export const Hr = styled.hr(
  ({ theme }) => css`
    opacity: 0.08;
    border-top: none;
    border-bottom: 1px solid ${theme.colors.white};
    margin: 1.5rem 0;
  `
);
