# Retros

Retrowks it the realtime retrospective solution that allows you to keep a realtime case board during the retrospective and the sprint. It’s convenient to keep notes and add ideas to the board at any time through the understandable user - friendly interface.


![](https://imgshare.io/images/2019/08/22/Screenshot-2019-08-22-at-16.54.16.png)

## Functions

  - Retrospective room creation
  - QR code generating for room access
  - Retro Board for the big screen with realtime updates of marks during the retro
  - Dashboard layout for projectors and big screens
  - Mobile interface for participants
  - Real-time update on all devices


## Instalation


> At the current moment available only Firebase backend, check the Git Hub project for feature updates or for contributing.

#### If you need fast deploy with firebase
1) Install global [Firebase CLI](https://firebase.google.com/docs/cli);
2) Run ```yarn``` in the project folder;
3) Run ```yarn build``` in the project folder;
4) Login to your Firebase by using the console with following command ```firebase login```
5) Create .env file in the project folder following next template:
```
VUE_APP_API_KEY = 'firebase api key'
VUE_APP_AUTH_DOMAIN = 'firebase auth domain'
VUE_APP_DATABASE_URL = 'firebase databaseURL'
VUE_APP_PROJECT_ID = 'firebase projectId'
VUE_APP_STORAGE_BUCKET = 'firebase storageBucket'
VUE_APP_MESSAGING_SENDER_ID = 'firebase messagingSenderId'
VUE_APP_APP_ID = 'firebase appId'

```
All this data you can find in your [Firebase console](https://console.firebase.google.com), click on create a new project and choose config for the web. More info at [official documentation](https://firebase.google.com/docs/?authuser=0)

6) Run the ```firebase deploy```

Congratulations! Your application online.
