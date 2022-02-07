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
				bg="model-3.jpg"
			/>
			<Section 
				title="Model Y"
				tagline="Order Online for touchless delivery"
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
				bg="model-y.jpg"
			/>
			<Section 
				title="Model S"
				tagline="Order Online for touchless delivery"
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
				bg="model-s.jpg"
			/>
			<Section 
				title="Model X"
				tagline="Order Online for touchless delivery"
				leftBtn="Custom Order"
				rightBtn="Existing Inventory"
				bg="model-x.jpg"
			/>
			<Section 
				title="Solar Panels"
				tagline="Lower Cost Solar Panels in India"
				leftBtn="Order Now"
				rightBtn="Learn More"
				bg="solar-panel.jpg"
			/>
			<Section 
				title="Solar Roof"
				tagline="Produce Clean Energy from your roof"
				leftBtn="Order Now"
				rightBtn="Learn More"
				bg="solar-roof.jpg"
			/>
			<Section 
				title="Accessories"
				leftBtn="Order Now"
				bg="accessories.jpg"
			/>			
		</>
	)
}