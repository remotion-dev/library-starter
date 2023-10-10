## Remotion Library Template

This is a turborepo template you could clone to develop your own react libraries and components for the [Remotion](https:/remotion.dev/) ecosystem with the best practices applied out of the box.

### Installation

There are two ways of using this repository. Either use this repository as a template:

 <!-- TODO: Add image -->

or use Turbo's CLI to init your project (use PNPM as package manager):

```sh
pnpx create-turbo@latest -e https://github.com/remotion-dev/library-starter
```

### What's Inside?

This starter template uses Turborepo to manage packages across the monorepo, and pnpm as a package manager. This project contains:

```
apps
└── studio
    └── Remotion studio environment that lets you test out internal components and hooks

packages
└── use-second
    └── Example (publishable) hook

tooling
├── eslint
│   └── ESLint configuration
└── typescript
    └── TypeScript configuration
```

Each of these directories has their own respective README.md files with more information on how to use them.

### Common Workflows

#### Creating a new package

To add a new package, simply run `pnpm turbo gen` init in the monorepo root. This will prompt you for a package name as well as if you want to install any dependencies to the new package (of course you can also do this yourself later).

The generator sets up the `package.json`, `tsconfig.json` and a `index.ts,` as well as configures all the necessary configurations for tooling around your package such as formatting, linting and typechecking. When the package is created, you're ready to go build out the package.

### Credits

- [Create-t3-turbo](https://github.com/t3-oss/create-t3-turbo/) for inspiring the project structure, scripts, and readme
