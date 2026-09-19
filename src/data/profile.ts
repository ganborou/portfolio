/** Fill with the owner's confirmed destinations; empty values are not clickable. */
export const profile: {
  contact: string | null
  resume: string | null
  socials: { label: string; href: string | null }[]
} = {
  contact: 'mailto:dzihiko07+work@gmail.com',
  resume: null,
  socials: [
    { label: 'Telegram', href: 'https://t.me/ganborou' },
    { label: 'Ig Portfolio', href: 'https://www.instagram.com/ganboroudesign/' },
    { label: 'Графика, арт', href: 'https://www.behance.net/ganborou' },
    { label: 'Большие кейсы', href: 'https://www.behance.net/LavrovaAnya' },
  ],
}
