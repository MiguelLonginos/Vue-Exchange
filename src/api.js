const url = "https://api.coincap.io/v2";

function getAssets() {
  return fetch(`${url}/assets?limit=20`)
    .then((res) => res.json())
    .then((res) => res.data);
}

function getAsset(coin) {
  return fetch(`${url}/assets/${coin}`)
    .then((respuesta) => respuesta.json())
    .then((respuesta) => respuesta.data);
}

function getAssetHistory(coin) {
  const now = new Date();
  const end = now.getTime();
  now.setDate(now.getDate() - 1);
  const start = now.getTime();
  return fetch(
    `${url}/assets/${coin}/history?interval=h1&start=${start}&end=${end}`
  )
    .then((respuesta) => respuesta.json())
    .then((respuesta) => respuesta.data);
}
function getMarkets(coin) {
  return fetch(`${url}/assets/${coin}/markets?limit=5`)
    .then((respuesta) => respuesta.json())
    .then((respuesta) => respuesta.data);
}

function getExchange(id) {
  return fetch(`${url}/exchanges/${id}`)
    .then((respuesta) => respuesta.json())
    .then((respuesta) => respuesta.data);
}

export default {
  getAssets,
  getAsset,
  getAssetHistory,
  getMarkets,
  getExchange,
};
