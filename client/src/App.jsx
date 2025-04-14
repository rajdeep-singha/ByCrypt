import { Navbar,Welcome,Footer,Services,Transaction } from "./components";

const App = () => {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-[#181918]">
            <div className="gradient-bg-welcome">
                <Navbar />
                <Welcome />
                </div>
            <Services />
            <Transaction />
            <Footer />
        </div>
    )
}

export default App