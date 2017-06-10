# eslint-plugin-no-if-not

An ESLint rule to require conditions not to be negations.

## Rule Details

This plugin adds a rule which forbids code like

```js
if (!0) { a; } else { b; }

if (x !== 0) { a; } else { b; }

!x ? a : b
```

and permits code like

```js
if (0) { b; } else { a; }

if (x === 0) { b; } else { a; }

x ? b : a

if (!0) { a; } // The rule only applies when the statement has an 'else'.
```

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-no-if-not`:

```
$ npm install eslint-plugin-no-if-not --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-no-if-not` globally.

## Usage

Add `no-if-not` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-if-not"
    ]
}
```

Then add the single rule added by this plugin to the rules section:

```json
{
    "rules": {
        "no-if-not/no-if-not": 2
    }
}
```
