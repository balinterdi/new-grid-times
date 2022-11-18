import React from 'react';
import styled from 'styled-components/macro';
import { COLORS, QUERIES } from '../../constants';

const OpinionStory = ({ id, title, author, avatar }) => {
  return (
    <Link href={`/story/${id}`}>
      <Wrapper>
        <Avatar alt="" src={avatar} />
        <div>
          <AuthorName>{author}</AuthorName>
          <ArticleTitle>{title}</ArticleTitle>
        </div>
      </Wrapper>
    </Link>
  );
};

const Link = styled.a`
  @media(${QUERIES.tabletOnly}) {
    width: 25%;
    padding: 0 1rem;
  }
  & + a {
    border-top: 1px solid ${COLORS.gray['300']};
    @media(${QUERIES.tabletOnly}) {
      border: none;
    }
  }

`;

const Wrapper = styled.article`
  color: var(--color-gray-900);
  padding: 1rem 0;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  column-gap: 0.5rem;

  @media(${QUERIES.tabletOnly}) {
    flex-direction: column;
    align-items: flex-start;
    column-gap: 1rem;
  }
`;

const Avatar = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  object-fit: cover;
`;

const AuthorName = styled.p`
  font-size: 1.125rem;
  font-weight: var(--font-weight-medium);
  color: var(--color-gray-700);
  margin-bottom: 4px;
`;

const ArticleTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: var(--font-weight-bold);
  line-height: 1.3;
`;

export default OpinionStory;
