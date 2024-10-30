import Infographic from './Infographic'
import ServiceExpandable from './ServiceExpandable'

export default function OurServices() {
	return (
		<div>
			<div className="px-4 py-12">
				<div className="mx-auto max-w-3xl">
					<h3 className="mb-4 text-center text-3xl font-semibold">
						Frequently asked ServiceExpandables
					</h3>
					<ServiceExpandable title="Why is the sky blue?">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Doloremque laboriosam neque reprehenderit
							saepe eius dolorum vel consequuntur perspiciatis ad
							vero.
						</p>
					</ServiceExpandable>
					<ServiceExpandable title="Why did the chicken cross the road?">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Doloremque laboriosam neque reprehenderit
							saepe eius dolorum vel consequuntur perspiciatis ad
							vero.
						</p>
					</ServiceExpandable>
					<ServiceExpandable title="How many licks does it take to get to the center of a tootsie pop?">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Doloremque laboriosam neque reprehenderit
							saepe eius dolorum vel consequuntur perspiciatis ad
							vero.
						</p>
					</ServiceExpandable>
					<ServiceExpandable title="Where's Waldo?">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Doloremque laboriosam neque reprehenderit
							saepe eius dolorum vel consequuntur perspiciatis ad
							vero.
						</p>
					</ServiceExpandable>
				</div>
			</div>
			<Infographic />
		</div>
	)
}
