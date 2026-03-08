import { defineComponent } from 'vue';
import { useSearch } from '~/composables/useSearch';

export default defineComponent({
   name: 'AppHeader',

   setup() {
      const { openSearch } = useSearch();

      const isMac =
         typeof navigator !== 'undefined' && navigator.platform.toUpperCase().indexOf('MAC') >= 0;

      const searchShortcutLabel = isMac ? '⌘K' : 'Ctrl+K';

      const navLinks = [
         { href: '/', label: 'Docs' },
         { href: '/changelog', label: 'Changelog' },
         { href: 'https://github.com', label: 'GitHub', external: true },
      ];

      return { navLinks, openSearch, searchShortcutLabel };
   },
});
