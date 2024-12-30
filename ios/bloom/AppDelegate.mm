#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <RNCPushNotificationIOS.h> 
#import <UserNotifications/UserNotifications.h>

@implementation AppDelegate



- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"bloom";
  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  UNUserNotificationCenter *center = [UNUserNotificationCenter currentNotificationCenter];
  self.initialProps = @{};

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}
- (void)userNotificationCenter:(UNUserNotificationCenter *)center
       willPresentNotification:(UNNotification *)notification
         withCompletionHandler:(void (^)(UNNotificationPresentationOptions options))completionHandler
{
    completionHandler(UNNotificationPresentationOptionAlert + UNNotificationPresentationOptionSound);
}

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
