# Using Pubguard on Android with Proguard

The Pubguard Library requires certain advertising SDK classnames to be accessible in order to monitor the content.

Proguard will by default rename these classes therefore you are required to add the following exceptions in proguard-rules.pro:

```
##START Pubguard Library rules

-keep public class com.pubguard.client.database.beans.*{* ;}
-keep public class com.pubguard.client.Pubguard { public static *;}
-keep public class com.pubguard.client.factory.*{* ;}  
-keep public class * extends com.pubguard.client.factory.adFactory {
   public static com.pubguard.client.factory.* initialize(...);
}

-dontwarn com.aerserv.**
-dontwarn com.openx.**
-dontwarn com.inmobi.**
-dontwarn com.smaato.**
-keep class com.aerserv.**
-keep class com.smaato.** { *; }
-keep class com.inmobi.** { *; }
-keep class com.rfm.** { *; }
-keep class com.amazon.** { *; }
-keep class com.millennialmedia.** { *; }
-keep class com.mopub.** { *; }
-keep class com.google.android.gms.** { *; }
-keep class com.openx.** { *; }

-keepnames class com.mopub.** { *; }
-keepnames class com.millennialmedia.** { *; }
-keepnames class com.amazon.** { *; }
-keepnames class com.rfm.** { *; }
-keepnames class com.inmobi.** { *; }
-keepnames class com.smaato.** { *; }
-keepnames class com.google.android.gms.** { *; }
-keepnames class com.openx.** { *; }

-keepclasseswithmembers class * {
    @com.smaato.* <methods>;
}
-keepclasseswithmembers class * {
    @com.inmobi.* <methods>;
}
-keepclasseswithmembers class * {
    @com.rfm.* <methods>;
}
-keepclasseswithmembers class * {
    @com.amazon.* <methods>;
}
-keepclasseswithmembers class * {
    @com.millennialmedia.* <methods>;
}
-keepclasseswithmembers class * {
    @com.mopub.* <methods>;
}
-keepclasseswithmembers class * {
    @com.google.android.gms.* <methods>;
}
-keepclasseswithmembers class * {
    @com.openx.* <methods>;
}
-keepclasseswithmembers class * {
    @com.aerserv.* <methods>;
}
-keepclasseswithmembers interface * {
    @com.aerserv.* <methods>;
}

```
