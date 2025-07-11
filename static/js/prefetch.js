window.addEventListener('load', () => {
  quicklink.listen({
    prerender: true,
    delay: 100,
    throttle: 3,
    ignores: new RegExp("/tags/"),
  });
});
