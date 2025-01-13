import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import chalk from 'chalk';
import readline from 'readline';
import inquirer from 'inquirer';

export const DEFAULT_PROJECT_NAME = 'my-app';
export const DEFAULT_TEMPLATE = 'next-js-sample-app';
export const availableTemplates = ['next-js-sample-app', 'b2b-react-sample-app', 'angular-sample-app']; // Add your templates here

export async function createApp(projectName, template) {
    // Set default project name if not provided
    if (!projectName || projectName === DEFAULT_PROJECT_NAME) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        projectName = await new Promise((resolve) => {
            rl.question(`What is your project named? (default: ${DEFAULT_PROJECT_NAME}) `, (name) => {
                rl.close();
                resolve(name || DEFAULT_PROJECT_NAME);
            });
        });
    }
    // If template is not provided, show available options
    if (!template || template === DEFAULT_TEMPLATE) {
        const { selectedTemplate } = await inquirer.prompt([
            {
                type: 'list',
                name: 'selectedTemplate',
                message: 'Select a template:',
                choices: availableTemplates,
                default: DEFAULT_TEMPLATE
            }
        ]);
        template = selectedTemplate;
    }
    const projectPath = path.resolve(process.cwd(), projectName);

    if (fs.existsSync(projectPath)) {
        console.error(chalk.red(`❌ Folder "${projectName}" already exists.`));
        process.exit(1);
    }

    console.log(chalk.green(`✨ Creating a new Descope project: ${projectName}`));
    console.log(`📦 Using template: ${template}`);

    // Clone the appropriate template from your GitHub repo
    const templateRepo = `https://github.com/descope-sample-apps/${template}`;
    execSync(`git clone ${templateRepo} ${projectPath}`, { stdio: 'inherit' });

    console.log(chalk.green(`✅ Project "${projectName}" created successfully.`));
}