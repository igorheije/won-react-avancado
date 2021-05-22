import Button from 'Components/Button'
import Ribbon, { RibbonColors, RibbonSize } from 'Components/Ribbon'
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon: React.ReactNode
  ribbonSize: RibbonSize
  ribbonColor: RibbonColors
}

const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonSize,
  ribbonColor
}: BannerProps) => {
  return (
    <S.Wrapper>
      <S.Image src={img} role="img" aria-label={title} />
      {!!ribbon && (
        <Ribbon color={ribbonColor} size={ribbonSize}>
          {ribbon}
        </Ribbon>
      )}
      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.SubTitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Button as="a" href={buttonLink} size="large">
          {buttonLabel}
        </Button>
      </S.Caption>
    </S.Wrapper>
  )
}

export default Banner
