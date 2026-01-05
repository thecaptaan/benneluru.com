import "./styles/ProductCard.css";
interface ProductCardInterface{
    title: string;
    imgSrc: string;
    imgAlt: string;
    rating: string;
    description: string;
}
export default function ProductCard({ title, imgSrc, imgAlt, description }: ProductCardInterface) {
    return <div className="card-product">
        <div className="container-img">
            <img src={imgSrc} alt={imgAlt} />
            {/* <span className="discount">-13%</span> */}
        </div>
        <div className="content-card-product">
            <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
            </div>
            <h3>{title}</h3>
            <p className="product-card-description">
                {description}
            </p>
        </div>
    </div>
}