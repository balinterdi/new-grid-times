import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <button>
              <User size={24} />
            </button>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <LeftPanel>
          <button>
            <Search size={24} />
          </button>
          <button>
            <Menu size={24} />
          </button>
        </LeftPanel>
        <Logo />
        <RightPanel>
          <Button>Subscribe</Button>
          <a href="#">Already a subscriber?</a>
        </RightPanel>
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media(${QUERIES.tabletAndUp}) {
    display: none;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media(${QUERIES.desktopAndUp}) {
    justify-content: space-between;
  }
`;

const LeftPanel = styled.div`
  display: none;
  gap: 0 1rem;

  @media(${QUERIES.desktopAndUp}) {
    display: flex;
  }
`;

const RightPanel = styled.div`
  display: none;
  flex-direction: column;
  gap: 0.5rem 0;
  align-items: center;

  @media(${QUERIES.desktopAndUp}) {
    display: flex;
  }

  & > a {
    font-style: italic;
    text-decoration: underline;
  }
`;

export default Header;
