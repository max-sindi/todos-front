import styled from 'styled-components'

const Button = styled.button`
  cursor: pointer;
`;

export const DeleteButton = styled(Button)`
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

export const NotifWrapper = styled.div`
  padding: 15px 20px;
  position: relative;
`;

export const NotifSuccess = styled(NotifWrapper)`
  color: green;
  background-color: rgba(200, 247, 197, 0.1);
`;

export const NotifFaulire = styled(NotifWrapper)`
  color: red;
  background-color: rgba(210, 77, 87, 0.1);
`;

export const StyledNotifsWrapper = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  padding: 10px;
`;
