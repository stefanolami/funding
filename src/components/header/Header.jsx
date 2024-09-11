'use client'

import { Link } from '../../navigation'
import { useState, useEffect } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { cn } from '@/utils/cn'
import Image from 'next/image'
import { usePathname } from '../../navigation'

import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'

export default function Header(messages) {
	const navTrans = messages?.messages?.Navigation
	const { scrollY } = useScroll()

	const path = usePathname()

	const [hidden, setHidden] = useState(false)
	const [inverted, setInverted] = useState(false)
	const [style, setStyle] = useState({
		background: '#004A6A',
		color: '#FFFFFF',
	})

	useMotionValueEvent(scrollY, 'change', (latest) => {
		const previous = scrollY.getPrevious()
		if (latest > previous && latest > 200) {
			setHidden(true)
		} else {
			setHidden(false)
		}
	})

	useEffect(() => {
		if (path == '/your-access') {
			setStyle({ background: 'transparent', color: '#004A6A' })
			setInverted(true)
		} else {
			setStyle({ background: '#004A6A', color: '#FFFFFF' })
			setInverted(false)
		}
	}, [path])

	return (
		<motion.div
			variants={{
				visible: {
					y: 0,
					backgroundColor: style.background,
					color: style.color,
				},
				hidden: {
					y: '-100%',
					/* backgroundColor: '#FFFFFF00', */
					color: '#fff',
				},
			}}
			animate={hidden ? 'hidden' : 'visible'}
			transition={{ duration: 0.3, ease: 'easeInOut' }}
			className={
				'fixed top-0 w-full bg-transparent text-white z-50 px-6 md:px-10 xl:px-28 flex justify-between items-center h-16 xl:h-24'
			}
		>
			<Link
				className="pl-6 md:pl-0 md:py-4 xl:py-7 w-[124px] xl:w-[231px] h-[30px] xl:h-[46px] relative xl:scale-75"
				href="/"
			>
				<Image
					src="/logos/funding-white.png"
					alt="T&P Logo"
					fill
					sizes="(max-width: 640px) 40vw, 25vw"
				/>
			</Link>

			<DesktopNav
				inverted={inverted}
				messages={navTrans}
			/>

			<MobileNav messages={navTrans} />
		</motion.div>
	)
}
