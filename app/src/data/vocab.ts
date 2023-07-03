interface Vocab {
	id: number
	value: string
	partOfSpeech: PartOfSpeech
	translation: string[]
	createdAt: string
	updatedAt: string
	freq: number
	difficulty: Difficulty
	common: boolean
}

type PartOfSpeech = 'noun' | 'verb' | 'adjective' | 'adverb'
type Difficulty = 'easy' | 'medium' | 'hard'
