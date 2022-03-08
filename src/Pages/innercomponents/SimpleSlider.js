import React from "react";
import styled from 'styled-components'
import Slider from "react-slick";

export default function SimpleSlider(props) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <SliderWrapper className="overflow-hidden py-28">
        <div className="container w-7/12 mx-auto">
            <Slider {...settings}>
                {props.simpleslidercontent.map((SimpleSlider) => (
                        <SliderDiv className="">
                            <img src={SimpleSlider.image} />
                        </SliderDiv>
                    ))
                }
            </Slider>
        </div>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.section`
    .slick-arrow {
        border: 2px solid red;
    }
    .slick-arrow:before,
    .slick-arrow:after {
        color: #000;
    }
`
const SliderDiv = styled.div``