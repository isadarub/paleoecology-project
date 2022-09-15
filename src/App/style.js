import styled from 'styled-components';

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;

  &::before {
    content: '';
    width: 100vw;
    height: 100vh;
    z-index: -1;
    opacity: 0.5;
    position: fixed;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.3)
      url('https://images.pexels.com/photos/8892/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
    background-repeat: no-repeat;
    background-size: cover;
  }
`;
