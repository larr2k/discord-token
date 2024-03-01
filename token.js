webpackChunkdiscord_app.push([[''], {}, e => {
  const m = [];
  for (let c in e.c) {
    m.push(e.c[c]);
  }
  const moduleWithToken = m.find(m => m?.exports?.default?.getToken !== undefined);
  if (moduleWithToken) {
    const token = moduleWithToken.exports.default.getToken();
    alert(token);
  }
}]);
