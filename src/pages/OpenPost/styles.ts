import styled from 'styled-components'

export const OpenPostContainer = styled.section`
  position: absolute;
  width: 864px;
  height: 168px;
  background: ${(props) => props.theme['base-profile']};
  margin-left: 288px;
  margin-top: -88px;
  border-radius: 10px;
  padding: 32px;

  header {
    display: flex;
    justify-content: space-between;
  }
  a {
    gap: 8px;
    display: flex;
    text-decoration: none;
    color: ${(props) => props.theme.blue};
    font-size: 12px;
    font-weight: bold;
  }
  a:hover {
    text-decoration: underline;
  }
  strong {
    display: flex;
    color: ${(props) => props.theme.white};
    font-size: 24px;
    margin-top: 20px;
  }
  footer {
    display: flex;
    margin-top: 8px;
    gap: 70px;
  }
  div {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 8px;
  }
`
export const TextPostContainer = styled.main`
  display: flex;
  flex-direction: column;
  width: 864px;
  height: 422px;
  margin-top: 120px;
  margin-left: 288px;
  padding: 40px 32px;
  font-size: 16px;
  color: ${(props) => props.theme['base-text']};
  line-height: 160%;
  gap: 30px;
  background: #112131;
  height: auto;
`
