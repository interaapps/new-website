<script setup lang="ts">
import pastefyScreenshot from '../assets/img/pastefy-1.png'
import punyshortScreenshot from '../assets/img/punyshort-1.png'
import quotyscoScreenshot from '../assets/img/quotysco-1.png'
import codeboxScreenshot from '../assets/img/codebox-1.png'

import {computed, ref} from "vue";

const entries = ref<any[]>([
])

fetch('https://quotysco.eu/api/v1/blogs/InteraApps/posts?limit=3&page=1')
  .then(res => res.json())
  .then(({data}) => {
    entries.value = data
  })


</script>
<template>
  <div v-if="entries">
    <div class="border-bottom">
      <div class="inner-max-width p-3 flex justify-content-between align-items-center">
        <span class="text-3xl font-bold">Blog</span>

        <a class="text-white no-underline" href="https://quotysco.eu/InteraApps" target="_blank">visit blog</a>
      </div>
    </div>
    <div class="border-bottom">
      <div class="inner-max-width three-row-grid mobile-one">
        <a
          v-for="(entry, i) of entries"
          :href="`https://quotysco.eu/InteraApps/${entry.url}`"
          target="_blank"
          class="text-white flex flex-column gap-3 justify-content-between no-underline h-full p-5 relative"
        >
          <span class="block text-md font-bold">{{ entry.title }}</span>
          <span class="block text-sm md:text-right opacity-50">{{ entry.created_at }}</span>

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