import 'swiper/css';
import "./styles/index.css";
import "swiper/css/autoplay";
import { useState } from 'react';
import { Autoplay } from 'swiper/modules';
import { FiMapPin } from "react-icons/fi";
import MainMenuData from '../data/menu.data';
import ProductData from "../data/product.data";
import { IoCallOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from "../components/ProductCard";
import LayoutImage from "../assets/images/layout.png"
import MainMenuCard from '../components/MainMenuCard';
import Video1 from "../assets/videos/video1.mp4"
import Video2 from "../assets/videos/video2.mp4"
import Video3 from "../assets/videos/video3.mp4"
import Video4 from "../assets/videos/video4.mp4"
import FloatingSocial from '../components/FloatingSocial';
import AboutVideo from "../assets/videos/about.mp4";

import About1 from "../assets/images/filter_coffee.jpg"
import About2 from "../assets/images/ghee_idli.jpg"
import About3 from "../assets/images/banner.jpg"
import About4 from "../assets/images/podi_plain_dosa.jpg"

import Banner1 from "../assets/images/banner.jpg";
import UpperNavigation from '../components/UpperNavigation';

// Features
import { SiCoffeescript } from "react-icons/si";
import { PiBowlFoodFill } from "react-icons/pi";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function IndexPage() {

    const [activeMainMenu, setActiveMainMenu] = useState("bengaluru-ghee-dose")
    const changeMenuSelection = (key: string) => {
        setActiveMainMenu(key)
    }

    return <>
        <FloatingSocial />
        <div className="landing-section">
            <Swiper modules={[Autoplay]} autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                // pauseOnMouseEnter: true,
            }}

                loop={true}>
                <SwiperSlide>
                    <div className="landing-slider-container">
                        <img src={Banner1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="landing-slider-container">
                        <img src={Banner1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="landing-slider-container">
                        <img src={Banner1} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="landing-bg">
                <div className='landing-bg-item'>
                    <UpperNavigation />
                    <div className="landing-txt-cont">
                        <div className="">
                            <h1 className="landing-title">Benneluru: Now in Jaipur</h1>
                            <p className="landing-subtitle">From Bengaluru to Jaipur Hearts</p>
                            {/* <a href="#">Authentic Taste</a> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>


        <section className="resturant-features-container cent">
            <div className="resturant-features-container-item row">
                <div className="rFeature-card row">
                    <PiBowlFoodFill />
                    <div className="feature-content col">
                        <span>Freshly Made Dosa's : Authentic Bangalore Style Batter</span>
                        <p>Made To Order, Served Hot</p>
                    </div>
                </div>
                <div className="rFeature-card row">
                    <SiCoffeescript />
                    <div className="feature-content col">
                        <span>Pure Filter Coffee : Traditional Decoction Method
                        </span>
                        <p>Strong, Aromatic & Authentic</p>
                    </div>
                </div>
                <div className="rFeature-card row">
                    <FaMapMarkerAlt />
                    <div className="feature-content col">
                        <span>Original Recipes From Bengaluru
                        </span>
                        <p>No fusion, no shortcuts</p>
                    </div>
                </div>
            </div>

        </section>

        <section className="menu-categories cent">
            <div className="menu-categories-item">
                <div className="menu-cat-header-container cent">
                    <h1 className="heading-1">Signature from Bengaluru</h1>

                </div>
                <div className="-categories">
                    <Swiper
                        spaceBetween={30}
                        // slidesPerView={3}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        centeredSlides={false}
                        loop={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,   // mobile
                            },
                            640: {
                                slidesPerView: 2,   // small tablets
                            },
                            1024: {
                                slidesPerView: 3,   // laptops/desktops
                            },
                            1440: {
                                slidesPerView: 5,   // large screens
                            },
                            1920: {
                                slidesPerView: 5
                            }
                        }}
                    >
                        {MainMenuData.map(menu => <SwiperSlide key={menu.id}>
                            <MainMenuCard {...menu} />
                        </SwiperSlide>)}
                    </Swiper>
                </div>
            </div>
        </section>

        <section className="menu-container cent">
            <div className="menu-item">
                <div className="menu-header-container">
                    <h1 className="heading-1">Our Menu</h1>
                </div>
                <div className="menu-tags-container row">
                    {
                        MainMenuData.map(item => <div key={item.id} className={`menu-selection-tag ${activeMainMenu === item.key ? "active" : ""}`} onClick={() => changeMenuSelection(item.key)}>
                            <p>{item.title}</p>
                        </div>)
                    }
                </div>
                <div className="menu-product-container">
                    <Swiper
                        spaceBetween={50}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        loop={true}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,   // mobile
                            },
                            640: {
                                slidesPerView: 2,   // small tablets
                            },
                            1024: {
                                slidesPerView: 3,   // laptops/desktops
                            },
                            1440: {
                                slidesPerView: 4,   // large screens
                            },
                            1920: {
                                slidesPerView: 4
                            }
                        }}
                    >
                        {ProductData.map((product) => {
                            if (product.tags === activeMainMenu) {
                                return <SwiperSlide key={product.id}>
                                    <ProductCard  {...product} />
                                </SwiperSlide>
                            }
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
        <section className="gallery-conatiner row">
            <div className="gallery-img-container col">
                <img
                    src={Banner1}
                    alt="Gallery Img1"
                    className="gallery-img-1"
                />
                <img
                    src={About2}
                    alt="Gallery Img2"
                    className="gallery-img-2"
                />
            </div>
            <div className="gallery-vid-container cent">
                <video
                    src={AboutVideo}
                    autoPlay
                    muted
                    loop
                    className="galler-video">
                </video>
            </div>
            <div className="gallery-img-container col">
                <img
                    src={About3}
                    alt="Gallery Img4"
                    className="gallery-img-4"
                /><img
                    src={About4}
                    alt="Gallery Img5"
                    className="gallery-img-5"
                />
            </div>
        </section>

        <section className="special-menu cent">
            <div className="special-menu-item">
                <div className="special-menu-header">
                    <h1 className="heading-1">Specials</h1>
                </div>

                <div className="container-products">
                    {
                        ProductData.map((product, index) => {
                            if (index < 4) {
                                return <ProductCard key={product.id} {...product} />
                            }
                        })
                    }
                </div>
            </div>
        </section>

        <div className="about-header-section cent">
            <div className="about-header-item">
                <h1 className='about-heading'>Our Story</h1>
            </div>
        </div>
        <div className="about-section cent">
            <div className="about-section-item row">
                <div className='about-media-item cent'>
                    <div className="about-mm-container row">
                        <video className="about-video" src={AboutVideo} autoPlay muted loop></video>
                        <div className="about-mm-photo">
                            <div className="about-img-cont row">
                                <img className="about-img-1" src={About1} alt="" />
                                <img className="about-img-2" src={About2} alt="" />
                            </div>
                            <div className="about-img-cont row">
                                <img className="about-img-3" src={About3} alt="" />
                                <img className="about-img-4" src={About4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='about-txt-item cent'>
                    <div className='about-txt-div'>
                        <p><span className="about-benneuluru">Benneluru</span> is a celebration of authentic South Indian flavours, inspired by the everyday rituals of Bengaluru and brought thoughtfully to the pink city . Rooted in tradition, we focus on time-honoured processes, carefully sourced ingredients, and uncompromised quality.</p>
                        <br />
                        <p>Our name reflects our philosophy, Benne means butter, symbolising warmth and richness while Uru means place, a space that feels like home. Together, Benneluru is a place where tradition, flavour, and nostalgia come together.</p>
                        <br />
                        <p>From comforting classics to lesser-known specialties, Benneluru introduces tastes that feel both nostalgic and entirely new.
                            Every bite at benneluru is designed to transport you, creating a sensory journey that connects you to Bengaluru's culinary soul.
                        </p>
                        <br />
                        <blockquote>An experience that begins in Bengaluru and unfolds beautifully in the heart of the pink city.</blockquote>
                    </div>
                </div>
            </div>
        </div>

        <div className="video-section-container">
            <div className="video-section-item row">
                <div className="video-card">
                    <video className="video-card-bg" src={Video1} autoPlay loop muted ></video>
                </div>
                <div className="video-card">
                    <video className="video-card-bg" src={Video2} autoPlay loop muted ></video>
                </div>
                <div className="video-card">
                    <video className="video-card-bg" src={Video3} autoPlay loop muted ></video>
                </div>
                <div className="video-card">
                    <video className="video-card-bg" src={Video4} autoPlay loop muted ></video>
                </div>
            </div>
        </div>
        <div className="address-container cent">
            <div className="address-item row">
                <div className="address-map-item cent">
                    <iframe className="address-map-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.840334972806!2d75.7986332!3d26.908561900000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5a7a9692891%3A0xd411c4868c99435b!2sBenneluru!5e0!3m2!1sen!2sin!4v1767594434184!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="address-txt-item cent">
                    <div className="address-txt-box col">
                        <div className="address-txt-div row">
                            <FiMapPin className="address-txt-svg" /><p className="address-txt-p">  Direction: <a href="https://maps.app.goo.gl/NasrPbbV64LcSvCEA" target="_blank" rel="noopener noreferrer">F-91A, Gautam Marg, C Scheme, Ashok Nagar, Jaipur, Rajasthan 302001</a></p>
                        </div>
                        <div className="address-txt-div row">
                            <IoCallOutline className="address-txt-svg" /> <p className="address-txt-p"> <a href="tel:+917889440384">+91 7889440384</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>
}