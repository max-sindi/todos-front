
import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
`;

export const DeleteButtonStyled = styled(Button)`
  position: absolute;
  right: 0;
  top: 0;
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  line-height: 0.9;
`;

export const Relative = styled.div`
  position: relative;
`