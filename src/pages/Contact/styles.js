import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

export const ContactContainer = styled.div`
  max-width: 600px;
  animation: ${fadeIn} 0.5s ease forwards;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const Label = styled.label`
  font-size: 0.875rem;
  color: #c6c6c6;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`

export const Input = styled.input`
  padding: 0.75rem 1rem;
  background-color: #393939;
  border: 2px solid #525252;
  border-radius: 4px;
  color: #f4f4f4;
  font-size: 1rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #0f62fe;
    box-shadow: 0 0 0 3px rgba(15, 98, 254, 0.2);
  }

  &::placeholder {
    color: #6f6f6f;
  }
`

export const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  background-color: #393939;
  border: 2px solid #525252;
  border-radius: 4px;
  color: #f4f4f4;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  font-family: inherit;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:focus {
    outline: none;
    border-color: #0f62fe;
    box-shadow: 0 0 0 3px rgba(15, 98, 254, 0.2);
  }

  &::placeholder {
    color: #6f6f6f;
  }
`

export const SubmitButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background-color: #0f62fe;
  border: none;
  border-radius: 4px;
  color: white;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #0353e9;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:disabled {
    background-color: #525252;
    cursor: not-allowed;
    transform: none;
  }
`

export const SuccessMessage = styled.div`
  padding: 1rem;
  background-color: rgba(46, 204, 64, 0.2);
  border: 1px solid #2ecc40;
  border-radius: 4px;
  color: #2ecc40;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const DirectContact = styled.div`
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #393939;
`

export const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  margin-bottom: 0.5rem;
  color: #78a9ff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #393939;
  }

  svg {
    fill: #78a9ff;
  }
`
