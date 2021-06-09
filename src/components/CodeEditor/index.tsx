import React, { useState } from 'react';
import * as S from './styles';

type CodeEditorProps = {
  bgColor?: string;
};

const CodeEditor: React.FC<CodeEditorProps> = ({ bgColor }) => {
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
      <S.CodeInput
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCode(e.target.value)}
        onClick={() => placeholder !== '' && setPlaceholder('')}
        placeholder={placeholder}
        contentEditable="true"
        suppressContentEditableWarning={true}
      >
        {placeholder !== '' ? placeholder : code}
      </S.CodeInput>
      <S.DotsContainer>
        <S.Dots />
      </S.DotsContainer>
    </S.Container>
  );
};

export default CodeEditor;
