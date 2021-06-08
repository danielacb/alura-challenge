import styled, { css } from 'styled-components';

type AuthorProps = {
  size: 'medium' | 'small';
};

export const Container = styled.div<AuthorProps>(
  ({ theme, size }) => css`
    align-items: center;
    background-color: transparent;
    border-radius: 0.5rem;
    display: flex;
    padding: ${size === 'medium' ? '0.75rem' : '0.5rem'};
    transition: 0.4s;

    &:hover {
      background-color: ${theme.colors.white + '14'};
    }
  `
);

export const ProfilePicture = styled.div`
  border-radius: 50%;
  color: white;
  font-size: 1rem;
  height: 2rem;
  line-height: 1.5rem;
  margin-right: 0.5rem;
  overflow: hidden;
  width: 2rem;

  img {
    object-fit: scale-down;
    object-position: center;
    width: 100%;
  }
`;
