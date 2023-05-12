# Client library for using Plug Service

## Install

`npm install plug-service-client`

or

`yarn add plug-service-client`


## Publish 

`npm run build`

`npm publish`

## Usage

```
const client = new NotificationClient({
    host: 'localhost',
    port: 4000,
});

console.log(client);

const res = await client.sendGmail({
    ...
});

```


## Log level
Use level of winston

> Logging levels in winston conform to the severity ordering specified by RFC5424: severity of all levels is assumed to be numerically ascending from most important to least important.

```
const levels = {
  error: 0,
  warn: 1,
  info: 2,
  http: 3,
  verbose: 4,
  debug: 5,
  silly: 6
};
```

## Test

`npm run build`

For example, to test email module
`node .\dist\test\notification\email.test.js`

