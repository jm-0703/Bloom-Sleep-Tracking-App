#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
//#import <ReactNtivePushNotification/UserNotifications.h>
//#import <React/RCTPushNotificationManager.h>

@implementation AppDelegate



- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"bloom";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  /*

UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
[center requestAuthorizationWithOptions:(UNAuthorizationOptionAlert + UNAuthorizationOptionSound + UNAuthorizationOptionBadge)
                      completionHandler:^(BOOL granted, NSError * _Nullable error) {
    if (!error) {
        NSLog(@"Push notification permission granted: %d", granted);
    }
}];
*/
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}
/*
// Required to register for remote notifications
- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken {
    [RCTPushNotificationManager didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}

// Required for the registration error
- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error {
    [RCTPushNotificationManager didFailToRegisterForRemoteNotificationsWithError:error];
}

// Required for the notification event received while the app is in the foreground
- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler {
    [RCTPushNotificationManager didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];
}
*/
- (NSURL *)sourceURLForBridge:(RCTBridge *)bridge
{
  return [self bundleURL];
}

- (NSURL *)bundleURL
{
#if DEBUG
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:@"index"];
#else
  return [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
#endif
}

@end
