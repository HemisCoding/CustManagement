# [Flairo Theme PRO](https://store.vuetifyjs.com/products/flairo-theme-pro)

A premium collection of components and layouts for building applications with Vuetify 3 and Vite, optimized for performance and ease of use.

**Flairo Theme PRO** is crafted with [Vite](https://vitejs.dev/guide/), [Vuetify 3](https://vuetifyjs.com/), and [Vuejs 3](https://vuejs.org/). It's designed to accelerate your Vuetify 3 Vite application development. Leveraging the theme is straightforward but requires fundamental knowledge of Javascript, [Vuejs](https://vuejs.org), and [Vite](https://vitejs.dev/guide/).

## Getting Started

- Install Node.js from the official [Node.js page](https://nodejs.org/en/)
- Install Yarn from the official [Yarn installation page](https://classic.yarnpkg.com/en/docs/install/#windows-stable)
- Unzip the `flairo-theme-pro.zip` file downloaded from the Vuetify store
- Create a folder named `flairo-theme-pro` and unzip the `flairo-theme-pro.zip` file
- Open your terminal and navigate to the `flairo-theme-pro` directory
- Run `yarn install` to install the project's dependencies
- Run `yarn dev` to start a local development server

In addition to the development server, you can:

- Run `yarn run build` to prepare your app for production
- Run `yarn run serve` to test your production build locally
- Run `yarn run lint` for linting

## Vuetify

Vuetify is an Open Source UI Library that is developed exactly according to Material Design spec. Every component is handcrafted to bring you the best possible UI tools to your next great app. The development doesn't stop at the core components outlined in Google's spec. Through the support of community members and sponsors, additional components will be designed and made available for everyone to enjoy.

The documentation for **Vuetify** is hosted [here](https://vuetifyjs.com/).

***Not all components that are available in this project are part of the theme and may be a default Vuetify component***

## Vite

Vite is a build tool that significantly improves the front-end development experience. You can use Vite to set up a development environment for frameworks like Vue and React, and even for a vanilla JavaScript app with a dev server and hot reloading in just three commands. It also easily integrates with [TypeScript](https://vitejs.dev/guide/features.html#typescript).

## Table of Contents

- [Demo](#demo)
- [Quick Start](#quick-start)
- [File Structure](#file-structure)
- [Browser Support](#browser-support)
- [Resources](#resources)
- [Reporting Issues](#reporting-issues)
- [Technical Support or Questions](#technical-support-or-questions)
- [Licensing](#licensing)
- [Useful Links](#useful-links)

## Demo

- [Demo page](https://flairo-theme-pro.vuetifyjs.com)

## Quick Start

Getting started with the **Flairo Theme PRO** is straightforward. Follow these steps to set up your development environment and begin creating your application with Vuetify 3 and Vite.

1. Ensure you have Node.js and Yarn installed on your system. If not, you can download them from the official [Node.js website](https://nodejs.org/en/) and [Yarn installation page](https://classic.yarnpkg.com/en/docs/install/#windows-stable).
2. Download the `flairo-theme-pro.zip` file from the Vuetify store and unzip it into a directory of your choice.
3. Open a terminal or command prompt and navigate to the directory where you unzipped the Flairo Theme PRO.
4. Run `yarn install` to install all dependencies.
5. Once the installation is complete, start the development server by running `yarn dev`.
6. Your default web browser should open automatically, displaying the Flairo Theme PRO template. If it doesn't, open your browser and visit `http://localhost:3000`.

You are now ready to start developing with the Flairo Theme PRO! Explore the components and layouts included to build your application.

## File Structure

Within the download you'll find the following directories and files:

<details>

```txt
flairo-theme
flairo-theme
├── .browserslistrc
├── .editorconfig
├── .env
├── .eslintrc-auto-import.json
├── .eslintrc.js
├── .gitignore
├── README.md
├── index.html
├── package.json
├── pnpm-lock.yaml
├── public
│   └── favicon.ico
├── src
│   ├── App.vue
│   ├── assets
│   ├── auto-imports.d.ts
│   ├── components
│   │   ├── README.md
│   │   ├── base
│   │   │   ├── Avatar.vue
│   │   │   ├── Body.vue
│   │   │   ├── Btn.vue
│   │   │   ├── Divider.vue
│   │   │   ├── Feature.vue
│   │   │   ├── FeatureAlt.vue
│   │   │   ├── FeatureCard.vue
│   │   │   ├── Heading.vue
│   │   │   ├── PricingPlan.vue
│   │   │   ├── Project.vue
│   │   │   ├── Section.vue
│   │   │   ├── SectionHeading.vue
│   │   │   ├── SkillMeter.vue
│   │   │   ├── Stat.vue
│   │   │   ├── Subheading.vue
│   │   │   ├── Subtitle.vue
│   │   │   ├── Tag.vue
│   │   │   ├── TeamMember.vue
│   │   │   ├── Testimony.vue
│   │   │   ├── TextField.vue
│   │   │   ├── Textarea.vue
│   │   │   └── Title.vue
│   │   └── blog
│   │       ├── Author.vue
│   │       ├── Blockquote.vue
│   │       ├── Card.vue
│   │       ├── Heading.vue
│   │       ├── Post.vue
│   │       └── Tweet.vue
│   ├── components.d.ts
│   ├── layouts
│   │   ├── README.md
│   │   ├── components
│   │   │   ├── AppBar.vue
│   │   │   ├── BaseSidebar.vue
│   │   │   ├── BlogSidebar.vue
│   │   │   ├── SystemBar.vue
│   │   │   └── View.vue
│   │   └── default.vue
│   ├── main.ts
│   ├── pages
│   │   ├── README.md
│   │   ├── [...error].vue
│   │   ├── about.vue
│   │   ├── blog.vue
│   │   ├── contact.vue
│   │   ├── index.vue
│   │   ├── portfolio.vue
│   │   ├── project
│   │   │   └── [id].vue
│   │   ├── services.vue
│   │   └── sink.vue
│   ├── plugins
│   │   ├── README.md
│   │   ├── index.ts
│   │   └── vuetify.ts
│   ├── router
│   │   └── index.ts
│   ├── stores
│   │   ├── README.md
│   │   ├── app.ts
│   │   ├── index.ts
│   │   └── mockup.ts
│   ├── styles
│   │   ├── README.md
│   │   └── settings.scss
│   ├── typed-router.d.ts
│   ├── views
│   │   ├── BlogAsset.vue
│   │   ├── BlogAuthor.vue
│   │   ├── BlogExcerpt.vue
│   │   ├── BlogExcerptLeftImg.vue
│   │   ├── BlogExcerptRightImg.vue
│   │   ├── BlogExcerptShort.vue
│   │   ├── BlogHeader.vue
│   │   ├── BlogQuote.vue
│   │   ├── Construction.vue
│   │   ├── FlexibleCallout.vue
│   │   ├── GetInTouch.vue
│   │   ├── Hero.vue
│   │   ├── Info.vue
│   │   ├── Map.vue
│   │   ├── NotFound.vue
│   │   ├── OurServices.vue
│   │   ├── OurTeam.vue
│   │   ├── ProjectDetail.vue
│   │   ├── ProjectGallery.vue
│   │   ├── ProjectGalleryAlt.vue
│   │   ├── RelatedBlogPosts.vue
│   │   ├── StandoutCallout.vue
│   │   ├── Stats.vue
│   │   ├── Story.vue
│   │   ├── StoryAlt.vue
│   │   ├── WelcomeFeatures.vue
│   │   └── WhyChooseUs.vue
│   └── vite-env.d.ts
├── tsconfig.json
├── tsconfig.node.json
├── vercel.json
└── vite.config.mts
```

</details>

## Browser Support

| Browser | Status |
| - | - |
| Chromium (Chrome, Edge) | ✅ Supported * |
| Firefox | ✅ Supported * |
| Safari 15.4+ | ✅ Supported |
| Safari 13. | ❗ Requires polyfill |
| Edge <79 | ⛔ Not supported |
| Internet Explorer | ⛔ Not supported |

## Resources

- [Live Preview](https://flairo-theme-pro.vuetifyjs.com/)
- Product Page: [Product](https://store.vuetifyjs.com/products/flairo-theme-pro)
- Vuetify Documentation is [Here](https://vuetifyjs.com/)
- Contact: [Contact](mailto:support@vuetifyjs.com)

## Technical Support or Questions

For any technical issues or questions about **Flairo Theme PRO**, support is available through:

- **Email Support**: Direct support is available via email at [support@vuetifyjs.com](mailto:support@vuetifyjs.com).

We are dedicated to ensuring your success with Flairo Theme PRO. Please don't hesitate to reach out for assistance or feedback.

## Licensing

- Copyright 2016-2024 Vuetify <https://vuetifyjs.com/>
- Vuetify [License Information](https://github.com/vuetifyjs/vuetify/blob/master/LICENSE.md)

## Useful Links

- [Vuetify Documentation](https://vuetifyjs.com/)
- [Vuetify Store](https://store.vuetifyjs.com/)
- [Discord](https://community.vuetifyjs.com)
- [Twitter](https://twitter.com/vuetifyjs)

<br>

<p align="center">
  <img src="https://cdn.vuetifyjs.com/docs/images/logos/v.png" height="128">
</p>
