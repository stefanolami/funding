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
				{/* <div className="absolute w-full h-full top-0 left-0 ">
					<div
						className="absolute w-full h-full top-0 left-0 cursor-pointer z-30 bg-red-500 hover:bg-blue-500"
						style={{
							clipPath:
								'polygon(37% 29%, 35% 33.5%, 4% 34%, 6% 26%, 9% 22%, 12% 18%)',
						}}
						onMouseEnter={() => handleMouseEnter(item.id)}
						onMouseLeave={() => handleMouseLeave()}
					></div>
					<div
						className="absolute w-full h-full top-0 left-0 cursor-pointer z-30 bg-yellow-500 hover:bg-blue-500"
						style={{
							clipPath:
								'polygon(47% 25.5%, 38% 28%, 16.5% 15.5%, 30% 10.5%, 45% 8%)',
						}}
						onMouseEnter={() => handleMouseEnter(item.id)}
						onMouseLeave={() => handleMouseLeave()}
					></div>
					<div
						className="absolute w-full h-full top-0 left-0 cursor-pointer z-30 bg-green-500 hover:bg-blue-500"
						style={{
							clipPath:
								'polygon(58% 27.5%, 50% 26%, 49% 9%, 65% 10%, 78% 14%)',
						}}
						onMouseEnter={() => handleMouseEnter(item.id)}
						onMouseLeave={() => handleMouseLeave()}
					></div>
					<div
						className="absolute w-full h-full top-0 left-0 cursor-pointer z-30 bg-violet-500 hover:bg-blue-500"
						style={{
							clipPath:
								'polygon(63.5% 33%, 59.5% 28%, 81% 15.5%, 90% 24%, 94% 31%)',
						}}
						onMouseEnter={() => handleMouseEnter(item.id)}
						onMouseLeave={() => handleMouseLeave()}
					></div>
					<div
						className="absolute w-full h-full top-0 left-0 cursor-pointer z-30 bg-red-500 hover:bg-blue-500"
						style={{
							clipPath:
								'polygon(60.5% 38.5%, 63.5% 33.5%, 93.5% 33.5%, 91.5% 42%, 84% 49%)',
						}}
						onMouseEnter={() => handleMouseEnter(item.id)}
						onMouseLeave={() => handleMouseLeave()}
					></div>
					<div
						className="absolute w-full h-full top-0 left-0 cursor-pointer z-30 bg-yellow-500 hover:bg-blue-500"
						style={{
							clipPath:
								'polygon(51% 41.5%, 59.5% 39.5%, 81% 51%, 67% 56.5%, 53% 59%)',
						}}
						onMouseEnter={() => handleMouseEnter(item.id)}
						onMouseLeave={() => handleMouseLeave()}
					></div>
					<div
						className="absolute w-full h-full top-0 left-0 cursor-pointer z-30 bg-green-500 hover:bg-blue-500"
						style={{
							clipPath:
								'polygon(19.5% 47.5%, 34% 42.5%, 49.5% 41%, 49.5% 58%, 42% 60%)',
						}}
						onMouseEnter={() => handleMouseEnter(item.id)}
						onMouseLeave={() => handleMouseLeave()}
					></div>
					<div
						className="absolute w-full h-full top-0 left-0 cursor-pointer z-30 bg-violet-500 hover:bg-blue-500"
						style={{
							clipPath:
								'polygon(5% 65%, 8% 56%, 18% 49%, 39.5% 60.5%, 37% 64%)',
						}}
						onMouseEnter={() => handleMouseEnter(item.id)}
						onMouseLeave={() => handleMouseLeave()}
					></div>
					<div
						className="absolute w-full h-full top-0 left-0 cursor-pointer z-30 bg-red-500 hover:bg-blue-500"
						style={{
							clipPath:
								'polygon(16% 83%, 7.5% 75%, 5% 66%, 35% 66%, 37% 70%)',
						}}
						onMouseEnter={() => handleMouseEnter(item.id)}
						onMouseLeave={() => handleMouseLeave()}
					></div>
					<div
						className="absolute w-full h-full top-0 left-0 cursor-pointer z-30 bg-yellow-500 hover:bg-blue-500"
						style={{
							clipPath:
								'polygon(49.5% 75%, 49.5% 91%, 33% 89.5%, 18% 84%, 39% 72%)',
						}}
						onMouseEnter={() => handleMouseEnter(item.id)}
						onMouseLeave={() => handleMouseLeave()}
					></div>
					<div
						className="absolute w-full h-full top-0 left-0 cursor-pointer z-30 bg-green-500 hover:bg-blue-500"
						style={{
							clipPath:
								'polygon(68% 75%, 91% 83%, 80% 91%, 65% 95%, 57% 78%)',
						}}
						onMouseEnter={() => handleMouseEnter(item.id)}
						onMouseLeave={() => handleMouseLeave()}
					></div>
					<div
						className="absolute w-full h-full top-0 left-0 cursor-pointer z-30 bg-violet-500 hover:bg-blue-500"
						style={{
							clipPath:
								'polygon(66% 63%, 92% 57%, 96% 66%, 92% 76%, 64% 70%)',
						}}
						onMouseEnter={() => handleMouseEnter(item.id)}
						onMouseLeave={() => handleMouseLeave()}
					></div>
				</div> */}
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
