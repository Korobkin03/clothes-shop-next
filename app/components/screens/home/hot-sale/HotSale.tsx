import React, { FC } from 'react'

import { formatToCurrency } from '@/utils/format-to-currency'

const HotSale: FC = () => {
	return (
		<div className='text-white py-10 px-8 '>
			<div className='text-sm'>HOT SALE</div>

			<h1 className='uppercase text-5xl font-[400] mt-5 mb-14 font-serif'>
				A red dress will brighten up your evening
			</h1>

			<div className='flex items-center justify-between'>
				<div>
					<span className='font-normal text-3xl mr-2 '>
						{formatToCurrency(195)}
					</span>
					<span className='line-through opacity-50 text-sm '>
						{formatToCurrency(295)}
					</span>
				</div>
				<button className='text-sm uppercase text-white border-b border-white/20'>
					Buy Now
				</button>
			</div>
		</div>
	)
}

export default HotSale
