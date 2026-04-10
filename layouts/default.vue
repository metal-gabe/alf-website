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
               ],
               title: 'Getting Started',
            },
            {
               href: '#shell-integration',
               items: [
                  { href: '#shell-setup', title: 'Setup' },
                  { href: '#keybind', title: 'Rebinding' },
                  { href: '#how-it-works', title: 'How It Works' },
               ],
               title: 'Shell Integration',
            },
            {
               href: '#configuration',
               items: [
                  { href: '#config-file', title: 'Config File' },
                  { href: '#general-options', title: 'General' },
                  { href: '#search-options', title: 'Search' },
                  { href: '#ui-options', title: 'UI & Display' },
               ],
               title: 'Configuration',
            },
            {
               href: '#keybindings',
               items: [
                  { href: '#normal-mode', title: 'Normal Mode' },
                  { href: '#search-mode', title: 'Search Mode' },
               ],
               title: 'Keybindings',
            },
            {
               href: '#reference',
               items: [
                  { href: '#cli-commands', title: 'CLI Commands' },
                  { href: '#themes', title: 'Themes' },
                  { href: '#platforms', title: 'Platforms' },
               ],
               title: 'Reference',
            },
         ];

         return { sidebarSections };
      },
   });
</script>

<style src="./default.css"></style>
