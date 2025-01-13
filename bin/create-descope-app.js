#!/usr/bin/env node

import { createApp } from '../lib/create-app.js';
import { Command } from 'commander';

const program = new Command();

program
  .version('1.0.0')
  .argument('<project-name>', 'Name of your new project')
  .option('-t, --template <template>', 'Select a template (next-js-sample-app, etc)', 'next-js-sample-app')
  .action(async (projectName, options) => {
    await createApp(projectName, options.template);
  });

program.parse(process.argv);