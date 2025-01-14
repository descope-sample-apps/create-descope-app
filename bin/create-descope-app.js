#!/usr/bin/env node

import { createApp } from '../lib/create-app.js';
import { Command } from 'commander';
import { DEFAULT_PROJECT_NAME } from '../lib/create-app.js';
import packageJson from './package.json'

const program = new Command(packageJson.name);

program
  .version(
    packageJson.version,
    '-v, --version',
    'Output the current version of create-descope-app'
  )
  .argument('[project-name]', 'Name of your new project', DEFAULT_PROJECT_NAME)
  .option('-t, --template [template]', 'Select a template (next-js-sample-app, etc)')
  .action(async (projectName, options) => {
    await createApp(projectName, options.template);
  });

program.parse(process.argv);