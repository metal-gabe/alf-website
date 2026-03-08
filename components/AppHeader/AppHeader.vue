<template>
   <header class="app-header">
      <div class="app-header__inner">
         <div class="app-header__left">
            <NuxtLink class="app-header__logo" to="/">
               <span class="app-header__logo-icon">&#9670;</span>
               <span class="app-header__logo-text">ALF Docs</span>
            </NuxtLink>
         </div>

         <div class="app-header__center">
            <button
               aria-label="Open search"
               class="app-header__search-btn"
               type="button"
               @click="openSearch"
            >
               <svg
                  aria-hidden="true"
                  class="app-header__search-icon"
                  fill="none"
                  height="16"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" x2="16.65" y1="21" y2="16.65" />
               </svg>
               <span class="app-header__search-placeholder">Search docs...</span>
               <kbd class="app-header__search-kbd">{{ searchShortcutLabel }}</kbd>
            </button>
         </div>

         <nav aria-label="Main navigation" class="app-header__right">
            <ul class="app-header__nav">
               <li v-for="link in navLinks" :key="link.href" class="app-header__nav-item">
                  <a
                     v-if="link.external"
                     :href="link.href"
                     class="app-header__nav-link"
                     rel="noopener noreferrer"
                     target="_blank"
                  >
                     {{ link.label }}
                  </a>
                  <NuxtLink v-else :to="link.href" class="app-header__nav-link">
                     {{ link.label }}
                  </NuxtLink>
               </li>
            </ul>
         </nav>
      </div>
   </header>
</template>

<script lang="ts" src="./AppHeader.ts"></script>
<style src="./AppHeader.css"></style>
