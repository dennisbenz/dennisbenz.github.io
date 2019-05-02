"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Http = require("http"); //erstellen eines Http-Objekts,hängt alle möglichen Importe im http-Modul an das Http-Objekt
var L05_Server;
(function (L05_Server) {
    console.log("Starting server"); //In der Console wird starting Server ausgegeben
    let port = Number(process.env.PORT); //erstellt die Variable port, Typ number, der aktuelle Wert soll dem Port entsprechen,damit der Server weis auf welchen Listener er hören soll
    if (!port) //falls kein Wert für Port festgelegt wurde...
        port = 8100; // ist der Wert 8100
    let server = Http.createServer(); //eine Variable mit dem Typen http-server wird erstellt,der aktuelle Wert entspricht der createServer-Funktion
    server.addListener("request", handleRequest); //Hängt einen Listener an den Server, der beim Event "request" die Funktion handleRequest ausführt
    server.addListener("listening", handleListen); // das gleiche wie oben, nur hier hört der Listener auf das Event listening und führt dann eben handleListen aus
    server.listen(port); // Serverinstanz hört auf gegebenen Port
    function handleListen() {
        console.log("Listening"); //gibt nur "Listening" in der Console aus
    }
    function handleRequest(_request, _response) {
        console.log("I hear voices!"); // Ausgabe in der Konsole, 'I hear voices!' 
        _response.setHeader("content-type", "text/html; charset=utf-8"); //Setzt den content-type im header auf den Wert "text/html" und "charset=utf-8"
        _response.setHeader("Access-Control-Allow-Origin", "*"); //der header wird in _response geschrieben egal ob er schon vorhanden ist oder nicht (Name, Wert)
        _response.write(_request.url); //Sendet die header-Infos und die URL der Anfrage 
        _response.end(); //schließt _response ab und signalisiert dem Server vollständing zu sein
    } //Funktion ist geschlossen
})(L05_Server || (L05_Server = {})); // namespace ist geschlossen
//# sourceMappingURL=server.js.map