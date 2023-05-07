import cn from 'clsx'
import React, { FC, PropsWithChildren } from 'react'

interface IColumn {
	size: number
	isCenter?: boolean
	className?: string
}

const Column: FC<PropsWithChildren<IColumn>> = ({
	size,
	children,
	isCenter = true,
	className
}) => {
	return (
		<div
			className={cn(
				'border-r-2 border-black border-solid h-full flex items-center p-3',
				{
					'justify-center': isCenter
				},
				className
			)}
			style={{ gridColumn: `span ${size} / span ${size}` }}
		>
			{children}
		</div>
	)
}

export default Column