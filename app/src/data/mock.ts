import { Vocab } from './vocab'

export const terms: Vocab[] = [
	{
		id: 1,
		partOfSpeech: 'noun',
		value: 'vocabulary',
		translation: ['單字'],
		common: true,
		count: 0,
		createdAt: new Date(2023, 6, 3, 20, 34),
		updatedAt: new Date(2023, 6, 3, 20, 34),
		difficulty: 'easy',
	},
	{
		id: 2,
		partOfSpeech: 'noun',
		value: 'narval',
		translation: ['獨角鯨'],
		common: false,
		count: 0,
		createdAt: new Date(2023, 6, 10, 19, 38),
		updatedAt: new Date(2023, 6, 10, 19, 38),
		difficulty: 'easy',
	},
	{
		id: 3,
		partOfSpeech: 'adjective',
		value: 'novel',
		translation: ['新穎的'],
		common: true,
		count: 0,
		createdAt: new Date(2023, 6, 10, 19, 38),
		updatedAt: new Date(2023, 6, 10, 19, 38),
		difficulty: 'easy',
	},
]
