<script setup lang="ts">
import Apps from "@/components/Apps.vue";
import DeveloperTools from "@/components/DeveloperTools.vue";
import BlogEntries from "@/components/BlogEntries.vue";
import Design from "@/components/Design.vue";
</script>

<template>
  <div>
    <div class="border-bottom">
      <div class="inner-max-width relative overflow-hidden" style="height: 400px">
        <div class="absolute left-0 w-full" style="top: 50%; transform: translateY(-50%)">
          <div v-for="_ of Array(20)" class="flex box-col">
            <div
              v-for="_ of Array(20)" class="box-row"
            />
          </div>
        </div>

        <div class="p-5 absolute left-0 top-0 flex justify-content-between align-items-center h-full w-full gap-5">
          <h1 style="text-wrap: balance" class="text-6xl md:text-7xl">
            It’s our hard task to make your life
            <span class="relative">
              <svg class="absolute left-0 w-full" style="bottom: -5px; height: 20px" width="95" height="14" viewBox="0 0 95 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 10.7274C17.5 4 65.1 0.62742 91.5 6.22742" stroke="#4542F4" stroke-width="6" stroke-linecap="round"/>
              </svg>

              <span class="relative">
                easy
              </span>


            </span>
          </h1>
          <h3 class="binary-code hidden md:block">
            010101010010100 <br>
            10101010100110 <br>
            011011010 <br>
          </h3>
        </div>

      </div>
    </div>

    <Apps />

    <DeveloperTools />

    <BlogEntries />
    <Design />
  </div>
</template>

<style lang="scss" scoped>
.box-col {
  border-bottom: 1px solid #2E2E2E;
  .box-row {

    width: 5%;
    aspect-ratio: 1/1;
    border-right: 1px solid #2E2E2E;

    &:last-child {
      border-right: none;
    }
  }
  &:last-child {
    border-bottom: none;
  }
}

.binary-code {
  /* 01010101001010010101010100110 011011010 */

  font-size: 36px;

  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0.2) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  text-stroke: 1px #4542F4AA;
  -webkit-text-stroke: 1px #4542F4AA;

}
</style>
