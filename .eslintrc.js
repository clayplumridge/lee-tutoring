/* eslint-env node */
module.exports = {
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended-type-checked",
        "plugin:@typescript-eslint/stylistic-type-checked"
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ["./tsconfig.base.json", "./packages/*/tsconfig.json"]
    },
    plugins: ["@typescript-eslint", "import"],
    rules: {
        "@typescript-eslint/require-await": "off",
        "@typescript-eslint/ban-types": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
        "@typescript-eslint/no-namespace": "off",
        "import/order": ["error", {}],
        "sort-imports": [
            "error",
            {
                allowSeparatedGroups: true,
                ignoreDeclarationSort: true
            }
        ]
    }
};