# react-aux

[![NPM version](http://img.shields.io/npm/v/react-aux.svg?style=flat-square)](https://www.npmjs.org/package/react-aux)
[![Twitter Follow](https://img.shields.io/twitter/follow/kuizinas.svg?style=social&label=Follow)](https://twitter.com/kuizinas)

A self-eradicating component for rendering multiple elements.

## Motivation

Prior to React v16, returning multiple elements from a component required to wrap them in an auxiliary element, e.g.

```js
const Root = () => {
  return <div>
    <p>Hello, World!</p>
    <p>I am a demo for react-aux.</p>
  </div>;
};

```

The latter produces the following DOM:

```html
<div>
  <p>Hello, World!</p>
  <p>I am a demo for react-aux.</p>
</div>

```

Starting with React v16, a single component can return multiple components without a wrapping element, e.g.

```js
const Aux = (props) => {
  return props.children;
};

const Root = () => {
  return <Aux>
    <p>Hello, World!</p>
    <p>I am a demo for react-aux.</p>
  </Aux>;
};

```

The latter produces paragraph elements without the wrapping node:

```html
<p>Hello, World!</p>
<p>I am a demo for react-aux.</p>

```

As you can see, `react-aux` is literally just 3 lines of code. Therefore, you could implement it in your own codebase without using `react-aux`. However, `props => props.children` on its own does not explain the intent. `react-aux` as an abstraction serves the purpose of enabling a self-documenting code, i.e. the next time you see someone doing:

```js
import Aux from 'react-aux';

const Root = () => {
  return <Aux>
    <p>Hello, World!</p>
    <p>I am a demo for react-aux.</p>
  </Aux>;
};

```

You will know exactly what is the intent of the code.

## Related articles

* [Using React v16 to create self-destructing components](https://medium.com/@gajus/using-react-v16-to-create-self-destructing-components-de8e4eb61d0f)

## FAQ

### Whats the difference from using an array?

You can use an array if you assign each `React$Element` a pseudo-property `key` with a unique value, e.g. 

```js
import Aux from 'react-aux';

const Root = () => {
  return [
    <p key='p1'>Hello, World!</p>,
    <p key='p2'>I am a demo for react-aux.</p>
  ];
};

```

However, it requires manually ensuring key uniqueness and I am too [lazy](http://threevirtues.com/) for this.

### Whats with the name?

"aux" is a convention I've been using ever since I remember starting to write HTML/ CSS. Auxiliary element is something that does not have semantic purpose but exist for the purpose of grouping elements, styling, etc.
