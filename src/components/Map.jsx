'use client'

import React from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

export default function MapChart() {
	return (
		<div className="w-1/2 mx-auto border-2 border-black mt-8">
			<ComposableMap>
				<Geographies geography={geoUrl}>
					{({ geographies }) =>
						geographies.map((geo) => (
							<Geography
								style={{
									default: {
										outline: 'none',
									},
									hover: {
										outline: 'none',
									},
									pressed: {
										outline: 'none',
									},
								}}
								key={geo.rsmKey}
								geography={geo}
							/>
						))
					}
				</Geographies>
			</ComposableMap>
		</div>
	)
}
