import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

export default function Interior(props) {
	return(
		<>
		
			<InteriorWrapper bg={props.bg} className="h-screen bg-cover">
			<div class="container mx-auto flex flex-wrap content-between h-full">
					<div class="w-full pt-24 text-center">
						<h3 class="text-4xl font-semibold text-white"><Fade bottom>{props.title}</Fade></h3>
					</div>
			</div>
			</InteriorWrapper>
		
		</>
	)
}

const InteriorWrapper = styled.section`
	background-image: url(${props => props.bg});
`