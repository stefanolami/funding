'use client'

import { Link } from '@/i18n/routing'
import { usePathname } from '@/i18n/routing'
import { useState } from 'react'
import DesktopLocaleSwitcher from './DesktopLocaleSwitcher'

export default function DesktopNav({ messages, inverted }) {
	const path = usePathname()
	return (
		<div
			id="desktop-nav"
			className="hidden md:flex flex-row justify-between items-center gap-12 h-full font-unna font-bold"
		>
			{/* CHANGE TO GRID-COLS-6 */}
			<nav
				id="desktop-nav"
				className="grid grid-cols-6 text-center uppercase h-full *:px-4 text-base"
			>
				<Link
					className={`relative 
						${path == '/poe' ? 'active-link' : ''}
						${inverted ? 'hover:text-white hover:bg-primary' : 'hover:bg-primary-light'}`}
					href="/poe"
				>
					{messages.poe}
				</Link>
				<Link
					className={
						inverted
							? 'hover:text-white hover:bg-primary'
							: 'hover:bg-primary-light'
					}
					href="/your-access"
				>
					{messages.yourAccess}
				</Link>
				<div className="group relative flex items-center justify-center cursor-pointer">
					<span
						className={`block
							${path.includes('us') ? 'active-link-nested' : ''}
							`}
					>
						{messages.whoWeAre}
					</span>
					<div className="hidden group-hover:flex flex-col items-center justify-center gap-1 w-full absolute top-full">
						<Link
							href="/about-us"
							className={`desktop-nav-li w-full h-full bg-primary py-3 hover:scale-110 hover:shadow-xl mt-1 ${
								inverted
									? 'text-white'
									: 'hover:bg-primary-light'
							}`}
						>
							{messages.aboutUs}
						</Link>
						<Link
							href="/our-team"
							className={`desktop-nav-li w-full h-full bg-primary py-3 hover:scale-110 hover:shadow-xl mt-1 ${
								inverted
									? 'text-white'
									: 'hover:bg-primary-light'
							}`}
						>
							{messages.ourTeam}
						</Link>
					</div>
				</div>
				<Link
					className={`relative 
						${path == '/services' ? 'active-link' : ''}
						${inverted ? 'hover:text-white hover:bg-primary' : 'hover:bg-primary-light'}`}
					href="/services"
				>
					{messages.services}
				</Link>
				<div className="group relative flex items-center justify-center cursor-pointer">
					<span
						className={`block
						${path.includes('us') ? 'active-link-nested' : ''}
						`}
					>
						{messages.whyUs}
					</span>
					<div className="hidden group-hover:flex flex-col items-center justify-center gap-1 w-full absolute top-full">
						<Link
							href="/about-us"
							className={`desktop-nav-li w-full h-full bg-primary py-3 hover:scale-110 hover:shadow-xl mt-1 ${
								inverted
									? 'text-white'
									: 'hover:bg-primary-light'
							}`}
						>
							{messages.overview}
						</Link>
						{/* <Link
							href="/about-us"
							className={`desktop-nav-li w-full h-full bg-primary py-3 hover:scale-110 hover:shadow-xl mt-1 ${
								inverted ? 'text-white' : ''
							}`}
						>
							{messages.sectorExpertise}
						</Link>
						<Link
							href="/about-us"
							className={`desktop-nav-li w-full h-full bg-primary py-3 hover:scale-110 hover:shadow-xl mt-1 ${
								inverted ? 'text-white' : ''
							}`}
						>
							{messages.partnersPortfolios}
						</Link>
						<Link
							href="/about-us"
							className={`desktop-nav-li w-full h-full bg-primary py-3 hover:scale-110 hover:shadow-xl mt-1 ${
								inverted ? 'text-white' : ''
							}`}
						>
							{messages.endorsements}
						</Link>
						<Link
							href="/about-us"
							className={`desktop-nav-li w-full h-full bg-primary py-3 hover:scale-110 hover:shadow-xl mt-1 ${
								inverted ? 'text-white' : ''
							}`}
						>
							{messages.publications}
						</Link> */}
						<Link
							href="/about-us"
							className={`desktop-nav-li w-full h-full bg-primary py-3 hover:scale-110 hover:shadow-xl mt-1 ${
								inverted
									? 'text-white'
									: 'hover:bg-primary-light'
							}`}
						>
							{messages.clientCodex}
						</Link>
					</div>
				</div>
				<Link
					className={`relative 
						${path == '/contact' ? 'active-link' : ''}
						${inverted ? 'hover:text-white hover:bg-primary' : 'hover:bg-primary-light'}`}
					href="/contact"
				>
					{messages.contact}
				</Link>
			</nav>
			{/* <DesktopLocaleSwitcher /> */}
		</div>
	)
}
