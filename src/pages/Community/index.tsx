import { useState, useRef, useLayoutEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';

import Menu from 'components/Menu';
import CodeCard from 'components/CodeCard';

import * as S from './styles';

export type ProjectProps = {
  id: string | number;
  title: string;
  description: string;
  language: string;
  code: string;
  color: {
    hex: string;
  };
};

const Community: React.FC = () => {
  const [columnWidth, setColumnWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const columnRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    if (columnRef.current) setColumnWidth(columnRef.current.offsetWidth);
  }, [windowWidth]);

  const { data } = useQuery(gql`
    query Projects {
      projects {
        id
        title
        description
        color {
          hex
        }
        language
        code
      }
    }
  `);

  const projects = (data?.projects as ProjectProps[]) || [];

  return (
    <>
      <S.ColumnResizer>
        <div ref={columnRef} />
        <div />
        <div />
      </S.ColumnResizer>

      <S.Container>
        <S.Column columnWidth={columnWidth}>
          <Menu />
        </S.Column>
        <S.Content columnWidth={columnWidth}>
          {projects.map((project: ProjectProps) => (
            <Link
              key={project.id}
              to={`/community/${project.id}/${project.title.toLowerCase().replace(/\s/g, '-')}`}
            >
              <CodeCard project={project} />
            </Link>
          ))}
        </S.Content>
      </S.Container>
    </>
  );
};

export default Community;
