import '@/styles/app.css'
import { Vocab } from './data/vocab'
import { Form } from './components'

function App() {
	return (
		<>
			<Form />
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
