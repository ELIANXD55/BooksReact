import useAppContext from "../store/store"
import { Link } from "react-router-dom"
export const Index = () => {
    
    const store = useAppContext()
    
    return (
        <div>
            {store.items.map((item) => (<div>
                {item.title}
            </div>))}
            {console.log(store.items)}
        </div>
    )
}


export default Index