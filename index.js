const fastifyPlugin = require('fastify-plugin');
const SocketIOServer = require('socket.io');

/**
 * Create a new Socket.io server and decorate Fastify with its instance.
 * @param {Object} fastify - Fastify instance
 * @param {Object} options - Plugin's options that will be sent to Socket.io contructor
 * @param {Function} next - Fastify next callback
 */
function fastiySocketIo(fastify, options, next) {
	try {
		const io = new SocketIOServer(fastify.server, options);

		fastify.decorate('io', io);

		next();
	} catch (error) {
		next(error);
	}
}

module.exports = fastifyPlugin(fastiySocketIo, {
	name: 'fastify-socket.io',
});
