'use client'

export default function Hero({ hero }) {
	return (
		<div
			id="hero"
			className="bg-primary-light h-svh xl:h-screen -mt-24 xl:-mt-44 flex flex-col justify-end"
		>
			<h1 className="text-white text-balance font-unna text-[40px] mb-16 ml-6 xl:hidden">
				Our Presence,<br></br>Your Opportunities.
			</h1>
			<h1 className="hidden xl:block text-white font-unna text-[64px] text-center mb-24">
				{hero}
			</h1>
		</div>
	)
}
