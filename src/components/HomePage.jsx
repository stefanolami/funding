import Image from 'next/image'
import { Link } from '@/i18n/routing'

export default function HomePage() {
	return (
		<div
			id="home"
			className="pb-16 xl:pb-32 w-full mx-auto"
		>
			<div className="mt-6 xl:mt-16 relative mx-auto w-3/4 xl:w-[20%] aspect-[353/150]">
				<Image
					src={'/logos/funding-logo-home.png'}
					alt="Group Logo"
					fill
					sizes="(max-width: 640px) 70vw, 40vw"
				/>
			</div>
			<p className="my-12 font-jose mx-auto w-4/5 xl:w-3/4 max-w-[1250px] text-primary text-sm xl:text-2xl text-center">
				As big business or SME, as NGO or local administration you can
				benefit from international, national, regional and local public
				funding, financing and tenders. Time&Place Funding: Your point
				of access.
			</p>
			<div className="w-full bg-grey-purple">
				<div className="mx-auto w-4/5 xl:w-3/4 max-w-[1250px] py-16">
					<h2 className="font-unna font-bold text-xl xl:text-[40px] text-primary mb-10">
						Our Presence, Your Opportunities
					</h2>
					<p className="text-primary font-jose text-base xl:text-xl mb-16">
						With a global network of public funding, financing and
						tenders professionals, we provide local access to
						opportunities of all sizes for your competitive
						proposals.
					</p>
					<div className="w-1/2 mx-auto flex flex-row justify-between items-center">
						<Link
							className="w-52 h-9 flex items-center justify-center bg-primary-light rounded-md shadow-md hover:shadow-lg text-white font-jose font-bold text-base"
							href="/our-team"
						>
							Our Team
						</Link>
						<Link
							className="w-52 h-9 flex items-center justify-center bg-primary-light rounded-md shadow-md hover:shadow-lg text-white font-jose font-bold text-base"
							href="/contact"
						>
							Contact Us
						</Link>
					</div>
				</div>
			</div>
			<div className="w-full">
				<div className="mx-auto w-4/5 xl:w-3/4 max-w-[1250px] py-16">
					<h2 className="font-unna font-bold text-xl xl:text-[40px] text-primary mb-10">
						(Some of) Our Capacities
					</h2>
					<p className="text-primary font-jose text-base xl:text-xl mb-16">
						We provide 360 - project management services from
						running your consortium to its communication, or we
						draft your proposals to correspond to the language
						in-between the lines of a RFP.
					</p>
					<div className="w-1/2 mx-auto flex flex-row justify-between items-center">
						<Link
							className="w-52 h-9 flex items-center justify-center bg-primary-light rounded-md shadow-md hover:shadow-lg text-white font-jose font-bold text-base"
							href="/services"
						>
							Our Services
						</Link>
						<Link
							className="w-52 h-9 flex items-center justify-center bg-primary-light rounded-md shadow-md hover:shadow-lg text-white font-jose font-bold text-base"
							href="/why-us/overview"
						>
							Why Us?
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}
