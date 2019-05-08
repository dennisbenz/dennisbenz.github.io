"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http");
//import * as Url from "url";
var L05_Server;
(function (L05_Server) {
    console.log("Starting server");
    let port = Number(process.env.PORT);
    if (!port)
        port = 8100;
    let server = Http.createServer();
    server.addListener("request", handleRequest);
    server.addListener("listening", handleListen);
    server.listen(port);
    function handleListen() {
        console.log("Listening");
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!");
        console.log(_request.url);
        _response.setHeader("content-type", "text/html; charset=utf-8");
        _response.setHeader("Access-Control-Allow-Origin", "*");
        /* let url: Url.UrlWithParsedQuery = Url.parse(_request.url, true);
        for (let key in url.query)
            _response.write(key + ":" + url.query[key] + "<br/>") */
        //_response.write(_request.url);
        _response.end();
    }
})(L05_Server || (L05_Server = {}));
//# sourceMappingURL=server.js.map