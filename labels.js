'use strict';

// Shared colors
const colors = {
	black20: 'ccc1b7',
	candy: 'ff7faa',
	claret: '990f3d',
	crimson: 'cc0000',
	jade: '00994d',
	lemon: 'ffec1a',
	oxford: '0f5499',
	oxfordWhite50: '87aacc',
	mandarinWhite40: 'ffcfad',
	mandarinWhite60: 'ffb885',
	sky: 'cce6ff',
	slate: '262a33',
	teal: '0d7680',
	velvet: '593380',
	velvetPaper50: 'ac92b3',
	wasabi: '96cc28'
};

// Custom type labels to be configured based on repo-specific needs.
// E.g. a "frontend" repo might configure label types for each of its
// components.
const labelTypes = [
	['cli', colors.black20],
	['config', colors.teal]
];

// Create and export the labels
module.exports = [
	// Base labels
	{
		"name": "blocked ✋",
		"color": "f29b09",
		"description": "Blocked by another open issue",
		"aliases": [
		    "blocked"
	    ]
    },
    {
		"name": "blocker 🚧",
		"color": "f6514c",
		"description": "Blocks another issue, requires urgent attention",
		"aliases": [
		    "blocker"
	    ]
    },
    {
		"name": "bug 🐛",
		"color": "95313b",
		"description": "Something isn't working",
		"aliases": [
		    "bug"
	    ]
    },
    {
		"name": "technical debt 🏚️",
		"color": "6f554d",
		"aliases": [
		    "technical debt"
	    ]
    },
    {
		"name": "nice to have ✨",
		"color": "60e7d6",
		"aliases": [
		    "nice to have"
	    ]
    },
    {
		"name": "security 🛡️",
		"color": "7e6f49",
		"aliases": [
		    "security"
	    ]
    },
    {
		"name": "question 🙋",
		"color": "f3d189",
		"aliases": [
		    "question"
	    ]
    },
    {
		"name": "wontfix 🙅‍♀️",
		"color": "cbbe64",
		"aliases": [
		    "wontfix"
	    ]
    },
    {
		"name": "documentation 📚",
		"color": "e11d21",
		"aliases": [
		    "documentation"
	    ]
    },
    {
		"name": "documentation 📚",
		"color": "213b28",
		"aliases": [
		    "documentation"
	    ]
    },
	{
		"name": "needs breakdown 🍱",
		"color": "75d78a",
		"aliases": [
		    "needs breakdown"
	    ]
    },
	// Add in custom type labels
	...labelTypes.map(labelType => {
		return {
			name: labelType[0],
			description: `Relates to ${labelType[0]}`,
			color: labelType[1],
			aliases: []
		}
	}),
];
