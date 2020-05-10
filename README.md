# Labelmaker

This Github Action sets issue labels from a `labels.js` input file.

## Inputs

### `github-token`

**Required** The Github token with which to authorize access to the destination repo.

## Example usage

uses: adityaviswanathan/labelmaker@v1
with:
  who-to-greet: `${{ secrets.GITHUB_TOKEN }}`
