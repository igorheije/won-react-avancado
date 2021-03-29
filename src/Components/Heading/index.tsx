import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => {
  return (
    <S.Wrapper lineBottom={lineBottom} lineLeft={lineLeft} color={color}>
      {children}
    </S.Wrapper>
  )
}

export default Heading
