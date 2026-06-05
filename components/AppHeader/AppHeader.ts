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
         {
            href: 'https://github.com/metal-gabe/alf-cli/CHANGELOG.md',
            label: 'Changelog',
            external: true,
         },
         { href: 'https://github.com/metal-gabe/alf-cli', label: 'GitHub', external: true },
      ];

      return { navLinks, openSearch, searchShortcutLabel };
   },
});
