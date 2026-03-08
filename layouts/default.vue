<template>
   <div class="layout">
      <AppHeader />
      <DocSearch />
      <div class="layout__body">
         <main class="layout__content">
            <slot />
         </main>
         <aside class="layout__sidebar">
            <DocSidebar :sections="sidebarSections" />
         </aside>
      </div>
   </div>
</template>

<script lang="ts">
   import { defineComponent } from 'vue';
   import type { SidebarSection } from '~/components/DocSidebar/DocSidebar';

   export default defineComponent({
      name: 'DefaultLayout',

      setup() {
         const sidebarSections: SidebarSection[] = [
            {
               href: '#getting-started',
               items: [
                  { href: '#installation', title: 'Installation' },
                  { href: '#quick-start', title: 'Quick Start' },
                  { href: '#first-steps', title: 'First Steps' },
               ],
               title: 'Getting Started',
            },
            {
               href: '#core-concepts',
               items: [
                  { href: '#architecture', title: 'Architecture' },
                  { href: '#components', title: 'Components' },
                  { href: '#data-flow', title: 'Data Flow' },
               ],
               title: 'Core Concepts',
            },
            {
               href: '#configuration',
               items: [
                  { href: '#basic-config', title: 'Basic Config' },
                  { href: '#environment-vars', title: 'Environment Variables' },
                  { href: '#advanced-options', title: 'Advanced Options' },
               ],
               title: 'Configuration',
            },
            {
               href: '#advanced-topics',
               items: [
                  { href: '#performance', title: 'Performance' },
                  { href: '#security', title: 'Security' },
                  { href: '#deployment', title: 'Deployment' },
               ],
               title: 'Advanced Topics',
            },
            {
               href: '#troubleshooting',
               items: [
                  { href: '#common-errors', title: 'Common Errors' },
                  { href: '#faq', title: 'FAQ' },
                  { href: '#known-issues', title: 'Known Issues' },
               ],
               title: 'Troubleshooting',
            },
            {
               href: '#reference',
               items: [
                  { href: '#api-reference', title: 'API Reference' },
                  { href: '#cli-reference', title: 'CLI Reference' },
                  { href: '#changelog', title: 'Changelog' },
               ],
               title: 'Reference',
            },
         ];

         return { sidebarSections };
      },
   });
</script>

<style src="./default.css"></style>
