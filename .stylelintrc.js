export default {
   extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
   rules: {
      'at-rule-no-unknown': [
         true,
         {
            ignoreAtRules: ['tailwind', 'apply', 'layer', 'config', 'theme', 'plugin', 'variant'],
         },
      ],
      'scss/at-rule-no-unknown': [
         true,
         {
            ignoreAtRules: ['tailwind', 'apply', 'layer', 'config', 'theme', 'plugin', 'variant'],
         },
      ],
   },
};
