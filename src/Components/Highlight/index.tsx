import Button from 'Components/Button'
import React from 'react'
import * as S from './styles'

export type HighlightProps = {
  backgroundImage: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  floatImage?: string
}

const Highlight = ({
  backgroundImage,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  floatImage
}: HighlightProps) => {
  return (
    <S.Wrapper backgroundImage={backgroundImage}>
      {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Subtitle>{subtitle}</S.Subtitle>
        <Button as="a" href={buttonLink}>
          {buttonLabel}
        </Button>
      </S.Caption>
    </S.Wrapper>
  )
}

export default Highlight
