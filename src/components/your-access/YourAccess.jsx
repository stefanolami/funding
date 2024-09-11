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

import { scaleLinear } from 'd3-scale'
const colorScale = scaleLinear().domain([0, 1000]).range(['red', 'orange'])

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json'

export default function YourAccess() {
	const [selectedRegion, setSelectedRegion] = useState('')
	const [zoomLevel, setZoomLevel] = useState(0.6)
	const [zoomCenter, setZoomCenter] = useState([35, 30])

	const handleRegionCLick = (region) => {
		console.log(region)
		setSelectedRegion(region.value)
		setZoomCenter(region.properties.coordinates)
		setZoomLevel(region.properties.zoom)
	}
	const handleResetRegion = () => {
		setSelectedRegion('')
		setZoomCenter([0, 43])
		setZoomLevel(0.8)
	}
	const handleZoom = (level, center) => {
		setZoomLevel(level)
		setZoomCenter(center)
	}
	return (
		<div className="w-full flex flex-row items-center justify-start -mt-20 -mb-32">
			<div className="ml-[8%] -mt-24 h-screen w-72 bg-primary-light"></div>
			<div className="w-full h-screen -mt-24 relative">
				<ComposableMap
					projection="geoMercator"
					className="absolute top-0 w-full"
				>
					<ZoomableGroup
						center={zoomCenter}
						zoom={zoomLevel}
						minZoom={0.4}
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
										fill="#666"
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
