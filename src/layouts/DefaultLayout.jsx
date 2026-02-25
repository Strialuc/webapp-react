import { Outlet } from "react-router-dom";
import MainHeader from "../components/MainHeader";

const DefaultLayout = () => {

    return (
        <>
            <MainHeader />
            <main className="container">
                <Outlet />
            </main>
        </>

    )
}

export default DefaultLayout