import { Navbar } from "./navbar"

export const Layout = ({ children }) => {
    return(
        <div>
            <Navbar />
            <div>
                {children}
            </div>
        </div>
    )
}