## Remotion Library Starter

This Turborepo template:

- you could clone to develop your own Remotion libraries and components
- includes best practices for developing Remotion libraries out of the box
- includes an example package for testing your library

### Installation

To create your own library, [use this repository as a template](https://github.com/new?owner=remotion-dev&template_name=library-starter&template_owner=remotion-dev)

### What's Inside?

This starter template uses Turborepo to manage packages across the monorepo, and pnpm as a package manager. This project contains:

```t
packages/
├─ example/ # Sample testbed
└─ library/ # Your library code
```

Each of these directories has their own respective README.md files with more information on how to use them.

### Common Workflows

#### Creating a new package

To add a new package, simply run `pnpm turbo gen` init in the monorepo root. This will prompt you for a package name as well as if you want to install any dependencies to the new package (of course you can also do this yourself later).

The generator sets up the `package.json`, `tsconfig.json` and a `index.ts,` as well as configures all the necessary configurations for tooling around your package such as formatting, linting and typechecking. When the package is created, you're ready to go build out the package.

### Credits

- [Create-t3-turbo](https://github.com/t3-oss/create-t3-turbo/) for inspiring the project structure, scripts, and readme
