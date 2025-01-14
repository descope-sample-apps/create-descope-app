# Create Descope App

The easiest way to get started with Descope is by using `create-descope-app`. This CLI tool enables you to quickly start building a new Descope application, with everything set up for you. You can create a new app using the default Descope template, or by using one of the official examples. To get started, use the following command:

## Interactive
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

## Non-interactive
You can also pass command line arguments to set up a new project non-interactively. See `create-descope-app --help`:

```bash

Usage: create-descope-app [project-directory] [options]

Options:
-V, --version                        output the version number
-t, --template           Select a template (next-js-sample-app, etc)
-h, --help                           output usage information
```

## Why use Create Descope App?

`create-descope-app` allows you to create a new Descope application in seconds. It is officially maintained by Descope, and includes a number of benefits:

- **Interactive Setup**: Running the tool without arguments launches an interactive setup process. You’ll be guided through creating a new Descope project, including naming your project and selecting templates.
- **Support for Examples**: The tool also supports creating new Descope applications using one of the official examples, including Next.js, React, Flutter, and more (e.g. `npx create-descope-app@latest --template next-js-sample-app`).
