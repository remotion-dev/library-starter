# Remotion Library Starter

This Turborepo template:

- allows you to develop your own Remotion libraries and components
- includes best practices for developing Remotion libraries out of the box
- includes an example package for testing your library

## Getting started

To create your own library, [use this repository as a template](https://github.com/new?owner=remotion-dev&template_name=library-starter&template_owner=remotion-dev).

After cloning the resulting library, start developing it:

```
pnpm i
pnpm run dev
```

Open the browser on http://localhost:3000 to see the testbed.
Edit the `packages/library` folder to change your library and edit `packages/example` to edit your testbed.

## Linting

To lint your code, run:

```sh
pnpm run lint
```

either from the root or from an individual package.

### Credits

- [Create-t3-turbo](https://github.com/t3-oss/create-t3-turbo/) for inspiring the project structure, scripts, and readme
