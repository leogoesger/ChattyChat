# Chatty Chat

###Overview
Chatty Chat is a live chat room application that uses Angular JS two-way data binding with Firebase. Results in a threeway synchronization to send and receive  messages in real time.


- Users can see a list of **avaiable chat rooms**
- Users can **create** chat rooms
- Users can see a **list of messages** in each chat room
- Users can set his/her **username** to display in chat rooms
- Users can **send messages** associated with his/her username in a chat room

![screenshot](./bloc-chat-new-room-modal.jpg)

###List Chat Rooms
In Firebase, rooms are created like this:
```
  bloc-chat-1482f
  |__rooms
      |__1:"room1"
      |__2:"room2"
      |__3:"room3"
```
A `Room` factory in Angular defines all Room-related API queries. A reference is creaked inside of Firebase database, and `$firebaseArray` service is injected.
```javascript
  (function() {
    function Room($firebaseArray) {
      var ref = firebase.database().ref();
    }

    angular
      .module('blocChat')
      .factory('Room', ['$firebaseArray', Room]);
  })();
```
To display queried Rooms in the view. A controller is created and associated with the home template in a `$state`. Using `ng-repeat`, a list of rooms are displayed in the template.

###Create Chat Rooms
AngularFire has `$add()` method that we can use to create and retrieve with the `$firebaseArray` service. In this case, the array is the data stored in the `rooms` variable in the `Room` service. 
Useing UI Bootstraps `$uibModal` service, I defined a method for toggling a modal on the frontend to submit the new room's data using `ngclick` or `ngSubmit`. 
