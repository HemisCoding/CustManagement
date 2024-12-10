import { defineStore } from 'pinia'
import showroomImage from '@/assets/portofoliu/showroom-thermo.jpeg';
import casaModerna1 from '@/assets/portofoliu/casa-moderna1.jpeg';
import casaModerna2 from '@/assets/portofoliu/casa-moderna2.jpeg';
import casaModerna3 from '@/assets/portofoliu/casa-moderna3.jpeg';
import casaModerna4 from '@/assets/portofoliu/casa-moderna4.jpeg';
import casaModerna5 from '@/assets/portofoliu/casa-moderna5.jpeg';
import casaModerna6 from '@/assets/portofoliu/casa-moderna6.jpeg';
import casaModerna7 from '@/assets/portofoliu/casa-modern7.jpeg';
import casaModerna8 from '@/assets/portofoliu/casa-moderna8.jpeg';
import casaModerna9 from '@/assets/portofoliu/casa-modern9.jpeg';
import foisor1 from '@/assets/portofoliu/foisor.jpeg'
import usa1 from '@/assets/portofoliu/usa.jpeg'
import usaglisanta1 from '@/assets/portofoliu/usa-glisanta.jpeg'
import garaj1 from '@/assets/portofoliu/garaj.jpeg'
import usa2 from '@/assets/portofoliu/usa2.jpeg'
import usa3 from '@/assets/portofoliu/usa3.jpeg'
import usa4 from '@/assets/portofoliu/usa4.jpeg'
import usa5 from '@/assets/portofoliu/usa5.jpeg'
import usa6 from '@/assets/portofoliu/usa6.jpeg'
import usa7 from '@/assets/portofoliu/usa7.jpeg'
import usa8 from '@/assets/portofoliu/usa8.jpeg'
import usa10 from '@/assets/portofoliu/usa10.jpeg'
import casaModerna10 from '@/assets/portofoliu/casaModerna10.jpeg';
import casaModerna11 from '@/assets/portofoliu/casaModerna11.jpeg';
import casaModerna13 from '@/assets/portofoliu/casaModerna13.jpeg';
import garaj2 from '@/assets/portofoliu/garaj2.jpeg';
import garaj3 from '@/assets/portofoliu/garaj3.jpeg';
import rolete1 from '@/assets/portofoliu/rolete1.jpeg';
import rolete2 from '@/assets/portofoliu/rolete2.jpeg';
import rolete3 from '@/assets/portofoliu/rolete3.jpeg';




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
    {
      id: 1,
      src: casaModerna1,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'rezidential',
    },
    {
      id: 2,
      src: casaModerna2,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'rezidential',
    },
    {
      id: 3,
      src: casaModerna3,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'rezidential',
    },
    {
      id: 4,
      src: casaModerna4,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'rezidential',
    },
    {
      id: 5,
      src: casaModerna5,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'rezidential',
    },
    {
      id: 6,
      src: casaModerna6,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'rezidential',
    },
    {
      id: 7,
      src: casaModerna7,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'rezidential',
    },
    {
      id: 8,
      src: casaModerna8,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'rezidential',
    },
    {
      id: 9,
      // src: getImgUrl('../assets/portofoliu/showroom-thermo.jpeg'),
      // src: require('@/assets/portofoliu/showroom-thermo.jpeg'),
      src: casaModerna9,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'rezidential',
    },
    {
      id: 10,
      src: showroomImage,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'showroom',
    },
    {
      id: 11,
      src: garaj1,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'garaje',
    },
    {
      id: 12,
      src: foisor1,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'foisoare',
    },
    {
      id: 13,
      src: usa1,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'usi',
    },
    {
      id: 14,
      src: usaglisanta1,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'usi',
    },
    {
      id: 15,
      src: usa2,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'usi',
    },
    {
      id: 16,
      src: usa3,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'usi',
    }, 
    {
      id: 17,
      src: usa4,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'usi',
    }, 
    {
      id: 18,
      src: usa5,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'usi',
    }, 
    {
      id: 19,
      src: usa6,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'usi',
    }, 
    {
      id: 20,
      src: usa7,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'usi',
    }, 
    {
      id: 21,
      src: usa8,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'usi',
    }, 
    {
      id: 22,
      src: usa10,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'usi',
    }, 
    {
      id: 23,
      src: casaModerna10,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'rezidential',
    },
    {
      id: 24,
      src: casaModerna11,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'rezidential',
    },
    {
      id: 25,
      src: casaModerna13,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'rezidential',
    },
    {
      id: 27,
      src: garaj2,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'garaje',
    },
    {
      id: 28,
      src: garaj3,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'garaje',
    },
    {
      id: 29,
      src: rolete3,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'jaluzele',
    },
    {
      id: 30,
      src: rolete2,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'jaluzele',
    },
    {
      id: 31,
      src: rolete1,
      date: new Date().toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
      }),
      category: 'jaluzele',
    },
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
