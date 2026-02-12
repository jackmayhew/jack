import type { TimelineEvent } from '~/types/now/timeline-event.types'
import { githubUsername } from '~/constants/social-links'

export const now: TimelineEvent[] = [
  {
    displayDate: 'February 2026',
    formateDate: '2026-02-11',
    desc: `Moved home to Victoria a few months ago. Feels good to be back on the island. Just finished building [Soundle](https://soundle.game/), a daily sound puzzle game. Now I need to figure out how to actually launch this thing.`,
  },
  {
    displayDate: 'October 2024',
    formateDate: '2024-10-31',
    desc: `Built a new portfolio website (the one you're on now). Kept it simple and minimalist. First time building with Nuxt and I'm really liking it. The developer experience is smooth and the tooling is solid. You can check out the code on my [GitHub](${githubUsername}/jack-portfolio).`,
  },
  {
    displayDate: 'April 2024',
    formateDate: '2024-06-15',
    desc: `Worked with Refuge Kitty Kat Rescue to build their new website. Results have been good. More donations, volunteers, and cat adoptions. Cool to see the website actually help their mission.`,
  },
  {
    displayDate: 'December 2023',
    formateDate: '2022-11-01',
    desc: `Moved to Montreal! Still getting used to it but it's been good. My French is rusty but slowly coming back. Big fan of smoked meat sandwiches.`,
  },
]
