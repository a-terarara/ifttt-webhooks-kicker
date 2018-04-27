const axios = require("axios");
const querystring = require("querystring");
const co = require("co");
const baseUrl = (event, accessKey) =>
  `https://maker.ifttt.com/trigger/${event}/with/key/${accessKey}`;
const params = { value1: "notifyTest" };

co(function*() {
  const argv = process.argv;
  if (argv < 4) throw new Error("args is must 4items");
  const event = argv[2];
  const accessKey = argv[3];

  const headers = {
    "Content-Type": "application/x-www-form-urlencoded"
  };

  const targetUrl = baseUrl;

  const { data } = yield axios.post(
    baseUrl(event, accessKey),
    querystring.stringify(params),
    {
      headers
    }
  );

  return "success";
});
