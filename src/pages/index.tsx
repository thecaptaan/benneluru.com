import 'swiper/css';
import "./styles/index.css";
import LayoutImage from "../assets/images/layout.png"
import { FiMapPin } from "react-icons/fi";
import { Link, Element } from 'react-scroll';
import ProductData from "../data/product.data";
import { IoCallOutline } from "react-icons/io5";
import ProductCard from "../components/ProductCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import MainMenuData from '../data/menu.data';
import MainMenuCard from '../components/MainMenuCard';
import Video1 from "../assets/videos/video1.mp4"
import Video2 from "../assets/videos/video2.mp4"
import Video3 from "../assets/videos/video3.mp4"
import Video4 from "../assets/videos/video4.mp4"

export default function IndexPage() {
    return <>

        <section className="banner">
            <div className="content-banner">
                <p>Benneluru: Now in Jaipur</p>
                <h2>From Bengaluru to <br />Jaipur Hearts</h2>
                <a href="#">Authentic Taste</a>
            </div>
        </section>

        <main className="main-content">
            <section className="container container-features">
                <div className="card-feature">
                    <i className="fa-solid fa-plane-up"></i>
                    <div className="feature-content">
                        <span>Freshly Made Dosa's : Authentic Bangalore Style Batter</span>
                        <p>Made To Order, Served Hot</p>
                    </div>
                </div>
                <div className="card-feature">
                    <i className="fa-solid fa-wallet"></i>
                    <div className="feature-content">
                        <span>Pure Filter Coffee : Traditional Decoction Method
                        </span>
                        <p>Strong, Aromatic & Authentic</p>
                    </div>
                </div>
                <div className="card-feature">
                    <i className="fa-solid fa-gift"></i>
                    <div className="feature-content">
                        <span>Original Recipes From Bengaluru
                        </span>
                        <p>No fusion, no shortcuts</p>
                    </div>
                </div>
                
            </section>

            <section className="container top-categories">
                <h1 className="heading-1">Signature from Bengaluru</h1>
                <div className="container-categories">
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={3}
                    >
                        {MainMenuData.map(menu => <SwiperSlide key={menu.id}>
                            <MainMenuCard {...menu} />
                        </SwiperSlide>)}
                    </Swiper>
                </div>
            </section>

            <section className="container top-products">
                <h1 className="heading-1">Major Products</h1>

                <div className="container-options">
                    <span className="active">Destacados</span>
                    <span>Más recientes</span>
                    <span>Mejores Vendidos</span>
                </div>

                <div className="container-products">
                    {ProductData.map((product, index) => {
                        if (index < 3) {
                            return <ProductCard key={product.id} {...product} />
                        }
                    })}
                </div>
            </section>

            <section className="gallery">
                <img
                    src={LayoutImage}
                    alt="Gallery Img1"
                    className="gallery-img-1"
                />
                <img
                    src={LayoutImage}
                    alt="Gallery Img2"
                    className="gallery-img-2"
                /><img
                    src={LayoutImage}
                    alt="Gallery Img3"
                    className="gallery-img-3"
                /><img
                    src={LayoutImage}
                    alt="Gallery Img4"
                    className="gallery-img-4"
                /><img
                    src={LayoutImage}
                    alt="Gallery Img5"
                    className="gallery-img-5"
                />
            </section>

            <section className="container specials">
                <h1 className="heading-1">Specials</h1>

                <div className="container-products">
                    {
                        ProductData.map((product, index) => {
                            if (index < 4) {
                                return <ProductCard key={product.id} {...product} />
                            }
                        })
                    }
                </div>
            </section>

            {/* <section className="container blogs">
                <h1 className="heading-1">About</h1>

            </section> */}
        </main>
        <div className="video-section-container cent">
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