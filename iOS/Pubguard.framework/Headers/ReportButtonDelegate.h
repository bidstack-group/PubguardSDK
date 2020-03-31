//
// Created by admin on 2019-05-15.
// Copyright (c) 2019 admin. All rights reserved.
//

#import <Foundation/Foundation.h>

@protocol ReportButtonDelegate <NSObject>
@required
- (void)reportButtonWasClickedInView:(UIView *)adView withInfo:(NSDictionary *)dictionary;
@end