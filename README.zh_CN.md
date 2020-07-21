# react-native-action-sheet [![npm version](https://badge.fury.io/js/react-native-action-sheet.svg)](https://badge.fury.io/js/react-native-action-sheet) ![MIT](https://img.shields.io/dub/l/vibe-d.svg) ![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-yellow.svg)

`React Native` ActionSheet 使用原生组件生成

> 该模块在 Android 使用 内置的 AlertDialog
>
> IOS 中使用 ActionSheetIOS

| iOS                                                               | Android                                                               |
| ----------------------------------------------------------------- | --------------------------------------------------------------------- |
| <img title="iOS" src="http://i.imgur.com/Y9n9jkb.png" height=550> | <img title="Android" src="http://i.imgur.com/oRXTG7g.png" height=550> |

## 内容

- [安装](#install)
- [手动配置][#manual configuration]
- [使用](#usage)
- [API](#methods)

# IMPORTANT ! Package name on npm is now react-native-action-sheet

## <span id="install">安装</span>

```bash
npm install @scrawllife/react-native-action-sheet --save // or yarn add react-native-action-sheet
```

## React Native > 0.60

> ReactNative 大于 0.60 将自动使用 autolink，无需[手动配置](#Manual Configuration)

## React Native < 0.47

```bash
npm install @scrawllife/react-native-action-sheet@0.0.3 --save
react-native link @scrawllife/react-native-action-sheet`
```

## <span id="Manual Configuration">手动配置</span>

### Android

The `react-native link` command above should do everything you need, but if for some reason it does not work, you can replicate its effects manually by making the following changes.

```gradle
// file: android/settings.gradle
...

include ':react-native-action-sheet'
project(':react-native-action-sheet').projectDir = new File(settingsDir, '../node_modules/react-native-action-sheet/android')
```

```gradle
// file: android/app/build.gradle
...

dependencies {
    ...
    compile project(':react-native-action-sheet')
}
```

```java
// file: android/app/src/main/java/com/<...>/MainApplication.java
...

import com.actionsheet.ActionSheetPackage; // <-- add this import

public class MainApplication extends Application implements ReactApplication {
    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
            new MainReactPackage(),
            new ActionSheetPackage() // <-- add this line
        );
    }
...
}

```

#### (Optional) Style customization

You can change the style of the dialog by editing `nodes_modules/react-native-action-sheet/android/src/main/res/values/style.xml`

## <span id="usage">使用方法</span>

```javascript
import ActionSheet from "react-native-action-sheet";

var options = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];

var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

ActionSheet.showActionSheetWithOptions(
  {
    options: options,
    cancelButtonIndex: CANCEL_INDEX,
    destructiveButtonIndex: DESTRUCTIVE_INDEX,
    tintColor: "blue",
  },
  (buttonIndex) => {
    console.log("button clicked :", buttonIndex);
  }
);
```

## <span id="methods">API</span>

有关 IOS 的实现，请参阅 [ActionSheetIOS](https://facebook.github.io/react-native/docs/actionsheetios.html)

#### showActionSheetWithOptions (Android)

```javascript
/**
 * Display the native action sheet
 */

static showActionSheetWithOptions(options, callback);
```

@note: on Android in case of a touch outside the ActionSheet or the hardware back button is pressed the buttonIndex value is `cancelButtonIndex` or `'undefined'`

#### options

| option                 | iOS | Android | Info                                                            |
| ---------------------- | --- | ------- | --------------------------------------------------------------- |
| options                | OK  | OK      | (array of strings) - a list of button titles (required on iOS)  |
| cancelButtonIndex      | OK  | Ok      | (int) - index of cancel button in options                       |
| destructiveButtonIndex | OK  | -       | (int) - index of destructive button in options (same as above)  |
| title                  | OK  | OK      | (string) - a title to show above the action sheet               |
| message                | OK  | -       | (string) - a message to show below the title                    |
| tintColor              | OK  | -       | (string) - a color to set to the text (defined by processColor) |

## Instructions

该项目 fork 于`Yoann Fuks (yfuks)`  [`react-native-action-sheet`](https://github.com/yfuks/react-native-action-sheet) 后续更新将提交给 `yfuks`
