import { defineComponent, ref, watch } from 'vue';
import { useSearch } from '~/composables/useSearch';

export default defineComponent({
   name: 'DocSearch',

   setup() {
      const { closeSearch, isSearchOpen } = useSearch();
      const searchQuery = ref('');
      const searchInputRef = ref<HTMLInputElement | null>(null);

      watch(isSearchOpen, isOpen => {
         if (isOpen) {
            searchQuery.value = '';
            setTimeout(() => {
               searchInputRef.value?.focus();
            }, 50);
         }
      });

      function handleBackdropClick() {
         closeSearch();
      }

      function handleModalClick(event: MouseEvent) {
         event.stopPropagation();
      }

      return {
         closeSearch,
         handleBackdropClick,
         handleModalClick,
         isSearchOpen,
         searchInputRef,
         searchQuery,
      };
   },
});
