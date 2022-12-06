# @guivic/fastify-socket.io
[![npm version](https://badge.fury.io/js/@guivic%2Ffastify-socket.io.svg)](https://badge.fury.io/js/@guivic%2Ffastify-socket.io)
![nodejs workflow](https://github.com/guivic/fastify-socket.io/actions/workflows/nodejs.yml/badge.svg)

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

## License

Licensed under [MIT](./LICENSE).
