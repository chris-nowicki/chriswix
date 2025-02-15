#!/usr/bin/env node
'use strict'
import boxen from 'boxen'
import chalk from 'chalk'
import inquirer from 'inquirer'
import clear from 'clear'
import open from 'open'

// Modern slate color theme inspired by shadcn/ui and Vercel
const theme = {
	slate900: '#020617', // Background
	slate800: '#1e293b', // Border
	slate400: '#94a3b8', // Muted text
	slate200: '#e2e8f0', // Primary text
	zinc300: '#d4d4d8', // Secondary text
}

const prompt = inquirer.createPromptModule()

// Questions after the card
const questions = [
	{
		type: 'list',
		name: 'action',
		message: 'What would you like to do?',
		choices: [
			{
				name: `Send me an ${chalk.hex(theme.slate400).bold('email')}`,
				value: () => {
					open('mailto:chris@chrisnowicki.dev')
					console.log('\nOpening email client...\n')
					showMenu()
				},
			},
			{
				name: 'Exit',
				value: () => {
					console.log('Goodbye!\n')
				},
			},
		],
	},
]

// Data for the card
const data = {
	name: chalk.bold.hex(theme.slate200)(' Chris "Wix" Nowicki'),
	title: `${chalk.hex(theme.slate400)(' Software Engineering Lead')}`,
	work: `${chalk.hex(theme.slate400)('https://thisdot.co')}`,
	twitter: chalk.hex(theme.slate400)('https://twitter.com/iamwix'),
	github: chalk.hex(theme.slate400)('https://github.com/chris-nowicki'),
	linkedin: chalk.hex(theme.slate400)('https://linkedin.com/in/chris-nowicki'),
	web: chalk.hex(theme.slate400)('https://chrisnowicki.dev'),
	npx:
		chalk.hex(theme.slate400)('npx') +
		' ' +
		chalk.hex(theme.slate200)('chriswix'),

	// Labels
	labelWork: chalk.hex(theme.zinc300).bold(' Work:'),
	labelTwitter: chalk.hex(theme.zinc300).bold(' Twitter:'),
	labelGitHub: chalk.hex(theme.zinc300).bold(' GitHub:'),
	labelLinkedIn: chalk.hex(theme.zinc300).bold(' LinkedIn:'),
	labelWeb: chalk.hex(theme.zinc300).bold(' Web:'),
	labelCard: chalk.hex(theme.zinc300).bold(' Card:'),
}

// Build the card
const me = boxen(
	[
		`${data.name}`,
		`${data.title}`,
		``,
		`${chalk
			.hex(theme.slate400)
			.italic(
				' Tech nerd 🤓. Addicted to coffee, and always on the search for a good 🍔!'
			)}`,
		'',
		`${data.labelWork} ${data.work}`,
		`${data.labelTwitter} ${data.twitter}`,
		`${data.labelGitHub} ${data.github}`,
		`${data.labelLinkedIn} ${data.linkedin}`,
		`${data.labelWeb} ${data.web}`,
		``,
		`${data.labelCard} ${data.npx}`,
	].join('\n'),
	{
		float: 'center',
		margin: 1,
		padding: 1,
		borderStyle: 'none',
		backgroundColor: theme.slate900,
	}
)

// Optional tip
const tip = [
	`Tip: Try ${chalk
		.hex(theme.slate400)
		.bold('cmd/ctrl + click')} on the links above`,
	'',
].join('\n')

// Show menu function
function showMenu() {
	clear()
	console.log(me)
	console.log(tip)
	prompt(questions).then((answer) => answer.action())
}

// Initial call
showMenu()
