import React from 'react'
import styled from 'styled-components'

export default function Section(props){
	return(
		<Wrapper className="w-full h-screen bg-cover bg-center flex flex-wrap content-between pt-36 text-center">
			<ModelName className="w-full">
				<h1 className="text-4xl font-semibold mb-5">{props.title}</h1>
				<p>{props.tagline}</p>
			</ModelName>

			<CTA className="w-full h-44">
				<ButtonGroup className="flex justify-center w-full">
					<LeftBtn className="w-60 rounded-3xl bg-stone-800 text-white p-2 mx-3">{props.leftBtn}</LeftBtn>
					{props.rightBtn && 
						<RightBtn className="w-60 rounded-3xl bg-slate-200 text-black p-2 mx-3">{props.rightBtn}</RightBtn>
					}
				</ButtonGroup>

				{props.arrow && 
				<Arrow className="mt-16 mb-5">
					
					<i class="fas fa-chevron-down text-2xl pointer"></i>
			
				</Arrow>
				}
				
				
			</CTA>

		</Wrapper>
	)
}


const Wrapper = styled.section`
	background-image: url(../images/${(props) => props.bg});
`
const ModelName = styled.div``
const ButtonGroup = styled.div``
const LeftBtn = styled.button``
const RightBtn = styled(LeftBtn)``
const Arrow = styled.div`
	i {
		animation: bounce infinite 2s;
	}
`
const CTA = styled.div``