'use client'

import Image from 'next/image'
import { infographic } from '@/data/services'

export default function Infographic() {
	const handleHover = (str) => {
		console.log(str)
	}
	return (
		<div className="w-[1190.5px] mx-auto aspect-[16667/9376] my-20 relative">
			<Image
				src="/infographic/skeleton.svg"
				alt="Infographic"
				fill
				className=""
			/>
			{/* Clickable Area for Brainstorming */}
			<div
				className="absolute w-full h-full top-0 left-0 cursor-pointer bg-red-500 hover:bg-red-400"
				style={{
					clipPath: 'polygon(33% 62%, 37% 64%, 37.5% 88%, 24% 82%)',
				}}
				onClick={() => handleHover('Brainstorming')}
			></div>
			{/* {infographic.map((item) => (
				<Image
					style={{ top: item.top, left: item.left }}
					key={item.id}
					src={`/infographic/${item.id}.png`}
					alt={item.id}
					width={item.width / 14}
					height={item.height / 14}
					className={`absolute cursor-pointer`}
					onMouseEnter={() => handleHover(item.id)}
				/>
			))} */}
		</div>
	)
}
