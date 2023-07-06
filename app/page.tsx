"use client"
import Link from "next/link";
import dynamic from "next/dynamic";
import React from 'react';
import Particles from "./components/particles";
import { useState, useEffect } from 'react';
import styles from './Home.module.css';
import Head from 'next/head';


const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];



export default function Home() {

	const [isPortrait, setIsPortrait] = useState<boolean | null>(null);

	useEffect(() => {
	  const checkOrientation = () => {
		setIsPortrait(window.innerHeight > window.innerWidth);
	  };
  
	  // Initial check
	  checkOrientation();
	
	  // Listen for window resize and orientationchange events
	  window.addEventListener('resize', checkOrientation);
	  window.addEventListener('orientationchange', checkOrientation);
	
	  // Cleanup
	  return () => {
		window.removeEventListener('resize', checkOrientation);
		window.removeEventListener('orientationchange', checkOrientation);
	  };
  
	}, []);
  
	// Render only when isPortrait is determined
	if (isPortrait === null) {
	  return null;
	}

	return (
		<>
		<Head>
		<link rel="stylesheet" href="https://use.typekit.net/zjl6ven.css" />
	  </Head>

	  
		<div className="fixed flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">

			<div className="-z-100 fixed inset-0"
				 style={{
					 zIndex: -100,
					 backgroundImage: `url('/aimerfront.jpg')`,
					 backgroundSize: 'cover',
					 backgroundPosition: 'center',
					 backgroundRepeat: 'no-repeat',
					 WebkitBackgroundSize: 'cover',
				 }}
			/>

	{isPortrait && <div className="fixed inset-0 backdrop-blur-md bg-white bg-opacity-20" />}
		
		
		<div style={{    
		position: 'fixed',
		top: 0, // start from top
		left: 0, // start from left
		width: '100%', // full width
		height: '100%', // full height
		display: 'flex',
		alignItems: 'center', // center vertically in the container
		justifyContent: 'center', // center horizontally in the container
		flexDirection: 'column', // stack children vertically
		zIndex: 40,}}>

			<nav className="-my-10 sm:-my-3  animate-fade-in" style={{zIndex: 20, marginTop: '-20vh'}}>
				<ul className="flex items-center justify-center gap-4">
					{navigation.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="text-sm duration-500 text-zinc-500 hover:text-zinc-300">
							
							{item.name}
						</Link>
					))}
				</ul>
			</nav>

			<div style={{    
			position: 'fixed',
			top: 0, // start from top
			left: 0, // start from left
			width: '100%', // full width
			height: '100%', // full height
			display: 'flex',
			alignItems: 'center', // center vertically in the container
			justifyContent: 'center', // center horizontally in the container
			flexDirection: 'column', // stack children vertically
			zIndex: 5,}}
			>

				<div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />


				<h1 style={{
					fontFamily: 'remedy',
					fontWeight: 700,
					fontStyle: 'normal',
				}}
				className="items-center justify-center z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
					Aimer
				</h1>
				
				<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
	
			</div>

		</div>


		{isPortrait && <div className={`my-16 text-center animate-fade-in
		${styles['custom-style']} `}
		>
				<h2 className="text-sm text-zinc-500" style={{color: 'black'}}>
				Could you kindly tilt your screen horizontally? <br />
				It's sure to make your viewing experience extra delightful! ≧◡≦
				</h2>
			</div>}

			<Particles
				className="absolute inset-0 z-10 animate-fade-in"
				quantity={500}
				staticity={4}
				ease={100}
			/>

		</div>
	</>
	);
}
