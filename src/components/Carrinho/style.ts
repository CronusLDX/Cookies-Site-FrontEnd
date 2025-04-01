import { Button, Theme } from '@radix-ui/themes';
import styled from 'styled-components';

export const ThemeCart = styled(Theme)`
  width: 100%;
  height: 100%;
  justify-content: end;
  display: flex;
  align-items: center;
  margin: auto;
`;

export const CartButton = styled(Button)`
  background-color: rgb(211, 44, 44);
  margin: 10px 20px 10px 10px;
  border-radius: 100%;
  height: 55px;
  width: 55px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;

  &:hover {
    cursor: pointer;
    background-color: rgb(255, 0, 0);
    transform: scale(105%);
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    bottom: 10px;
    right: 10px;
    height: 50px;
    width: 50px;

    &:hover {
      background-color: rgb(211, 44, 44);
      transform: scale(100%);
      transition: all 0.1s ease-in-out;
    }
  }

  @media screen and (max-width: 480px) {
    bottom: 10px;
    right: 10px;
    height: 45px;
    width: 45px;

    &:hover {
      background-color: rgb(211, 44, 44);
      transform: scale(100%);
      transition: all 0.1s ease-in-out;
    }
  }
`;
