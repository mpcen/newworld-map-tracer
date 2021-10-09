# ceN's newworld-map.com coordinate tracer

## This is a coordinate tracer for [newworld-map.com](https://www.newworld-map.com/). Coordinates are provided by [ceN's Coordinate Tracker](https://github.com/mpcen/newworld-coordinate-tracker)

## How it works

-   [ceN's Coordinate Tracker](https://github.com/mpcen/newworld-coordinate-tracker) streams the players latitude and longitude via a Server Sent Event (SSE).
-   This project displays the marker on top of [newworld-map.com](https://www.newworld-map.com/) running within an iframe

## The flow

1. Node calls the powershell script to capture either lat/lng.
2. Powershell takes the request and captures either lat/lng and sends the image bitmap back to node in a memory stream
3. Node receives the bitmap, and sends it to Tesseract
4. Tesseract does its best to parse the numbers from the image and returns it back to node
5. Node gets the parsed data from Tesseract. If the text is valid, it sends it to clients connected to `http://localhost:5000/events` via an SSE

---

## Running the application

-   run `npm install`
-   run `npm start`. This will start the react application on `http://localhost:3000`

## License

-   This project is licensed under the [MIT](./LICENSE.txt) license
-   Tesseract is licensed under [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0) license
