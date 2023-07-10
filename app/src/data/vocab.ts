export interface Vocab {
	id: number

	// NOTE: case-sensitive
	value: string
	partOfSpeech: PartOfSpeech
	translation: string[]
	createdAt: Date
	updatedAt: Date
	count: number
	difficulty: Difficulty
	common: boolean
}

type PartOfSpeech = 'noun' | 'verb' | 'adjective' | 'adverb'
type Difficulty = 'easy' | 'medium' | 'hard'
