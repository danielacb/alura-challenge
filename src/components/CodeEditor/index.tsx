import React, { useState } from 'react';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import codeEditorTheme from './theme';

import * as S from './styles';

type CodeEditorProps = {
  bgColor?: string;
  language: string;
  highlight: boolean;
};

const CodeEditor: React.FC<CodeEditorProps> = ({ bgColor, language, highlight }) => {
  const [code, setCode] = useState('');
  const [placeholder, setPlaceholder] =
    useState(`const pluckDeep = key => obj => key.split('.').reduce((accum, key) => accum[key], obj)

  const compose = (...fns) => res => fns.reduce((accum, next) => next(accum), res)

  const unfold = (f, seed) => {
    const go = (f, seed, acc) => {
      const res = f(seed)
      return res ? go(f, res[1], acc.concat([res[0]])) : acc
    }
    return go(f, seed, [])
  }`);

  return (
    <S.Container color={bgColor}>
      <SyntaxHighlighter
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCode(e.target.value)}
        onClick={() => placeholder !== '' && !highlight && setPlaceholder('')}
        language={highlight ? language : 'text'}
        style={codeEditorTheme}
        contentEditable={highlight ? false : true}
        suppressContentEditableWarning={true}
        wrapLongLines
      >
        {placeholder !== '' ? placeholder : code}
      </SyntaxHighlighter>
      <S.DotsContainer>
        <S.Dots />
      </S.DotsContainer>
    </S.Container>
  );
};

export default CodeEditor;
