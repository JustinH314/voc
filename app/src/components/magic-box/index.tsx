import { type ChangeEvent, useRef, useEffect, useState } from 'react'

export default function MagicBox() {
	const [count, setCount] = useState<number>(0)
	const ref = useRef<HTMLInputElement>(null)
	const handleChange = (event: ChangeEvent<HTMLInputElement>) =>
		console.log(event.target.value)

	useEffect(() => {
		console.log('haha')
		setCount(10)
	}, [count])
	return (
		<div>
			<input ref={ref} type="text" placeholder="text" onChange={handleChange} />
			{count}
			<button onClick={() => setCount(2)}>+</button>
		</div>
	)
}
