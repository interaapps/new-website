<script setup lang="ts">
import AccountButton from "@/components/AccountButton.vue";
import logo from "@/assets/logo.svg";
</script>
<template>
  <div>
    <div class="border-bottom hidden md:block">
      <div class="inner-max-width p-3 opacity-60"></div>
    </div>

    <div class="border-bottom">
      <div class="inner-max-width p-3 flex justify-content-between align-items-center">

        <RouterLink :to="{name: 'home'}">
          <img class="block" style="height: 30px" :src="logo" alt="logo" />
        </RouterLink>

        <AccountButton />
      </div>

    </div>
  </div>
</template>