## What is it

It simulates the usage of a vending machine but doesn't handle any of the logic. It works by making
requests on a RESTful API that runs on the server side, click [!here](https://github.com/HuascarMC/vending-machine-server).

Based on the response it renders what's necessary to simulate the operation of a vending machine.

The stack:

- ReactJS
- Airbnb's enzyme
- AXIOS

# NOTE:
The server currently runs locally so running this by itself will only render the looks without any functionality.
Setup the [server-repo](https://github.com/HuascarMC/vending-machine-server) for functionality.

![alt-text](/src/images/vm-example.png)

Click [here](https://www.youtube.com/watch?v=CIPDGBx8jxQ) a Youtube video.


## How to run

- Clone this repo into your local machine.
```
git clone https://github.com/HuascarMC/vending-machine-client
```
- Go inside directory.
```
cd vending-machine-client
```
- Install all the packages required.
```
npm i
```
- Run all the tests .
```
npm test
```
Press 'a' to run all tests:
```
a
```
- Open another terminal tab and run the server.
```
npm start
```
- If your browser doesn't open automatically, go to:
```
http://localhost:3000
```
- The app will display an input box, you should be able to get a prime multiplication table by typing a number 0 < 500
and pressing enter.


## Functionality

- *UNDER CONSTRUCTION*


# Things to improve/currently working on.

- All the codebase needs to be refactored, child components shouldn't inherit state.

- Separation of concerns is not clear.

- Rename functions and classes.

- Write unit tests for containers, components, tools.

- CSS needs improvement, lots of repetition when naming classes.

- Current CORS issue when making requests on the API.

- Clean code.

- *A LOT MORE*
