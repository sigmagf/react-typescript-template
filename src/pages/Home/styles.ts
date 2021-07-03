import styled from 'styled-components'

export const HomePageContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: grid;
  grid-template-areas:
    'G I F T'
    'D D D D';
  gap: 20px;
  grid-template-columns: 120px 120px 120px 120px;
  grid-template-rows: 120px 1fr;

  > .card {
    svg {
      transition: all 250ms ease;
    }

    :hover {
      transform: scale(1.1);
    }
  }

  .card.card.github {
    grid-area: G;

    :hover {
      background: ${({ theme }) => theme.text};

      svg {
        color: ${({ theme }) => theme.primary.main};
      }
    }
  }

  .card.instagram {
    grid-area: I;

    svg {
      color: #c13584;
    }

    :hover {
      background: linear-gradient(45deg, #405de6, #5b51d8, #833ab4, #c13584, #e1306c, #fd1d1d);

      svg {
        color: ${({ theme }) => theme.primary.main};
      }
    }
  }

  .card.facebook {
    grid-area: F;

    svg {
      color: #4267b2;
    }

    :hover {
      background: #4267b2;

      svg {
        color: ${({ theme }) => theme.primary.main};
      }
    }
  }

  .card.twitter {
    grid-area: T;

    svg {
      color: #1da1f2;
    }

    :hover {
      background: #1da1f2;

      svg {
        color: ${({ theme }) => theme.primary.main};
      }
    }
  }

  .details {
    grid-area: D;
    text-align: center;
  }
`
