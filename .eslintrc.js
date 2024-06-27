module.exports = {
  parser: '@typescript-eslint/parser', // Define el parser de ESLint para TypeScript
  extends: [
    'plugin:@typescript-eslint/recommended', // Usa las recomendaciones de @typescript-eslint/eslint-plugin
    'plugin:prettier/recommended', // Habilita eslint-plugin-prettier y muestra los errores de prettier como errores de ESLint. Asegúrate de que esta sea siempre la última configuración en el array extends.
  ],
  parserOptions: {
    ecmaVersion: 2020, // Permite el análisis de las características modernas de ECMAScript
    sourceType: 'module', // Permite el uso de imports
  },
  rules: {
    // Aquí puedes añadir reglas específicas para tu proyecto
  },
};