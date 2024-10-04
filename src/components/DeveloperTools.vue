<script setup lang="ts">
import pastefyScreenshot from '../assets/img/pastefy-1.png'
import punyshortScreenshot from '../assets/img/punyshort-1.png'
import quotyscoScreenshot from '../assets/img/quotysco-1.png'
import codeboxScreenshot from '../assets/img/codebox-1.png'

import {computed, ref} from "vue";

const tools = [
  {
    name: 'JDOM',
    subtitle: 'Reactive Frontend Framework',
    link: 'https://github.com/interaapps/jdom'
  },
  {
    name: 'ULOLE',
    subtitle: 'PHP Backend-Framework',
    link: 'https://github.com/interaapps/ulole-framework'
  },
  {
    name: 'Petrel',
    subtitle: 'An easy-to-use Code Editor Library',
    link: 'https://github.com/interaapps/petrel'
  },
  {
    name: 'Cajax',
    subtitle: 'Easy-to-use HTTP-Client for Javascript',
    link: 'https://github.com/interaapps/cajax'
  },
  {
    name: 'JSONPlus',
    subtitle: 'PHP JSON Parser and ORM',
    link: 'https://github.com/interaapps/jsonplus'
  },
  {
    name: 'intera.dev',
    subtitle: 'see docs & more projects',
    link: 'https://intera.dev'
  },
]


</script>
<template>
  <div>
    <div class="border-bottom">
      <div class="inner-max-width p-3">
        <span class="text-3xl font-bold">For Developers</span>
      </div>
    </div>
    <div class="border-bottom">
      <div class="inner-max-width three-row-grid">
        <a
          v-for="(tool, i) of tools"
          :href="tool.link"
          target="_blank"
          class="text-white flex flex-column align-items-center no-underline h-full p-5 relative text-center"
        >
          <span class="block text-2xl mb-1 font-bold">{{ tool.name }}</span>
          <span class="block">{{ tool.subtitle }}</span>

          <div class="absolute left-0" style="width: calc(1px + 100%); height: 1px; background: #8E8E8E; bottom: -1px" />
          <div class="h-full absolute top-0" style="width: 1px; background: #8E8E8E; right: -1px" />
        </a>

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