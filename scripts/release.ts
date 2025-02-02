import { execSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
import process from 'node:process'

const { version: oldVersion } = JSON.parse(readFileSync('package.json', 'utf-8'))

// Update the version in package.json
execSync('bumpp -r --no-commit --no-tag --no-push', { stdio: 'inherit' })

const { version } = JSON.parse(readFileSync('package.json', 'utf-8'))

if (oldVersion === version) {
  console.log('canceled')
  process.exit()
}

// Create the commit and tag
execSync('git add .', { stdio: 'inherit' })
execSync(`git commit -m "chore: release v${version}"`, { stdio: 'inherit' })
execSync(`git tag -a v${version} -m "v${version}"`, { stdio: 'inherit' })
