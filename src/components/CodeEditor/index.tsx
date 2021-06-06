import React, { useState, useRef, useLayoutEffect } from 'react';
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

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'inherit';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = `${scrollHeight}px`;
    }
  }, [code]);

  const updateValue = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (placeholder !== '') setPlaceholder('');
    setCode(e.target.value);
  };

  return (
    <S.Container color={bgColor}>
      <S.CodeInput
        value={code}
        name="codeEditor"
        ref={textareaRef}
        onChange={updateValue}
        placeholder={placeholder}
      />
      <S.DotsContainer>
        <S.Dots />
      </S.DotsContainer>
    </S.Container>
  );
};

export default CodeEditor;
