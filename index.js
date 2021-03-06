var reactConfig = require('./react');

var plugins = ['eslint-plugin-evernote'];
plugins.push.apply(plugins, reactConfig.plugins);
var rules = {
  'array-bracket-spacing': [2, 'never'],
  'block-scoped-var': 2,
  'block-spacing': 2,
  'brace-style': 2,
  'camelcase': 2,
  'comma-dangle': 2,
  'comma-spacing': 2,
  'comma-style': 2,
  'computed-property-spacing': 2,
  'consistent-return': 2,
  'consistent-this': [2, 'self'],
  'curly': 2,
  'dot-notation': 2,
  'eol-last': 2,
  'eqeqeq': 2,
  'evernote/no-only': 2,
  'indent': [2, 2, {'SwitchCase': 1}],
  'jsx-quotes': 2,
  'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],
  'keyword-spacing': 2,
  'linebreak-style': 2,
  'new-parens': 2,
  'no-array-constructor': 2,
  'no-caller': 2,
  'no-catch-shadow': 2,
  'no-cond-assign': 2,
  'no-constant-condition': 2,
  'no-div-regex': 2,
  'no-dupe-args': 2,
  'no-dupe-keys': 2,
  'no-duplicate-case': 2,
  'no-empty': 2,
  'no-empty-character-class': 2,
  'no-eval': 2,
  'no-ex-assign': 2,
  'no-extend-native': 2,
  'no-extra-bind': 2,
  'no-extra-boolean-cast': 2,
  'no-extra-semi': 2,
  'no-fallthrough': 2,
  'no-floating-decimal': 2,
  'no-func-assign': 2,
  'no-implicit-coercion': 0,
  'no-implied-eval': 2,
  'no-inner-declarations': 2,
  'no-invalid-regexp': 2,
  'no-invalid-this': 0,
  'no-irregular-whitespace': 2,
  'no-iterator': 2,
  'no-label-var': 2,
  'no-labels': 2,
  'no-lone-blocks': 2,
  'no-loop-func': 2,
  'no-mixed-requires': 2,
  'no-mixed-spaces-and-tabs': 2,
  'no-multi-spaces': 2,
  'no-multi-str': 2,
  'no-multiple-empty-lines': 2,
  'no-native-reassign': 2,
  'no-negated-in-lhs': 2,
  'no-nested-ternary': 2,
  'no-new': 2,
  'no-new-func': 2,
  'no-new-object': 2,
  'no-new-wrappers': 2,
  'no-obj-calls': 2,
  'no-octal': 2,
  'no-octal-escape': 2,
  'no-param-reassign': 0,
  'no-process-env': 2,
  'no-proto': 2,
  'no-redeclare': 2,
  'no-regex-spaces': 2,
  'no-return-assign': 2,
  'no-script-url': 2,
  'no-self-compare': 2,
  'no-sequences': 2,
  'no-shadow': 2,
  'no-shadow-restricted-names': 2,
  'no-spaced-func': 2,
  'no-sparse-arrays': 2,
  'no-throw-literal': 2,
  'no-trailing-spaces': 2,
  'no-undef': 2,
  'no-undef-init': 2,
  'no-unexpected-multiline': 2,
  'no-unreachable': 2,
  'no-unused-expressions': 0,
  'no-unused-vars': [2, {'args': 'after-used', 'argsIgnorePattern': '^unused'}],
  'no-use-before-define': [2, 'nofunc'],
  'no-useless-call': 2,
  'no-useless-concat': 2,
  'no-void': 2,
  'no-warning-comments': 0,
  'no-with': 2,
  'object-curly-spacing': [2, 'never'],
  'one-var': 0,
  'operator-assignment': 2,
  'operator-linebreak': [2, 'before', {'overrides': {'?': 'before', '=': 'after'}}],
  'quotes': [2, 'single'],
  'radix': 0,
  'semi': 2,
  'semi-spacing': [2, {'before': false, 'after': true}],
  'sort-vars': 0,
  'space-before-blocks': 2,
  'space-before-function-paren': [2, 'never'],
  'space-in-parens': 2,
  'space-infix-ops': 2,
  'space-unary-ops': 2,
  'spaced-comment': 2,
  'strict': 2,
  'use-isnan': 2,
  'valid-jsdoc': 0,
  'valid-typeof': 2,
  'vars-on-top': 0,
  'wrap-iife': 2
};

for (var ruleName in reactConfig.rules) {
  rules[ruleName] = reactConfig.rules[ruleName];
}

module.exports = {
  env: {
    es6: true
  },
  plugins: plugins,
  rules: rules
};
