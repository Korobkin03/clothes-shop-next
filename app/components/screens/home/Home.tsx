import Image from 'next/image'
import { FC } from 'react'

import Layout from '@/layout/Layout'

import Column from '@/ui/gird/Column'
import Row from '@/ui/gird/Row'
import Loader from '@/ui/loader/Loader'

import HomeInformation from './home-information/HomeInformation'
import HotSale from './hot-sale/HotSale'
import { IProductsPage } from '@/../pages'

const Home: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout
			title='Home'
			description='More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.'
		>
			{/* <Loader /> */}
			<Row className='bg-dark-primary'>
				<Column size={7} isPadding={false}>
					<Image src='/images/main-4x.png' alt='' width={720} height={628} />
				</Column>
				<Column
					size={5}
					isPadding={false}
					isCenter={false}
					className='flex-col'
				>
					<HotSale />
					<HomeInformation />
				</Column>
			</Row>
		</Layout>
	)
}

export default Home
