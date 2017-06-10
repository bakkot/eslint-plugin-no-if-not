# eslint-plugin-no-if-not

Require that the condition of an &#39;if&#39; with an &#39;else&#39; not be written in the negative

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


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-if-not/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





