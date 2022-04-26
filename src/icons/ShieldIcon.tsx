import React from 'react'
import { getHexColor, SquareOneColorIconProps } from './utils'

export const ShieldIcon: React.FC<SquareOneColorIconProps> = ({ size = 32, color = 'black', className }) => {
  const c1 = getHexColor(color)

  return (
    <svg
      className={className}
      fill={c1}
      width={size ?? '100%'}
      height={size ?? '100%'}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M512 42.666667 128 213.333333 128 469.333333C128 706.133333 291.84 927.573333 512 981.333333 732.16 927.573333 896 706.133333 896 469.333333L896 213.333333 512 42.666667Z" />
    </svg>
  )
}
