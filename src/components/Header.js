import React, {useState} from 'react'
import styled from 'styled-components'
import CloseIcon from '@mui/icons-material/Close';
/*import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './Home'
import Models from './pages/Models'*/

export default function Header(){

	const[menuStatus, setMenuStatus] = useState(false);
	return(
		<div>
			<SiteHeader className="flex justify-between py-5 px-5 fixed w-full">
				<SiteLogo className="logo w-40">
					<a aria-label="Tesla Logo" class="tds-site-logo-link" href="/"><svg class="tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg"><path d="M0 .1a9.7 9.7 0 007 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 007-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 006-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 00-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 13.8h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zm0 14.1h26a9.6 9.6 0 007.1-7H78.3a9.6 9.6 0 007 7zM308.5 7h26a9.6 9.6 0 007-7h-40a9.6 9.6 0 007 7z" fill="currentColor"></path></svg></a>
				</SiteLogo>
				<MenuMiddle>
					<ul className="flex">
						<MenuMiddleList><Menulink href="#">Model S</Menulink></MenuMiddleList>
						<MenuMiddleList><Menulink href="#">Model 3</Menulink></MenuMiddleList>
						<MenuMiddleList><Menulink href="#">Model X</Menulink></MenuMiddleList>
						<MenuMiddleList><Menulink href="#">Model Y</Menulink></MenuMiddleList>
						<MenuMiddleList><Menulink href="#">Solar Roof</Menulink></MenuMiddleList>
						<MenuMiddleList><Menulink href="#">Solar Panels</Menulink></MenuMiddleList>
					</ul>
					
				</MenuMiddle>
				<MenuRight>
					<ul className="flex">
						<MenuRightList><MenuRightLink href="#">Shop</MenuRightLink></MenuRightList>
						<MenuRightList><MenuRightLink href="#">Account</MenuRightLink></MenuRightList>
						<HamburgerIcon onClick={() => setMenuStatus(true)}>Menu</HamburgerIcon>
					</ul>
				</MenuRight>
				<HamburgerMenu open = {menuStatus} className="fixed bg-white top-0 right-0 bottom-0 w-80 flex flex-col pt-16">
					<CloseIconMenu onClick={() => setMenuStatus(false)} className="cursor-pointer absolute right-4 top-4"></CloseIconMenu>
					<li><a href="">Model S</a></li>
					<li><a href="">Model 3</a></li>
					<li><a href="">Model X</a></li>
					<li><a href="">Model X</a></li>
					<li><a href="">Solar Roof</a></li>
					<li><a href="">Solar Panels</a></li>
					<li><a href="">Accessories</a></li>
				</HamburgerMenu>
			</SiteHeader>
		</div>
	)
}

const SiteHeader = styled.header``
const SiteLogo = styled.div``
const MenuMiddle = styled.div`
	@media all and (max-width: 992px) {
		display: none;
	}
`
const MenuMiddleList = styled.li`
margin: 0 10px; 
`
const Menulink = styled.a`
	font-weight: 600;
`

const MenuRight = styled.div``
const MenuRightList = styled(MenuMiddleList)`
	@media all and (max-width: 992px) {
		display: none;
	}
`
const MenuRightLink = styled(Menulink)``
const HamburgerIcon = styled.button`
	font-weight: 600;
	margin: 0 10px;
`
const HamburgerMenu = styled.ul`
	right: ${props => props.open ? 0 : '-320px'};
	transition: all 0.5s ease-in-out;
	li {
		padding: 10px 20px;
	}
	a {
		font-weight: 600;
	}
`

const CloseIconMenu = styled(CloseIcon)``;