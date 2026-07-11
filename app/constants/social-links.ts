import { Github, Mail } from 'lucide-vue-next'

export const TWITTER_USERNAME = 'https://x.com/username'
export const GITHUB_USERNAME = 'https://github.com/jackmayhew'
export const EMAIL_ADDRESS = 'hello@jackmayhew.com'
export const WEBSITE_URL = 'https://jackmayhew.com'

export const socialLinks = [
  {
    type: 'github',
    href: GITHUB_USERNAME,
    target: '_blank',
    rel: 'noopener',
    icon: Github,
    size: 36,
  },
  // {
  //   href: TWITTER_USERNAME,
  //   target: '_blank',
  //   rel: 'noopener',
  //   icon: 'lucide:twitter',
  //   size: 36,
  // },
  {
    type: 'email',
    href: `mailto:${EMAIL_ADDRESS}`,
    icon: Mail,
    size: 36,
  },
]
