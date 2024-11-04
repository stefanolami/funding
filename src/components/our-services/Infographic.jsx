'use client'

import Image from 'next/image'
import { useState } from 'react'
import { infographic, infographicMobile } from '@/data/services'

export default function Infographic() {
	const [hovered, setHovered] = useState('')
	const handleMouseEnter = (str) => {
		setHovered(str)
	}

	const handleMouseLeave = () => {
		setHovered('')
	}

	return (
		<div>
			{/* DESKTOP */}
			<div className="w-3/4 mx-auto aspect-[16667/9376] my-20 relative hidden md:block">
				<Image
					src="/infographic/placeholder.svg"
					alt="Infographic"
					fill
					className="z-10"
				/>
				<Image
					src={'/infographic/map.svg'}
					fill
					alt="map background"
					className="z-0"
				/>
				{infographic.map((item) => (
					<div
						key={item.id}
						className="absolute w-full h-full top-0 left-0 "
					>
						<div
							className="absolute w-full h-full top-0 left-0 cursor-pointer z-30"
							style={{ clipPath: item.clipPath }}
							onMouseEnter={() => handleMouseEnter(item.id)}
							onMouseLeave={() => handleMouseLeave()}
						></div>
						<div
							className={`${
								hovered == item.id ? 'flex' : 'hidden'
							} flex-col gap-4 w-48 xl:w-60 items-center justify-center z-50 text-white absolute text-center rounded-[36px] p-6`}
							style={{
								top: item.windowTop ? item.windowTop : 'auto',
								bottom: item.windowBottom
									? item.windowBottom
									: 'auto',
								left: item.windowLeft
									? item.windowLeft
									: 'auto',
								right: item.windowRight
									? item.windowRight
									: 'auto',
								backgroundColor: item.color,
							}}
						>
							<Image
								src={`/infographic/modal/${item.id}.png`}
								alt={item.id}
								width={item.iconWidth / 1.5}
								height={item.iconHeight / 1.5}
							/>
							<span className="font-unna text-lg xl:text-xl">
								{item.label}
							</span>
							<p className="font-unna text-xs xl:text-sm">
								{item.text}
							</p>
						</div>
					</div>
				))}
			</div>

			{/* MOBILE */}
			<div className="w-3/4 mx-auto aspect-[1370/2443] my-20 relative block md:hidden">
				<Image
					src="/infographic/placeholder-mobile.svg"
					alt="Infographic"
					fill
					className="z-10"
				/>
				{infographicMobile.map((item) => (
					<div
						key={item.id}
						className="absolute w-full h-full top-0 left-0 "
					>
						<div
							className="absolute w-full h-full top-0 left-0 cursor-pointer z-30"
							style={{ clipPath: item.clipPath }}
							onClick={() => handleMouseEnter(item.id)}
						></div>
						<div
							className={`${
								hovered == item.id ? 'flex' : 'hidden'
							} flex-col gap-4 w-48 xl:w-60 items-center justify-center z-50 text-white absolute text-center rounded-[36px] p-6`}
							style={{
								top: item.windowTop ? item.windowTop : 'auto',
								bottom: item.windowBottom
									? item.windowBottom
									: 'auto',
								left: item.windowLeft
									? item.windowLeft
									: 'auto',
								right: item.windowRight
									? item.windowRight
									: 'auto',
								backgroundColor: item.color,
							}}
						>
							<Image
								src={`/infographic/modal/${item.id}.png`}
								alt={item.id}
								width={item.iconWidth / 1.5}
								height={item.iconHeight / 1.5}
							/>
							<span className="font-unna text-lg xl:text-xl">
								{item.label}
							</span>
							<p className="font-unna text-xs xl:text-sm">
								{item.text}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}
