((viewport) => {

  viewport.gwd = viewport.gwd || {};

  gwd.readyForPlugins = function(container){
    const app = container.get("app");
    app.use("duo", {
      showBeforeScroller: true,
      showAfterScroller: false, // CHANGE IF DUO SHOULD SHOW AFTER UNIT SCROLL
      adhesionBackgroundSize: "contain",
      adhesionBackgroundPosition: "bottom",
      adhesionBackgroundRepeat: "no-repeat",
      adhesionBackgroundImage: "#adhesion",
      closeBackgroundSize: "30px 30px",
      closeBackgroundPosition: "center",
      closeBackgroundRepeat: "no-repeat",
      closeBackgroundImage: "#close",
      scrollToAd: false, // CHANGE IF DUO NEED TO AUTO SCROLL
      //adhesionCta: (exit) => exit("user_tap_adhesion_001", 'adhesion_hotspot'), // USE THIS ONLY IF scrollToAd = true
      adhesionCta: (exit) => exit("https://padsquad.com/", 'adhesion_hotspot', 'user_tap_adhesion_exitUrl_14472'), // CHANGE URL FOR DUO HERE
      closeCta: (close) => close("auto", "close_button", 'auto_adDismiss_tap_14472'),
    });
  }
   gwd.onUnitView = function(container){
    const app = container.get('app');
    gwd.animate();
  }

  gwd.onSafeFrame = function(){
    document.querySelector("gwd-pagedeck").goToPage("fallback");
  }
})(window)