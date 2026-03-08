<template>
   <div class="error-page">
      <div class="error-page__inner">
         <p class="error-page__code">{{ error.statusCode }}</p>
         <h1 class="error-page__title">{{ errorTitle }}</h1>
         <p class="error-page__message">{{ error.message }}</p>
         <button class="error-page__btn" type="button" @click="handleError">Go back home</button>
      </div>
   </div>
</template>

<script setup lang="ts">
   import type { NuxtError } from '#app';

   const props = defineProps<{ error: NuxtError }>();

   const errorTitle = computed(() => {
      return props.error.statusCode === 404 ? 'Page not found' : 'An error occurred';
   });

   function handleError() {
      clearError({ redirect: '/' });
   }
</script>

<style scoped>
   .error-page {
      align-items: center;
      background-color: var(--color-bg);
      color: var(--color-text-primary);
      display: flex;
      justify-content: center;
      min-height: 100vh;
      padding: 2rem;
   }

   .error-page__inner {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      max-width: 32rem;
      text-align: center;
   }

   .error-page__code {
      color: var(--color-accent);
      font-size: 4rem;
      font-weight: 800;
      line-height: 1;
      margin: 0;
   }

   .error-page__title {
      font-size: 1.5rem;
      font-weight: 700;
      margin: 0;
   }

   .error-page__message {
      color: var(--color-text-secondary);
      margin: 0;
   }

   .error-page__btn {
      align-self: center;
      background-color: var(--color-accent);
      border: none;
      border-radius: 0.5rem;
      color: #fff;
      cursor: pointer;
      font-family: inherit;
      font-size: 0.9375rem;
      font-weight: 600;
      margin-top: 0.5rem;
      padding: 0.625rem 1.5rem;
      transition: background-color 0.15s ease;
   }

   .error-page__btn:hover {
      background-color: var(--color-accent-hover);
   }
</style>
