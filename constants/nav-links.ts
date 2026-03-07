import { GITHUB_USERNAME } from '~/constants/social-links'

export const navigationLinks = [
  { path: '/about', name: 'About' },
  { path: '/now', name: 'Now' },
  { path: '/contact', name: 'Contact' },
  { path: GITHUB_USERNAME, name: 'GitHub', external: true },
]
