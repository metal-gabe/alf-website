<template>
   <h2 class="section-heading">
      <a
         :href="`#${id}`"
         aria-hidden="true"
         class="section-heading__anchor"
         tabindex="-1"
         @click="handleAnchorClick"
         >#</a
      ><slot />
   </h2>
</template>

<script setup lang="ts">
   const props = defineProps<{
      id: string;
   }>();

   function handleAnchorClick() {
      navigator.clipboard.writeText(
         `${window.location.origin}${window.location.pathname}#${props.id}`,
      );
   }
</script>

<style scoped>
   .section-heading {
      color: var(--color-text-primary);
      font-size: 1.375rem;
      font-weight: 700;
      letter-spacing: -0.01em;
      margin: 0 0 1.25rem;
      position: relative;
   }

   .section-heading__anchor {
      color: var(--color-text-muted);
      font-weight: inherit;
      left: 0;
      opacity: 0;
      position: absolute;
      text-decoration: none;
      transform: translateX(calc(-100% - 0.375rem));
      transition: opacity 0.15s ease;
   }

   .section-heading:hover .section-heading__anchor {
      opacity: 1;
   }

   .section-heading__anchor:hover {
      color: var(--color-accent);
      text-decoration: none;
   }
</style>
