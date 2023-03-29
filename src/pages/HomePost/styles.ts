import styled from 'styled-components'

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  justify-content: space-between;
  max-width: 864px;
  margin-top: 48px;
  margin-left: 288px;
  a {
    text-decoration: none;
  }
`
export const Container = styled.form`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 32px;
  width: 416px;
  height: 260px;
  gap: 20px;
  border-radius: 10px;
  background: ${(props) => props.theme['base-post']};

  &:hover {
    box-shadow: 0px 0px 0px 2px #3a536b;
    transform: none;
  }
  div{
    display: flex;
    gap: 16px;
  }
  
  strong{
    display: flex;
    font-size: 20px;
    color: ${(props) => props.theme['base-title']};
    line-height: 160%;
    height: 64px;
    width: 283px;
  }
  span{
    color: ${(props) => props.theme['base-span']};
    font-size: 14px;
    line-height: 160%;
    margin-top: 7px;
  }

  p {
    width: 352px;
    height: 100px;
    overflow: hidden;
    font-size: 16px;
    color: ${(props) => props.theme['base-text']};
    line-height: 160%;
  }

  p:first-of-type {
    white-space: normal;
  }
`
