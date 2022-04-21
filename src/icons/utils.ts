import { colors } from '../../constants/colors'

export type IconColor = 'none' | keyof typeof colors

interface BaseIconProps {
  className?: string
}

interface OneColorIconProps {
  color?: IconColor
}

interface TwoColorIconProps {
  color1?: IconColor
  color2?: IconColor
}

interface SquareIconProps {
  size?: number
}

interface RectangularIconProps {
  height?: number
  width?: number
}

export interface SquareOneColorIconProps extends BaseIconProps, SquareIconProps, OneColorIconProps {}
export interface SquareTwoColorIconProps extends BaseIconProps, SquareIconProps, TwoColorIconProps {}

export interface RectangularOneColorIconProps extends BaseIconProps, RectangularIconProps, OneColorIconProps {}
export interface RectangularTwoColorIconProps extends BaseIconProps, RectangularIconProps, TwoColorIconProps {}

export function getHexColor(color: IconColor): string {
  if (color === 'none') return ''

  const hex = colors[color]
  if (typeof hex === 'string') return hex

  throw new Error(`Please add a hex definition for color "${color}".`)
}
