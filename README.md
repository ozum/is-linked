# is-linked

Check if your module is linked.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Synopsis](#synopsis)
- [Details](#details)
- [API](#api)
- [is-linked](#is-linked)
  - [Table of contents](#table-of-contents)
    - [Functions](#functions)
  - [Functions](#functions-1)
    - [default](#default)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# Installation

# Synopsis

```ts
import isLinked from "is-linked";

await isLinked();
await isLinked("some-module");
```

# Details

Check if a module is linked by `npm` or `yarn`. By default checks top-most module.

<!-- usage -->

<!-- commands -->

# API

<a name="readmemd"></a>

is-linked

# is-linked

## Table of contents

### Functions

- [default](#default)

## Functions

### default

▸ **default**(`module?`: _string_): _Promise_<_boolean_\>

Returns whether a module is linked by `npm` or `yarn`. If no module name is provided, top-most package name is used.

#### Parameters:

| Name      | Type     | Description                                                            |
| --------- | -------- | ---------------------------------------------------------------------- |
| `module?` | _string_ | is the name of the module to check. Defaults to top-most package name. |

**Returns:** _Promise_<_boolean_\>

whether module is linked.

Defined in: index.ts:26
