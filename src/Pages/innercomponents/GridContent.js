import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

const GridContent = (props) => {
    return (
       <>
       <Wrapper className="bg-black py-12">

        <GridSection className="container mx-auto">
            {props.gridData.map((grid) => (
                <Fade down key={grid.id}>
                    <Grid className="flex justify-between items-center w-7/12 mx-auto">
                        <ImageSection className='w-5/12' orderimg={grid.orderimage}>
                            <img src={grid.image} alt={grid.title} />
                        </ImageSection>
                        <ContentSection className='w-5/12 text-white' ordercon={grid.ordercontent}>
                            <h3 className='text-2xl font-bold mb-4'>{grid.title}</h3>
                            <p>{grid.description}</p>
                        </ContentSection>
                    </Grid>
                </Fade>
                ))
            }  
        </GridSection>

        </Wrapper>
        </>
            
    );
}

export default GridContent;


const Wrapper = styled.section``
const GridSection = styled.div`
`
const Grid = styled.div``
const ImageSection = styled.div`
    order: ${props=>props.orderimg};`
const ContentSection = styled.div`
    order: ${props=>props.ordercon};
  `