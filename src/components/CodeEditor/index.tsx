import React, { useState } from 'react';

import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import highlightTheme from '../../styles/themes/highlightTheme';

import * as S from './styles';

type CodeEditorProps = {
  bgColor?: string;
  language: string;
  highlight: boolean;
  code: string;
  setCode: React.Dispatch<React.SetStateAction<string>>;
};

const CodeEditor: React.FC<CodeEditorProps> = ({ bgColor, language, highlight, code, setCode }) => {
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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const textarea = e.currentTarget;

      setCode(
        code.substring(0, textarea.selectionStart) + '\t' + code.substring(textarea.selectionEnd)
      );
      setTimeout(() => {
        textarea.selectionStart = textarea.selectionEnd = textarea.selectionStart + 1;
      }, 1);
    }
  };

  return (
    <S.Container color={bgColor}>
      <S.CodeBlock>
        <pre>
          <S.CodeInput
            value={code}
            contentEditable={highlight ? false : true}
            suppressContentEditableWarning={true}
            spellCheck="false"
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCode(e.target.value)}
            onClick={() => placeholder !== '' && setPlaceholder('')}
            onKeyDown={(e: React.KeyboardEvent<HTMLTextAreaElement>) => handleKeyDown(e)}
          >
            {code}
          </S.CodeInput>
        </pre>
        <SyntaxHighlighter
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCode(e.target.value)}
          onClick={() => placeholder !== '' && setPlaceholder('')}
          language={highlight && language ? language : 'text'}
          style={highlightTheme}
          wrapLongLines
        >
          {code === '' && placeholder !== '' ? placeholder : code}
        </SyntaxHighlighter>
      </S.CodeBlock>
      <S.DotsContainer>
        <S.Dots />
      </S.DotsContainer>
    </S.Container>
  );
};

export default CodeEditor;
