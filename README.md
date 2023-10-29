# Assessment: DUODEKA TODO App

## Introduction

This is a simple TODO app that allows users to create, read, update, and delete tasks. The app is built using React and handles data only locally in a GlobalStateProvider. The app is styled using Material UI. For the assignment, please refer to the section below (in Dutch).

### Neat features

- Uses GlobalStateProvider to handle state/data storage
- TODO components are reusable, since the data storage implementation is handled on the page level and passed upwards in the treee, rather than being implemented inside each component. This allows, in theory, to create another TODO page which uses the same components, but interacts with a REST API for data persistence.

## Setup

To run the app, please follow the steps below:

1. Clone the repository
2. Run `npm install` to install dependencies
3. Run `npm run start` to start the app
4. Open [http://localhost:4200](http://localhost:4200) to view it in the browser.

## Assignment

Onze vraag aan jou zou zijn om een TODO lijst app te maken: <br>
**Technisch**:

- [ ] op basis van het Proof-of-Concept in de bijlage (incl. Context & Hooks);
- [x] waardoor een gebruiker in staat wordt gesteld om items toe te voegen, aanpassen, afvinken en verwijderen;
- [x] waarbij de items alleen worden opgeslagen in de GlobalState (ze mogen dus verdwijnen na refresh);
- [x] gebruik makende van Lodash of ES6 methoden (zoals Array.filter etc.) voor data manipulatie.

**UI:**

- [x] gebruik makende van Material-UI componenten voor de interface;
- [x] met een design naar eigen inzicht;
- [x] de TODO lijst is onderdeel van een grotere app waarin meerdere pagina's zijn (inhoud onbelangrijk: lorem ipsum), en een pagina daarvan is dus de TODO lijst;
- [x] de structuur bestaat uit twee kolommen: links een lijst van alle pagina's, rechts de content van de geselecteerde pagina;
- [x] zorg ervoor dat het ook lekker werkt op de mobiel.

### Toelichting

De Proof-of-Concept uit de email werkte niet helemaal lekker i.c.m. TypeScript, dus ik heb de code uitgepluisd en herschreven zodat het wel werkt met TypeScript. De belangrijkste aanpassing is dat ik gebruik maak van een reducer in plaats van de iteratieve loop voor het controleren op wijzigingen voor ik de state update. De uitkomst is hetzelfde, al gebruik je in mijn implementatie de `dispatch` functie om de state te updaten in plaats van de `setState` functie.
