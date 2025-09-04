---
title: "System Design Interview: Understanding Proxies"
summary: ""
date: "Jun 28 2024"
draft: false
tags:
- System Design
---

Proxies, a crucial component in systems design. While the term may sound complex, proxies are straightforward to understand and are essential tools in various scenarios. You've likely encountered the terms "proxies" or "reverse proxies" in movies or TV shows, especially in hacker scenes where characters mention hiding behind a proxy. By the end of this post, you'll grasp what these terms mean and how to effectively use proxies in systems design interviews and real-world applications.

## Forward Proxies

### Definition and Basic Functionality

A forward proxy is a server that sits between a client (or set of clients) and another server (or set of servers). It acts on behalf of the client, essentially being on the client's team. When a client wants to communicate with a server, the forward proxy forwards the request to the server and then relays the server's response back to the client. This process hides the client's identity from the server.

### Use Cases

1. **Anonymity**: Forward proxies can hide the client's IP address, making it useful for anonymity. This is a simplified version of how VPNs operate.
2. **Access Control**: Clients can use forward proxies to access servers that are otherwise restricted, such as websites blocked in certain regions.

## Reverse Proxies

### Definition and Basic Functionality

Unlike forward proxies, reverse proxies act on behalf of a server in the client-server interaction. When a client sends a request, it goes to the reverse proxy, which then forwards the request to the server. The server's response goes back to the reverse proxy, which then sends it to the client. The client is unaware of the reverse proxy's existence, thinking it's interacting directly with the server.

### Use Cases

1. **Load Balancing**: Reverse proxies can distribute incoming requests across multiple servers to balance the load, enhancing system reliability and performance.
2. **Security**: They can act as a shield against malicious clients by distributing requests and preventing any single server from being overwhelmed.
3. **Caching and Logging**: Reverse proxies can handle tasks like caching content and logging requests, reducing the burden on the actual servers.

## Practical Example

Let's look at a simple example using a Node.js server and Nginx as a reverse proxy.

### Node.js Server Setup

```javascript
const http = require('http');

const server = http.createServer((req, res) => {
  console.log('Request headers:', req.headers);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello\n');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

### Nginx Configuration

```nginx
events { }

http {
  upstream node_js_backend {
    server localhost:3000;
  }

  server {
    listen 8081;

    location / {
      proxy_set_header Systems-Design-Expert-Tutorial true;
      proxy_pass http://node_js_backend;
    }
  }
}
```

### Running the Example

1. Start the Node.js server.
2. Configure and start Nginx with the above configuration.

When you send a request to `localhost:8081/hello`, Nginx adds a custom header (`Systems-Design-Expert-Tutorial: true`) and forwards the request to the Node.js server. The Node.js server logs the headers, including the custom header added by Nginx.

## Conclusion

Proxies, both forward and reverse, are simple yet powerful tools in systems design. They offer a range of functionalities from anonymity and access control to load balancing and security. Understanding how to use proxies effectively can greatly enhance your ability to design robust and scalable systems.