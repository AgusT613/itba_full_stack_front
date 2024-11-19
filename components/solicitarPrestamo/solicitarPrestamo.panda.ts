import { styled } from '@/styled-system/jsx'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 0.5rem;
`

export const Fieldset = styled.fieldset`
  border: 2px solid var(--colors-gray-200);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`

export const Legend = styled.legend`
  margin: 0 2rem;
  font-size: 1.125rem;
`

export const FormRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Label = styled.label``

export const Select = styled.select`
  min-width: 20rem;
  padding: 0.5rem 0.25rem;
  border-radius: 0.375rem;
  background-color: transparent;
  border: 2px solid var(--colors-black);
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`

export const Input = styled.input`
  min-width: 20rem;
  padding: 0.5rem 0.25rem;
  border-radius: 0.375rem;
  background-color: transparent;
  border: 2px solid var(--colors-black);
  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`

export const ButtonRow = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-self: center;
`

export const Button = styled.input`
  width: 10rem;
  border-radius: 0.375rem;
  padding: 0.5rem;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
  transition: background-color 0.2s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.6);
  }
`

export const Message = styled.p`
  font-size: 0.875rem;
  color: ${(props) =>
    props.error ? 'var(--colors-red-300)' : 'var(--colors-green-300)'};
`
