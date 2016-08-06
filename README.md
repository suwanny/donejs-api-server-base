# donejs-api-server-base
DoneJS API Server/Container Skeleton


## How to create your DoneJS app

```bash
$ npm install -g donejs
$ mkdir public
$ cd public

# create a DoneJS app
$ donejs add app my-app

# move all files to public folder
$ mv my-app/* .
$ rm -r my-app
```

## How to run your app

```bash
$ npm install -g nodemon
$ npm install

# development
$ nodemon index

or

# production
$ NODE_ENV=production nodemon index
```

## Related Links

* [DoneJS](https://donejs.com/)
