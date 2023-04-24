# Hacker Chat App

To create a hacker chat app using Socket.io and Express, you can follow these general steps:

# 1.Set up your development environment: Install Node.js and npm, create a new project directory, and initialize a new npm package.

# 2.Install necessary packages: You will need to install the following packages using npm:

      ## express
      ## socket.io
# 3.Create an Express server: Use Express to create an HTTP server that serves your static files and listens for incoming Socket.io connections.

# 4.Set up Socket.io: Initialize Socket.io on your server and listen for incoming connections.

# 4.Add Socket.io event handlers: Define Socket.io event handlers for the following events:

     ## "connection": Triggered when a new client connects to the server.
     ## "disconnect": Triggered when a client disconnects from the server.
     ## "chat message": Triggered when a client sends a chat message.
# 6.Add client-side code: Create a HTML/CSS/JavaScript interface for your chat app, and include the Socket.io client-side library.

# 7.Implement chat functionality: Add JavaScript code to handle user input and send chat messages to the server. Use Socket.io to broadcast messages to all connected clients.

Here's some sample code to get you started

![image](https://user-images.githubusercontent.com/102310770/221556664-1dba71f9-ae9c-4f97-a725-e284ea200a87.png)
![image](https://user-images.githubusercontent.com/102310770/221556905-038f8198-a82a-4a6f-b6ec-03f3792815c9.png)


DEMO Website :- https://hackerchat.onrender.com
