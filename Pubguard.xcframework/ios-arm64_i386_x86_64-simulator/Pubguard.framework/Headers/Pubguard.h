//
//  SquirrelSDK.h
//  Squirrel
//
//  Created by admin on 13/05/2019.
//  Copyright © 2019 admin. All rights reserved.
//

#import <Foundation/Foundation.h>
#import <UIKit/UIKit.h>


NS_ASSUME_NONNULL_BEGIN

@interface PubguardSDK : NSObject
+ (void)initiateTrackerWithKey:(NSString* )authKey;
@end

NS_ASSUME_NONNULL_END