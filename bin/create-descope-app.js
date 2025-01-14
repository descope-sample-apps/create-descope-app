#!/usr/bin/env node

import { createApp } from '../lib/create-app.js';
import { Command } from 'commander';
import { DEFAULT_PROJECT_NAME, DEFAULT_TEMPLATE } from '../lib/create-app.js';

const program = new Command();

program
  .version('1.0.0')
  .argument('[project-name]', 'Name of your new project', DEFAULT_PROJECT_NAME)
  .option('-t, --template [template]', 'Select a template (next-js-sample-app, etc)')
  .action(async (projectName, options) => {
    await createApp(projectName, options.template);
  });

program.parse(process.argv);