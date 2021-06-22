import styled from 'styled-components';

export const Container = styled.div`
  button {
    margin-top: 2rem;
  }
  form {
    h6,
    input,
    & > div {
      margin-bottom: 1rem;
    }

    textarea {
      margin-bottom: 2.5rem;
    }

    button {
      margin-top: 1rem;
    }
  }

  @media (min-width: 1200px) {
    flex: 1;
    display: flex;
    justify-content: space-between;

    form {
      h6,
      input,
      button,
      textarea,
      span,
      & > div {
        margin-left: 2.5rem;
        width: calc(100% - 2.5rem);
      }
    }
  }
`;

export const Content = styled.section`
  width: 100%;
  margin-bottom: 2rem;

  @media (min-width: 1200px) {
    max-width: 47rem;
  }
`;

export const Column = styled.aside`
  width: 100%;
  @media (min-width: 1200px) {
    display: block;
    width: 33.333%;
  }
  @media (max-width: 1199px) {
    &:first-of-type {
      display: none;
    }
  }
`;

export const Message = styled.span`
  display: block;
  text-align: center;
  margin-top: 2rem;
`;
