<script setup lang="ts">

import {useUserStore} from "@/stores/userStore";

const { user } = useUserStore()

</script>

<template>
  <a href="https://accounts.interaapps.de" target="_blank">
    <button class="account-button" :style="{width: user ? '130px' : '100px'}">
      <template v-if="user">
        <span class="flex align-items-center gap-2 px-2">
          <span class="block w-full overflow-hidden text-overflow-ellipsis" style="white-space: pre;">{{ user.full_name || user.name }}</span>
          <img class="border-round-2xl" style="height: 20px; width: 20px" :src="user.profile_picture" alt="profile picture">
        </span>
      </template>
      <span v-else class="p-2 block">
        my account
      </span>
    </button>
  </a>
</template>


<style lang="scss" scoped>
.account-button {
  background: none;
  color: #FFFFFF;
  cursor: pointer;
  font-weight: 600;
  position: relative;
  height: 34px;

  margin-top: 2px;

  border-radius: 7px;
  border: none;

  transition: 0.2s;

  background: #E2E2E2;

  & > span {
    border: 1px solid #8E8E8E;
    position: absolute;
    background: #000;
    border-radius: 7px;
    bottom: 3px;
    width: 100%;
    transition: 0.2s;
    height: 100%;
  }

  &:hover {
    span {
      bottom: 3.5px;
    }
  }
  &:active {
    span {
      bottom: 0px;
    }
  }

  &.selected {
    color: #FFF;
  }
}
</style>
<script setup lang="ts">
</script>