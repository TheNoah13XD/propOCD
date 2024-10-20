# `propOCD`

a prettier plugin to manage your obsessive compulsive disorder by sorting your props.

## Installation

```bash
npm install --save-dev propOCD
```

## Usage

Add the following to your `prettier.config.js`:

```js
export default {
  // add the plugin
  plugins: ["propocd"],
};
```

## Example

```jsx
<!-- Before -->
const Test = () => {
  return (
    <Box
      maxW="md"
      p={4}
      zIndex={10}
      borderWidth="1px"
      onClick={() => console.log("Clicked")}
      borderRadius="lg"
      alignItems="center"
      color="white"
      bg="blue.500"
      display="flex"
      h={200}
    >
      Sort PLS
    </Box>
  );
};
```

```jsx
<!-- After -->
const Test = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      borderWidth="1px"
      borderRadius="lg"
      color="white"
      bg="blue.500"
      h={200}
      maxW="md"
      p={4}
      zIndex={10}
      onClick={() => console.log("Clicked")}
    >
      Sort PLS
    </Box>
  );
};
```

If you want to add or remove attributes from this list, you can either [submit a PR](https://github.com/TheNoah13XD/propOCD/pulls), or just copy & paste the plugin into your project.

## License

MIT
