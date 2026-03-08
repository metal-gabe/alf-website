import { ref, onMounted, onUnmounted } from 'vue';

const isSearchOpen = ref(false);

export function useSearch() {
   function openSearch() {
      isSearchOpen.value = true;
   }

   function closeSearch() {
      isSearchOpen.value = false;
   }

   function toggleSearch() {
      isSearchOpen.value = !isSearchOpen.value;
   }

   function handleKeydown(event: KeyboardEvent) {
      const isMac = navigator.platform.toUpperCase().indexOf('MAC') >= 0;
      const modifier = isMac ? event.metaKey : event.ctrlKey;
      if (modifier && event.key === 'k') {
         event.preventDefault();
         toggleSearch();
      }
      if (event.key === 'Escape' && isSearchOpen.value) {
         closeSearch();
      }
   }

   onMounted(() => {
      window.addEventListener('keydown', handleKeydown);
   });

   onUnmounted(() => {
      window.removeEventListener('keydown', handleKeydown);
   });

   return {
      closeSearch,
      isSearchOpen,
      openSearch,
      toggleSearch,
   };
}
