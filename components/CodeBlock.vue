<template>
   <div class="code-block">
      <pre class="code-block__pre"><code v-html="renderedCode"></code></pre>
      <button aria-label="Copy code" class="code-block__copy-btn" type="button" @click="copyCode">
         <svg
            aria-hidden="true"
            fill="none"
            height="16"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            width="16"
            xmlns="http://www.w3.org/2000/svg"
         >
            <rect height="13" rx="2" ry="2" width="13" x="9" y="9" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
         </svg>
      </button>
   </div>
</template>

<script setup lang="ts">
   import { computed } from 'vue';

   const props = defineProps<{
      code: string;
   }>();

   async function copyCode() {
      await navigator.clipboard.writeText(props.code);
   }

   const renderedCode = computed(() => {
      return props.code
         .split('\n')
         .map(line => {
            const escaped = line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
            if (/^\s*#/.test(line)) {
               return `<span class="code-block__comment">${escaped}</span>`;
            }
            return escaped;
         })
         .join('\n');
   });
</script>

<style scoped>
   .code-block {
      margin: 0 0 1.25rem;
      position: relative;
   }

   .code-block__pre {
      background-color: var(--color-bg-elevated);
      border: 1px solid var(--color-border);
      border-radius: 0.5rem;
      font-family: var(--font-mono);
      font-size: 0.875rem;
      line-height: 1.6;
      margin: 0;
      overflow-x: auto;
      padding: 1rem 1.25rem;
      white-space: pre;
   }

   .code-block__pre code {
      color: var(--color-text-primary);
   }

   .code-block__pre :deep(.code-block__comment) {
      color: var(--color-text-muted);
   }

   .code-block__copy-btn {
      align-items: center;
      background-color: var(--color-bg-elevated);
      border: 1px solid var(--color-border);
      border-radius: 0.375rem;
      color: var(--color-text-muted);
      cursor: pointer;
      display: flex;
      justify-content: center;
      opacity: 0;
      padding: 0.375rem;
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
      transition:
         color 0.15s ease,
         opacity 0.15s ease;
   }

   .code-block:hover .code-block__copy-btn {
      opacity: 1;
   }

   .code-block__copy-btn:hover {
      color: var(--color-text-primary);
   }
</style>
