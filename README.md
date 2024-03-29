# [dead-link-astro] 🪦

This **[Astro integration][astro-integration]** will automatically remove all
the dead links in your website.

## Installation

There are two ways to add integrations to your project. Let's try the most
convenient option first!

### `astro add` command

Astro includes a CLI tool for adding first party integrations: `astro add`. This
command will:

1. (Optionally) Install all necessary dependencies and peer dependencies
2. (Also optionally) Update your `astro.config.*` file to apply this integration

To install `dead-link-astro`, run the following from your project directory and
follow the prompts:

Using NPM:

```sh
npx astro add dead-link-astro
```

Using Yarn:

```sh
yarn astro add dead-link-astro
```

Using PNPM:

```sh
pnpx astro add dead-link-astro
```

### Install dependencies manually

First, install the `dead-link-astro` integration like so:

```sh
npm install -D -E dead-link-astro
```

Then, apply this integration to your `astro.config.*` file using the
`integrations` property:

**`astro.config.ts`**

```ts
import deadLinks from "dead-link-astro";

export default {
	integrations: [deadLinks()],
};
```

## Getting started

The utility will now automatically remove all the deadlinks from your website
and point to their origin.

[dead-link-astro]: https://npmjs.org/dead-link-astro
[astro-integration]: https://docs.astro.build/en/guides/integrations-guide/

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a history of changes to this integration.
