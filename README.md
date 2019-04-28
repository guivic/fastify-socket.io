# @guivic/fastify-socket.io
[![dependencies status](https://david-dm.org/guivic/fastify-socket.io/status.svg)](https://david-dm.org/guivic/fastify-socket.io#info=dependencies)
[![dev-dependencies status](https://david-dm.org/guivic/fastify-socket.io/dev-status.svg)](https://david-dm.org/guivic/fastify-socket.io#info=devDependencies)
[![Build Status](https://travis-ci.org/guivic/fastify-socket.io.svg?branch=master)](https://travis-ci.org/guivic/fastify-socket.io)
[![npm version](https://badge.fury.io/js/%40guivic%2Ffastify-socket.io-guivic.svg)](https://badge.fury.io/js/%40guivic%2Ffastify-socket.io-guivic)

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