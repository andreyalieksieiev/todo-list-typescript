import styled from 'styled-components';

export const Mod = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0,0,0,0.6);
  color: white;
  overflow: hidden;
`;

export const Content = styled.div`
  border-radius: 2px;
  margin: 30px auto;
  max-width: 800px;
  width: 100%;
  max-height: 580px;
  height: 100%;
  background: white;
`;

export const ContentBox = styled.div`
  padding-top: 10px;
  max-width: 450px;
  max-height: 578px;
  margin: 30px auto;
`;
