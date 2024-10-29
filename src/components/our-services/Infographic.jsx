'use client'

import Image from 'next/image'
import { useState } from 'react'
import { infographic } from '@/data/services'

export default function Infographic() {
	const [hovered, setHovered] = useState('')
	const handleMouseEnter = (str) => {
		setHovered(str)
	}

	const handleMouseLeave = () => {
		setHovered('')
	}

	return (
		<div className="w-[1190.5px] mx-auto aspect-[16667/9376] my-20 relative">
			<Image
				src="/infographic/skeleton.svg"
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
					<Image
						style={{ top: item.top, left: item.left }}
						src={`/infographic/${item.id}.png`}
						alt={item.id}
						width={item.width / 14}
						height={item.height / 14}
						className="z-20 absolute"
					/>
					<div
						className={`${
							hovered == item.id ? 'flex' : 'hidden'
						} flex-col gap-6 w-60 items-center justify-center z-50 text-white absolute text-center rounded-[36px] p-6`}
						style={{
							top: item.windowTop,
							left: item.windowLeft,
							backgroundColor: item.color,
						}}
					>
						<span className="font-unna text-xl">{item.label}</span>
						<p className="font-unna text-sm">{item.text}</p>
					</div>
				</div>
			))}
			{/* <div
				className="absolute w-full h-full top-0 left-0 cursor-pointer bg-red-500 hover:bg-red-400"
				style={{
					clipPath:
						'polygon(33% 62%, 37% 64%, 37.5% 88%, 32% 87%, 24% 82%)',
				}}
				onMouseEnter={() => handleMouseEnter('Brainstorming')}
			></div>
			<div
				className="absolute w-full h-full top-0 left-0 cursor-pointer bg-yellow-500 hover:bg-yellow-400"
				style={{
					clipPath:
						'polygon(30.5% 54%, 32% 61%, 23% 77%, 20% 72%, 18% 64%, 17% 54%)',
				}}
				onMouseEnter={() => handleMouseEnter('Idea development')}
			></div>
			<div
				className="absolute w-full h-full top-0 left-0 cursor-pointer bg-green-500 hover:bg-green-400"
				style={{
					clipPath:
						'polygon(32% 45%, 30.5% 51.5%, 17% 51.5%, 17.7% 43%, 19% 36%, 21.5% 29.5%)',
				}}
				onMouseEnter={() => handleMouseEnter('Funding Match')}
			></div>
			<div
				className="absolute w-full h-full top-0 left-0 cursor-pointer bg-blue-500 hover:bg-blue-400"
				style={{
					clipPath:
						'polygon(35.5% 41%, 32.54% 43.5%, 23% 27%, 26% 22%, 30% 18.5%, 34.7% 16.5%)',
				}}
				onMouseEnter={() => handleMouseEnter('Idea to Project')}
			></div>
			<div
				className="absolute w-full h-full top-0 left-0 cursor-pointer bg-violet-500 hover:bg-violet-400"
				style={{
					clipPath:
						'polygon(40.5% 43%, 36.9% 40.3%, 37% 16.5%, 41% 17.5%, 45% 19.5%, 49.2% 23.7%)',
				}}
				onMouseEnter={() => handleMouseEnter('Project Development')}
			></div>
			<div
				className="absolute w-full h-full top-0 left-0 cursor-pointer bg-red-500 hover:bg-red-400"
				style={{
					clipPath:
						'polygon(43% 50.5%, 41.5% 43.5%, 51% 27%, 54% 34%, 56% 42%, 56.7% 49%)',
				}}
				onMouseEnter={() => handleMouseEnter('Project Proposal')}
			></div>
			<div
				className="absolute w-full h-full top-0 left-0 cursor-pointer bg-yellow-500 hover:bg-yellow-400"
				style={{
					clipPath:
						'polygon(48% 75.5%, 45.2% 68%, 43.5% 60%, 43% 51.7%, 56.4% 51.7%, 57.2% 56%)',
				}}
				onMouseEnter={() => handleMouseEnter('Contract Negotiation')}
			></div>
			<div
				className="absolute w-full h-full top-0 left-0 cursor-pointer bg-green-500 hover:bg-green-400"
				style={{
					clipPath:
						'polygon(61.7% 87%, 57% 85.5%, 53% 82.5%, 48.7% 76.5%, 58% 60%, 60.7% 61.5%)',
				}}
				onMouseEnter={() => handleMouseEnter('Project Implementation')}
			></div>
			<div
				className="absolute w-full h-full top-0 left-0 cursor-pointer bg-blue-500 hover:bg-blue-400"
				style={{
					clipPath:
						'polygon(76.3% 78%, 73% 82%, 68% 85.8%, 62.7% 87%, 62.7% 63%, 65.3% 61.5%)',
				}}
				onMouseEnter={() => handleMouseEnter('Project Communication')}
			></div>
			<div
				className="absolute w-full h-full top-0 left-0 cursor-pointer bg-violet-500 hover:bg-violet-400"
				style={{
					clipPath:
						'polygon(70.3% 51.5%, 82.5% 52%, 82% 62%, 80% 69%, 77% 76.5%, 67.5% 59.5%)',
				}}
				onMouseEnter={() => handleMouseEnter('Completion of Project')}
			></div>
			<div
				className="absolute w-full h-full top-0 left-0 cursor-pointer bg-red-500 hover:bg-red-400"
				style={{
					clipPath:
						'polygon(70% 37.5%, 76.5% 18.5%, 80.5% 24%, 84% 32%, 85.5% 39.5%, 72.5% 46%)',
				}}
				onMouseEnter={() => handleMouseEnter('Market Introduction')}
			></div>
			<div
				className="absolute w-full h-full top-0 left-0 cursor-pointer bg-yellow-500 hover:bg-yellow-400"
				style={{
					clipPath:
						'polygon(60% 38.5%, 55.5% 18%, 60% 15.8%, 65% 15.5%, 70.5% 17.5%, 65.5% 40%)',
				}}
				onMouseEnter={() => handleMouseEnter('New Possibilities')}
			></div> */}
		</div>
	)
}

{
	/* {infographic.map((item) => (
				<Image
					style={{ top: item.top, left: item.left }}
					key={item.id}
					src={`/infographic/${item.id}.png`}
					alt={item.id}
					width={item.width / 14}
					height={item.height / 14}
					className={`absolute cursor-pointer`}
					onMouseEnter={() => handleMouseEnter(item.id)}
				/>
			))} */
}
