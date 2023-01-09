import {Navbar} from "./Components/Navbar/Navbar"
import {Header} from "./Components/Header/Header"
import {About} from "./Components/About/About"
import {Experience} from "./Components/Experience/Experience"
import {Portfolio} from "./Components/Portfolio/Portfolio"
import {Contact} from "./Components/Contact/Contact"
import {Footer} from "./Components/Footer/Footer"

export function App() {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <Experience />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    )
}