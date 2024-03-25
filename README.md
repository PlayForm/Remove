# [astro-dead-link] 🪦

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

To install `astro-dead-link`, run the following from your project directory and
follow the prompts:

Using NPM:

```sh
npx astro add astro-dead-link
```

Using Yarn:

```sh
yarn astro add astro-dead-link
```

Using PNPM:

```sh
pnpx astro add astro-dead-link
```

### Install dependencies manually

First, install the `astro-dead-link` integration like so:

```sh
npm install -D -E astro-dead-link
```

Then, apply this integration to your `astro.config.*` file using the
`integrations` property:

**`astro.config.ts`**

```ts
import deadLinks from "astro-dead-link";

export default {
	integrations: [deadLinks()],
};
```

## Getting started

The utility will now automatically remove all the deadlinks from your website
and point to their origin.

[astro-dead-link]: HTTPS://NPMJS.Org/astro-dead-link
[astro-integration]: https://docs.astro.build/en/guides/integrations-guide/

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a history of changes to this integration.
