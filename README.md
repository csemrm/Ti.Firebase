# Ti.Firebase
Ti.Firebase is an iOS Hyperloop wrapper of the Firebase SDK.

![alt text](https://loopmodules.com/wp-content/uploads/edd/2016/08/Firebase.png)

It provides the following functionalities:

  * Authentication
    * Creation
    * Sign In
    * Sign Off
  * Real Time Database
    * Creation
    * Deletion
    * Fetch data
  * Firebase Cloud Messaging (Push Notifications)
    * Register for Push Notifications
    * Register group of users
    * Send Push Notifications through Firebase Console

If you are not familiar with Firebase we totally recommend you having a look at their website.

With Titanium and Hyperloop you can embed this module into your project and with a few lines of code you will be able to create an integration between your Firebase backend and your mobile app. Firebase is well known because it makes the mobile developer life easier by providing an easy-to-use backend solution hosted by Google.

# What you'll find in this module and app
Yes, you've read it right. We thought that just shipping a module would not be enough to show you the benefits of using Firebase in your apps, and that's why we are providing a complete app that demonstrates what the Firebase SDK is capable of.

# Authentication
The example app checks if the provided user exists or not. If the user already exists he will be automatically logged in. If it doesn't Firebase will automatically and transparently create it in the backend for you.

![alt text](https://i2.wp.com/loopmodules.com/wp-content/uploads/edd/2016/09/Sep.-23-2016-15-59-51.gif)

Meanwhile in the Firebase Console...

![alt text](https://i2.wp.com/loopmodules.com/wp-content/uploads/edd/2016/09/Sep.-23-2016-15-50-42.gif)

# Real Time Database
Ti.Firebase creates an observer on the 'Cars' table to observe every single change in the Database. In the following example we have created some data directly through Firebase Console. Check out how quickly the app sees the changes in the database. The same happens if you delete something the database. ?

![alt text](https://i2.wp.com/loopmodules.com/wp-content/uploads/edd/2016/09/Sep.-23-2016-16-07-19.gif)

With Ti.Firebase you can also create and delete data through the app.

![alt text](https://i2.wp.com/loopmodules.com/wp-content/uploads/edd/2016/09/Sep.-23-2016-16-22-01.gif)

![alt text](https://i0.wp.com/loopmodules.com/wp-content/uploads/edd/2016/09/Sep.-23-2016-16-24-48.gif)

# Firebase Cloud Messaging (Push Notifications)
With Ti.Firebase you're able to send Push Notification messages through Firebase Console.

Google is pushing developers to start using FCM instead of the usual GCM to send Push Notifications.
Firebase Cloud Messaging (FCM) is the new version of GCM. It inherits the reliable and scalable GCM infrastructure, plus new features! More details in their FAQ.

![alt text](https://i1.wp.com/loopmodules.com/wp-content/uploads/edd/2016/09/Sep.-23-2016-16-29-48.gif)

# On a real device

![alt text](https://i0.wp.com/loopmodules.com/wp-content/uploads/edd/2016/09/IMG_2095.png)

# GENERAL INSTRUCTIONS

# 1 - Firebase Requirements
We recommend you to read the Firebase documentation. You should know how to set up a Firebase project and how Firebase works before doing anything else.

The first thing you should do is create a Firebase project. 
Open the project you just created and create a new app for it. You'll need one firebase app for each platform you intend to support
Open your app settings and look for a button that lets you download a file called GoogleService-Info.plist. This file contains configuration details such as keys and identifiers for the services you'll enable.
In the menu (left hand side of the screen) click on Auth
In the new window that opened you will need to enable the login through Email/Password. To do that, open the 'SIGN-IN METHOD' tab and enable the option 'Email/Password'
If you want to use Push Notifications, you should also enable the Cloud Messaging System:

Go to your Firebase project dashboard and open your app's settings;
Open the tab Cloud Messaging;
Upload your Development APN certificate and the Production APN certificate. You should be familiar with this if you ever implemented push notifications on your app before. If not, take a look at Appcelerator's Push Notification tutorial.

# 2 - Environment setup
This module was tested and developed with the following environment:

  * CocoaPods 1.0.1
  * Titanium SDK 6.0.0.v20161101155110
  * HyperLoop 2.0.0
  * XCode 8.1

# 3 - Usage
  * Change the App GUID in the provided tiapp.xml file to your original App GUID
  * Place the GoogleService-Info.plist (explained in the section Firebase requirements) inside the folder "src". It's located in the root folder of the provided project.
  * Simply run the project provided in this download and you should be all set to start using Firebase!
In this download you'll find a complete Alloy project that uses Firebase to:

  * Enable authentication with social medias and e-mail
  * Register to Push Notifications channels
  * Communicate with a Real Time Database
