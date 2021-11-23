
  

# Custom counter react

  

Clone the repo in local directory, cd into it

  

1. Start the server:

  

- cd server

- npm install

- npm run server

  

2. Start the client:

  

- cd client

- npm install

- npm start

  

## Expected functionalities:

  

- The counter will receive the count value from the API call, if it is null then counter is set to 1

- If the used provides a maximum value for the counter from the environment variable : REACT_APP_MAX_VALUE then the counter input textbox will not take any larger input than the max value. The increment button will freeze at this max value and a text saying *Max value reached* is displayed. However the decrement button will still be operational.
Also if the previous value loaded from the get API call is more than the max value both the increment and decrement button will freeze and user will have to manually input a new counter value

- The value of the counter is displayed at the bottom from another component outside of the counter component

- As the user increments/decrements/enters a value to the counter input field, it calls the put API to update the value of counter in the cloud. When the browser is refreshed, the counter starts again from that stored value.

- During put API call, a loader gets displayed with the text *Saving current value*. After that the text *Value updated* is displayed.

![Alt text](./client/src/components/assets/demo.mp4)
