import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import sliders from "./Sliders";
import Steve from '../images/Steve.jpg'
import GabeN from '../images/GabeN.jpg';
import Mark from '../images/Mark-Zuckerberg-2019.jpg';
import Bill from '../images/8xe3vim9p8f8ori1o3ert3tgts25ira9.jpg';
import {Typography} from "@mui/material";


function Carousell() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        height: '45vh',
        width: '80vw',
        autoplay: true,
        autoplaySpeed: 7000


    };

    return (
        <Slider {...settings} className="Slider">
            <div>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <img src={Steve} alt='slide-1' style={{width: '45vw', height: '45vh'}}/>
                    <Typography variant="h5" compoent="div" sx={{marginLeft: "1vw"}}>"Когда я начинал, у меня было лишь ограниченное представление о программировании. Курсы в ItArt
                        дали мне фундаментальные знания, которые помогли создать Apple и вдохновить многих. Без этого
                        опыта я бы не смог изменить мир технологий."</Typography>
                </div>
            </div>
            <div>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <img src={GabeN} style={{width: '45vw', height: '45vh'}} />
                    <Typography variant="h5" compoent="div" sx={{marginLeft: "1vw"}}>"Valve и Steam были реализацией моей страсти к играм и технологиям. ItArt дал мне основы
                        программирования, необходимые для создания новаторских продуктов. Без них невозможно было бы
                        создать то, что сегодня меняет игровую индустрию."</Typography>
                </div>
            </div>
            <div>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <img src={Mark} style={{width: '45vw', height: '45vh'}}/>
                    <Typography variant="h5" compoent="div" sx={{marginLeft: "1vw"}}>"Курс в ItArt стал отправной точкой для меня. Он дал мне понимание программирования, которое
                        позволило создать Facebook и объединить миллионы людей. Спасибо куратору Артему за этот
                        фундаментальный опыт."</Typography>
                </div>
            </div>
            <div>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <img src={Bill} style={{width: '45vw', height: '45vh'}} />
                    <Typography variant="h5" compoent="div" sx={{marginLeft: "1vw"}}>"Microsoft начала с мечты о каждом доме и офисе, имеющих компьютер. ItArt был моим техническим
                        стартом, обеспечив основы для создания Windows. Благодарность куратору Артему за то, что он
                        делает для будущих программистов."</Typography>
                </div>
            </div>

        </Slider>
    )
}

export default Carousell;