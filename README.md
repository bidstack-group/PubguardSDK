![alt text](imgs/pg-logo-hires.jpg)

# Pubguard Library

A guide to installing Pubguard on your application, with instructions, demos and FAQs

The Pubguard Library is solution that monitors the advertising content flowing through your mobile app, protecting against unwanted content and optimising revenues.

The data from the library is then accessible via your account on the Pubguard interface where you can set up preferences, alerts and browse the gallery.

---

Table of contents
=================

<!--ts-->
* [Table of contents](#table-of-contents)
* [Android](#android)
* [iOS](#ios)
* [Unity Plugin](#Unity-Plugin)
* [Change Log](#change-log)
* [Library Size](#library-size)
* [SDK support](#support)
* [Requirements](#requirements)
* [Versioning](#versioning)
* [License](#license)
<!--* [FAQs](https://github.com/bidstack-group/pubguardSDK/wiki/FAQs)-->

<!--te-->

# Getting Started

These instructions will enable you to get the Pubguard library running on your iOS/Android/Unity app.

## Prerequisites

Before installing the pubguard library you will need an application key which is available from your account, in order to receive a key please signup from https://bidstack.pubguard.com or email support@pubguard.com. The key is used in both the iOS and Android installations.

```
pubguardKey = "xxxxxxxxxxxxxxxxxxx"
```

---

# Android


The latest version of the Android Pubguard Library is **1.0.0**

**Note: do not minify the Pubguard library**



### Installing locally

* Copy pubguard.aar and aspectj.jar into your main app module libs folder
* Into project's `build.gradle`  add:

  ```groovy
  buildscript {
      dependencies {
          classpath files('app/libs/aspectj.jar')
          classpath "org.aspectj:aspectjtools:1.9.4"
          classpath "org.aspectj:aspectjrt:1.9.4"
      }
  }
  allprojects {
    repositories {
        flatDir {
            dirs "libs"
        }
    }
  }
  ```

* Into module's `build.gradle` add:

  ```groovy
  apply plugin: 'com.bidstack.pubguard.aspectj-ext'
  
  android {
      compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
  }
  
  dependencies {
    
    // Pubguard
    implementation files('libs/pubguard.aar')
  
    // android
    implementation "androidx.core:core:1.3.1"
    implementation 'com.google.android.gms:play-services-basement:[GOOGLE_AD_VERSION]'
    implementation 'androidx.webkit:webkit:1.2.0'
  
    // kotlin
    implementation "androidx.core:core-ktx:1.3.1"
    implementation "org.jetbrains.kotlin:kotlin-stdlib-jdk7:$kotlin_version"
    implementation 'org.jetbrains.kotlinx:kotlinx-coroutines-core:1.3.7'
    implementation 'org.jetbrains.kotlinx:kotlinx-coroutines-android:1.3.3'
  
    // networking
    implementation 'com.squareup.retrofit2:retrofit:2.6.3'
    
    // networking  converters
    implementation 'com.squareup.retrofit2:converter-gson:2.6.2'
    implementation 'com.google.code.gson:gson:2.8.5'
    implementation 'com.squareup.retrofit2:converter-protobuf:2.6.3'
    implementation 'com.google.protobuf:protobuf-java:3.6.1'
    // NOTE!!! We must use interceptor v3.12.2 in order to support android versions below api 21
    implementation 'com.squareup.okhttp3:logging-interceptor:3.12.2'
    
  }
  ```
  

**Note** that we require `implementation 'com.google.android.gms:play-services-basement:[GOOGLE_AD_VERSION]'`
[GOOGLE_AD_VERSION] Version is based on your google ads version as per above. Even if you are not using Google ads, you still need to add support for Google services.



#### Initialising the Library

The Pubguard Library should be initialized once at app launch. Here's an example of how to call the init method in Application class:
```
import com.bidstack.pubguard.Pubguard;
…

public class MyApplication extends Application {

    @Override public void onCreate() {
        super.onCreate();

        try {
            Pubguard.init(application, "YOUR_PUBGUARD_KEY", BuildConfig.VERSION_NAME);
        } catch (Exception e) {
            Log.e(TAG, "Pubguard Init exception: " + e.getMessage());
        }
    }
}
```

**Note** All initialization parameters are mandatory and exception will be thrown if null or empty string is passed.
  - `application` is your apps `Application` class
  - `YOUR_PUBGUARD_KEY` is a `String` of your publisher key that can be found in Pubguard console
  - `BuildConfig.VERSION_NAME` is a `String` of your app version name that is set in module build.gradle

If your project is using not the latest Gradle or Android Gradle Plugin versions, you should choose appropriate `com.bidstack.pubguard:aspectj` version form the table or update Gradle to the latest version

| Aspectj plugin version | Required Android Gradle Plugin version | Required Gradle version |
| ---------------------- | -------------------------------------- | ----------------------- |
| 3.3.0.0                | 3.3.0 - 3.3.2                          | 4.10.1+                 |
| 3.4.0.0                | 3.4.0 - 3.4.1                          | 5.1.1+                  |
| 3.5.0.0                | 3.5.0 - 3.5.3                          | 5.4.1                   |
| 3.6.0.0                | 3.6.0+                                 | 5.6.4                   |
| 3.6.0.1                | 3.6.0+                                 | 6.0+                    |
| 4.0.0.0                | 4.0.0+                                 | 6.1.1+                  |

If you use Kotlin, choose the appropriate version:

| Gradle Plugin version | Required Kotlin version |
| --------------------- | ----------------------- |
| 4.10.1 - 5.1          | 1.3.0+                  |
| 5.1.1 - 5.6.4         | 1.3.10+                 |
| 6.0+                  | 1.3.20+                 |

---

# iOS

The latest version of the iOS Pubguard Library is **1.0.0**

### Installing

There are 2 methods of installing the Pubguard framework:

#### Using cocoapods

Please add the following line to your Podfile (adding in your app key):

```
pod 'PubguardSDK', :git => 'https://github.com/bidstack-group/PubguardSDK.git'
```

Then run "pod install --repo-update"

#### Adding the library manually

Please request the Pubguard Library from support@pubguard.com which will have the key embedded in it.

Once received copy the Pubguard.framework into your Xcode project and add it to all targets that will link to Pubguard:

![alt text](imgs/add.png)

Add the Pubguard Library to Target > General > Embedded Binaries. If you add the framework to "embedded binaries", the framework will also be added to "Linked Frameworks and Libraries".

![alt text](imgs/link.png)

![alt text](imgs/build-phase.png)

Download file [strip-frameworks.sh](strip-frameworks.sh) and put this file in root folder of your project.

In Project Navigator choose your project and go to "Build Phases" and in the top left corner find and press "add" button. Hit "New Run Script Phase" and choose new "Run Script".

![alt text](imgs/select-build-script.png)

Add the following Build script

```
bash "${SRCROOT}/${PROJECT_NAME}/strip-frameworks.sh"
```

![alt text](imgs/add-build-script.png)

Also in "Build Phases" add Pubguard framework in "Embed Frameworks".

![alt text](imgs/add-embed-frameworks.png)


#### Unity installation

Unity supports installation via cocoapods and manual installation. Framework must be installed in Xcode project, which you get after building Unity project for iOS platform.

##### cocoapods (Unity)

Please add the following line to your Podfile (adding in your app key):

```
pod 'PubguardSDK', :git => 'https://github.com/bidstack-group/PubguardSDK.git'
```

Then run "pod install --repo-update"

##### manual (Unity)

Manual installation is the same [instructions](#Adding the library manually).

### Initialising the Library

The Pubguard Library should be initialised once at app launch, Here's an example of how to call the init method in your AppDelegate:

#### Swift

The Pubguard Library is written in Obj-c so if your app is Swift please see the guide on adding a [bridging header](#Bridging Header).

```swift
*Example AppDelegate.swift*

import UIKit
import Pubguard
…

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

        func application(_ application: UIApplication,
                         didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {

        // Initialize the Pubguard Library.
        Pubguard.initiateTracker(withKey: "YOUR_PUBGUARD_KEY_HERE")

        return true
    }

}
```

#### Objective-C

```objective-c
*Example AppDelegate.m (excerpt)*

#import "Pubguard/Pubguard.h"
…

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application
didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

    // Initialize the Pubguard Library.
    [Pubguard initiateTrackerWithKey:@"YOUR_PUBGUARD_KEY_HERE"];
    return YES;
}

@end
```

#### Bridging Header

This is a quick guide explaining how to add a bridging header if you have built your app in Swift and are using the Pubguard Library.

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

#### Unity

As was mentioned earlier, pubguard installation and initialization must be in Xcode project, which you get after building Unity project for iOS platform. In this project find **UnityAppController.mm** file and find **application didFinishLaunchingWithOptions** function. Add ```[Pubguard initiateTrackerWithKey:@"YOUR_PUBGUARD_KEY_HERE"];```.

```objective-c
*Example UnityAppController.mm (excerpt)*

#import <Pubguard/Pubguard.h>
…

@implementation UnityAppController

- (BOOL)application:(UIApplication *)application
didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

    // Initialize the Pubguard Library.
    [Pubguard initiateTrackerWithKey:@"YOUR_PUBGUARD_KEY_HERE"];
    return YES;
}

@end
```



## Unity Plugin

The latest version of the Pubguard Plugin is **1.0.0**

Start with importing Pubguard Package. From the **Assets** menu, choose **Import Package**, plus the name of the package you want to import. 

![unity-1](imgs/unity-1.png)

Select **Import** and Unity puts the contents of the package into a **Standard Asset** folder, which you can access from your **Project View**.

![unity-2](imgs/unity-2.png)

1. From **Project** tab, exapnd **Assets** folder and click on **Prefabs**.
2. Drag and Drop **Pubguard** plugin to the Project **Hierachy** list.
3. The **PubguardController** shoud appear in the **Hierachy** list as shown on the image below.

![unity-3](imgs/unity-3.png)

Click on the **PubguardControler** and from the **Inspector** tab enter the Pubguards's Application Key.

Check the [Prerequisites](#Prerequisites) section explaining how to obtain the Application Key.

![unity-4](imgs/unity-4.png)

The Pubguard plugin installation is now completed. 

---

## Changelog


For all release notes and previous versions please see our [changelog](changelog.md).

---

## Library Size

The Pubguard team understands the importance of having a small footprint and our library is optimised to be as lightweight as possible on both iOS and Android.

Here is a guide based based on our compiling with our test apps, please bear in mind the size may increase or reduce based on the amount of SDKs you use and the amount of shared dependancies.

|Dependancies| iOS   | Android |
| ---- | ----- | ------- |
| Total |~140kb | ~358kb  |

---

## Support

### Advertising SDK support

These are SDKs designed specifically for serving advertising content into your app, if you would like information on a version or vendor that is not on this list please email support@pubguard.com

| Company/Product | iOS SDK identifier | iOS versions | Android SDK identifier | Android versions |
| ------- | ----- | ------- | ------- | ------- |
| AdColony | | 4.1.4| com.adcolony:sdk |  4.1.0 - 4.1.4  |
| AdMob | Google-Mobile-Ads-SDK | 7.57.0 | com.google.android.gms:play-services-ads | 19.0.0 - 19.5.0 |
| Amazon Mobile Ads | |  | com.amazon.android:mobile-ads | 6.0.0 |
| AppNexus | AppNexusSDK | 7.2 |  |    |
| Chartboost | | | com.chartboost:chartboost-sdk | 7.5.0; 8.1.0 |
| Facebook Audience Network | FBAudienceNetwork | 5.8.0 | com.facebook.android:audience-network-sdk | 5.8.0 - 6.1.0 |
| InMobi | InMobiSDK | 9.0.6 | com.inmobi.monetization:inmobi-ads | 9.0.1 |
| ironSource | IronSourceSDK | 6.15.0.1 | com.ironsource.sdk:mediationsdk | 6.14.0.1; 6.16.1 |
| MoPub |  | 5.14.0 | com.mopub:mopub-sdk | 5.10.0, 5.12.0 |
| MoPub mediation - AdMob | |  | com.mopub.mediation:admob |  |
| MoPub mediation - Unity | |  | com.mopub.mediation:unityads | 3.4.6.0 |
| One by AOL | MMAdSDK | 6.8.2| |  |
| OpenX | | 4.8.1 |  | |
| Rubicon Project | RFMAdSDK | 6.4.0| | |
| Tapjoy | | 12.4.2 |  | |
| Unity Ads | | 3.4.2 | com.unity3d.ads:unity-ads | 3.4.2-3.4.6, 3.4.8 |
| Verizon | | 1.5.0 | com.verizon.ads:android-vas-standard-edition | 1.2.0 |
| Vungle | | 6.5.3 | com.vungle:publisher-sdk-android | 6.7.0 - 6.8.1 |

### Mediation Support

Mediation platforms or networks can be used to manage the various SDKs within your platform, although most platforms don't affect Pubguard's monitoring solution in any way if you do have a question please email support@pubguard.com to clarify.

| Mediator     | iOS   | Android |
| ------- | ----- | ------- |
| AATKit (addApptr)   | 2.65.34|    |
| DFP   | 7.31.0 |  |
| AppNexusSDK | 7.2 |    |
| MoPub | 5.11.0 | 5.10.0, 5.12.0 |

## Requirements

### iOS Requirements

+ iOS 9.0 and up
+ Xcode 11.0 and up

### Android Requirements

+ Android 4.4 and up
+ Android Studio 3.6.1 and up
+ Gradle 6.0 and up

---

## Versioning

Please use the most up to date version at all times to ensure maximum support.

---

## License

*© 2019 Minimised Media Limited (Pubguard© 2019 All Rights Reserved)*
