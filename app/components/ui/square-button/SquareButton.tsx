import React, { FC } from 'react'
import { IconType } from 'react-icons/lib/esm'

interface ISquareButton {
	Icon: IconType
	onClick?: () => void
	number?: number
}

const SquareButton: FC<ISquareButton> = ({ Icon, onClick, number }) => {
	return (
		<button
			onClick={onClick}
			className='h-10 w-10 bg-black flex items-center justify-center hover:bg-[#0e0e0e] transition-colors duration-200 relative rounded'
		>
			{!!number && (
				<span className='flex h-4 w-4 items-center justify-center rounded-full bg-primary p-1 text-[0.7rem] text-white absolute left-[75%] bottom-[75%]'>
					{number}
				</span>
			)}

			<Icon color='#7d7d7d' size={20} />
		</button>
	)
}

export default SquareButton
