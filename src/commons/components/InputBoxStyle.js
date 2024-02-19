import styled, { css } from 'styled-components';
import { fontSize } from '../../styles/size';
const { medium } = fontSize;

const commonStyled = css`
  border: 1px solid #d5d5d5;
  border-radius: 5px;
  font-size: ${medium}rem;
  width: 100%;
`;

/**
 * 한줄 텍스트
 *
 */
export const InputText = styled.input`
  ${commonStyled}

  height: 45px;
  padding: 0 10px;

  & + & {
    margin-top: 5px;
  }
`;

export const Textarea = styled.textarea`
  ${commonStyled}
  paddng: 10px;
  min-heignt: 150px;
  resize: none;
`;
