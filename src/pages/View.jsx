import { useParams } from "react-router"
import { Layout } from "../components/layout"
import { useEffect } from "react";
import { useBookContext } from "../store/ContextProvider"
import { useState } from "react";

export const View =  () => {
    
    const [item,setItem] = useState(null);
    const params = useParams();
    const store = useBookContext();

    useEffect(() => {
        const book = store.getItem(params.bookid)
        setItem(book)
    },[])
    

if (!item){
    return (
    <Layout>
        <div>Item Not Found</div>
    </Layout>
    )
}

    return (
            <Layout>
            <h2>
                {item?.title}
            </h2>
            <div>
                {item?.cover? <img src={item.cover} width="200px" alt={item.title}  /> : ""}
            </div>
            <div>
                {item?.author}
            </div>
            <div>
                {item?.intro}
            </div>
            <div>
                {item?.completed? "Completed" : "Not Completed"}
            </div>
            <div>
                {item?.review}
            </div>
            </Layout>
    )
}


export default View