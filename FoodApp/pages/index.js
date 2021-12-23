import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'

import Featured from '../components/Featured'


export default function Home() {
	return (
		<div>
			<Head>
				<title>Food App</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			Home Page
			<Featured />

		</div>
	)
}