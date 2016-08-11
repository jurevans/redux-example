import Server from 'socket.io';

export function startServer(store) {
	let port = 8090;
	const io = new Server().attach(port);

	store.subscribe(
		() => io.emit('state', store.getState().toJS())
	);

	io.on('connection', (socket) => {
		socket.emit('state', store.getState().toJS());
		socket.on('action', store.dispatch.bind(store));
	});

	console.log('Server started at http://localhost:' + port + '/');
}
