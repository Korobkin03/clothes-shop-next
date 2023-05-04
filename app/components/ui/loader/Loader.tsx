import { FC } from 'react'

import spinnerImage from './Spinner.svg'

const Loader: FC = () => {
	return (
		<img src={spinnerImage.src} alt='spinnerImage' width={200} height={200} />
	)
}

export default Loader
