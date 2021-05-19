import * as S from './styles'

export type RibbonColors = 'primary' | 'secondary'
export type RibbonSize = 'small' | 'normal'

export type RibbonProps = {
  children: React.ReactNode
  color?: RibbonColors
  size?: RibbonSize
}

const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal'
}: RibbonProps) => {
  return (
    <S.Wrapper size={size} color={color}>
      {children}
    </S.Wrapper>
  )
}

export default Ribbon
