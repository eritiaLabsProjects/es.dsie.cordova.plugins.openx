{"filter":false,"title":"openx.js","tooltip":"/www/openx.js","undoManager":{"mark":0,"position":0,"stack":[[{"group":"doc","deltas":[{"action":"removeLines","range":{"start":{"row":0,"column":0},"end":{"row":44,"column":0}},"nl":"\n","lines":["var RevMob = {};","  RevMob.TEST_DISABLED = 0;","RevMob.TEST_WITH_ADS = 1;","RevMob.TEST_WITHOUT_ADS = 2;","","RevMob.startSession= function(appId,successCallback, errorCallback) {","    cordova.exec(successCallback, errorCallback, \"RevMobPlugin\", \"startSession\", [appId]);","  };","","RevMob.showFullscreen = function(successCallback, errorCallback) {","\t\tcordova.exec(successCallback, errorCallback, \"RevMobPlugin\", \"showFullscreen\", []);","\t};","","RevMob.openAdLink = function(successCallback, errorCallback) {","\t\tcordova.exec(successCallback, errorCallback, \"RevMobPlugin\", \"openAdLink\", []);","\t};","","RevMob.showPopup = function(successCallback, errorCallback) {","\t\tcordova.exec(successCallback, errorCallback, \"RevMobPlugin\", \"showPopup\", []);","\t}","","RevMob.showBanner = function(successCallback, errorCallback) {","\t\tcordova.exec(successCallback, errorCallback, \"RevMobPlugin\", \"showBanner\", []);","\t};","","RevMob.hideBanner = function(successCallback, errorCallback) {","\t\tcordova.exec(successCallback, errorCallback, \"RevMobPlugin\", \"hideBanner\", []);","\t};","","RevMob.setTestingMode = function(testingMode) {","\t\tcordova.exec(null, null, \"RevMobPlugin\", \"setTestingMode\", [testingMode]);","\t};","","RevMob.printEnvironmentInformation = function() {","\t\tcordova.exec(null, null, \"RevMobPlugin\", \"printEnvironmentInformation\", []);","\t};","","RevMob.setTimeoutInSeconds = function(seconds) {","\t\tcordova.exec(null, null, \"RevMobPlugin\", \"setTimeoutInSeconds\", [seconds]);","\t};","\t","","","module.exports = RevMob;"]},{"action":"insertText","range":{"start":{"row":0,"column":0},"end":{"row":0,"column":15}},"text":"var OpenX = {};"},{"action":"insertText","range":{"start":{"row":0,"column":15},"end":{"row":1,"column":0}},"text":"\n"},{"action":"insertLines","range":{"start":{"row":1,"column":0},"end":{"row":18,"column":0}},"lines":["","OpenX.init= function(params,successCallback, errorCallback) {","    cordova.exec(successCallback, errorCallback, \"OpenXPlugin\", \"init\", [params]);","  };","","OpenX.showInterstitial = function(params,successCallback, errorCallback) {","\t\tcordova.exec(successCallback, errorCallback, \"OpenXPlugin\", \"showInterstitial\", [params]);","\t};","","OpenX.showBanner = function(params,successCallback, errorCallback) {","\t\tcordova.exec(successCallback, errorCallback, \"OpenXPlugin\", \"showBanner\", [params]);","\t};","","OpenX.hideBanner = function(params,successCallback, errorCallback) {","\t\tcordova.exec(successCallback, errorCallback, \"OpenXPlugin\", \"hideBanner\", [params]);","\t};",""]},{"action":"insertText","range":{"start":{"row":18,"column":0},"end":{"row":18,"column":23}},"text":"module.exports = OpenX;"}]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":18,"column":23},"end":{"row":18,"column":23},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1405588729362,"hash":"34233ba540d07011597a3a6142f90888c18d5c95"}