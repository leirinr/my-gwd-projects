((viewport) => {
  viewport.gwd = Object.assign(viewport.gwd || {}, {
    $isConnected: false,
  });

  addEventListener("ready-for-plugins", function ({ detail: { container } }) {
    if ("readyForPlugins" in viewport.gwd) {
      viewport.gwd.readyForPlugins(container);
    }
  });

  addEventListener("ready-for-creative", function ({ detail: { container } }) {
    const app = container.get("app");
    if ("readyForCreative" in viewport.gwd) {
      viewport.gwd.readyForCreative(container);
    }
  });

  addEventListener("standard-unit-view", function ({ detail: { container } }) {
    if ("onUnitView" in viewport.gwd) {
      viewport.gwd.onUnitView(container);
    }
  });

  addEventListener("standard-impression-friendly", function ({ detail: {container} }) {
    if ("onFriendlyIframe" in viewport.gwd) {
      viewport.gwd.onFriendlyIframe(container);
    }
  });

  addEventListener("creative-initialized", function ({ detail: { container } }) {
    const environment = container.get('environment');
    if(environment.canAccessTopWindow){
      return;
    }

    if ("onSafeFrame" in viewport.gwd) {
      viewport.gwd.onSafeFrame(container);
    }
  });

  addEventListener("creative-out-of-view", function ({ detail: { container } }) {
    if ("onCreativeOutOfView" in viewport.gwd) {
      viewport.gwd.onCreativeOutOfView(container);
    }
  });

  document.addEventListener('visibilitychange',function(event){
    if ("onVisibilityChange" in viewport.gwd) {
      viewport.gwd.onVisibilityChange(event.target.visibilityState);
    }
  });

  addEventListener("creative-scroll", function ({ detail: { container } }) {
    if ("onCreativeScroll" in viewport.gwd) {
      const app = container.get('app');
      if (app.vpo.isActivated && app.viewability.isFriendlyIframe) {
        return;
      }
      viewport.gwd.onCreativeScroll(app.viewability.inViewPercentage);
    }
  });

})(window);
