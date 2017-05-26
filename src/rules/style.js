export default {
	'arrow-body-style': [2, 'as-needed'],
	'arrow-parens': [0, 'always'],
	'arrow-spacing': 2,
	'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
	camelcase: [1, { properties: 'never' }],
	'comma-dangle': [2, 'never'],
	'comma-style': [2, 'last'],
	'constructor-super': 2,
	curly: [0, 'multi-line'],
	'dot-notation': [2, { allowPattern: '^[a-z]+(_[a-z]+)+$' }],
	eqeqeq: 2,
	'func-style': [2, 'declaration', { allowArrowFunctions: true }],
	'guard-for-in': 2,
	'handle-callback-err': 0,
	indent: [2, 'tab', { SwitchCase: 1 }],
	'jsx-quotes': [2, 'prefer-double'],
	'key-spacing': 2,
	'keyword-spacing': 2,
	'lines-around-comment': 2,
	'new-cap': 1,
	'new-parens': 2,
	'no-alert': 2,
	'no-array-constructor': 2,
	'no-caller': 2,
	'no-cond-assign': 2,
	'no-console': [1, { allow: ['warn', 'error'] }],
	'no-const-assign': 2,
	'no-delete-var': 2,
	'no-dupe-class-members': 2,
	'no-dupe-keys': 2,
	'no-duplicate-imports': 2,
	'no-else-return': 2,
	'no-empty-pattern': 0,
	'no-empty': 0,
	'no-extra-parens': 0,			// we use extra parens in JSX ternaries, no way to disable that here.
	'no-iterator': 2,
	'no-lonely-if': 2,
	'no-mixed-spaces-and-tabs': [2, 'smart-tabs'],
	'no-multi-str': 2,
	'no-multiple-empty-lines': [2, { max: 2 }],
	'no-new-wrappers': 2,
	'no-proto': 2,
	'no-redeclare': 2,
	'no-shadow-restricted-names': 2,
	'no-shadow': 0,
	'no-spaced-func': 2,
	'no-this-before-super': 2,
	'no-trailing-spaces': [2, { skipBlankLines: true }],
	'no-undef-init': 2,
	'no-unneeded-ternary': 2,
	'no-unused-vars': [2, { args: 'none', varsIgnorePattern: '^h$' }],
	'no-useless-call': 2,
	'no-useless-computed-key': 2,
	'no-useless-concat': 2,
	'no-useless-constructor': 2,
	'no-useless-escape': 2,
	'no-useless-rename': 2,
	'no-var': 2,
	'no-with': 2,
	'object-curly-spacing': [2, 'always'],
	'object-shorthand': 2,
	'prefer-arrow-callback': 2,
	'prefer-rest-params': 2,
	'prefer-spread': 2,
	'prefer-template': 0,			// we can enable this when they add an option to allow concat for complex variables
	'quote-props': [2, 'as-needed'],
	quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
	radix: 2,
	'rest-spread-spacing': 2,
	semi: 2,
	'space-before-function-paren': [0, 'always'],		// for fmt
	'space-in-parens': [0, 'never'],
	strict: [2, 'never'],
	'unicode-bom': 2,
	'valid-jsdoc': [0, { requireReturn: false }]		// no way to turn this off for pure functional component
};
