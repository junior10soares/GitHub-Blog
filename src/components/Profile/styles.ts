import styled from 'styled-components'

export const ProfileContainer = styled.section`
  display: flex;
  position: absolute;
  width: 864px;
  height: 212px;
  background: ${(props) => props.theme['base-profile']};
  margin-left: 288px;
  margin-top: -88px;
  border-radius: 10px;

  img {
  width: 148px;
  height: 148px;
  margin-left: 40px;
  margin-top: 32px;
  background-color: #ffffffda
}
`
export const ProfilePerfilContainer = styled.div`
  display: flex;
  padding: 32px;
  width: 652px;
  margin-top: 8px;
  flex-direction: column;
  gap: 8px;

  header {
    display: flex;
    justify-content: space-between;

    strong {
      color: ${(props) => props.theme['base-title']};
      font-size: 24px;
    }
    a {
      display: flex;
      gap: 8px;
      color: ${(props) => props.theme.blue};
      font-weight: bold;
      cursor: pointer;
      text-decoration: none;
      font-size: 12px;
    }
    a:hover {
      text-decoration: underline;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  div {
    height: 52px;
    line-height: 26px;
    font-size: 16px;
    color: ${(props) => props.theme['base-text']};
  }

  footer {
    color: ${(props) => props.theme['base-subtitle']};
    display: flex;
    gap: 70px;

    div {
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`
