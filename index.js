#!/usr/bin/env node

'use strict'
import boxen from 'boxen'
import chalk from 'chalk'
import inquirer from 'inquirer'
import clear from 'clear'
import open from 'open'

clear()

// Dracula color theme
const dracula = {
	purple: '#BD93F9',
	green: '#50FA7B',
	orange: '#FFB86C',
	red: '#FF5555',
	cyan: '#8BE9FD',
	foreground: '#F8F8F2',
	background: '#282A36',
	lineTitle: '#44475A',
}

const prompt = inquirer.createPromptModule()

// Questions after the card
const questions = [
	{
		type: 'list',
		name: 'action',
		message: 'What you want to do?',
		choices: [
			{
				name: `Download my ${chalk.hex(dracula.orange).bold('resume')}?`,
				value: () => {
					open('https://www.chrisnowicki.io/files/ChrisNowicki_Resume.pdf')
					console.log('\nDone!\n')
				},
			},
			{
				name: `Send me an ${chalk.hex(dracula.green).bold('email')}?`,
				value: () => {
					open('mailto:chris@chrisnowicki.io')
					console.log('\nDone, see you soon.\n')
				},
			},
			{
				name: `Schedule a ${chalk.hex(dracula.purple).bold('call')}?`,
				value: () => {
					open('https://cal.com/chriswix')
					console.log('\nDone, see you soon.\n')
				},
			},
			{
				name: 'Just quit.',
				value: () => {
					console.log('Good Bye!\n')
				},
			},
		],
	},
]

// Data for the card
const data = {
	name: chalk.bold.hex(dracula.purple)('       Chris "Wix" Nowicki'),
	work: `${chalk.hex(dracula.green)('Full-Stack Web Developer')}`,
	twitter:
		chalk.gray('https://twitter.com/') + chalk.hex(dracula.orange)('iamwix'),
	github: chalk.gray('https://github.com/') + chalk.green('chris-nowicki'),
	linkedin:
		chalk.gray('https://linkedin.com/in/') +
		chalk.hex(dracula.purple)('chris-nowicki'),
	web: chalk.hex(dracula.cyan)('https://chrisnowicki.io'),
	npx:
		chalk.hex(dracula.red)('npx') +
		' ' +
		chalk.hex(dracula.foreground)('chriswix'),

	labelWork: chalk.hex(dracula.foreground).bold('       Work:'),
	labelTwitter: chalk.hex(dracula.foreground).bold('    Twitter:'),
	labelGitHub: chalk.hex(dracula.foreground).bold('     GitHub:'),
	labelLinkedIn: chalk.hex(dracula.foreground).bold('   LinkedIn:'),
	labelWeb: chalk.hex(dracula.foreground).bold('        Web:'),
	labelCard: chalk.hex(dracula.foreground).bold('       Card:'),
}

// Build the card
const me = boxen(
	[
		`${data.name}`,
		``,
		`${data.labelWork}  ${data.work}`,
		`${data.labelTwitter}  ${data.twitter}`,
		`${data.labelGitHub}  ${data.github}`,
		`${data.labelLinkedIn}  ${data.linkedin}`,
		`${data.labelWeb}  ${data.web}`,
		``,
		`${data.labelCard}  ${data.npx}`,
		``,
		`${chalk.italic(
			'Full-Stack Software Developer | Next.js | React | TypeScript |'
		)}`,
		`${chalk.italic('Express.js | MySQL | MongoDB')}`,
		'',
		`${chalk.italic(
			'Tech nerd 🤓.  Addicted to coffee, and always on the search for a good 🍔 😋!'
		)}`,
		'',
		`${
			chalk
				.hex(dracula.purple)
				.italic.bold('Looking for a new role and open to work ') +
			chalk.hex(dracula.green)('remote') +
			chalk.hex(dracula.purple)(' / ') +
			chalk.hex(dracula.green)('hybrid') +
			chalk.hex(dracula.purple)(' / ') +
			chalk.hex(dracula.green)('onsite')
		}`,
	].join('\n'),
	{
		margin: 1,
		float: 'center',
		padding: 1,
		borderStyle: 'single',
		borderColor: dracula.purple,
	}
)

// Print the card
console.log(me)

// Optional tip to help users use the links
const tip = [
	`Tip: Try ${chalk.cyanBright.bold('cmd/ctrl + click')} on the links above`,
	'',
].join('\n')

// Show the tip
console.log(tip)

// Ask the Inquirer questions.
prompt(questions).then((answer) => answer.action())
