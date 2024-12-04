# Crayond's Monorepo Boilerplate - TS - V2

This repository serves as a complete boilerplate for setting up a monorepo project with the help of **TurboRepo**, a powerful tool for managing monorepositories. The boilerplate comes pre-configured with a set of best practices for organizing code, managing dependencies, and building multiple packages or modules within a single repository, all while using TypeScript as the primary programming language and other essential tooling already set up for a seamless development experience.

## What's inside?

This boilerplate includes the following packages/apps:

### Apps

- `web-app`: another [Next.js](https://nextjs.org/) app

## Using this boilerplate

### Cloning

To get started with this boilerplate, you can clone the repository using the following command:

```sh
git clone https://gitlab.com/crayond_knowledge_repo/monorepos/ts/turbo-monorepo-boilerplate-ts.git
```

Once you have cloned the repository,

Rename the folder as you want and navigate to the root directory.

Remove the git from the current boilerplate by using the following command:

```sh
rm -rf .git
```

Then initialize Git and add your remote origin by using the following commands:

```sh
git init
```

```sh
git remote add <remote-name> <remote-url>
```

Then install the required dependencies using the following command:

```sh
npm i
```

Now you can run this boilerplate using the below scripts

### Scripts

This boilerplate includes a set of pre-configured scripts that can be used to **build**, **lint**, **format** and **run** the project. The available scripts are:

- `dev` - starts a development server for all the apps and packages that have a `dev` script defined.
- `build` - builds all the apps and packages that have a `build` script defined.
- `prepare` - installs the Husky Git hooks for linting and formatting on commit.

## Useful Links

Learn more:

- [Turborepo](https://turbo.build/repo/docs)
- [Storybook](https://storybook.js.org/docs/react/get-started/install)
- [Vite](https://vitejs.dev/)

## Authors

- [@harikrish07](https://gitlab.com/harikrish07)

(Kindly update it if you contributed to this boilerplate)

## Feedback

If you have any feedback, please reach out to the authors

## Contributing

Contributions are always welcome!
