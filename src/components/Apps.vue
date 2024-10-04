<script setup lang="ts">
import pastefyScreenshot from '../assets/img/pastefy-1.png'
import punyshortScreenshot from '../assets/img/punyshort-1.png'
import quotyscoScreenshot from '../assets/img/quotysco-1.png'
import codeboxScreenshot from '../assets/img/codebox-1.png'

import {computed, ref} from "vue";

const apps = [
  {
    name: 'Pastefy',
    description: `Pastefy is a tool you created that allows users to store and share text, code snippets, and other content online. It serves as a user-friendly, minimalistic pastebin alternative where users can create "pastes" (blocks of text or code) and share them easily through unique URLs. Pastefy typically emphasizes privacy, offering features like encryption to ensure that shared pastes are secure.`,
    screenshot: pastefyScreenshot,
    links: [
      {
        icon: 'link',
        text: 'Open Pastefy',
        url: 'https://pastefy.app'
      },
      {
        icon: 'script',
        text: 'API-Docs',
        url: 'https://intera.dev/docs/pastefy'
      },
      {
        icon: 'brand-github',
        text: 'Source Code',
        url: 'https://github.com/interaapps/pastefy'
      }
    ]
  },
  {
    name: 'Punyshort',
    description: `Punyshort is an open source URL shortening service. It allows users to take long, unwieldy URLs and condense them into shorter, more manageable links and track interactions.`,
    screenshot: punyshortScreenshot,
    color: '#ff5880',
    links: [
      {
        icon: 'link',
        text: 'Open Punyshort',
        url: 'https://panel.puny.be'
      },
      {
        icon: 'script',
        text: 'API-Docs',
        url: 'https://intera.dev/docs/punyshort'
      },
      {
        icon: 'brand-github',
        text: 'Source Code',
        url: 'https://github.com/interaapps/punyshort'
      }
    ]
  },
  {
    name: 'Quotysco',
    description: `Quotysco is a modern, feature-rich blogging platform designed for writers, creators, and thought leaders to share their ideas with the world. Similar to Medium, it provides a sleek and intuitive interface that makes it easy for users to create, publish, and manage their blogs, all while reaching a wide audience.`,
    screenshot: quotyscoScreenshot,
    color: '#3ee1ce',
    links: [
      {
        icon: 'link',
        text: 'Open Quotysco',
        url: 'https://quotysco.eu'
      },
      {
        icon: 'brand-github',
        text: 'Source Code',
        url: 'https://github.com/interaapps/quotysco'
      }
    ]
  },
  {
    name: 'CodeBox',
    description: `Pastefy Codebox is a Web-Playground for creating little examples for libraries like JDOM, React, Vue, React or many more.`,
    screenshot: codeboxScreenshot,
    links: [
      {
        icon: 'link',
        text: 'Open Pastefy CodeBox',
        url: 'https://box.pastefy.app'
      },
      {
        icon: 'brand-github',
        text: 'Source Code',
        url: 'https://github.com/interaapps/pastefy-codebox'
      }
    ]
  }
]

const selected = ref(0)

const current = computed(() => apps[selected.value])

</script>
<template>
  <div>
    <div class="border-bottom">
      <div class="inner-max-width">
        <button
          v-for="(app, i) of apps"
          class="button p-3 px-4 text-xl md:text-2xl relative"
          :class="{selected: selected === i}"
          @click="selected = i"
        >
          <span>
            {{ app.name }}
          </span>

          <div class="block absolute" style="top: -1px; left: 0; height: 1px; width: calc(100% + 1px); background: #8E8E8E" />
        </button>
      </div>
    </div>

    <div class="border-bottom">
      <div class="inner-max-width">
        <div class="md:flex gap-5 relative overflow-hidden w-full" style="min-height: 400px">
          <div class="p-5 flex flex-column gap-3 justify-content-between relative z-2" style="flex: 1">
            <div>
              <h3 class="text-4xl mb-2">{{ current.name }}</h3>
              <p class="text-xl">{{current.description}}</p>
            </div>

            <div class="flex flex-wrap gap-2">
              <template v-for="link of current.links">
                <a
                  :href="link.url"
                  class="text-white no-underline flex align-items-center gap-1 border-all p-1 px-2 border-round-2xl"
                  style="background: #FFFFFF22"
                  target="_blank"
                >
                  <i :class="`ti ti-${link.icon}`" />
                  <span class="text-sm">{{link.text}}</span>
                </a>
              </template>
            </div>
          </div>

          <div class="ml-auto md:ml-0" style="width: 500px; max-width: 100%; height: 100%" v-if="current.screenshot">

            <svg class="absolute" style="right: -100px; bottom: -50px; width: 700px; height: 500px" width="407" height="281" viewBox="0 0 407 281" fill="none" xmlns="http://www.w3.org/2000/svg">
              <ellipse cx="213.83" cy="181.5" rx="227.259" ry="181.5" fill="url(#paint0_radial_244_110)"/>
              <defs>
                <radialGradient id="paint0_radial_244_110" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(213.83 181.5) rotate(90) scale(181.5 227.259)">
                  <stop style="transition: 1s" :stop-color="current.color || '#4542F4'" stop-opacity="0.5"/>
                  <stop style="transition: 1s" offset="1" :stop-color="current.color || '#4542F4'" stop-opacity="0"/>
                </radialGradient>
              </defs>
            </svg>

            <div style="width: 500px" class="relative md:absolute right-0 bottom-0">
              <div class="pt-2 pl-2" :style="{
                'border-top-left-radius': '20px',
                'background': '#FFFFFF33',
                'border-top': '#8E8E8E 1px solid',
                'border-left': '#8E8E8E 1px solid'
              }">
                <img
                  class="block w-full"
                  :style="{
                    'border-top-left-radius': '10px',
                    'border-top': '#8E8E8E 1px solid',
                    'border-left': '#8E8E8E 1px solid'
                  }"
                  :src="current.screenshot"
                  alt="screenshot of the app"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '../../node_modules/primeflex/primeflex.css';

.button {
  background: none;
  border: none;
  color: #FFFFFF55;
  cursor: pointer;
  font-weight: 600;
  transition: 0.2s;
  outline: none;


  text-stroke: 0.6px #FFF;
  -webkit-text-stroke: 0.6px #FFF;


  border-right: 1px solid #8E8E8E;


  span {
    display: block;
    transition: 0.2s;
  }

  &:last-child {
   // border-right: none;
  }

  &.selected {
    color: #FFF;
    text-stroke: 0 transparent;
    -webkit-text-stroke: 0 transparent;
  }

  &:hover {
    color: #FFFFFF99;
    &.selected {
      color: #FFF;
    }
    span {
      transform: scale(1.03);
    }
  }
  &:active {
    color: #FFFFFFAA;
    span {
      transform: scale(0.98);
    }
  }
}
</style>
<script setup lang="ts">
</script>