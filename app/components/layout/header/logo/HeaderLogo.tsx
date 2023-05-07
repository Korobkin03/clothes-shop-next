import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

import Column from '@/ui/gird/Column'

const HeaderLogo: FC = () => {
	return (
		<Column size={2}>
			<Link href='/' className='flex items-center '>
				<Image
					src='/images/logo.svg'
					width={100}
					height={100}
					alt='Lorian store'
					className='-mr-3'
				/>
				<span className='flex flex-col'>
					<span className='text-white font-light tracking-[0.1em]'>LORIAN</span>
					<span className='text-sm text-dark-gray tracking-[0.4em] font-extralight'>
						STORE
					</span>
				</span>
			</Link>
		</Column>
	)
}

export default HeaderLogo
