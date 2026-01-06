import "./styles/ProductCard.css";
interface ProductCardInterface {
    title: string;
    imgSrc: string;
    imgAlt: string;
    rating: string;
    description: string;
}
export default function ProductCard({ title, imgSrc, imgAlt, rating, description }: ProductCardInterface) {
    return <div className="product-card">
        <div className="product-card-img-container">
            <img className="product-card-img " src={imgSrc} alt={imgAlt} />
        </div>
        <div className="product-card-txt-conatiner">
            {rating == "" ? "" : <div className="stars">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-regular fa-star"></i>
            </div>}
            <h3>{title}</h3>
            <p className="product-card-description">
                {description}
            </p>
        </div>
    </div>
}