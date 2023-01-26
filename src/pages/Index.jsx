import { useBookContext } from "../store/ContextProvider"
import { Link } from "react-router-dom"
export const Index = () => {

const store = useBookContext()
   
return (
    <div>
        {store.items.map((item) => (<div>
            {item.title}
        </div>))}
        
    </div>
)


    }




export default Index