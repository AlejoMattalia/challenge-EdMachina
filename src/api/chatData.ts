import PersonOne from '@/assets/img/personOne.png'
import PersonTwo from '@/assets/img/personTwo.png'
import PersonThree from '@/assets/img/personThree.png'
import PersonFour from '@/assets/img/personFour.png'
import type { ChatMessage } from '@/types/ChatInterface'

export const chatData: ChatMessage[] = [
  {
    id: '1',
    name: 'Emma Wilson',
    date: '15:56',
    message:
      'Hey, how have you been? It’s been a while since we last talked, and I was just thinking about you today. I wanted to check in and see how everything is going with your plans and projects.',
    connecting: true,
    unansweredMessage: 0,
    img: PersonOne,
  },
  {
    id: '2',
    name: 'Olivia Davis',
    date: 'Wed',
    message:
      'I’m doing well, thanks for asking! It’s been a pretty hectic week with a lot going on at work, but I finally managed to catch up on everything. How about you? Hope you’re doing great too!',
    connecting: false,
    unansweredMessage: 0,
    img: PersonTwo,
  },
  {
    id: '3',
    name: 'James Anderson',
    date: 'Tue',
    message:
      'That sounds great! How about you? Last time we talked, you mentioned some big changes at work and that you were feeling a bit overwhelmed. Have things settled down, or is it still a crazy workload?',
    connecting: true,
    unansweredMessage: 2,
    img: PersonThree,
  },
  {
    id: '4',
    name: 'Daniel Thompson',
    date: 'Tue',
    message: 'I’m doing well too, thanks! Lately.',
    connecting: false,
    unansweredMessage: 3,
    img: PersonFour,
  },
]
