/* eslint quotes: ["error", "double"] */
/* nls files need to use double quotes */
define({
  "viewer": {
    "common": {
      "save": "सहेजें",
      "close": "बंद करें"
    },
    "errors": {
      "noConfigName": "index.html > configOptions.story में कोई कॉन्फ़िगरेशन निर्दिष्ट नहीं किया गया",
      "configFormatError": "JSON सिंटेक्स त्रुटि की वजह से निर्दिष्ट किया गया कॉन्फ़िगरेशन लोड नहीं किया जा सकता है।",
      "configNotFound": "JSON सिंटेक्स त्रुटि की वजह से निर्दिष्ट किया गया कॉन्फ़िगरेशन नहीं पाया गया अथवा लोड नहीं किया जा सका।",
      "boxTitle": "कोई त्रुटि आ गई है",
      "servedFromFile": "ऐप्लिकेशन तक एक वेब सर्वर के माध्यम से पहुँचा जाना है। विवरणों के लि ${USER_GUIDE} देखें।",
      "userGuide": "उपयोगकर्ता गाइड",
      "invalidConfig": "अमान्य कॉन्फ़िगरेशन",
      "invalidConfigNoApp": "वेब मैपिंग ऐप्लिकेशन पहचानकर्ता index.html में निर्दिष्ट नहीं है।",
      "invalidConfigNoAppDev": "URL पैरामीटर (?appid=) में कोई वेब मैपिंग ऐप्लिकेशन पहचानकर्ता निर्दिष्ट नहीं किया गया है। विकास मोड में, index.html में appid कॉन्फ़िगरेशन नजरअंदाज कर दिया जाता है।",
      "unspecifiedConfigOwner": "अधिकृत मालिक कॉन्फ़िगर नहीं किया गया है।",
      "invalidConfigOwner": "कहानी स्वामी अधिकृत नहीं है।",
      "invalidConfignoOAuth": "इस कहानी को प्रमाणीकरण की आवश्यकता है, कृपया index.html में एक ArcGIS OAuth ID कॉन्फ़िगर करें या कहानी को सार्वजनिक बनाएँ।",
      "invalidApp": "यह कहानी लोड नहीं की जा सकती है।",
      "appLoadingFail": "कुछ गलत हो गया, {TPL_NAME} सही ढंग से लोड नहीं हुआ।",
      "notConfiguredDesktop": "कहानी अभी तक कॉन्फ़िगर नहीं हुई है।",
      "notConfiguredMobile": "{TPL_NAME} बिल्डर इस डिस्प्ले आकार पर समर्थित नहीं है। यदि संभव हो तो, बिल्डर का उपयोग करने के लिए अपने ब्राउज़र आकार को सही करें या कृपया एक बड़ी स्क्रीन वाली डिवाइस पर अपनी कहानी बनाएँ।",
      "notConfiguredMobile2": "{TPL_NAME} बिल्डर का उपयोग करने के कृपया अपने डिवाइस को लैंडस्केप उन्मुखीकरण की ओर घुमाएँ।",
      "notAuthorized": "आप इस कहानी के उपयोग हेतु अधिकृत नहीं हैं",
      "notAuthorizedBuilder": "आप {TPL_NAME} बिल्डर का उपयोग करने के लिए अधिकृत नहीं हैं।",
      "noViewerIE": "यह कहानी इंटरनेट एक्स्प्लोरर के पिछले संस्करण ${VERSION}. ${UPGRADE} पर समर्थित नहीं है। %UPGRADE%",
      "noViewerIE2": "आप इस कहानी को किसी पुराने, असमर्थित ब्राउज़र का उपयोग करके देखने का प्रयास कर रहे हैं। वहाँ ऐसी सुविधाएँ जो काम न करती हों या अन्य अप्रत्याशित मुद्दे हो सकते हैं। हम आपको Internet Explorer 11 के लिए उन्नयन करने या क्रोम की तरह के किसी अन्य ब्राउज़र का उपयोग करने की सलाह देते हैं।",
      "noViewerIE3": "2017 के अंत में, यह कहानी अब और इस ब्राउज़र पर लोड नहीं होगी। उस समय, आपको इस कहानी को देखने के लिए एक समर्थित ब्राउज़र का उपयोग अवश्य करना चाहिए।",
      "upgradeBrowser": "कृपया अपने ब्राउज़र को अपडेट करें।",
      "mapLoadingFail": "कुछ गलत हो गया, मानचित्र सही ढंग से लोड नहीं हुआ।",
      "signOut": "साइन आउट करें",
      "builderSupportFirefox": "स्टोरी मैप कैस्केड बिल्डर अब Firefox का समर्थन करता है!<br><br>Firefox में कैस्केड स्टोरी लेखन के लिए समर्थन वर्तमान में बीटा में है। कृपया इसे आज़माएं और किसी भी समस्या की रिपोर्ट ${ESRI-SUPPORT} या ${ESRI-COMMUNITY} में करें।",
      "builderSupportOther": "Cascade स्टोरीज़ को किसी भी आधुनिक वेब ब्राउज़र में देखा जा सकता है, लेकिन Story Map Cascade बिल्डर केवल ${CHROME}, ${SAFARI} और ${FIREFOX} में समर्थित है।<br><br>यदि आपको किसी भिन्न ब्राउज़र का समर्थन करने के लिए Cascade बिल्डर की आवश्यकता है, तो कृपया ${ESRI-SUPPORT} या ${BROWSER-SUPPORT-VOTE} से संपर्क करें।",
      "builderSupportIpad": "स्टोरी मैप कैस्केड बिल्डर iPad पर समर्थित नहीं कैस्केड कहानियाँ जिन्हें आप बनाते और साझा करते हैं iPad पर काम करेंगी।",
      "launchBuilder": "कैस्केड बिल्डर लॉन्च करें",
      "notAgain": "इसे दोबारा नहीं दर्शाएं",
      "sorry": "ध्यान दें:"
    },
    "mobileWarning": {
      "message1": "आपने इस कहानी का मोबाइल संस्करण पढ़ा है। समृद्ध मीडिया तत्वों वाले पूर्ण संस्करण के लिए, इसे किसी डेस्कटॉप कंप्यूटर पर प्रयास करें।",
      "email": "इस कहानी का लिंक ईमेल करें"
    },
    "cover": {
      "iosEmbedLink": "पूरी कहानी पढ़ने के लिए टैप करें"
    },
    "media": {
      "captionPlaceholder": "यहाँ आपका कैप्शन...",
      "loadingError": "क्षमा करें, यह सामग्री सुलभ नहीं है।",
      "explore": "एक्सप्लोर करें",
      "exploreMap": "मानचित्र अन्वेषण करें",
      "exploreStop": "अन्वेषण करना बंद करें",
      "sceneNotSupported": "क्षमा करें, यह 3D मानचित्र आपके डिवाइस पर समर्थित नहीं है।",
      "loading1": "लोड किया जा रहा है...",
      "loading2": "मानचित्र लोड हो रहा है...",
      "videoPlayPause": "चलाएँ/रोकें",
      "videoMuteUnmute": "म्यूट करें / अनम्यूट करें"
    },
    "headerFromCommon": {
      "defaultTagline": "एक ${STORY_MAP}",
      "share": "साझा करें या प्रिंट करें",
      "tooltipAutoplayDisabled": "यह ऑटोप्ले मोड में उपलब्ध नहीं है"
    },
    "shareFromCommon": {
      "copy": "प्रतिलिपि",
      "copied": "प्रतिलिपि बन गई है",
      "open": "खोलें",
      "embed": "वेब पृष्ठ में संबद्ध करें",
      "embedExplain": "एक वेब पृष्ठ में कहानी संबद्ध करने के लिए निम्न HTML कोड का प्रयोग करें।",
      "size": "आकार (चौड़ाई/ऊंचाई):",
      "autoplayLabel": "ऑटोप्ले मोड",
      "autoplayExplain1": "ऑटोप्ले मोड एक नियमित अंतराल पर आपकी कहानी के माध्यम से आगे बढ़ेगा। यह एक काउंटर या सार्वजनिक प्रदर्शन मॉनिटर पर आदर्श होता है, लेकिन सावधान रहें कि यह अन्य स्थितियों में कहानी को पढ़ना मुश्किल बना सकता है। यह सुविधा छोटे डिस्प्ले के लिए समर्थित नहीं है।",
      "autoplayExplain2": "जब यह मोड सक्रिय होता है तो कहानी को चलाने/विराम लगाने और नेविगेशन गति को समायोजित करने के लिए नियंत्रण उपलब्ध होते हैं।",
      "linksupdated": "लिंक अपडेट हो गए हैं!"
    },
    "theme": {
      "lightLabel": "रोशनी",
      "darkLabel": "गहरा"
    },
    "autoplay": {
      "speedFast": "तेज़",
      "speedMedium": "मध्यम",
      "speedSlow": "धीमी"
    },
    "bannerNotification": {
      "learnMore": "और अधिक जानें",
      "close": "बंद करें",
      "dontShowAgain": "इस संदेश को पुनः न दिखाएँ"
    },
    "embedBar": {
      "share": "साझा करें",
      "fullScreen": "पूर्ण स्क्रीन",
      "exitFullScreen": "पूर्ण स्क्रीन से बाहर निकलें",
      "enlarge": "बड़ा करें",
      "newTab": "नए टैब में खोलें",
      "tagline": "स्टोरी मैप",
      "twitter": "Twitter पर साझा करें",
      "facebook": "Facebook पर साझा करें"
    }
  },
  "print": {
    "settings": {
      "pleaseWait": "कृपया प्रिंटिंग के पहले दूसरी स्टोरी लोड होने की प्रतीक्षा करें",
      "printNotes": "अगर यह पृष्ठ धीरे लोड होता है या कोई मीडिया प्रदर्शित नहीं होता है, तो लाइव मीडिया को चित्रों से बदलने की या छोटे अनुभागों को प्रिंट करने की कोशिश करें। सर्वोत्तम परिणामों के लिए आपको अपने ब्राउज़र की प्रिंट सेटिंग में पृष्ठभूमि के तत्वों की प्रिंटिंग सक्षम करने की आवश्यकता हो सकती है।",
      "printOptions": "विकल्प",
      "makeTextBlack": "सारे टेक्स्ट को काला करें",
      "showLinks": "लिंक URL दिखाएं",
      "useAltMedia": "लाइव मीडिया को चित्रों से बदलें, यदि वे उपलब्ध हों",
      "pageBreaks": "प्रत्येक अनुभाग नए पृष्ठ पर शुरू करें",
      "printRange": "इस स्टोरी का भाग प्रिंट करें",
      "sectionStart": "अनुभाग:",
      "go": "लागू करें",
      "reset": "संपूर्ण स्टोरी पर रीसेट करें",
      "print": "प्रिंट करें"
    },
    "page": {
      "appTagline": "यह स्टोरी ${CASCADE_LINK_TEXT} द्वारा बनाई गई थी।",
      "cascadeLinkText": "Esri का स्टोरी मैप कैस्केड",
      "readItOnline": "इसे वेब पर ${STORY_URL} पर पढ़ें।"
    },
    "sections": {
      "sectionLabel": "अनुभाग ${SECTION_NUMBER}"
    },
    "media": {
      "websiteLabel": "वेबसाइट:",
      "videoLabel": "वीडियो:",
      "audioLabel": "ऑडियो:"
    }
  }
});