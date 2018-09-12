# Test project to integrate Monaco Editor with Language Servers to support auto-complete at least in C# and Pyphon
## The Purpose
The purpose of this project is to add auto-completion and intellisense support to Monaco Editor when editing code at least in C# and Pyphon.

## History
Prior to creating this test project we tried to integrate Monaco with Language Servers from the list in https://langserver.org.
Our expertise level in JavaScript was insufficient to achieve working integration. 
There are too many unknowns that may lead to incorrect solution.
After several attempts we decided to outsource the task, obtain a working "Client"+"Server", analyze our mistakes and make minor customizations instead of building from scratch.

## Requirements: 
The expected final results are:
1. Monaco Editor client in folder "Client". The page should contain two editors, one for Python, one for C#. Monaco shall be configured with syntax coloring and other configuration (bracket matching) for those two languages.
2. A web server implemented in TypeScript running as a node process, in folder "Server", it should serve the client code and allow for websocket connections supporting LSP. C# and python language server processes will be started and stopped for per websocket connection.
3. Dockerfile, that contains all the prerequisits, the language servers and node to easily run and try this project.

## Project Structure
Folder "Client" contains Monaco Editor with the simple launcher (Index.html)
Folder "Server" is empty and expects code and instructions to launch Server-side to support Client
