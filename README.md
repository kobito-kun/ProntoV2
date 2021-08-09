## Pronto Project

A multi-vendor e-commerce website made with Vuejs with GraphQL as the backend.

## Technologies Used

<div>
  <div>
    <h4>Frontend</h4>
    <ul>
      <li>HTML5</li>
      <li>CSS3</li>
      <li>JavaScript</li>
      <li>TailwindCSS</li>
      <li>VueJS</li>
    </ul>
  </div>
  <div>
    <h4>Backend</h4>
    <ul>
      <li>NodeJS</li>
      <li>ExpressJS</li>
      <li>GraphQL</li>
      <li>JSON Web Token</li>
      <li>MongoDB</li>
    </ul>
  </div>
</div>

## Setup

To run this project locally, you'll need some prerequisites programs.

- [NodeJS](https://nodejs.org/)

#### Backend Setup

After cloning this repository & have the required programs installed. Open a command prompt on the folder `/backend` and run:

```
npm install
```

Refers to [`package.json`](https://github.com/kobito-kun/ProntoV2/blob/master/backend/package.json) to install the required packages / libraries for this project to be able to run.

After all the above is done. We'll set up the .env file.

```
TOKEN_SECRET = <SECRET_TOKEN>
MONGODB_URL = <MONGODB_URL>
```

In `<SECRET_TOKEN>` you'll first have to go into a console. Run:

```
node
```

To open the NodeJS CLI. Then run:

```
> require('crypto').randomBytes(64).toString('hex')
// '09f26e402586e2faa8da4c98a35f1b20d6b033c6097befa8be3486a8295...'
```

In `<MONGODB_URL>` will be where your mongodb connection url will reside.

After all that is done. Run:

```
node app.js
```

Which will start a local http server at [`http://127.0.0.1:5000/`](http://127.0.0.1:5000/). Done! You have this project running locally on your network!

#### Frontend Setup

After cloning this repository & have the required programs installed. Open a command prompt on the folder `/frontend` and run:

```
npm install
```

Refers to [`package.json`](https://github.com/kobito-kun/ProntoV2/blob/master/frontend/package.json) to install the required packages / libraries for this project to be able to run.

After all the above is done. Run

```
npm start
```

Which will start a local http server at [`http://127.0.0.1:8000/`](http://127.0.0.1:8000/). Done! You have this project running locally on your network!
