<script setup lang="ts">
import logo from '../assets/logo.svg'
</script>
<template>
  <div class="border-bottom">
    <div class="inner-max-width p-3 flex justify-content-between align-items-center">
      <RouterLink :to="{name: 'home'}">
        <img class="block" style="height: 30px" :src="logo" alt="logo" />
      </RouterLink>

      <div class="flex gap-2">
        <router-link :to="{name: 'imprint'}" class="text-white no-underline">Impressum</router-link>
        <router-link :to="{name: 'privacy'}" class="text-white no-underline">Privacy</router-link>
      </div>
    </div>
  </div>

  <div>
    <div class="inner-max-width p-3"></div>
  </div>
</template>