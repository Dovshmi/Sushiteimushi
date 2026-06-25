# Security Policy

## Supported Versions

Security updates are currently provided for the latest version of this project.

## Reporting a Vulnerability

Please do not open a public GitHub issue for security vulnerabilities.

Instead, report the vulnerability privately to the maintainer.

Please include:

- A clear description of the issue
- Steps to reproduce
- Affected files or versions
- Possible impact
- Suggested fix, if known

## Security Automation

This repository uses automated security checks, including:

- GitHub Dependabot dependency updates
- GitHub Dependabot security alerts
- Dependency Review for pull requests
- CodeQL code scanning
- OpenSSF Scorecard security checks
- Secret scanning
- Push protection

## Secret Handling

Do not commit real secrets, tokens, passwords, API keys, private keys, or `.env` files.

Use `.env.example` for documented placeholder values only.
