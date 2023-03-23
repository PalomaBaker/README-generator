const inquirer = require('inquirer');
const fs = require('fs');

// Define the sections for the README
const SECTIONS = ['Description', 'Table of Contents', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'];

// Generate the README content based on the user input
function generateReadme(title, description, installation, usage, license, contributing, tests, username, email) {
  // Create the title section
  const titleSection = `# ${title}\n\n`;

  // Create the description section
  const descriptionSection = `## Description\n\n${description}\n\n`;

  // Create the table of contents section
  let tableOfContentsSection = '## Table of Contents\n\n';
  SECTIONS.forEach((section) => {
    tableOfContentsSection += `- [${section}](#${section.toLowerCase()})\n`;
  });
  tableOfContentsSection += '\n';

  // Create the installation section
  const installationSection = `## Installation\n\n${installation}\n\n`;

  // Create the usage section
  const usageSection = `## Usage\n\n${usage}\n\n`;

  // Create the license section
  const licenseSection = `## License\n\n[![License: ${license}](https://img.shields.io/badge/License-${license}-brightgreen.svg)](https://opensource.org/licenses/${license})\n\nThis application is covered under the ${license} license.\n\n`;

  // Create the contributing section
  const contributingSection = `## Contributing\n\n${contributing}\n\n`;

  // Create the tests section
  const testsSection = `## Tests\n\n${tests}\n\n`;

  // Create the questions section
  let questionsSection = '## Questions\n\n';
  if (username) {
    questionsSection += `GitHub: [${username}](https://github.com/${username})\n`;
  }
  if (email) {
    questionsSection += `Email: ${email}\n`;
  }

  // Concatenate all the sections
  let readme = titleSection + descriptionSection + tableOfContentsSection + installationSection + usageSection + licenseSection + contributingSection + testsSection + questionsSection;

  return readme;
}

// Prompt the user for input and generate the README
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Enter the project title:',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter usage information:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license:',
      choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Enter test instructions:',
    },
    {
      type: 'input',
      name: 'username',
      message: 'Enter your GitHub username (optional):',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address (optional):',
    },
  ])
  .then((
