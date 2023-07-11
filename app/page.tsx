"use client"
import Link from "next/link";
import dynamic from "next/dynamic";
import React from 'react';
import Particles from "./components/particles";
import { useState, useEffect , useRef } from 'react';
import styles from './Home.module.css';
import Head from 'next/head';
import { TweenLite } from "gsap";
import Button from './components/button.js';


const navigation = [
	{ name: "Projects", href: "/projects" },
	{ name: "Contact", href: "/contact" },
];




export default function Home() {


	const [isPlaying, setIsPlaying] = useState(false);
	const audioRef = useRef<HTMLAudioElement | null>(null);

    const handleAudioPlay = () => {
        if (audioRef.current) {
          audioRef.current.play();
          setIsPlaying(true);
        }
      };
  







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
<audio
        src="/frontpage.aac"
        ref={audioRef}
        loop
        style={{ zIndex: 25}}
      />
			<style>
                @import url('/wavy.module.css');
				@import url('https://use.typekit.net/zjl6ven.css');
            </style>



<div className="page" style={{zIndex: -100}}>

	  
      <section className="hero d-flex align-items-center justify-content-center">
        <div className="position-absolute w-100 gradient-overlay" />
        <div className="content position-relative text-center mb-5">
          <h1 className="hero-title blend">
		  <br />
		  <br />
		  <br />
		  <br />
		  <br />


	





		  <br />
		  <br />
		  <br />
		  <br />
<br />
ˏˋ°•*⁀➷
<br />
<br />
Welcome to
<br />
<br />
our Aimer site,
<br />
<br />
a tribute to 
<br />
<br />
the husky, yet sweet 
<br />
<br />
voice that enchants 
<br />
<br />
listeners globally.
<br />
<br />
<br />
Step into 
<br />
<br />
the musical universe 
<br />
<br />
of Aimer,
<br />
<br />
the record-breaking
<br />
<br />
Japanese singer-songwriter.
<br />
<br />
<br />
Her story began 
<br />
<br />
at the age of 15,
<br />
<br />
when a vocal accident 
<br />
<br />
gifted her the unique 
<br />
<br />
voice that marked 
<br />
<br />
her debut in 2011
<br />
<br />
with 'Rokutōsei no Yoru'.
<br />
<br />
<br />
Explore Aimer's 
<br />
<br />
extensive discography, 
<br />
<br />
a symphony of emotions 
<br />
<br />
embodied in her 
<br />
<br />
captivating voice.
<br />
<br />
<br />
Aimer's music 
<br />
<br />
has consistently topped charts,
<br />
<br />
with her first No.1 
<br />
<br />
on Oricon Weekly 
<br />
<br />
in 2019, and in 2022, 
<br />
<br />
'Zankyou Sanka/Asa ga Kuru'
<br />
<br />
stayed at No.1 
<br />
<br />
for a record-breaking 
<br />
<br />
seven weeks 
<br />
<br />
on Billboard JAPAN 
<br />
<br />
“JAPAN HOT 100”.
<br />
<br />
<br />
Stay in touch 
<br />
<br />
with all things Aimer:
<br />
<br />
new releases, tours, 
<br />
<br />
awards, and more.
<br />
<br />
<br />
Peruse our gallery 
<br />
<br />
of Aimer for high-quality 
<br />
<br />
images from concerts,
<br />
<br />
album art, 
<br />
<br />
and exclusive photos.
<br />
<br />
<br />
Join the discussion 
<br />
<br />
with fellow Aimer 
<br />
<br />
enthusiasts.
<br />
<br />
Share your favorite 
<br />
<br />
songs, concert experiences, 
<br />
<br />
fan art, and more.
<br />
<br />
<br />
Connect with us 
<br />
<br />
for any inquiries,
<br />
<br />
suggestions, or 
<br />
<br />
to express your 
<br />
<br />
love for Aimer's music.
<br />
<br />
<br />
<br />
<br />
<br />
<br />


		</h1>
        </div>
      </section>
	  

      <section className="three" />
      <section className="three" />

	  
      <div className="custom-cursor" />
    </div>



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
			zIndex: 50000,}}
			>
						  <Button />


			</ div>
	  
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


	  
{isPortrait && <nav className="-my-5 sm:my-0 animate-fade-in" style={{zIndex: 20, marginTop: '5vh'}}>
				
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
			</nav> }

			{!isPortrait && <nav className="-my-5 sm:my-0 animate-fade-in" style={{zIndex: 20, marginTop: '-30vh'}}>
				
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
			</nav> }

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
				className="items-center justify-center z-10 text-8xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-8xl md:text-[12rem] whitespace-nowrap bg-clip-text ">
					Aimer
				</h1>
				
				<div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
	
			</div>

			<Particles
				className="absolute inset-0 z-10 animate-fade-in"
				quantity={500}
				staticity={4}
				ease={100}
			/>

{isPortrait && <div className={`text-center animate-fade-in
		${styles['custom-style']} `}
		style={{zIndex: -10}}>


				<h2 className="text-xl text-zinc-500" 
				style={{
				color: 'black',
				zIndex: -100,
				fontFamily: 'p22-nudgewink-pro',
				fontWeight: 700,
				fontStyle: 'normal',
				}}>
				Could you kindly tilt your screen horizontally? <br />
				It's sure to make your viewing experience extra delightful! ≧◡≦
				</h2>
			</div>
			}

<div className="fixed text-center animate-fade-in"
    style={{
        bottom: '3vh', // adjust this value as needed
        transform: 'translateY(-50%)',
    }}>
    <h2 className="text-xl text-zinc-500"
    style={{
        color: 'black',
        zIndex: -100,
        fontFamily: 'p22-nudgewink-pro, sans-serif',
        fontWeight: 700,
        fontStyle: 'normal',
    }}>
        A little scroll up will reveal magical surprises! ✨
    </h2>
</div>

		</div>







			

		</div>
	</>
	);
}
