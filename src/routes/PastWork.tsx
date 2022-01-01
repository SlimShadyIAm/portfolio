import Contributions from "../components/Contributions"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"

const PastWork = () => {
    return (
        <>
            <div className="bg-slim-blue">
                <Header />
                <Hero title="My Previous Work" subtitle="A showcase of my past designs, projects" />
            </div>
            <Contributions />
            <Footer />
        </>
    )
}

export default PastWork
