import Link from 'next/link'
import Heading from 'Components/Heading'
import Logo from 'Components/Logo'
import * as S from './styles'

const Footer = () => {
  return (
    <S.Wrapper>
      <Logo color="black" />
      <S.Content>
        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            CONTACT
          </Heading>
          <Link href="#">
            <a>suportt@wongames.gg</a>
          </Link>
          <Link href="#">
            <a>+55 73 99999-9999</a>
          </Link>
        </S.Column>
        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            FOLLOW US
          </Heading>
          <Link href="#">
            <a>Instagram</a>
          </Link>
          <Link href="#">
            <a>Twitter</a>
          </Link>
          <Link href="#">
            <a>YouTube</a>
          </Link>
          <Link href="#">
            <a>Facebook</a>
          </Link>
        </S.Column>
        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            LINKS
          </Heading>
          <span>Loja</span>
          <span>Explorar</span>
          <span>Buscar</span>
          <span>FAQ</span>
        </S.Column>
        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            LOCATION
          </Heading>
          <span>Rua Mirueira</span>
          <span>196 - 45990148</span>
          <span>Teixeira de Freitas</span>
        </S.Column>
      </S.Content>
      <S.Copyright>Won Games 2021 © Todos os Direitos Reservados</S.Copyright>
    </S.Wrapper>
  )
}

export default Footer
