import {useState} from 'react'
import {useGlobalContext} from '../context'

const Search = () => {
    const[text, setText] = useState('')

    const {setSearchTerm} = useGlobalContext()

    const handleChange = (e) => {
        setText(e.target.Value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (text) {
            setSearchTerm(text)
            setText('')
        }
    }


    return <header className="search-container">Search Component
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search for a meal" className="form-input" value={text} onChange={handleChange}/>
            <button type="submit" className="btn">Search</button>
            <button type="button" className="btn btn-hipster">Surprise Me!</button>
        </form>
    </header>
}

export default Search