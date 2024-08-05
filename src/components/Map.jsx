'use client'

import React, { useState } from 'react'
import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import countriesData from '../data/countriesData'
import regions from '../data/regions'

import { scaleLinear } from 'd3-scale'
const colorScale = scaleLinear().domain([0, 1000]).range(['red', 'orange'])

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

export default function MapChart() {
	const [selectedRegion, setSelectedRegion] = useState('')

	const countriesNames = countriesData.map((country) => country.name)
	const regionsNames = Object.values(regions).map((region) => region.name)

	const handleRegionCLick = (region) => {
		setSelectedRegion(region)
	}

	const handleResetRegion = () => {
		setSelectedRegion('')
	}
	return (
		<div className="w-full grid grid-cols-[1fr_50%_1fr]">
			<div className="">
				{!selectedRegion && (
					<ul className="m-12">
						{Object.values(regions).map((region) => (
							<li
								className="cursor-pointer"
								onClick={() => handleRegionCLick(region.value)}
								key={region.value}
							>
								{region.name}
							</li>
						))}
					</ul>
				)}
				{selectedRegion && (
					<ul className="m-12">
						{regions[selectedRegion].countries.map((country) => (
							<li
								className="cursor-pointer"
								key={country}
							>
								{country}
							</li>
						))}
						<li
							className="mt-10 cursor-pointer"
							onClick={handleResetRegion}
							key="back"
						>
							Back to Regions
						</li>
					</ul>
				)}
			</div>
			<div className="w-full mx-auto border-2 border-black mt-8">
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
									id={geo.properties.name}
									fill={colorScale(geo.id)}
									/* className={
									countriesNames.includes(geo.properties.name)
										? ' covered-countries '
										: ' uncovered-countries '
								} */
									className="hover:brightness-110"
								/>
							))
						}
					</Geographies>
				</ComposableMap>
			</div>
			<div className=""></div>
		</div>
	)
}
