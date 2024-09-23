import Header from "./components/Header"
import JournalEntry from "./components/JournalEntry"
import Footer from "./components/Footer"
import data from "./data"

function App() {
    const journalEntries = data.map((entry) => {
        return <JournalEntry key={entry.id} {...entry} />
    })
    return (
        <div className="app-container">
            <Header />
            <main>{journalEntries}</main>
            <Footer />
        </div>
    )
}

export default App
