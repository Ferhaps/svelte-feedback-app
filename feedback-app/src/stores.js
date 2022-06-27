import { writable } from 'svelte/store'

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: 'Svelte is awesome!',
  },
  {
    id: 2,
    rating: 9,
    text: 'Angular is great!',
  },
  {
    id: 3,
    rating: 8,
    text: 'React is good!',
  },
])