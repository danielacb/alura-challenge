import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { api } from 'services/api';
import Menu from 'components/Menu';
import CodeCard from 'components/CodeCard';

import * as S from './styles';

type ProjectProps = {
  id: number;
  title: string;
  description: string;
  language: string;
  color: string;
  code: string;
};

const Comunidade: React.FC = () => {
  const [columnWidth, setColumnWidth] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [projects, setProjects] = useState<ProjectProps[]>([]);
  const columnRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    if (columnRef.current) setColumnWidth(columnRef.current.offsetWidth);
  }, [windowWidth]);

  const getProjects = async () => {
    const { data } = await api.get('projects');
    setProjects(data);
  };

  useEffect(() => {
    getProjects();
  }, []);

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
              to={`/comunidade/${project.id}/${project.title.toLowerCase().replace(/\s/g, '-')}`}
            >
              <CodeCard project={project} />
            </Link>
          ))}
        </S.Content>
      </S.Container>
    </>
  );
};

export default Comunidade;
