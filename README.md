# Running on the cloud with AWS

## Click [here](https://vending-machine-server.herokuapp.com).

## What is it

React UI that simulates the usage of a vending machine, it reacts to the response of
requests that are triggered by the user on a RESTful API that runs on the server side, click [here](https://github.com/HuascarMC/vending-machine-server)
to see the server repo.

It also allows manipulation of the stock/coin inventory through the server by accessing a launched database
that runs on AWS cloud RDS.

The stack:

- ReactJS
- Airbnb's enzyme
- AXIOS

**Improving** The project is currently running on the cloud, it may take a while to load as Heroku puts the dynos to sleep when inactive. Heroku is not rendering css well but one is able to launch both the server and the client by just clicking [here](https://vending-machine-server.herokuapp.com) and following the instructions. If it doesn't load quickly, leave it for a while and then refresh. Try not to make too many requests at once as it can crash the server and it will need to be re-deployed.

![alt-text](/public/images/vm-screenshot.png)

Video doesn't show updated UI. Click [here](https://www.youtube.com/watch?v=CIPDGBx8jxQ) a Youtube video.

## How to run

## NOTE:
In case you would like to run it locally it will be required to clone this repo's branch 'local'. This branch just changes the remote routes where the requests are made to the local ones.

*Example*
Instead of making an order request on:
```
/POST https://vending-machine-client.herokuapp.com/order
```
It will use:
```
/POST http://localhost:4567/order
```


- Clone this repo's LOCAL branch into your local machine.
```
git clone https://github.com/HuascarMC/vending-machine-client/tree/local
```
- Go inside directory.
```
cd vending-machine-client
```
- Install all the packages required.
```
npm i
```
- Run the app.
```
npm start
```
- If your browser (chrome recommended) doesn't open automatically, go to:
```
http://localhost:3000
```

*REMINDER*: Setup the [server-repo](https://github.com/HuascarMC/vending-machine-server) for functionality and run both applications at the same time.

## Functionality

User's interaction:

- Click on the coins to increase balance (INSERT COINS).

- Click on a selection on the display (CHOOSE ITEM).

- Click push to make order (MAKE ORDER).

- Click return to get money back (RETURN CHANGE).

Maintenance interaction:

- Increase/decrease items stock (ALTER ITEMS INVENTORY).

- Increase/decrease coin stock (ALTER COINS INVENTORY).


# Things to improve/currently working on.

- ~~Refactor, child components shouldn't have a state~~.(Refactored)

- ~~App doesn't render well on different browsers~~.(Applied normalize.css package)

- State flow between components is not clear.

- Occasional issue rendering change.

- Slow due to the web-app, server and database running separately on the cloud.

- Separation of concerns is not clear.

- Rename functions, erase repetition.

- Write unit tests for containers, components, tools.

- CSS needs improvement, lots of repetition when naming classes.

- Current CORS issue when making requests on the API.

- Clean code.

- *MORE*
