import { Github, Mail } from 'lucide-vue-next'

export const twitterUsername = 'https://x.com/username'
export const githubUsername = 'https://github.com/jackmayhew'
export const emailAddress = 'hello@jackmayhew.com'
export const websiteUrl = 'https://jackmayhew.com'

export const socialLinks = [
  {
    type: 'github',
    href: githubUsername,
    target: '_blank',
    rel: 'noopener',
    icon: Github,
    size: 36,
  },
  // {
  //   href: twitterUsername,
  //   target: '_blank',
  //   rel: 'noopener',
  //   icon: 'lucide:twitter',
  //   size: 36,
  // },
  {
    type: 'email',
    href: `mailto:${emailAddress}`,
    icon: Mail,
    size: 36,
  },
]
