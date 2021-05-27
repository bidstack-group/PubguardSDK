//
//  PGHook.swift
//  PubguardSDK
//
//  Created by Aleksejs Volkovs on 19/05/2021.
//

#ifndef MethodSignature_h
#define MethodSignature_h

#import <Foundation/Foundation.h>
#import <objc/runtime.h>
@import libffi_iOS;

NS_ASSUME_NONNULL_BEGIN

extern const char * _Nullable sh_blockSignature(id block);
extern void (*sh_blockInvoke(id block))(void *, ...);
extern void sh_setBlockInvoke(id block, void (*blockInvoke)(void *, ...));

@interface PGFFITypeContext : NSObject

@property (nonatomic, assign, readonly) ffi_type *ffiType;

+ (nullable instancetype)contextWithTypeEncodingString:(NSString *)typeEncoding;
- (instancetype)init NS_UNAVAILABLE;
+ (instancetype)new NS_UNAVAILABLE;

@end

@interface PGHookUtilities: NSObject
+ (BOOL)catchException:(__attribute__((noescape)) void(^)(void))tryBlock error:(__autoreleasing NSError **)error;
@end

@interface PGSHMethodSignature : NSObject
+ (nullable PGSHMethodSignature *)signatureWithObjCTypes:(const char *)types;
@property (readonly) NSArray<NSString *> *argumentTypes;

@property (readonly) NSString *returnType;

- (instancetype)init NS_UNAVAILABLE;
+ (instancetype)new NS_UNAVAILABLE;
@end

NS_ASSUME_NONNULL_END

#endif
