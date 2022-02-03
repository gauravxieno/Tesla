import React from 'react'
import Section from './Section'

export default function Home(){
	return(
		<>
			<Section 
				title="Model 3"
				tagline="Order Online for touchless delivery"
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
				arrow
				bg="solar-roof.jpg"
			/>
			<Section 
				title="Model Y"
				tagline="Order Online for touchless delivery"
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
			/>
			<Section 
				title="Model S"
				tagline="Order Online for touchless delivery"
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
			/>
			<Section 
				title="Model X"
				tagline="Order Online for touchless delivery"
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
			/>
			<Section 
				title="Solar Panels"
				tagline="Lower Cost Solar Panels in India"
				leftBtn="Order Now"
				rightBtn="Learn More"
			/>
			<Section 
				title="Solar Roof"
				tagline="Produce Clean Energy from your roof"
				leftBtn="Order Now"
				rightBtn="Learn More"
			/>
			<Section 
				title="Accessories"
				leftBtn="Order Now"
			/>			
		</>
	)
}