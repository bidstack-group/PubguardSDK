# Adding a Bridging Header to your Swift app

This is a quick guide explaining how to add a bridging header if you have built your app in Swift and are using the Pubguard Library.

## Getting Started

### Create your Bridging Header File

Create a new file in your project:

![alt text](imgs/new-file.png)

Select 'header file' and name it Pubguard-Bridging-Header

![alt text](imgs/add-header.png)

### Update your Bridging Header File

Add **#import 'Pubguard/Pubguard.h'** to new header file, this will allow you to import the Pubguard Library in your Swift app

![alt text](imgs/header-file.png)

### Update your Build Settings to include the Bridging Header

In **Project Settings -> Build Settings** search for *"Swift Compiler - Code Generation"*  add the Bridging header to the line *Objective-C Bridging Header*

![alt text](imgs/build-settings.png)

### That's it! You should now be able to access the library as normal:

![alt text](imgs/example-init.png)

## License

*© 2018 Minimised Media Limited (Pubguard)*