# Ng16YarnPnp

This is a starter project test for using Yarn, Angular 16, and jest-preset-angular together, with jest using ES Modules.

## Project Creation

Created via:

1.
```bash
mkdir ng16-jest-preset
cd ng16-jest-preset
yarn set version stable
yarn install
mv .\package.json _package.json # Needed so that the yarn pnp package.json isn't in the way
yarn dlx --package @angular/cli ng new ng16-jest-preset --directory=. --package-manager=yarn --create-application=false --commit=false
```

2. Then, move the contents of `_package.json` to `package.json`, and delete `_package.json`.

3. Update .gitignore per: https://yarnpkg.com/getting-started/qa#which-files-should-be-gitignored

4. Commit everything thus far

5. Add a library
```bash
yarn ng g library mylib
```

and commit it.

6. Add an app
```bash
yarn ng g application myapp
```

and commit it.

7. Run it in VS Code (F5)

## Running It

```bash
git clone git@github.com:johncrim/ng16-jest-preset.git
cd ng16-jest-preset
yarn start
```

WOAAA!! #mind-blown

## Updating Dependencies

To update Angular dependencies, which runs Angular migrations:

1. Make sure there are no git changes (if there are, `git stash` them)
2. ` yarn dlx -p @angular/cli ng update @angular/cli`
REVIEW: Currently this doesn't work with Yarn PNP, so we have to run migrations manually.
3. Commit changes in single update commit (eg `chore(ng update): ng dependencies`)

To update other dependencies:

1. Make sure there are no git changes (if there are, `git stash` them). This is not strictly required, but is a good idea.
2. `yarn upgrade-interactive`
3. Choose the packages + versions to upgrade
5. Commit changes in single update commit (eg `chore(deps): update dependencies`)
