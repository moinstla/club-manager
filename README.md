# Club Manager

#### Angular Extended Independent Project, 6/16/2017

#### By Monique St Laurent

## Description

A website for a club that allows users to view a list of members and their individual profiles, and allows an administrator to add, update and delete members. Club data is stored using firebase.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Firebase

* Create firebase account ([firebase](https://firebase.google.com/))
* Create 'src/app/api-keys.ts' file to store Firebase API key with masterFirebaseConfig
* Import api-keys file in app.module file
* Import 'angularfire2' with AngularFireModule
* Export masterFirebaseConfig in app.module
* List 'AngularFireModule.initializeApp(firebaseConfig)' in @NgModule:imports array
* List 'src/app/api-keys.ts' in .gitignore file


## Technologies Used

* Angular CLI
* Typescript
* NPM
* Bower
* JavaScript
* Bootsrap

### License

This software is licensed under the MIT license.
Copyright (c) 2017 **by Monique St. Laurent**
