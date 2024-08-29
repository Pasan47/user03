//Todo Library --> LibVU , Events --> req, res

const { log } = require("console");
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url, true);
    //console.log(parseUrl);

    const path = parseUrl.pathname;
    const method = req.method;
    //const query = parseUrl.query;

    if (path == "/api/users" && method == "GET") {
        const users = [
            { id: 1, name: "Damz"},
            { id: 2, name: "Gexaa"}
        ];

        res.writeHead(200, { "Content-type" : "application/json"});
        res.end(JSON.stringify(users));

        /*
            ? Output
            {
                "id": 1,
                "name": "Damz"
            },
            {
                "id": 2,
                "name": "Gexaa"
            }
]
        */

    } else if (path == "/api/users" && method == "POST"){
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString();
        });

        req.on("end", () => {
            const newUser = JSON.parse(body);
            res.writeHead(201, { "Content-type" : "application/json"});
            res.end(JSON.stringify(newUser));
        });

    } else if (path == "/api/page" && method == "POST"){
        let bodyForPage = "";
        req.on("data", (chunk) => {
            bodyForPage += chunk.toString();
        });

        req.on("end", () => {
            const newPage = JSON.parse(bodyForPage);
            res.writeHead(201, { "Content-type" : "application/json"});
            res.end(JSON.stringify(newPage));
        });
    }

})

server.listen(3000, () => {
    console.log("Server listening on port 3000");
});