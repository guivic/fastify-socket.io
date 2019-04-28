const fastify = require('fastify')();
const tap = require('tap');
const fastifySocketIO = require('./index');

tap.test('fastify.io should exist', (test) => {
	test.plan(2);

	fastify.register(fastifySocketIO);

	fastify.ready((err) => {
		test.error(err);
		test.ok(fastify.io);

		fastify.close(() => test.end());
	});
});
