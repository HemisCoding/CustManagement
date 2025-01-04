import { defineStore } from 'pinia'




const getImgUrl = (imagePath: string) =>
  new URL(`${imagePath}`, import.meta.url).href

// const logoUrl = getImgUrl('@/assets/thermo-expert.png');

export const useAppData = defineStore('appData', () => {
  const title = ref('Customers Management')
  const socialLinks = ref([

  ])
  const contact = ref({

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


  ])
  const tweets = ref([

  ])
  const tags = ref(['Portfolio', 'Theme', 'Camping', 'Forest', 'Hiking'])
  const relatedPosts = ref([

  ])
  return {

  }
})
