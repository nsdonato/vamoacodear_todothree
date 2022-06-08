import { Form } from './components/Form/Form'
import { List } from './components/List/List'
import { uselocalStorage } from './hooks/uselocalStorage'
import './App.css'

function App() {
  const [items, setItems] = uselocalStorage('items', [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const inputValue = e.target.item.value.trim()
    if (!inputValue) return

    setItems((prevState) => [...prevState, { id: +new Date(), value: inputValue, completed: false }])

    e.target.item.value = ''
  }
  return (
    <div className="App">
      <Form onSubmit={handleSubmit} />
      <List items={items} setItems={setItems} />
    </div>
  )
}

export default App
