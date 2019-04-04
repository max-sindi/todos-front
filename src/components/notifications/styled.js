import styled, { css, keyframes } from 'styled-components'

const fadeAnimation = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`;
const riseAnimation = keyframes`
  from {
    width: 0;
    height: 0;
  }

  to {
    width: 100%;
    height: 100%;
  }
`;

const fadeAnimationDeclaration = ({ duration }) => css`${fadeAnimation} ${duration / 20}ms`;
const riseAnimationDeclaration = ({ duration }) => css`${riseAnimation} ${duration}ms`;
const fadeAnimationDelayDeclaration = ({ duration }) => css`${duration - duration / 20}ms`;

export const LifeDurationWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(219, 10, 91, 0.7);
  border-radius: 50%;
`;

export const LifeDurationInner = styled.div`
  animation: ${riseAnimationDeclaration};
  animation-fill-mode: forwards;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(30, 130, 76, 0.7);
  border-radius: 50%;
`;


export const NotifWrapper = styled.div`
  padding: 15px 20px;
  position: relative;
  animation: ${fadeAnimationDeclaration};
  animation-delay: ${fadeAnimationDelayDeclaration};
  animation-fill-mode: forwards;
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

export const LifeDurationDisplayLayout = styled.div`
  position: absolute;
  top: 20px;
  right: 0px;
  width: 16px;
  height: 16px;
`
