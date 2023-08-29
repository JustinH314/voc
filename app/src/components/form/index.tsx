import { useForm } from 'react-hook-form'

export default function Form() {
	const { register, handleSubmit } = useForm()
	return (
		<form
			onSubmit={handleSubmit((data) => {
				alert(JSON.stringify(data))
			})}
		>
			<fieldset>
				<label htmlFor="content">Content</label>
				<input
					type="text"
					placeholder="Enter content to learn ..."
					{...register('content')}
				/>
			</fieldset>
			<fieldset>
				<label htmlFor="type">Type</label>
				{/* <input type="text" placeholder="Enter type ..." id="type" /> */}
				<select {...register('type')}>
					<option value="noun">Noun</option>
					<option value="verb">Verb</option>
					<option value="adjective">Adjective</option>
					<option value="adverb">Adverb</option>
				</select>
			</fieldset>
			<button type="submit">submit</button>
		</form>
	)
}
