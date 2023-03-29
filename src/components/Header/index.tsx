import { HeaderContent, ImgContent, ImgLogo, ImgRight } from './styles'
import imgLeft from '../../assets/left.svg'
import imgRight from '../../assets/right.svg'
import imgLogo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContent>
      <ImgContent>
        <img src={imgLeft} />

        <ImgLogo>
          <img src={imgLogo} />
        </ImgLogo>
      </ImgContent>

      <ImgRight>
        <img src={imgRight} />
      </ImgRight>
    </HeaderContent>
  )
}
