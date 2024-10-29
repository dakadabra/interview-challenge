import eslint from '@eslint/js';
import eslintPluginTypescript from 'typescript-eslint';
import globals from 'globals';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';

export default eslintPluginTypescript.config(
  eslint.configs.recommended,
  ...eslintPluginTypescript.configs.recommended,
  ...eslintPluginTypescript.configs.stylistic,
  eslintPluginPrettier,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    // Exclude type checking for JavaScript files
    files: ['**/*.js'],
    ...eslintPluginTypescript.configs.disableTypeChecked,
  },
  {
    rules: {
      "@typescript-eslint/no-extraneous-class": "off",
      //"@typescript-eslint/no-explicit-any": "off",
      // "@typescript-eslint/interface-name-prefix": "off",
      // "@typescript-eslint/explicit-function-return-type": "off",
      // "@typescript-eslint/explicit-module-boundary-types": "off",
    },
  }
);