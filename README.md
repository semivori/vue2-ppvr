[![npm version](https://badge.fury.io/js/vue2-ppvr.svg)](https://badge.fury.io/js/vue2-ppvr)

Forked from https://github.com/euvl/vue-js-popover, but with better dropdown and pointer positioning.

### Vue.js popover

<p align="center">
  <img src="https://media.giphy.com/media/xUA7beKmTnr9fkbI6k/giphy.gif">
</p>

[Original package live demo here](http://vue-js-dropdown.yev.io/)

Install:

```bash
npm install vue2-ppvr --save
```

Import:

```javascript
import Vue from 'vue'
import Popover from 'vue2-ppvr'

Vue.use(Popover)
```

Use:

```vue
<button v-popover:foo>Toggle popover</button>

<popover name="foo">
  Hello
</popover>
```

Or:

```vue
<button v-popover="{ name: 'foo' }">Toggle popover</button>
```

### Tooltip

Plugin contains a simple wrapper for `Tooltip`. To use it you will have to:

Set `tooltip` flag in your `main.js`:

```javascript
import VPopover from 'vue2-ppvr'
Vue.use(VPopover, { tooltip: true })
```

Include `tooltip` component anywhere in the application:

```vue
<tooltip />
```

Assign message to any element:

```vue
<button v-popover:tooltip="'This is a string value'">My butt0n</button>
```

### Props

| Name       | Type                   | Required | Description                                            |
| ---------- | ---------------------- | -------- | ------------------------------------------------------ |
| name       | String                 | +        | ...                                                    |
| width      | Number                 | -        | ...                                                    |
| transition | String                 | -        | ...                                                    |
| pointer    | Boolean                | -        | If set - will show a tiny tip                          |
| event      | `"click"` \| `"hover"` | -        | Type of event that will trigger showing of the popover |
| delay      | Number                 | -        | Delay in milliseconds                                  |

### Positioning

You can use `.left`, `.right`, `.top`, `.bottom` modifiers to set the position of the popover.

Example:

```vue
<button v-popover:info.right>Edit (show popover right)</button>

<button v-popover.left="{ name: 'info' }">Edit</button>
```

### Styling

Popover components have `data-popover="name"` argument that allows to apply styles to it.

Example:

```vue
<popover name="foo" :pointer="false">Bar</popover>
```

```css
[data-popover='foo'] {
  background: #444;
  color: #f9f9f9;

  font-size: 12px;
  line-height: 1.5;
  margin: 5px;
}
```