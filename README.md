🎯 TP4 : Introduction à gRPC

📌 Objectifs du TP

Déployer un service gRPC capable de recevoir des requêtes et renvoyer des réponses structurées.

Créer un reverse proxy pour faciliter l'accès des clients au service gRPC.

🛠 Outils utilisés

Node.js

Protocol Buffers (protobuf)

gRPC

protoLoader

📦 Installation

1️⃣ Installer Protobuf et Node.js :

Protobuf : Télécharger ici

Node.js : Télécharger ici

Sur Ubuntu :

sudo snap install protobuf --classic
sudo snap install node --classic

2️⃣ Créer un projet :

mkdir grpc-tp && cd grpc-tp
npm init -y

3️⃣ Installer les dépendances :

npm install @grpc/grpc-js @grpc/proto-loader

📜 Définition du service (hello.proto)

syntax = "proto3";
package hello;

service Greeter {
  rpc SayHello (HelloRequest) returns (HelloReply) {}
}

message HelloRequest {
  string name = 1;
}

message HelloReply {
  string message = 1;
}

🚀 Démarrage du serveur gRPC

Créer server.js et implémenter le service.

Lancer le serveur :

node server.js

🛠 Test avec Postman

Ouvrir Postman et créer une nouvelle requête gRPC.

Indiquer localhost:50051 comme hôte.

Importer hello.proto.

Sélectionner Greeter > SayHello.

Envoyer un JSON :

{ "name": "TestUser" }


