// Konfigurasi global tema
const tdConfig = {
  viewportIntervals: [
    { limitBottom: 767, sidebarWidth: 228 },
    { limitBottom: 1018, sidebarWidth: 300 },
    { limitBottom: 1140, sidebarWidth: 324 }
  ],
  animationStackEffect: "type0",
  animationStackEnabled: true,
  animationSelectors: {
    specific: ".entry-thumb, img",
    general: ".td-animation-stack img, .post img"
  },
  generalModalImage: "yes",
  ajaxUrl: "https://lampung.bpk.go.id/wp-admin/admin-ajax.php?td_theme_name=bpk2020&v=7.7",
  templateDir: "https://lampung.bpk.go.id/wp-content/themes/bpk2020",
  snapMenu: "smart_snap_always",
  logoOnSticky: "show",
  headerStyle: "12",
  messages: {
    pleaseWait: "Please wait...",
    userPassIncorrect: "User or password incorrect!",
    userIncorrect: "Email or username incorrect!",
    emailIncorrect: "Email incorrect!"
  },
  moreArticles: {
    enable: "show",
    timeToWait: "",
    distanceFromTop: 0
  },
  themeColor: "#b38001",
  smartSidebar: "enabled",
  themeName: "bpk2020",
  magnificPopup: {
    tPrev: "Previous (Left arrow key)",
    tNext: "Next (Right arrow key)",
    tCounter: "%curr% of %total%",
    ajaxError: "The content from %url% could not be loaded.",
    imageError: "The image #%curr% could not be loaded."
  },
  adBackground: {
    clickLink: "",
    clickTarget: ""
  }
};

export default tdConfig;
