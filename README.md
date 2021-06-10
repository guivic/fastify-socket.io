# @guivic/fastify-socket.io
[![dependencies status](https://david-dm.org/guivic/fastify-socket.io/status.svg)](https://david-dm.org/guivic/fastify-socket.io#info=dependencies)
[![dev-dependencies status](https://david-dm.org/guivic/fastify-socket.io/dev-status.svg)](https://david-dm.org/guivic/fastify-socket.io#info=devDependencies)
![Node.js CI](https://github.com/guivic/fastify-socket.io/workflows/Node.js%20CI/badge.svg)

## Installation

```bash
npm install @guivic/fastify-socket.io --save

yarn add @guivic/fastify-socket.io
```

## Usage

Per default Socket.io will listen on your server address.

```javascript
fastify.register(require('@guivic/fastify-socket.io'), options, (error) => console.error(error));

fastify.get('/', (request, reply) => {
	console.log(fastify.io) // Socket.io instance
});
```

## Options

Socket.io configuration object.

<https://socket.io/docs/server-api>

## Author

Ludovic Lérus from [Guivic](https://guivic.io)

## License

Licensed under [MIT](./LICENSE).
