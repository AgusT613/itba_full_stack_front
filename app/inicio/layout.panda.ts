import { styled } from '@/styled-system/jsx'

export const Section = styled.section`
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 1rem;
  height: 10rem;
  justify-content: space-around;
`

export const H2 = styled.h2`
  font-size: 1.5rem;
`

export const Button = styled.button`
  font-size: 1.15rem;
  cursor: pointer;
  background-color: #d07bd0;
  color: #000;
  padding: 0.5rem;
  border-radius: 1rem;

  &:hover {
    background-color: #d07bd0aa;
  }
`
