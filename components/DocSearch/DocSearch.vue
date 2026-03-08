<template>
   <Teleport to="body">
      <Transition name="doc-search-fade">
         <div
            v-if="isSearchOpen"
            aria-modal="true"
            class="doc-search-backdrop"
            role="dialog"
            @click="handleBackdropClick"
         >
            <div class="doc-search-modal" @click="handleModalClick">
               <div class="doc-search-modal__header">
                  <svg
                     aria-hidden="true"
                     class="doc-search-modal__icon"
                     fill="none"
                     height="18"
                     stroke="currentColor"
                     stroke-width="2"
                     viewBox="0 0 24 24"
                     width="18"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <circle cx="11" cy="11" r="8" />
                     <line x1="21" x2="16.65" y1="21" y2="16.65" />
                  </svg>
                  <input
                     ref="searchInputRef"
                     v-model="searchQuery"
                     aria-label="Search documentation"
                     class="doc-search-modal__input"
                     placeholder="Search documentation..."
                     type="text"
                  />
                  <button
                     aria-label="Close search"
                     class="doc-search-modal__close-btn"
                     type="button"
                     @click="closeSearch"
                  >
                     <kbd>Esc</kbd>
                  </button>
               </div>

               <div class="doc-search-modal__body">
                  <div v-if="!searchQuery" class="doc-search-modal__empty-state">
                     <p class="doc-search-modal__hint">
                        Start typing to search across all documentation...
                     </p>
                     <div class="doc-search-modal__recent">
                        <p class="doc-search-modal__recent-label">Recent searches</p>
                        <ul class="doc-search-modal__recent-list">
                           <li class="doc-search-modal__recent-item">Getting Started</li>
                           <li class="doc-search-modal__recent-item">Configuration Options</li>
                           <li class="doc-search-modal__recent-item">API Reference</li>
                        </ul>
                     </div>
                  </div>

                  <div v-else class="doc-search-modal__results">
                     <p class="doc-search-modal__results-placeholder">
                        Search results for &ldquo;{{ searchQuery }}&rdquo; will appear here.
                     </p>
                  </div>
               </div>

               <div class="doc-search-modal__footer">
                  <span class="doc-search-modal__footer-hint">
                     <kbd>&#8593;</kbd><kbd>&#8595;</kbd> to navigate &nbsp;&bull;&nbsp;
                     <kbd>Enter</kbd> to select &nbsp;&bull;&nbsp; <kbd>Esc</kbd> to close
                  </span>
               </div>
            </div>
         </div>
      </Transition>
   </Teleport>
</template>

<script lang="ts" src="./DocSearch.ts"></script>
<style src="./DocSearch.css"></style>
