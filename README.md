# chriswix

A business card, but make it `npx`.

```bash
npx chriswix
```

![Screen Shot](screenshot.png)

## Why?

Because LinkedIn is boring and paper cards end up in the trash. This one lives in npm where it belongs.

## The Stack

- **[boxen](https://github.com/sindresorhus/boxen)** - The card container (because CSS is for browsers)
- **[chalk](https://github.com/chalk/chalk)** - Terminal colors with a slate theme stolen from shadcn/ui
- **[inquirer](https://github.com/SBoudrias/Inquirer.js)** - Interactive menu so you can actually *do* stuff
- **[open](https://github.com/sindresorhus/open)** - Opens links in your browser like magic
- **[clear](https://github.com/bahamas10/node-clear)** - Keeps the terminal tidy

## How It Works

One file. ~125 lines. ES modules.

The whole thing is just a `showMenu()` function that clears the screen, prints a styled card, and loops back after each action. Nothing fancy, just vibes.

## Make Your Own

Fork it. Swap out my info for yours. Change the colors. Ship it.

```bash
npm login    # first time only
npm publish
```

Now you have a mass-produced business card that costs $0 and never runs out.

## License

MIT - Do whatever you want with it.
