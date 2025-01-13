# Create Descope App

The easiest way to get started with Descope is by using create-descope-app. This CLI tool enables you to quickly start building a new Descope application, with everything set up for you. You can create a new app using the default Descope Next.js template, or by using one of the official examples. To get started, use the following command:

Interactive
You can create a new project interactively by running:

```bash
npx create-descope-app@latest
# or
yarn create descope-app
# or
pnpm create descope-app
# or
bunx create-descope-app
```

You will be asked for the name of your project

Non-interactive
You can also pass command line arguments to set up a new project non-interactively. See create-descope-app --help:

Usage: create-descope-app [project-directory] [options]

Options:
-  -V, --version                        output the version number
- -t, --template           Select a template (next-js-sample-app, etc)
- -h, --help                           output usage information

```bash
npx create-descope-app@latest my-app --template next-js-sample-app
# or
yarn create descope-app my-app --template next-js-sample-app
# or
pnpm create descope-app my-app --template next-js-sample-app
# or
bunx create-descope-app my-app --template next-js-sample-app
```
