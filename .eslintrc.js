module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es2021: true
  },
  extends: 'standard',
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script'
      }
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
  // rules: {
  //   'prettier/prettier': [
  //     'error',
  //     {
  //       semi: true, // Ajoute automatiquement des points-virgules
  //       singleQuote: true, // Utilise des simples quotes
  //       trailingComma: 'es5', // Ajoute des virgules de fin là où c'est possible
  //       endOfLine: 'auto' // Gère les retours à la ligne en fonction du système d'exploitation
  //     }
  //   ]
  // }
}
