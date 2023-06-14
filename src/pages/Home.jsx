import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";
import { useContext } from "react";
import { loadContext } from "../Context/Context";
import Loading from "../components/Loading/Loading";

const Home = () => {
    const {load, setLoad } = useContext(loadContext)

    return ( 
        load?
        <>
            <Nav />
            <main>
                <section>
                    <h1>Home</h1>
                </section>
            </main>
            <Footer />
        </>:<><Loading /></>
     );
}
 
export default Home;