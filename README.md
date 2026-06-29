# BadWallet Web Dashboard - Client Angular

Ce projet constitue le Front-End (Single Page Application) de l'application de portefeuille électronique **BadWallet**, développé avec **Angular 16+**. Il consomme les endpoints de l'API REST Spring Boot (`http://localhost:8080`).

## 🚀 Fonctionnalités implémentées

### 1. Espace Agent de Guichet
- **Listing paginé** des portefeuilles (consomme `GET /api/wallets`).
- **Création / Inscription** de compte via un formulaire réactif validé.
- **Recherche de client** par numéro de téléphone.
- **Opérations de guichet** : Formulaires de Dépôt et Retrait d'argent en temps réel.

### 2. Espace Client Final
- **Dashboard réactif** : Affichage du solde mis à jour instantanément sans recharger la page grâce aux **Angular Signals**.
- **Transfert d'argent** inter-comptes avec formulaire réactif.
- **Paiement de factures multiples** : Sélection de plusieurs factures par cases à cocher et paiement groupé en un clic.
- **Historique** des transactions filtrable.

## 🛠️ Concepts techniques Angular utilisés
- **Architecture Standalone Components** (pas de NgModules pour plus de modernité).
- **State Management** : Utilisation des `Signals` Angular 16 pour la gestion d'état réactive du solde.
- **Reactive Forms** avec validations poussées.
- **Pipe personnalisé** (`XofPipe`) pour le formatage monétaire automatique (ex: `50 000 XOF`).
- **HttpClient** interconnecté avec le backend Java Spring Boot.

## 💻 Installation et Lancement

1. S'assurer que le backend Spring Boot est démarré sur le port `8080`.
2. Cloner ce dépôt.
3. Exécuter `npm install` pour installer les dépendances.
4. Lancer l'application avec `ng serve`.
5. Ouvrir `http://localhost:4200` dans le navigateur.