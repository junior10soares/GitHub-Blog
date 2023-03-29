import styled from 'styled-components'

export const InputContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 864px;
  margin-top: 196px;
  gap: 12px;
  margin-left: 288px;

  div {
    display: flex;
    justify-content: space-between;

    strong {
      color: ${(props) => props.theme['base-title']};
      font-size: 18px;
    }
    span {
      color: ${(props) => props.theme['base-span']};
      font-size: 14px;
    }
  }

  input {
    background: #040f1a;
    border: 1px solid #1c2f41;
    border-radius: 6px;
    align-items: center;
    padding: 12px 16px;
    gap: 8px;
    color: ${(props) => props.theme.white};
  }
  input:focus::placeholder {
    color: ${(props) => props.theme.white};
  }
`
