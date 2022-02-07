import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

export default function Footer(){
    return(
        <div>
            <Fade>
                <FooterMenu className="container mx-auto mb-8">
                    <ul className="flex justify-center">
                        <li><a href="#">Tesla © 2022</a></li>
                        <li><a href="#">Privacy &amp; Legal</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">News</a></li>
                        <li><a href="#">Engage</a></li>
                        <li><a href="#">Locations</a></li>

                    </ul>
                </FooterMenu>
            </Fade>
        </div>
    )
}

const FooterMenu = styled.div`
 li {
     margin: 0 10px;
 }
 a {
     font-size: 14px;
     color: #333;
 }
`