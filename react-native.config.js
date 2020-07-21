// react-native.config.js

module.exports = {
  dependency: {
    platforms: {
      ios: {},
      android: { sourceDir: __dirname + "/android" }, // projects are grouped into "platforms"
    },
  },
  dependencies: {
    "react-native-action-sheet": {
      root: __dirname,
      platforms: {
        ios: {},
        android: {
          sourceDir: __dirname + "/android",
          packageImportPath: "import com.actionsheet.ActionSheetPackage;",
          packageInstance: "new ActionSheetPackage()",
        },
      },
    },
  },
};
