import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';
import chalk from 'chalk';

export async function createApp(projectName, template) {
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