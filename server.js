const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

// Charger le fichier proto
const packageDefinition = protoLoader.loadSync('hello.proto');
const helloProto = grpc.loadPackageDefinition(packageDefinition).hello;

// Implémentation de la fonction SayHello
function sayHello(call, callback) {
  callback(null, { message: `Bonjour, ${call.request.name} !` });
}

// Démarrer le serveur gRPC
const server = new grpc.Server();
server.addService(helloProto.Greeter.service, { SayHello: sayHello });

server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () => {
  console.log('Serveur gRPC en écoute sur le port 50051');
});
