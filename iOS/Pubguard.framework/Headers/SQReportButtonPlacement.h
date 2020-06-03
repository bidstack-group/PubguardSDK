//
// Created by admin on 2019-06-21.
// Copyright (c) 2019 admin. All rights reserved.
//

#import <Foundation/Foundation.h>

typedef NS_ENUM(NSUInteger, SQButtonPlacement) {
    SQButtonPlacementTopLeft = 0,
    SQButtonPlacementTopRight,
    SQButtonPlacementBottomLeft,
    SQButtonPlacementBottomRight,
    SQButtonPlacementTopCenter,
    SQButtonPlacementBottomCenter,
    SQButtonPlacementDefault
};

typedef NS_ENUM(NSUInteger, SQAdFormat) {
    SQAdFormatBanner = 0,
    SQAdFormatInterstitial,
    SQAdFormatNative,
    SQAdFormatAll
};

typedef NS_ENUM(NSUInteger, SQAdType) {
    SQAdTypeAdMob = 0,
    SQAdTypeDFP,
    SQAdTypeFacebook,
    SQAdTypeInMobi,
    SQAdTypeMoPub,
    SQAdTypeUnity,
    SQAdTypeAOL,
    SQAdTypeAmazon,
    SQAdTypeSmaato,
    SQAdTypeVungle,
    SQAdTypeTapjoy,
    SQAdTypeVerizon,
    SQAdTypeOpenX,
    SQAdTypeIronsource,
    SQAdTypeAppNexus,
    SQAdTypeVerve,
    SQAdTypeTeads,
    SQAdTypeTaboola,
    SQAdTypeSpotX

};

@interface SQReportButtonPlacement : NSObject
+ (instancetype)sharedInstance;
- (void)setNewButtonPlacement:(SQButtonPlacement)placement forAdType:(SQAdType)adType adFormat:(SQAdFormat)adFormat;
- (SQButtonPlacement)checkForUserCustomPlacementForAdWithName:(NSString *)sdkName adFormat:(NSString *)adFormat;
@end
