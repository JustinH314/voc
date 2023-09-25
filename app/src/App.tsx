import '@/styles/app.css'
import { Vocab } from './data/vocab'
import { Form } from './components'

function App() {
	return (
		<div className="p-4 bg-sky-500 w-[590px]">
			<Form />
		</div>
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
