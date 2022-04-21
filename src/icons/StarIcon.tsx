import React from 'react'
import { getHexColor, RectangularOneColorIconProps } from './utils'

export const StarIcon: React.FC<RectangularOneColorIconProps> = ({
  width = 15,
  height = 14,
  color = 'black',
  className,
}) => {
  return (
    <svg
      data-cy="star-icon"
      className={className}
      width={width ?? ''}
      height={height ?? ''}
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={getHexColor(color)}
        d="M7.36024 0L9.40723 4.92156L14.7205 5.34752L10.6723 8.81518L11.9091 14L7.36024 11.2216L2.81136 14L4.04813 8.81518L0 5.34752L5.31324 4.92156L7.36024 0Z"
      />
    </svg>
  )
}
