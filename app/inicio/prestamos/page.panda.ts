import { styled } from '@/styled-system/jsx'

export const Section = styled.section`
  background-color: rgba(0, 0, 0, 0.4);
  margin: 0.5rem 0;
  padding: 1rem;
  border-radius: 1rem;
`

export const H2 = styled.h2`
  font-size: 2rem;
  font-weight: 600;
`

export const H3 = styled.h3`
  font-size: 1.25rem;
  text-align: center;
`

export const Span = styled.span`
  font-size: 0.75rem;
  opacity: 0.8;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 2rem 0;
  gap: 1rem;
`

export const Card = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  padding: 1.5rem;
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Strong = styled.strong`
  text-align: center;
`

export const DeleteButton = styled.button`
  background-color: var(--colors-red-300);
  cursor: pointer;
  color: var(--colors-black);
  border-radius: 0.375rem; /* Default rounded border */
  padding: 0.5rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: var(--colors-red-400);
  }
`
