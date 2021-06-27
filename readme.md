on Dev branch we will add all features
and from this we will create own branches to edit

links:
https://jsonplaceholder.typicode.com/   - our api
https://medium.com/the-andela-way/how-to-structure-a-react-native-app-for-scale-a29194cd33fc    - our architecture
https://reactnative.dev/docs/network   -using fetch
https://github.com/axios/axios    - using axios


require:
  npm latest version
  android studio + marshmallow sdk
  java sdk 16.0.1
  

how to setup proj: 
    add(install) node-modules to proj 
    install react-navigation  ---  https://reactnavigation.org/docs/getting-started/
    install android studio  ---  https://developer.android.com/studio?gclid=CjwKCAjww-CGBhALEiwAQzWxOp-H9QlzaylWub0otKOQVhTjTYNZqX6lXQmFn7CAJqdu8fiybyNO_xoCFy8QAvD_BwE&gclsrc=aw.ds
    add marshmallow sdk
  FOR WINDOWS: 
    add Global variable
      JAVA_HOME
      ANDROID_HOME
      adb

how to fix some errors:

ReactNative Metro Bundler not starting automatically
  following steps could resolves this issue
    Running packager on different port react-native start --port 8084 --reset-cache
    Run react-native run-android --port 8084 in second Command Prompt window.
    After error screen appear clicking Android Ctrl + M, iOS Command + D.
    Click Dev Settings button at the bottom.
    Click Debug server host & port for device button.
    Type localhost:8084 and click OK button.
    Again run react-native run-android --port 8084
    
“unable to locate adb” using Android Studio [duplicate]
  on your android studio at the top right corner beside the search icon you can find the SDK Manager.
  view android SDK location (this will show you your sdk path) 
   navigate to file explorer on your system, and locate the file path, this should be found something like Windows=> c://Users/johndoe/AppData/local/android (you can now see the sdk.) Mac=>/Users/johndoe/Library/Android/sdk
  check the platform tools folder and see if you would see anything like adb.exe (it should be missing probably because it was corrupted and your antivirus or windows defender has quarantined it)
  close Android Studio, open the Task Manager and finish the ADB.exe process if it's running and then delete the platform tools folder
  go back to android studio and from where you left off navigate to sdk tools (this should be right under android sdk location)
  uncheck android sdk platform-tools and select ok. (this will uninstall the platform tools from your ide) wait till it is done and then your gradle will sync.
  after sync is complete, go back and check the box of android sdk platform-tools (this will install a fresh one with new adb.exe) wait till it is done and sync project and then  you are good to go.
  
if you have some errors with ports:
  react-native run-android --port 8084(or another port) 
  on same port 
  react-native start --port 8084(or another port) --reset-cache
(both command start in different cmd at the same order) 
 
