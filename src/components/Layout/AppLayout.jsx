import { Outlet, useNavigation } from "react-router";
import { Home } from "../../pages/Home";
import { Footer } from "./Footer"
import { Header } from "./Header"

const AppLayout = () => {
const Navigation= useNavigation();
console.log(Navigation)

if(Navigation.state==="loading") return <h1 style={{textAlign:"center",paddingTop: 300, fontSize:80}}>Loading...</h1>

    return (
        <>
            <Header />
            <Outlet/>
            <Footer />
        </>
    )
}

export default AppLayout;