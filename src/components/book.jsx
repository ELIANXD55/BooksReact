import { Link } from "react-router-dom";

export const Book = ({ item}) => {
    return (
        <div>
            <Link to={"/view/"+item.id}>
            <img src={item.cover} width="200px" alt={item.title} />
            </Link>
            <div>
                {item.title}
            </div>
        </div>
    )
};