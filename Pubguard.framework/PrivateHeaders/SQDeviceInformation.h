//
// Created by admin on 05.12.17.
// Copyright (c) 2017 Pavel Bukhonov. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>

@interface SQDeviceInformation : NSObject

+ (NSString *)getUUID;
+ (NSString *)getOSVersion;
+ (NSString *)getConnectionType;
+ (NSString *)getBundleID;
+ (NSString *)getAppVersion;
+ (NSString *)getBuildNumber;
+ (NSString *)getCarrierName;
+ (NSString *)getPGVersionWithoutBuild;
+ (NSString *)getPGVersion;
+ (NSString *)getDeviceName;
+ (NSInteger)isAdTrackingEnabled;
+ (NSString *)getIDFA;
@end