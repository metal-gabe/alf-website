import { defineComponent, ref } from 'vue';
import type { PropType } from 'vue';

export interface SidebarItem {
   href: string;
   title: string;
}

export interface SidebarSection {
   href: string;
   items: SidebarItem[];
   title: string;
}

export default defineComponent({
   name: 'DocSidebar',

   props: {
      sections: {
         default: () => [],
         required: false,
         type: Array as PropType<SidebarSection[]>,
      },
   },

   setup(props) {
      const expandedSections = ref<Set<string>>(new Set(props.sections.map(s => s.href)));

      function toggleSection(href: string) {
         if (expandedSections.value.has(href)) {
            expandedSections.value.delete(href);
         } else {
            expandedSections.value.add(href);
         }
      }

      function isSectionExpanded(href: string) {
         return expandedSections.value.has(href);
      }

      return { isSectionExpanded, toggleSection };
   },
});
