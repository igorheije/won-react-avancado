import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Wrapper = styled.footer``

export const Content = styled.div`
  ${({ theme }) => css`
    display: grid;
    gap: ${theme.grid.gutter};
    grid-template-columns: repeat(4, 1fr);
    margin-top: ${theme.spacings.medium};
    ${media.lessThan('medium')`
    grid-template-columns: repeat(2, 1fr);
  `};
  `}
`

export const Column = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    line-height: ${theme.spacings.small};
    margin-top: ${theme.spacings.xsmall};
    > a,
    span {
      font-size: ${theme.font.sizes.xsmall};
      text-decoration: none;
      color: ${theme.colors.gray};
    }
  `}
`

export const Copyright = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    font-size: ${theme.font.sizes.xsmall};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    text-align: center;
  `}
`
