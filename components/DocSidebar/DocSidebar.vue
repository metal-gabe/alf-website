<template>
   <nav aria-label="Documentation sections" class="doc-sidebar">
      <ul class="doc-sidebar__list">
         <li v-for="section in sections" :key="section.href" class="doc-sidebar__section">
            <button
               :aria-expanded="isSectionExpanded(section.href)"
               class="doc-sidebar__section-btn"
               type="button"
               @click="toggleSection(section.href)"
            >
               <span class="doc-sidebar__section-title">{{ section.title }}</span>
               <svg
                  :class="[
                     'doc-sidebar__chevron',
                     { 'doc-sidebar__chevron--open': isSectionExpanded(section.href) },
                  ]"
                  aria-hidden="true"
                  fill="none"
                  height="14"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                  width="14"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <polyline points="6 9 12 15 18 9" />
               </svg>
            </button>

            <Transition name="doc-sidebar-expand">
               <ul v-if="isSectionExpanded(section.href)" class="doc-sidebar__items">
                  <li v-for="item in section.items" :key="item.href" class="doc-sidebar__item">
                     <a :href="item.href" class="doc-sidebar__item-link">
                        {{ item.title }}
                     </a>
                  </li>
               </ul>
            </Transition>
         </li>
      </ul>
   </nav>
</template>

<script lang="ts" src="./DocSidebar.ts"></script>
<style src="./DocSidebar.css"></style>
