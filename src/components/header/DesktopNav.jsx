import { Link } from '../../navigation'
import DesktopLocaleSwitcher from './DesktopLocaleSwitcher'

export default function DesktopNav({ messages }) {
	return (
		<div
			id="desktop-nav"
			className="hidden md:flex flex-row justify-between items-center gap-12 h-full font-unna font-bold"
		>
			<nav className="grid grid-cols-5 text-center uppercase h-full *:px-4 text-base">
				<Link
					className={'hover:bg-primary-light'}
					href="/poe"
				>
					{messages.poe}
				</Link>

				<Link
					className={'hover:bg-primary-light'}
					href="/your-access"
				>
					{messages.yourAccess}
				</Link>
				<Link
					className={'hover:bg-primary-light'}
					href="/services"
				>
					{messages.services}
				</Link>
				<Link
					className={'hover:bg-primary-light'}
					href="/contact"
				>
					{messages.contact}
				</Link>
			</nav>
			<DesktopLocaleSwitcher />
		</div>
	)
}
