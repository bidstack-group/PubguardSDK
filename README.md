![alt text](manual/imgs/pg-logo.png)

# Pubguard Framework

A guide to installing Pubguard Framework on your application, with instructions, demos and FAQs

The Pubguard Framework is solution that monitors the advertising content flowing through your mobile app, protecting user against unwanted ad content.

The data from the Framework is then accessible via your account on the Pubguard interface where you can set up preferences, alerts and browse the gallery.

---

Table of contents
=================

<!--ts-->
* [Table of contents](#table-of-contents)
* [iOS](#ios)
* [Unity Plugin](#Unity-Plugin)
* [Change Log](#change-log)
* [Library Size](#library-size)
* [SDK support](#support)
* [Requirements](#requirements)
* [Versioning](#versioning)
* [License](#license)

<!--te-->

# Getting Started

These instructions will enable you to get the Pubguard Framework running on your iOS/Unity app.  
Android instructions can be found [here](https://github.com/bidstack-group/pubguard-sdk-android)

## Prerequisites

Before installing the Pubguard Framework you will need an API key, which is available through your Pubguard account. To retrieve an API key, please access on http://dashboard.pubguard.com or email support@pubguard.com. The key is used in both the iOS and Android installations.  
If you do not have a Pubguard account, please sign up on https://pubguard.com/

---

# iOS

The latest version of the iOS Pubguard Framework is **1.2.0**

### Installing

There are 2 methods of installing the Pubguard Framework:

#### Using cocoapods

Please add the following line to your Podfile (adding in your app key):

```
pod 'PubguardSDK'
```

Then run "pod install --repo-update"

#### Adding the Pubguard Framework manually

Please request the Pubguard Framework Bundle from support@pubguard.com or clone the bundle from the git repository:
```
git clone https://github.com/bidstack-group/pubguard-sdk-ios.git
```

The Pubguard Bundle contains two frameworks: 
Pubguard.xcframework  
Frameworks/SwiftProtobuf.xcframeworks

Copy these two frameworks into your Xcode project and add them to all targets:

![alt text](manual/imgs/add.png)

#### Unity installation

Unity supports installation via cocoapods and manual installation. Framework must be installed in Xcode project, which you get after building Unity project for iOS platform.

##### cocoapods (Unity)

Please ensure that your Podfile contains the following line:

```
pod 'PubguardSDK'
```

Then run "pod install --repo-update"

### Initialising the Pubguard Framework

The Pubguard Framework should be initialised once at app launch, Here's an example of how to call the init method in your AppDelegate:

#### Swift

The Pubguard Framework contains the Swift Module, you only need to import that module.  
Check the code example below:  

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

        // Initialize the Pubguard Framework.
        Pubguard.initiateTracker(withKey: "YOUR_PUBGUARD_KEY_HERE")

        return true
    }

}
```

#### Objective-C

```objective-c
*Example AppDelegate.m (excerpt)*

#import "Pubguard/PubguardSDK.h"
…

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application
didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

    // Initialize the Pubguard Framework.
    [Pubguard initiateTrackerWithKey:@"YOUR_PUBGUARD_KEY_HERE"];
    return YES;
}

@end
```

#### Unity

As was mentioned earlier, pubguard installation and initialization must be in Xcode project, which you get after building Unity project for iOS platform. In this project find **UnityAppController.mm** file and find **application didFinishLaunchingWithOptions** function. Add ```[Pubguard initiateTrackerWithKey:@"YOUR_PUBGUARD_KEY_HERE"];```.

```objective-c
*Example UnityAppController.mm (excerpt)*

#import <Pubguard/PubguardSDK.h>
…

@implementation UnityAppController

- (BOOL)application:(UIApplication *)application
didFinishLaunchingWithOptions:(NSDictionary *)launchOptions {

    // Initialize the Pubguard Framework.
    [Pubguard initiateTrackerWithKey:@"YOUR_PUBGUARD_KEY_HERE"];
    return YES;
}

@end
```

## Unity Plugin

The Unity plugin instructions can be found [here](https://github.com/bidstack-group/pubguard-unity-plugin).

---

## Changelog


For all release notes and previous versions please see our [changelog](ChangeLog.md).

---

## Support

### Advertising SDK support

These are SDKs designed specifically for serving advertising content into your app, if you would like information on a version or vendor that is not on this list please email support@pubguard.com

| Company/Product | iOS SDK identifier | SDK versions |
| ------- | ----- | ------- |
| AdColony | AdColony | 4.6.1, 4.7.0, 4.7.1, 4.7.2 |
| AdMob | Google-Mobile-Ads-SDK | 8.8.0, 8.9.0, 8.10.0, 8.11.0, 8.12.0, 8.13.0 |
| AppLovin | AppLovinSDK | 10.3.2, 10.3.3, 10.3.4, 10.3.5., 10.3.6, 10.3.7 |
| Chartboost | ChartboostSDK | 8.4.0, 8.4.1, 8.4.2, 8.5.0 |
| Fyber Marketplace | Fyber_Marketplace_SDK | 7.8.6, 7.8.7, 7.8.8, 7.8.9, 7.9.0, 8.0.0, 8.1.0, 8.1.1 |
| InMobi | InMobiSDK | 9.1.1, 9.1.5, 9.1.7, 9.2.0, 9.2.1, 10.0.0, 10.0.1 |
| IronSource | IronSourceSDK | 7.1.7, 7.1.8, 7.1.9, 7.1.10, 7.1.11, 7.1.12 |
| Mintegral | MintegralAdSDK | 6.9.6, 7.0.0, 7.0.1, 7.0.2, 7.0.3, 7.0.4 |
| MoPub | mopub-ios-sdk | 5.17.0, 5.18.0, 5.18.2 |
| Smaato | smaato-ios-sdk | 21.6.12, 21.6.13, 21.6.14, 21.6.15, 21.6.16, 21.6.17 |
| TapJoy | TapjoySDK | 12.6.1, 12.7.0, 12.7.1, 12.8.0, 12.8.1 |
| Unity Ads | UnityAds | 3.7.1,  3.7.2, 3.7.4, 3.7.5 |
| Verve | HyBid | 2.6.1, 2.6.3, 2.7.0, 2.7.1, 2.8.0 |
| Vungle | VungleSDK-iOS | 6.8.1, 6.9.1, 6.9.2, 6.10.1, 6.10.3, 6.10.4 |


## Requirements

### iOS Requirements

+ iOS 12.1 and up
+ Xcode 12.2 and up

---

## Versioning

Please use the most up to date version at all times to ensure maximum support.

---

## License

*© 2021 Minimised Media Limited (Pubguard© 2019 All Rights Reserved)*
