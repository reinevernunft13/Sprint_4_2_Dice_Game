# Sprint 4.2: DICE GAME - NODE REST + DB + JWT 🎲🎲 

- API implementation for a simple dice game on Node.Js, using:
    - **Express** -> for building REST APIs,
    - **MySql** -> for the database, 
    - **Sequelize** -> as ORM

- In this game, two six-sided dice are thrown together. If the the sum of the dice is 7, it's a winning throw and the player wins. For further details on functionalities, check the endpoints section below.
   
## 💻 Requirements

In order for the project to work, please make sure the following technology is installed in your machine:

- [Node.js](https://nodejs.org/en/download/) 
- [NPM](https://www.npmjs.com/) 
- [MySQL](https://dev.mysql.com/downloads/installer/)

## 👩‍💻 Getting Started 👇  

### 🛠️ Installing

> **Step 1** - Clone the project:

```
gh repo clone reinevernunft13/Sprint_4_2_Dice_Game

```

> **Step 2** - Install the necessary dependencies via NPM:

```
npm install
```

### 🔐 Environment Variables 

> **Step 3** - Copy the .env-template file into a new **.env** file and fill in the values. 

### 🚀 Run the Project

> **Step 4** - Launch the project...

For production mode:
````
npm run start
````

For development mode:

````
npm run dev
````

## 🧪 API Testing

### Testing Tools

To test our API's endpoints, we'll use [Postman](https://www.postman.com/). Various Postman requests have been group into a collection, to be found in a JSON file under the project's folder "/Postman".

### Endpoints

- **POST /players** - creates a player with a unique name or 'anonymous' as default.
- **PUT /players/:id** - modifies a player's name.
- **GET /players** - returns a list of all registered players along with their win rate. 
- **POST /game/:id** - a player makes a dice throw. 
- **DELETE /game/:id** - deletes throws made by a player.
- **GET /game/:id** - returns a list of throws by player.
- **GET /ranking** - returns a player ranking ordered by win rate and the average win rate of registered players. 
- **GET /ranking/loser** - returns player with lowest win rate.
- **GET /ranking/winner** - returns player with highest win rate.


