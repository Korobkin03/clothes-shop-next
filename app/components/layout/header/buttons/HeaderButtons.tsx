import React, { FC } from 'react'
import { FiBell, FiSearch, FiShoppingCart } from 'react-icons/fi'

import Column from '@/ui/gird/Column'
import SquareButton from '@/ui/square-button/SquareButton'

const HeaderButtons: FC = () => {
	return (
		<Column size={2} className='gap-5'>
			<SquareButton Icon={FiSearch} onClick={() => {}} />
			<SquareButton Icon={FiBell} onClick={() => {}} />
			<SquareButton Icon={FiShoppingCart} onClick={() => {}} number={1} />
		</Column>
	)
}

export default HeaderButtons
