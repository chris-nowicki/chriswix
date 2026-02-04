#!/usr/bin/env node
'use strict'
import boxen from 'boxen'
import chalk from 'chalk'
import inquirer from 'inquirer'
import clear from 'clear'
import open from 'open'

// Modern slate color theme inspired by shadcn/ui and Vercel
const theme = {
	slate900: '#020617',
	slate800: '#1e293b',
	slate400: '#94a3b8',
	slate200: '#e2e8f0',
	zinc300: '#d4d4d8',
}

// Content data (no styling)
const content = {
	name: 'Chris "Wix" Nowicki',
	title: 'Developer Experience Engineer',
	tagline: 'Tech nerd 🤓. Addicted to coffee, and always on the search for a good 🍔!',
	links: {
		work: 'https://commerce.com',
		twitter: 'https://twitter.com/iamwix',
		github: 'https://github.com/chris-nowicki',
		linkedin: 'https://linkedin.com/in/chris-nowicki',
		web: 'https://chrisnowicki.dev',
		email: 'chris@chrisnowicki.dev',
	},
	npxCommand: 'chriswix',
}

// Styling utilities
const style = {
	primary: (text) => chalk.bold.hex(theme.slate200)(text),
	muted: (text) => chalk.hex(theme.slate400)(text),
	label: (text) => chalk.hex(theme.zinc300).bold(text),
	italic: (text) => chalk.hex(theme.slate400).italic(text),
}

const row = (label, value) => `${style.label(` ${label}:`)} ${style.muted(value)}`

// Card content
const cardContent = [
	style.primary(` ${content.name}`),
	style.muted(` ${content.title}`),
	'',
	style.italic(` ${content.tagline}`),
	'',
	row('Work', content.links.work),
	row('Twitter', content.links.twitter),
	row('GitHub', content.links.github),
	row('LinkedIn', content.links.linkedin),
	row('Web', content.links.web),
	'',
	`${style.label(' Card:')} ${style.muted('npx')} ${style.primary(content.npxCommand)}`,
].join('\n')

const card = boxen(cardContent, {
	float: 'center',
	margin: 1,
	padding: 1,
	borderStyle: 'none',
	backgroundColor: theme.slate900,
})

const tip = [
	`Tip: Try ${style.label('cmd/ctrl + click')} on the links above`,
	'',
].join('\n')

// Menu helpers
const prompt = inquirer.createPromptModule()

const openLink = (url, label) => () => {
	open(url)
	console.log(`\n  Opening ${label}...\n`)
	showMenu()
}

const questions = [
	{
		type: 'list',
		name: 'action',
		message: 'What would you like to do?',
		choices: [
			{
				name: `Send me an ${style.label('email')}`,
				value: openLink(`mailto:${content.links.email}`, 'email client'),
			},
			{
				name: `Visit my ${style.label('website')}`,
				value: openLink(content.links.web, 'website'),
			},
			{
				name: `Check out my ${style.label('GitHub')}`,
				value: openLink(content.links.github, 'GitHub'),
			},
			{
				name: `Connect on ${style.label('LinkedIn')}`,
				value: openLink(content.links.linkedin, 'LinkedIn'),
			},
			{
				name: `Follow on ${style.label('Twitter')}`,
				value: openLink(content.links.twitter, 'Twitter'),
			},
			{
				name: 'Exit',
				value: () => console.log('Goodbye!\n'),
			},
		],
	},
]

// Main
function showMenu() {
	clear()
	console.log(card)
	console.log(tip)
	prompt(questions).then((answer) => answer.action())
}

showMenu()
