'use client'

import { useState } from 'react'
import { Link } from '../../navigation'
import DesktopLocaleSwitcher from './DesktopLocaleSwitcher'

export default function DesktopNav({ messages }) {
	return (
		<div
			id="desktop-nav"
			className="hidden md:flex flex-row justify-between items-center gap-12 h-full font-unna font-bold"
		>
			<nav className="grid grid-cols-6 text-center uppercase h-full *:px-4 text-base">
				<Link
					className="hover:bg-primary-light hover:shadow-xl hover:scale-110"
					href="/poe"
				>
					{messages.poe}
				</Link>
				<Link
					className="hover:bg-primary-light hover:shadow-xl hover:scale-110"
					href="/your-access"
				>
					{messages.yourAccess}
				</Link>
				<div className="group relative flex items-center justify-center cursor-pointer">
					<span>{messages.whoWeAre}</span>
					<ul className="hidden group-hover:flex flex-col items-center justify-center gap-1 w-full absolute top-full">
						<li className="w-full bg-primary py-3 hover:scale-110 hover:shadow-xl mt-1 ">
							<Link
								href="/about-us"
								className="w-full"
							>
								{messages.aboutUs}
							</Link>
						</li>
						<li className="w-full bg-primary py-3 hover:scale-110 hover:shadow-xl">
							<Link
								href="/our-team"
								className="w-full"
							>
								{messages.ourTeam}
							</Link>
						</li>
					</ul>
				</div>
				<Link
					className="hover:bg-primary-light hover:shadow-xl hover:scale-110"
					href="/services"
				>
					{messages.services}
				</Link>
				<div className="group relative flex items-center justify-center cursor-pointer">
					<span>{messages.whyUs}</span>
					<ul className="hidden group-hover:flex flex-col items-center justify-center gap-1 w-full absolute top-full">
						<li className="w-full bg-primary py-3 hover:scale-110 hover:shadow-xl mt-1 ">
							<Link
								href="/about-us"
								className="w-full"
							>
								{messages.overview}
							</Link>
						</li>
						<li className="w-full bg-primary py-3 hover:scale-110 hover:shadow-xl">
							<Link
								href="/our-team"
								className="w-full"
							>
								{messages.sectorExpertise}
							</Link>
						</li>
						<li className="w-full bg-primary py-3 hover:scale-110 hover:shadow-xl">
							<Link
								href="/our-team"
								className="w-full"
							>
								{messages.partnersPortfolios}
							</Link>
						</li>
						<li className="w-full bg-primary py-3 hover:scale-110 hover:shadow-xl">
							<Link
								href="/our-team"
								className="w-full"
							>
								{messages.endorsements}
							</Link>
						</li>
						<li className="w-full bg-primary py-3 hover:scale-110 hover:shadow-xl">
							<Link
								href="/our-team"
								className="w-full"
							>
								{messages.publications}
							</Link>
						</li>
						<li className="w-full bg-primary py-3 hover:scale-110 hover:shadow-xl">
							<Link
								href="/our-team"
								className="w-full"
							>
								{messages.clientCodex}
							</Link>
						</li>
					</ul>
				</div>
				<Link
					className="hover:bg-primary-light hover:shadow-xl hover:scale-110"
					href="/contact"
				>
					{messages.contact}
				</Link>
			</nav>
			<DesktopLocaleSwitcher />
		</div>
	)
}
