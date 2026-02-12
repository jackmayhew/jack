import type { ProjectDetails } from '~/types/project/project-details-types'
import { githubUsername } from '~/constants/social-links'

export const projectDetails: ProjectDetails[] = [
  {
    title: 'Soundle',
    slug: 'soundle',
    subtitle: 'A daily audio puzzle.',
    image: '/img/projects/soundle.webp',
    paragraphs: [
      `Soundle gives you a daily audio clip and you guess what it is. Get it wrong and the LLM gives you a hint to narrow it down.`,
      `The puzzle difficulty has to feel fair. Too easy and it's boring. Too hard and people give up. Finding that balance takes a lot of tweaking and will continue to be a WIP.`,
      `Getting the LLM to judge answers accurately was tricky too. It needed to accept creative responses without being too lenient.`,
      `Add in user stats, results sharing and a snappy UI, and it turned into a solid full-stack project. Fun!`,
    ],
    stack: 'Nuxt 4, TypeScript, Pinia, Zod, Fastify, PostgreSQL',
    url: 'https://soundle.game/',
    githubUrl: `${githubUsername}/soundle`,

  },
  {
    title: 'CampVI',
    slug: 'campvi',
    subtitle: 'The go-to Vancouver Island camping resource.',
    image: '/img/projects/campvi.webp',
    paragraphs: [
      `I got tired of bouncing between a dozen sites every time I wanted to find a new campsite. So I built CampVI to fix that. One website with (almost) every campsite on the island, from provincial parks to hidden off-grid spots.`,
      `The interactive map and search features make it easy to find new campsites without the usual headache. It's turned into something people actually use, which is cool.`,
    ],
    stack: 'Next.js, TypeScript, Sanity',
    url: 'https://www.campvi.ca/',
  },
  {
    title: 'Refuge Kitty-Kat Rescue',
    slug: 'refuge-kitty-kat-rescue',
    subtitle: 'Helping cats find new homes.',
    image: '/img/projects/refuge.webp',
    paragraphs: [
      `Refuge Kitty-Kat needed a new website. Their old one made it harder than it should've been for people to donate, volunteer, or adopt. I rebuilt it from scratch with those three things as the priority.`,
      `The results have been good. More donations are flowing in, volunteer applications are up, and adoption rates are climbing. The site's also ranking well for local searches like: ['cat rescue montreal.'](https://www.google.ca/search?q=cat+rescue+montreal)`,
      `Nice knowing the work is helping cats find homes.`,
    ],
    stack: 'Next.js, Tailwind, Hygraph',
    url: 'https://www.refugekittykat.com/',
  },
  {
    title: 'Loon',
    slug: 'loon',
    subtitle: 'Shop Canadian, without the extra legwork.',
    image: '/img/projects/loon.webp',
    paragraphs: [
      `**LOON IS ARCHIVED.** Adding product data, marketing, and development became too time-consuming for a side project. The code's open-source if another dev wants to run with it.`,
      `Shopping Canadian online was annoying. You'd find something on Amazon, then have to manually search for a local store that carried it.`,
      `Loon handles that for you. It's a browser extension that shows Canadian alternatives while you shop online.`,
      `It was a solid project for tackling challenges like product matching, database design, and extension architecture.`,
    ],
    stack: 'Vue 3, TypeScript, UnoCSS, Fastify, PostgreSQL',
    url: 'https://getloon.ca/',
    githubUrl: `${githubUsername}/loon`,
  },
]
