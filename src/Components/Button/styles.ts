import styled, { css, DefaultTheme } from 'styled-components'
import { ButtonProps } from '.'

type WrapperProps = {
  hasIcon: boolean
} & Pick<ButtonProps, 'size' | 'fullWidth'>

const buttonModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xsmall};
    height: 3rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
  `,

  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.small};
    height: 4rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.medium};
  `,

  large: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    height: 5rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
  `,

  fullWidth: () => css`
    width: 100%;
  `,

  withIcon: (theme: DefaultTheme) => css`
    svg {
      width: 1.5rem;

      & + span {
        margin-left: ${theme.spacings.xxsmall};
      }
    }
  `
}

export const Wrapper = styled.button<WrapperProps>`
  ${({ theme, size, fullWidth, hasIcon }) => css`
    background: linear-gradient(
      178.59deg,
      #ff5f5f -14.51%,
      #f062c0 102.86%,
      #f23131 102.86%
    );
    border-radius: ${theme.border.radius};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    font-weight: 500;
    color: ${theme.colors.white};
    text-decoration: none;

    &:hover {
      background: linear-gradient(180deg, #e35565 0%, #d958a6 100%),
        linear-gradient(
          178.59deg,
          #ff5f5f -14.51%,
          #f062c0 102.86%,
          #f23131 102.86%
        );
    }

    ${!!size && buttonModifiers[size](theme)}
    ${!!fullWidth && buttonModifiers.fullWidth()}
    ${!!hasIcon && buttonModifiers.withIcon(theme)}
  `}
`
