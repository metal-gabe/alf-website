export default {
   extends: ['stylelint-config-standard-scss', 'stylelint-prettier/recommended'],
   rules: {
      'at-rule-no-unknown': [
         true,
         {
            ignoreAtRules: ['tailwind', 'apply', 'layer', 'config', 'theme', 'plugin', 'variant'],
         },
      ],
      'media-feature-range-notation': null,
      'property-no-vendor-prefix': null,
      'scss/at-rule-no-unknown': [
         true,
         {
            ignoreAtRules: ['tailwind', 'apply', 'layer', 'config', 'theme', 'plugin', 'variant'],
         },
      ],
      'selector-class-pattern': [
         '^([a-z][a-z0-9-]*)(__[a-z0-9][a-z0-9-]*)?(--[a-z0-9][a-z0-9-]*)?$',
         { message: selector => `Expected "${selector}" to follow BEM naming` },
      ],
   },
};
