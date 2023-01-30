import { Book } from "../components/book"
import { Layout } from "../components/layout"
import { useBookContext } from "../store/ContextProvider"




export const Index = () => {

const store = useBookContext()


return (
    <Layout >
        {store.items.map((item) => (
            <Book key={item.id} item={item}/>
        ))}
    </Layout>
)


    }




export default Index