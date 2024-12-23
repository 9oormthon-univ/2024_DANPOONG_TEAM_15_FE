import styled from 'styled-components';

export const Page = styled.div`
  width: 100vw;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Center = styled.div`
  display: flex;
  justify-content: center;
`;

export const PageSpace = styled.div`
  width: 100vw;
  min-height: 100dvh;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 8px 10px -6px rgba(0, 0, 0, 0.3);
  @media (hover: hover) and (pointer: fine) {
    width: 370px;
  }
`;