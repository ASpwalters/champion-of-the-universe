import React, { PropsWithChildren } from 'react'
import classNames from 'classnames'

interface ContainerProps {
  className?: string
}

export const Container: React.FC<PropsWithChildren<ContainerProps>> = ({ children, className }) => {
  return (
    <div className={classNames('px-4 sm:px-8 md:px-12 xl:px-16 max-w-[1420px] mx-auto', className)}>{children}</div>
  )
}
