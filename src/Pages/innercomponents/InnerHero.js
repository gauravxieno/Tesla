import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

export default function InnerHero(props) {
	return(
		<>
			<Wrapper bg={props.bg} className="h-screen bg-cover bg-bottom">
                <div className="container mx-auto flex flex-wrap content-between h-full">
                    <div className="w-full pt-24 text-center">
                        <h2 className="text-4xl font-semibold mb-2">{props.title}</h2>
                        <p className="text-lg">{props.subTitle}</p>
                    </div>
                <Fade bottom>
                    <specificationWrapper className="w-full flex justify-between items-center max-w-5xl mx-auto pb-16 text-white">
                        {props.specifications.map(specification => (
                            <div className="text-center" key={specification.id}>
                                <h3 className="text-2xl font-bold">{specification.numbers}</h3>
                                <p>{specification.info}</p>
                            </div>
                            ))
                        }  
                        <div>
                            {props.orderBtn && 
                                <a href="#" className="w-full sm:w-48 rounded-3xl text-white p-2 mx-3 my-2 sm:my-0 block text-center border-2 border-white text-white">{props.orderBtn}</a>
                            }
                        </div>
                    </specificationWrapper>
                </Fade>
                </div>
			</Wrapper>
		</>
	)
}

const Wrapper = styled.section`
	background-image: url(${props => props.bg});
`
const specificationWrapper = styled.section``;