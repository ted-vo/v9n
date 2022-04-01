<script setup lang="ts">
defineProps<{
  author: string;
  year: string;
}>();
</script>

<style>
@import "../assets/CommingSoon.css";
</style>

<template>
  <div>
    <div class="header">
      <h1 class="author">{{ author }} - {{ year }}</h1>
    </div>
    <div class="center">
      <span class="title">This site is</span>
      <span class="content">Coming Soon</span>
      <div class="social">
        <ul>
          <li>
            <a href="https://github.com/ted-v9n" target="blank">
              <font-awesome-icon :icon="['fab', 'github']" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
