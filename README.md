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
* [Change Log](#change-log)
* [Library Size](#library-size)
* [SDK support](#support)
* [Requirements](#requirements)
* [Versioning](#versioning)
* [License](#license)
* [FAQs](https://github.com/pubguard/pubguard-library-guide/wiki/FAQs)

<!--te-->

# Getting Started

These instructions will enable you to get the Pubguard library running on your iOS/Android app.

## Prerequisites

Before installing the pubguard library you will need an application key which is available from your account, in order to receive a key please signup from https://bidstack.pubguard.com or email support@pubguard.com. The key is used in both the iOS and Android installations.

```
pubguardKey = "xxxxxxxxxxxxxxxxxxx"
```

---

# Android


The latest version of the Android Pubguard Library is **1.0.0**

**Note: do not minify the Pubguard library**



### Installing

Installing the Pubguard library requires the following lines to be added to your gradle build as follows:

#### Using Maven

Please add the following lines to your **build.Gradle(Module: app)** and update the credentials to use your key in 'password':

```
...
apply plugin: 'com.bidstack.pubguard.aspectj-ext'

repositories {
    maven {
        // TODO: update url when publishing is set up
        url 'https://customer.pubguard.com/maven/releases'
        credentials {
            username 'pubguard'
            password 'YOUR_PUBGUARD_KEY_HERE'
        }
    }
}

aspectj {
    includeJar.addAll([
            "play-services-ads-lite",
            "play-services-ads",
            "play-services-base",
            "pubguard",
            "mopub-volley",
            "libAvid-mopub",
            "mopub-sdk",
            "mopub-sdk-banner",
            "mopub-sdk-rewardedvideo",
            "mopub-sdk-interstitial",
            "mopub-sdk-native-video",
            "mopub-sdk-native-static",
            "mopub-sdk-base",
            "android-vas-standard-edition",
            "android-vas-inline-web-adapter",
            "android-vas-inline-placement",
            "android-vas-interstitial-vast-adapter",
            "android-vas-interstitial-web-adapter",
            "android-vas-interstitial-placement",
            "android-vas-native-verizon-native-adapter",
            "android-vas-native-placement",
            "android-vas-verizon-native-controller",
            "android-vas-vast-controller",
            "android-vas-video-player",
            "android-vas-web-controller",
            "android-vas-web-view",
            "android-vas-omsdk",
            "android-vas-verizon-ssp-reporter",
            "android-vas-verizon-ssp-waterfall-provider",
            "android-vas-uri-experience",
            "android-vas-sideloading-waterfall-provider",
            "android-vas-support",
            "android-vas-verizon-ssp-config-provider",
            "android-vas-core",
            "unity-ads",
            "unityads",
            "admob",
            "audience-network-sdk",
            "inmobi-ads",
            "sdk"])
//    includeAllJars = true
    ignoreErrors = true
    breakOnError = false
    debugInfo = true
}

dependencies {
...
    implementation 'com.google.android.gms:play-services-basement:[GOOGLE_AD_VERSION]'
    implementation 'com.bidstack.pubguard:pubguard:1.0.0'

}

```
Note that we require `implementation 'com.google.android.gms:play-services-basement:[GOOGLE_AD_VERSION]'`
[GOOGLE_AD_VERSION] Version is based on your google ads version as per above. Even if you are not using Google ads, you still need to add support for Google services.


#### Initialising the Library

The Pubguard Library should be initialised once at app launch, Here's an example of how to call the init method in
Application class:
```
import com.bidstack.pubguard.Pubguard;
…

public class MyApplication extends Application {

    @Override public void onCreate() {
        super.onCreate();

        Pubguard.init(this, "YOUR_PUBGUARD_KEY_HERE");
    }
}
```

#### Proguard

If you are using Proguard please see our section on [using Pubguard with Proguard](drd-proguard-guide.md).

---

# iOS

The latest version of the iOS Pubguard Library is **1.28.0**

### Installing

There are 2 methods of installing the Pubguard framework:

#### Using cocoapods

Please add the following line to your Podfile (adding in your app key):

```
pod 'PubguardSDK', :git => 'https://github.com/bidstack-group/PubguardSDK.git'
```

Then run "pod install --repo-update"

#### Adding the library manually

If you are adding the library manually please refer to these [instructions](ios-manual-install.md).


#### Unity installation

Unity supports installation via cocoapods and manual installation. Framework must be installed in Xcode project, which you get after building Unity project for iOS platform.

##### cocoapods (Unity)

Please add the following line to your Podfile (adding in your app key):

```
pod 'PubguardSDK', :git => 'https://github.com/bidstack-group/PubguardSDK.git'
```

Then run "pod install --repo-update"

##### manual (Unity)

Manual installation is the same [instructions](ios-manual-install.md).

### Initialising the Library

The Pubguard Library should be initialised once at app launch, Here's an example of how to call the init method in your AppDelegate:

#### Swift

The Pubguard Library is written in Obj-c so if your app is Swift please see the guide on adding a [bridging header](adding-a-bridging-header.md).

```
*Example AppDelegate.m (excerpt)*

import Pubguard
…

@UIApplicationMain
class AppDelegate: UIResponder, UIApplicationDelegate {

    var window: UIWindow?

        func application(_ application: UIApplication,
        didFinishLaunchingWithOptions launchOptions: [UIApplicationLaunchOptionsKey: Any]?) -> Bool {

        // Initialize the Pubguard Library.
        Pubguard.initiateTrackerWithKey("YOUR_PUBGUARD_KEY_HERE")

        return true
    }

}
```

#### Objective-C

```
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


#### Unity

As was mentioned earlier, pubguard installation and initialization must be in Xcode project, which you get after building Unity project for iOS platform. In this project find **UnityAppController.mm** file and find **application didFinishLaunchingWithOptions** function. Add ```[Pubguard initiateTrackerWithKey:@"YOUR_PUBGUARD_KEY_HERE"];```.

```
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

---

## Changelog


For all release notes and previous versions please see our [changelog](changelog.md).


---

## Library Size

The Pubguard team understands the importance of having a small footprint and our library is optimised to be as lightweight as possible on both iOS and Android.

Here is a guide based based on our compiling with our test apps, please bear in mind the size may increase or reduce based on the amount of SDKs you use and the amount of shared dependancies.

|Dependancies| iOS   | Android |
| ---- | ----- | ------- |
|gson | | ~50kb  |
|retrofit | | ~150kb  |
| Total |~140kb | ~900kb  |

---

## Support

### Advertising SDK support

These are SDKs designed specifically for serving advertising content into your app, if you would like information on a version or vendor that is not on this list please email support@pubguard.com

| SDK     | iOS   | Android |
| ------- | ----- | ------- |
| AdColony   | 4.1.4|    |
| AmazonAd   | 3.0.0 |    |
| AppNexusSDK | 7.2 |    |
| FBAudienceNetwork | 5.8.0 | 5.7.1 |
| Firebase/AdMob | 6.3.0 |  19.0.0 |
| Mopub mediation AdMob |  | 15.0.0.8 |
| Google-Mobile-Ads-SDK | 7.57.0  | 19.0.0 |
| InMobiSDK | 9.0.6 | 9.0.1 |
| IronSourceSDK | 6.15.0.1 |  |
| AOL one (MMAdSDK) | 6.8.2|  |
| MoPub | 5.11.0 | 5.10.0 |
| OpenX | 4.8.1 | |
| RFMAdSDK | 6.4.0| |
| SmaatoSDK | 10.2.6 | |
| Tapjoy | 12.4.2 | |
| Unity Ads | 3.4.2 | 3.4.2 |
| Mopub mediation Unity |  | 3.2.0.1 |
| Verizon | 1.5.0 | 1.3.1 |
| Vungle | 6.5.3 | |

### Mediation Support

Mediation platforms or networks can be used to manage the various SDKs within your platform, although most platforms don't affect Pubguard's monitoring solution in any way if you do have a question please email support@pubguard.com to clarify.

| Mediator     | iOS   | Android |
| ------- | ----- | ------- |
| AATKit (addApptr)   | 2.65.34|    |
| DFP   | 7.31.0 | 15.0.0 |
| AppNexusSDK | 7.2 |  4.8  |
| MoPub | 5.11.0 | 5.1.0 |

## Requirements

### iOS Requirements

+ iOS 8.0 and up
+ Xcode 9.0 and up

### Android Requirements

+ Android 4.4 and up
+ Android Studio 3.6.1 and up
+ Gradle 6.0 and up

---

## Versioning

Please use the most up to date version at all times to ensure maximum support.

---

## License

*© 2017 Minimised Media Limited (Pubguard© 2017 All Rights Reserved)*
