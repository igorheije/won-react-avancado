import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import 'jest-styled-components'

import Heading from '.'

describe('<Heading />', () => {
  it('should render a white heading by default', () => {
    renderWithTheme(<Heading>Teste</Heading>)
    expect(screen.getByRole('heading', { name: /teste/i })).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black heading when is passed', () => {
    renderWithTheme(<Heading color="black">Teste</Heading>)
    expect(screen.getByRole('heading', { name: /teste/i })).toHaveStyle({
      color: '#030517'
    })
  })

  it('should render a heading with a line to the left side', () => {
    renderWithTheme(<Heading lineLeft>Teste</Heading>)
    expect(screen.getByRole('heading', { name: /teste/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5'
    })
  })

  it('should render a heading with a line at the bottom', () => {
    renderWithTheme(<Heading lineBottom>Teste</Heading>)
    expect(screen.getByRole('heading', { name: /teste/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading  with a small size', () => {
    renderWithTheme(<Heading size="small">Teste</Heading>)
    expect(screen.getByRole('heading', { name: /teste/i })).toHaveStyle({
      'font-size': '1.6rem'
    })

    expect(screen.getByRole('heading', { name: /teste/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    )
  })

  it('should render a heading  with a primary line color ', () => {
    renderWithTheme(
      <Heading lineColor="primary" lineLeft lineBottom>
        Teste
      </Heading>
    )
    const heading = screen.getByRole('heading', { name: /teste/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #F231A5' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #F231A5', {
      modifier: '::after'
    })
  })

  it('should render a heading  with a secundary line color ', () => {
    renderWithTheme(
      <Heading lineColor="secondary" lineLeft lineBottom>
        Teste
      </Heading>
    )
    const heading = screen.getByRole('heading', { name: /teste/i })
    expect(heading).toHaveStyle({ 'border-left': '0.7rem solid #3CD3C1' })
    expect(heading).toHaveStyleRule('border-bottom', '0.5rem solid #3CD3C1', {
      modifier: '::after'
    })
  })
})
