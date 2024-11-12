'use client'

import React, { useState } from 'react'
import {
	ComposableMap,
	Geographies,
	Geography,
	ZoomableGroup,
} from 'react-simple-maps'
/* import countriesData from '../data/countriesData' */
import regions from '@/data/regions'

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

export default function YourAccess() {
	const [selectedRegion, setSelectedRegion] = useState('')
	const [selectedCountry, setSelectedCountry] = useState('')
	const [zoomLevel, setZoomLevel] = useState(0.6)
	const [zoomCenter, setZoomCenter] = useState([35, 30])

	const handleRegionCLick = (region) => {
		console.log(region)
		if (selectedRegion == region.value) {
			setSelectedRegion('')
			setZoomCenter([35, 30])
			setZoomLevel(0.6)
			return
		} else {
			setSelectedRegion(region.value)
			setZoomCenter(region.properties.coordinates)
			setZoomLevel(region.properties.zoom)
		}
	}
	const handleCountryClick = (country) => {
		setSelectedCountry(country)
		const capitalizedCountry =
			country.charAt(0).toUpperCase() + country.slice(1)
		const countryRegion = Object.values(regions).find((region) =>
			region.countries.includes(capitalizedCountry)
		).value
		console.log(countryRegion)
		if (selectedRegion != countryRegion) {
			setSelectedRegion(countryRegion)
			setZoomCenter(regions[countryRegion].properties.coordinates)
			setZoomLevel(regions[countryRegion].properties.zoom)
		}
	}
	const handleResetRegion = () => {
		setSelectedRegion('')
		setZoomCenter([35, 30])
		setZoomLevel(0.6)
	}
	const handleZoom = (level, center) => {
		setZoomLevel(level)
		setZoomCenter(center)
	}
	return (
		<div className="w-full flex flex-row items-center justify-start">
			<div className="bg-transparent w-full absolute top-0 h-16 xl:h-24">
				<div className="ml-[7%] h-screen w-[270px] bg-primary-light"></div>
			</div>
			<div className="ml-[7%] h-screen w-[270px] bg-primary-light z-20 font-jose transition-all duration-300 overflow-auto scrollbar-thin scrollbar-webkit">
				<ul className="m-12 space-y-3">
					{Object.values(regions).map((region, index) => (
						<li key={index}>
							<button
								className={`cursor-pointer text-xl text-left ${
									selectedRegion == region.value
										? 'text-primary font-bold'
										: 'text-white'
								}`}
								onClick={() => handleRegionCLick(region)}
							>
								{region.name}
							</button>

							{selectedRegion == region.value ? (
								<ul className="my-4 ml-8 z-50 space-y-3 list-disc">
									{regions[selectedRegion].countries.map(
										(country) => (
											<li
												className={`${
													selectedCountry ==
													country.toLowerCase()
														? 'text-primary font-bold'
														: 'text-white'
												} cursor-pointer text-base`}
												key={country}
												onClick={() =>
													handleCountryClick(
														country.toLowerCase()
													)
												}
											>
												{country}
											</li>
										)
									)}
								</ul>
							) : null}
						</li>
					))}
				</ul>
			</div>
			<div className="your-access-map h-screen -mt-48 relative">
				<ComposableMap
					projection="geoMercator"
					className="absolute top-0 w-full"
				>
					<ZoomableGroup
						center={zoomCenter}
						zoom={zoomLevel}
						minZoom={zoomLevel}
						maxZoom={zoomLevel}
						onMoveEnd={({ coordinates, zoom }) => {
							console.log('zooming', coordinates, zoom)
						}}
						/* onMoveEnd={({ coordinates, zoom }) => {
							setZoomLevel(zoom)
							setZoomCenter(coordinates)
							console.log('zooming', zoomLevel, zoomCenter)
						}} */
					>
						<Geographies geography="/worldNoAntarctica.json">
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
										onClick={() =>
											handleCountryClick(
												geo.properties.name.toLowerCase()
											)
										}
										fill={
											selectedCountry ==
											geo.properties.name.toLowerCase()
												? '#004A6A'
												: '#666'
										}
										/* className={
									countriesNames.includes(geo.properties.name)
										? ' covered-countries '
										: ' uncovered-countries '
								} */
										className="hover:brightness-110 stoke-[.5px] cursor-pointer"
									/>
								))
							}
						</Geographies>
					</ZoomableGroup>
				</ComposableMap>
			</div>
		</div>
	)
}
