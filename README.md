# NFC Thing

NFC Thing is a web app that lets you read and write NFC tags using just your browser. It works with the Web NFC API, which means you don't need to install any native apps.

## Features

- Read NFC tags
- Write to NFC tags
- Works in the browser (no need for a separate app)
- Easy to use with our custom React hooks

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/hyperlaunch/NFC-Thing.git
   cd NFC-Thing
   ```

2. Install the dependencies:
   ```bash
   bun install
   ```

3. Run the app in development mode:
   ```bash
   bun run dev
   ```

4. Open the app in Chrome on your Android device.

## Building for Production

To create a production build, run:
```bash
bun run build
```

The built files will be in the `.output/static` directory.

## Tech Used

- React
- Tailwind CSS
- Bun (for building and running the app)
- Web NFC API

## Contributing

Feel free to contribute! Just submit a Pull Request.

## License

This project is open source under the [MIT License](LICENSE).

## Thanks

- [Web NFC API](https://developer.mozilla.org/en-US/docs/Web/API/Web_NFC_API) for making NFC work in browsers
- [Can I Use Web NFC](https://caniuse.com/webnfc) for a list of browsers that currently support the Web NFC API
- [Bun](https://bun.sh/) for helping us build and run the app