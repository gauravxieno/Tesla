import React from 'react'
import InnerHero from './innercomponents/InnerHero'
import Interior from './innercomponents/Interior'
import GridContent from './innercomponents/GridContent'
import SimpleSlider from './innercomponents/SimpleSlider'

export default function Models(){
	let specification = [
        {
            id: 1,
            numbers : '396 mi',
            info : 'Range (EPA est.)'
        },
        {
            id: 2,
            numbers : '1.99 s',
            info : '0-60 mph*'
        },
        {
            id: 3,
            numbers : '200 mph',
            info : 'Top Speed*'
        },
        {
            id: 4,
            numbers : '1,020 bhp',
            info : 'Peak Power'
        }
    ];
    let griddata = [
        {
            id: 1,
            title : 'Stay Connected',
            image : 'MS-Interior-Grid-A-Desktop.jpg',
            description : 'Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.',
            orderimage: 1,
            ordercontent: 2
        },
        {
            id: 2,
            title : 'Game from Anywhere',
            image : 'MS-Interior-Grid-A-Desktop.jpg',
            description : 'A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.',
            orderimage: 2,
            ordercontent: 1
        },
        {
            id: 3,
            title : 'Room for Everything',
            image : 'MS-Interior-Grid-A-Desktop.jpg',
            description : 'With front and rear trunks and fold-flat seats you can fit your bike without taking the wheel off—and your luggage too..',
            orderimage: 1,
            ordercontent: 2
        }
    ];
    let slides = [
        {
            id: 1,
            image : 'audio.jpg'
        },
        {
            id: 2,
            image : 'connected.jpg'
        },
        {
            id: 3,
            image : 'game.jpg'
        },
        {
            id: 4,
            image : 'MS-Interior-Grid-A-Desktop.jpg'
        }
    ];
    return(
		<>
			<InnerHero
			bg="ms-main-hero-desktop.jpg"
			title="Model S"
			subTitle="Plaid"
			specifications = {specification}
			orderBtn="Order Now"
			/>
			<Interior
			bg="MS-Interior-Hero-Desktop.jpg"
			title="Interior of the Future"
			/>
            <GridContent 
            gridData = {griddata}
            />
            <SimpleSlider
            simpleslidercontent = {slides}
            />
		</>
    )
}