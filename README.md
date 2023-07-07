## Set Up and Run the Angular Project

Install the project dependencies:

```bash
npm install
```

```bash
API_SERVER_URL=http://localhost:6060
```

Next, execute the following command to run the JSON server API:

```bash
npm run api
```

Finally, open another terminal tab and execute this command to run your Angular application:

```bash
npm start
```

Visit [`http://localhost:4200/`](http://localhost:4200/) to access the starter application.

In the starter project, all the starter Angular application routes are public. However, you can use Auth0 to get an ID token to hydrate the user profile information present on the `/profile` page with information from a real user. With Auth0, you can also get an access token to make a secure call to an external API to hydrate the messages present in the `/protected` and `/admin` pages.
