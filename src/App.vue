<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="flex flex-column w-full min-h-full">
    <Header />
    <div>
      <RouterView />
    </div>
    <div class="inner-max-width" style="flex: 1">

    </div>
    <Footer />
  </div>
</template>