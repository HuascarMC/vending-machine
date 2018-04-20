## What is it

React UI that simulates the usage of a vending machine, it reacts to the response of
requests made on a RESTful API that runs on the server side, click [!here](https://github.com/HuascarMC/vending-machine-server).

The stack:

- ReactJS
- Airbnb's enzyme
- AXIOS

# NOTE:
The server currently runs locally so running this by itself will only render the looks without any functionality.
Setup the [server-repo](https://github.com/HuascarMC/vending-machine-server) for functionality.

![alt-text](/public/images/vm-example.png)

Video doesn't show updated UI. Click [here](https://www.youtube.com/watch?v=CIPDGBx8jxQ) a Youtube video.


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

- ~~Refactor, child components shouldn't have a state~~.

- State flow between components is not clear.

- Occasional issue rendering change.

- Separation of concerns is not clear.

- Rename functions, erase repetition.

- Write unit tests for containers, components, tools.

- CSS needs improvement, lots of repetition when naming classes.

- Current CORS issue when making requests on the API.

- Clean code.

- *MORE*
