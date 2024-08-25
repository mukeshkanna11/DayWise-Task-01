                                            TASK-1-B6

DAY-01

●	What is a full-stack web development
●	Introduction to Web browser JavaScript V8
●	How the Server looks at the URL
●	Browser js vs Node js
●	What is Frontend, Backend & Databases
●	Evolution of HTTP, HTTP Methods
●	Request & Response cycle

1. What is Full Stack Web Development?

Full Stack Web Development refers to the development of both the front-end (client-side) and back-end (server-side) portions of a web application, It's includes database also.
●	Frontend: (HTML, CSS, JavaScript).
●	Backend:  (Node.js, Express.js, Python, Java).
●	Database: (MongoDB, MySQL).

2. Introduction to Web Browser JavaScript V8?

The V8 JavaScript engine is an open-source JavaScript engine developed by Google. It's written in C++ and is used in Google Chrome, Node.js, and other applications to execute JavaScript code. V8 is known for its speed and efficiency, making it one of the most popular JavaScript engines today.

Performance: V8's JIT compilation and optimization techniques make it one of the fastest JavaScript engines available.
Cross-Platform: Since V8 is used in both Chrome and Node.js, it powers a wide variety of applications, from web browsers to server-side applications.

3. How the Server Looks at the URL?

When a server "looks at" a URL, it's essentially processing the request that the client (usually a web browser) sends to it. Here’s a simplified breakdown of what happens when a server receives a URL:

●	URL (Uniform Resource Locator): Specifies the address of a web resource on the internet.
●	HTTP Request: Sent by the browser, it includes the URL, method (GET, POST), headers, and sometimes body data.
●	Server Response: The server returns the requested resource (like an HTML page) or an error message
 (like 404 Not Found).

 4. Browser JavaScript vs Node.js?

 Browser JavaScript: Client-side, interacts with the DOM, limited to web APIs, runs in a sandbox.
 Node.js: Server-side, interacts with the file system and network, uses server-side modules, and has access to the full OS.
 Both environments allow you to write JavaScript but are optimized for different tasks and contexts.

5. What is Frontend, Backend & Databases?

These are the three main components of a web application:
●	Frontend:
	The visual part of the website that users interact with.
	Technologies: HTML, CSS, JavaScript.
	Example: The design, buttons, and forms you see on a website.
●	Backend:
	The server-side logic that processes requests from the frontend.
	Technologies: Node.js, Express.js, Python, Java.
	Example: Handling form submissions, authentication, and business logic.
●	Database:
	Stores and retrieves data.
	Technologies: MongoDB, MySQL, PostgreSQL.
○	Example: A database stores user information, such as login credentials.

6. Evolution of HTTP & HTTP Methods?

HTTP (HyperText Transfer Protocol) is the protocol used for transferring web pages on the internet. It has evolved over time to become more secure and efficient.

●	HTTP 1.0/1.1: Early versions with basic features like GET and POST methods.
●	HTTP/2: Introduced multiplexing, allowing multiple requests to be sent over a single connection.
●	HTTP/3: Uses QUIC protocol for faster, more reliable connections.

HTTP Methods:

●	GET: Retrieve data from the server.
●	POST: Send data to the server to create/update resources.
●	PUT: Update a resource on the server.
●	DELETE: Remove a resource from the server.

7. Request & Response cycle?

The request-response cycle is the sequence of events that takes place when a client (browser) interacts with a server.
  1.Client Request:
	The client sends an HTTP request to the server.
	Includes a method (GET, POST), URL, headers, and body data.
  2.Server Processing:
	The server processes the request, which might involve querying a database or executing some logic.
  3.Server Response:
	The server sends back an HTTP response with a status code (e.g., 200 OK, 404 Not Found), headers, and body content.
  4.Client Rendering:
	The browser renders the response content, such as HTML, CSS, and JavaScript, to display the web page.