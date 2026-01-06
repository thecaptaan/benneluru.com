import "./styles/MainMenuCard.css";
interface MainMenuCardInterface {
    title: string;
    description: string;
    backgroundImg: string;
}

export default function MainMenuCard({ title, description, backgroundImg }: MainMenuCardInterface) {
    return <div className="menu-header-card cent col" style={{ backgroundImage: `url(${backgroundImg})` }}>
        <div className="menu-header-item">
            <h2>{title}</h2>
            <span>{description}</span>
        </div>

    </div>
}