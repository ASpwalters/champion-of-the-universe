import React from 'react'
import { getHexColor, SquareOneColorIconProps } from './utils'

export const SwordIcon: React.FC<SquareOneColorIconProps> = ({ size = 32, color = 'black', className }) => {
  const c1 = getHexColor(color)

  return (
    <svg
      className={className}
      height={size ?? '100%'}
      width={size ?? '100%'}
      fill={c1}
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M295.253333 213.333333H213.333333l384 384 42.666667-40.106666m211.626667 258.56l-35.84 35.84a42.496 42.496 0 0 1-60.16 0l-133.12-133.12-114.346667 113.493333-60.16-60.16 60.586667-60.586667L128 330.666667V128h202.666667l380.586666 380.586667 60.586667-60.586667 60.16 60.16-113.92 113.92 133.12 133.12c17.066667 17.066667 17.066667 43.946667 0.426667 60.586667z" />
    </svg>
  )
}
