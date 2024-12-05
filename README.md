# Crayond's Monorepo Boilerplate - TS - V2

This repository serves as a complete boilerplate for setting up a monorepo project using **TurboRepo**, pre-configured with TypeScript and essential tooling for efficient development.

## Project Structure

### Apps
- `web-app/` - Next.js 14 application with:
  - App Router configuration
  - MUI Joy integration
  - Context providers
  - Utility functions

### Packages
- `ui/` - Shared UI components library with atomic design
- `utils/` - Common utility functions and types

### Tooling
- `typescript/` - Shared TypeScript configurations


## Features

- **Build System**: 
  - Turborepo for monorepo management
  - Next.js 14 with Turbo mode
  
- **UI Framework**:
  - MUI Joy components
  - Emotion for styling
  - Atomic design structure

- **Code Quality**:
  - Biome for formatting and linting
  - Husky for git hooks
  - Lint-staged for pre-commit checks
  
- **State & Data Management**:
  - Zustand for state management
  
- **Development Tools**:
  - Changesets for version management
  - Custom package linking system
  - TypeScript strict mode

## Essential Commands

### Development
```bash
# Start development
npm run dev              # All packages
npm run dev:web-app      # Only web app

# Build
npm run build           # Build all packages
```

### Code Quality
```bash
# Format and lint
npm run format-and-lint:fix

# Type checking
npm run typecheck
```

### Package Management
```bash
# Link/Unlink packages
npm run link-packages
npm run unlink-packages

# Clean project
npm run clean
```

### Version Control
```bash
# Create conventional commit
npm run commit

# Package versioning
npm run changeset    # Create changeset
npm run version      # Update versions
npm run release      # Publish packages
```

## Turbo Commands

### Basic Development
```bash
# Development
turbo dev --parallel                # Run all packages
turbo dev --filter=@core/web-app    # Run specific package

# Building
turbo build                         # Build all
turbo build --filter=@core/web-app  # Build specific package
```

### Advanced Filtering
```bash
# Build package with dependencies
turbo build --filter=@core/web-app...

# Build dependent packages
turbo build --filter=...@core/ui

# Build since last change
turbo build --since=HEAD~1
```

## Quick Start

1. Clone and setup:
```sh
git clone <repository-url>
rm -rf .git
git init
git remote add origin <your-repo-url>
```

2. Install and run:
```sh
npm install
npm run dev
```

## Requirements

- Node.js >= 18
- npm >= 10.2.3

## Documentation Links

- [Turborepo](https://turbo.build/repo/docs)
- [Next.js](https://nextjs.org/docs)
- [MUI Joy](https://mui.com/joy-ui/getting-started/)
- [Biome](https://biomejs.dev/)

## Feedback

For issues or suggestions, please open an issue or contact the maintainers.