<template>
   <div class="index-page">
      <section class="index-page__hero">
         <h1 class="index-page__title">ALF Documentation</h1>
         <p class="index-page__subtitle">
            Everything you need to get started, configure, and master ALF. Browse the sections in
            the sidebar or use <kbd>⌘K</kbd> to search.
         </p>
         <div class="index-page__cta">
            <a class="index-page__cta-primary" href="#getting-started">Get Started</a>
            <a class="index-page__cta-secondary" href="#reference">Reference</a>
         </div>
      </section>

      <section class="index-page__cards">
         <h2 class="index-page__section-heading">Featured Documentation</h2>
         <div class="index-page__card-grid">
            <a class="index-page__card" href="#getting-started">
               <h3 class="index-page__card-title">Getting Started</h3>
               <p class="index-page__card-desc">
                  Install ALF and run your first command. Zero configuration required.
               </p>
            </a>
            <a class="index-page__card" href="#core-concepts">
               <h3 class="index-page__card-title">Core Concepts</h3>
               <p class="index-page__card-desc">
                  Understand the architecture, components, and data flow of ALF.
               </p>
            </a>
            <a class="index-page__card" href="#configuration">
               <h3 class="index-page__card-title">Configuration</h3>
               <p class="index-page__card-desc">
                  Hundreds of options to make ALF look and behave exactly how you want.
               </p>
            </a>
            <a class="index-page__card" href="#reference">
               <h3 class="index-page__card-title">Reference</h3>
               <p class="index-page__card-desc">
                  Full API and CLI reference for terminal application developers.
               </p>
            </a>
         </div>
      </section>

      <section class="index-page__placeholder" id="getting-started">
         <h2 class="index-page__section-heading">Getting Started</h2>
         <p class="index-page__placeholder-text">
            This section will contain installation instructions, quick start guides, and first steps
            for new users. Content coming soon.
         </p>
      </section>

      <section class="index-page__placeholder" id="core-concepts">
         <h2 class="index-page__section-heading">Core Concepts</h2>
         <p class="index-page__placeholder-text">
            This section will cover the foundational architecture, key components, and how data
            flows through ALF. Content coming soon.
         </p>
      </section>

      <section class="index-page__placeholder" id="configuration">
         <h2 class="index-page__section-heading">Configuration</h2>
         <p class="index-page__placeholder-text">
            This section will document all available configuration options, environment variables,
            and advanced tuning parameters. Content coming soon.
         </p>
      </section>

      <section class="index-page__placeholder" id="advanced-topics">
         <h2 class="index-page__section-heading">Advanced Topics</h2>
         <p class="index-page__placeholder-text">
            This section will cover performance optimization, security hardening, and deployment
            strategies. Content coming soon.
         </p>
      </section>

      <section class="index-page__placeholder" id="troubleshooting">
         <h2 class="index-page__section-heading">Troubleshooting</h2>
         <p class="index-page__placeholder-text">
            This section will provide solutions to common errors, a comprehensive FAQ, and a list of
            known issues. Content coming soon.
         </p>
      </section>

      <section class="index-page__placeholder" id="reference">
         <h2 class="index-page__section-heading">Reference</h2>
         <p class="index-page__placeholder-text">
            This section will contain the full API reference, CLI command documentation, and a
            changelog. Content coming soon.
         </p>
      </section>
   </div>
</template>

<script setup lang="ts">
   useHead({
      title: 'ALF Documentation',
      meta: [{ name: 'description', content: 'Official documentation for ALF.' }],
   });
</script>

<style scoped>
   .index-page {
      display: flex;
      flex-direction: column;
      gap: 4rem;
      padding-bottom: 4rem;
   }

   .index-page__hero {
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      padding-top: 2rem;
   }

   .index-page__title {
      color: var(--color-text-primary);
      font-size: clamp(2rem, 5vw, 3rem);
      font-weight: 800;
      letter-spacing: -0.02em;
      line-height: 1.1;
      margin: 0;
   }

   .index-page__subtitle {
      color: var(--color-text-secondary);
      font-size: 1.125rem;
      line-height: 1.7;
      margin: 0;
      max-width: 42rem;
   }

   .index-page__subtitle kbd {
      background-color: var(--color-bg-elevated);
      border: 1px solid var(--color-border);
      border-radius: 0.25rem;
      font-family: inherit;
      font-size: 0.875em;
      padding: 0.1em 0.4em;
   }

   .index-page__cta {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
      margin-top: 0.25rem;
   }

   .index-page__cta-primary {
      background-color: var(--color-accent);
      border-radius: 0.5rem;
      color: #fff;
      font-size: 0.9375rem;
      font-weight: 600;
      padding: 0.625rem 1.25rem;
      text-decoration: none;
      transition: background-color 0.15s ease;
   }

   .index-page__cta-primary:hover {
      background-color: var(--color-accent-hover);
      color: #fff;
      text-decoration: none;
   }

   .index-page__cta-secondary {
      background-color: var(--color-bg-elevated);
      border: 1px solid var(--color-border);
      border-radius: 0.5rem;
      color: var(--color-text-secondary);
      font-size: 0.9375rem;
      font-weight: 600;
      padding: 0.625rem 1.25rem;
      text-decoration: none;
      transition:
         background-color 0.15s ease,
         color 0.15s ease;
   }

   .index-page__cta-secondary:hover {
      background-color: var(--color-bg-secondary);
      color: var(--color-text-primary);
      text-decoration: none;
   }

   .index-page__section-heading {
      color: var(--color-text-primary);
      font-size: 1.375rem;
      font-weight: 700;
      letter-spacing: -0.01em;
      margin: 0 0 1.25rem;
   }

   .index-page__card-grid {
      display: grid;
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
   }

   .index-page__card {
      background-color: var(--color-bg-secondary);
      border: 1px solid var(--color-border);
      border-radius: 0.625rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      padding: 1.25rem;
      text-decoration: none;
      transition:
         border-color 0.15s ease,
         background-color 0.15s ease;
   }

   .index-page__card:hover {
      background-color: var(--color-bg-elevated);
      border-color: var(--color-accent);
      text-decoration: none;
   }

   .index-page__card-title {
      color: var(--color-text-primary);
      font-size: 1rem;
      font-weight: 600;
      margin: 0;
   }

   .index-page__card-desc {
      color: var(--color-text-secondary);
      font-size: 0.875rem;
      line-height: 1.6;
      margin: 0;
   }

   .index-page__placeholder {
      border-top: 1px solid var(--color-border-subtle);
      padding-top: 2rem;
      scroll-margin-top: calc(var(--header-height) + 1rem);
   }

   .index-page__placeholder-text {
      color: var(--color-text-secondary);
      font-size: 0.9375rem;
      line-height: 1.7;
      margin: 0;
   }
</style>
