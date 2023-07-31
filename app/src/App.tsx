import '@/styles/app.css'
import { terms } from './data/mock'
import { Vocab } from './data/vocab'
import { MagicBox } from './components'

function App() {
	return (
		<>
			<MagicBox />
			<button onClick={() => alert('hello')}>Add</button>
			{terms.map((voc) => {
				return <Card {...voc} />
			})}
		</>
	)
}

function Card({ value, translation }: Vocab) {
	return (
		<div>
			<h3>{value}</h3>
			<p>{translation[0]}</p>
		</div>
	)
}

export default App
