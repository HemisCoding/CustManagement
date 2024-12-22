import { defineStore } from 'pinia'





const getImgUrl = (imagePath: string) =>
  new URL(`${imagePath}`, import.meta.url).href

// const logoUrl = getImgUrl('@/assets/thermo-expert.png');

export const useAppData = defineStore('appData', () => {
  const title = ref('Customers Management')
  const socialLinks = ref([
    {
      name: 'Facebook',
      icon: 'mdi-facebook',
      link: 'https://www.facebook.com/p/Thermo-Expert-One%C5%9Fti-100063611289322/?locale=ro_RO',
      color: '#0F98F6',
    },
    {
      name: 'Instagram',
      icon: 'mdi-instagram',
      link: 'https://instagram.com',
      color: '#EF0075',
    },
  ])
  const contact = ref({
    phone: { value: '+40 748 905 981', icon: 'mdi-phone' },
    email: { value: 'thermoexpertsolution@yahoo.com', icon: 'mdi-email' },
  })
  const recentNews = ref([
    'Lorem ipsum dolor sit amet, consectetur.',
    'Donec at nunc eget massa bibendum ultrices.',
    'Donec non sem fermentum, malesuada augue.',
    'Sed pharetra metus vitae diam blandit.',
    'Proin quis lacus lobortis, semper arcu.',
  ])
  const blogPosts = ref([
    {
      title: 'Lorem ipsum dolor sit amet',
      text: 'Ut enim ad minima veniam, quis nostrum exercitatio ut enim ad minima. Ut enim ad minima veniam, quis nostrum exercitatio ut enim ad minima.',
      date: new Date().toLocaleDateString(),
      to: '/',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      text: 'Ut enim ad minima veniam, quis nostrum exercitatio ut enim ad minima. Ut enim ad minima veniam, quis nostrum exercitatio ut enim ad minima.',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24).toLocaleDateString(),
      to: '/',
    },
    {
      title: 'Lorem ipsum dolor sit amet',
      text: 'Ut enim ad minima veniam, quis nostrum exercitatio ut enim ad minima. Ut enim ad minima veniam, quis nostrum exercitatio ut enim ad minima.',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24 * 2).toLocaleDateString(),
      to: '/',
    },
  ])
  const recentPosts = ref([
    {
      text: 'Lorem ipsum dolor sit amet, consectetur. Donec at nunc eget massa bibendum ultrices.',
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
      }),
    },
    {
      text: 'Donec non sem fermentum, malesuada augue. Sed pharetra metus vitae diam blandit.',
      date: new Date(Date.now() - 1000 * 60 * 60 * 24).toLocaleDateString(
        'en-US',
        { month: 'long', day: 'numeric' }
      ),
    },
  ])
  const projects = ref([
   

  ])
  const instagramPosts = ref([
    {
      id: 1,
      src: getImgUrl(
        '../assets/instagram/ahmad-kadhim-GeHVEDrqMB8-unsplash.jpg'
      ),
    },
    {
      id: 2,
      src: getImgUrl(
        '../assets/instagram/ciocan-ciprian-XGny9I-k9RM-unsplash.jpg'
      ),
    },
    {
      id: 3,
      src: getImgUrl(
        '../assets/instagram/lukasz-szmigiel-dAgtO5H8cXg-unsplash.jpg'
      ),
    },
    {
      id: 4,
      src: getImgUrl('../assets/instagram/malka-l0m2p_k5VJ8-unsplash.jpg'),
    },
    {
      id: 5,
      src: getImgUrl('../assets/instagram/max-delsid-8-Aght_oHog-unsplash.jpg'),
    },
    {
      id: 6,
      src: getImgUrl(
        '../assets/instagram/ricardo-gomez-angel-SAJD-Q4FntE-unsplash.jpg'
      ),
    },
  ])
  const tweets = ref([
    {
      id: 1,
      author: '@vuetifyjs',
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus sit amet nisl sollicitudin auctor. Nam dapibus odio neque, sed proin.',
    },
    {
      id: 2,
      author: '@vuetifyjs',
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam rhoncus sit amet nisl sollicitudin auctor. Nam dapibus odio neque, sed proin.',
    },
  ])
  const tags = ref(['Portfolio', 'Theme', 'Camping', 'Forest', 'Hiking'])
  const relatedPosts = ref([
    {
      id: 1,
      title: 'Title',
      author: 'John Smith',
      src: getImgUrl(
        '../assets/portofoliu/everett-mcintire-BPCsppbNRMI-unsplash.jpg'
      ),
      description:
        'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst.',
      date: new Date().toLocaleDateString(),
      commentCount: 10,
    },
    {
      id: 2,
      title: 'Title',
      author: 'John Smith',
      src: getImgUrl('../assets/projects/adrian-TvN54bnuQg8-unsplash.jpg'),
      description:
        'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst.',
      date: new Date().toLocaleDateString(),
      commentCount: 10,
    },
    {
      id: 3,
      title: 'Title',
      author: 'John Smith',
      src: getImgUrl(
        '../assets/projects/robson-hatsukami-morgan-RTKaEcGKarQ-unsplash.jpg'
      ),
      description:
        'Duis fringilla mauris ac pellentesque suscipit. Vestibulum in feugiat felis. Cras eget mattis lectus, sit amet ultricies leo. Donec imperdiet diam eu lectus scelerisque accumsan. Quisque sollicitudin, diam non eleifend tempor, tortor tortor pulvinar enim, sit amet maximus neque metus ac nulla. Morbi pellentesque leo ut nulla scelerisque pulvinar. In hac habitasse platea dictumst.',
      date: new Date().toLocaleDateString(),
      commentCount: 10,
    },
  ])
  return {
    title,
    socialLinks,
    contact,
    recentNews,
    blogPosts,
    recentPosts,
    projects,
    instagramPosts,
    tweets,
    tags,
    relatedPosts,
  }
})
