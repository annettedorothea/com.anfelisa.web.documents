# com.anfelisa.client

This is the client for the anfelisa vocabulary trainer.

See [Anfelisa](https://anfelisa.de/#).

It is written with ES6 and React and 
is based on the [de.acegen](https://github.com/annettedorothea/de.acegen) 
DSL and code generator.

See [com.anfelisa.server](https://github.com/annettedorothea/com.anfelisa.server) for the server project.

## Installation

- Install npm on your system.
- Create a settings.json file in the root directory of the project:
```
{
  "aceScenariosApiKey": "2202ddf3-0f76-4e1a-9766-acea7edb17ab",
  "aceScenariosBaseUrl": "https://acegen.de/",
  "clientVersion": "<version>",
  "development": true | false,
  "rootPath": "<root path as configured in your dropwizard yml file of the server, e.g. api>",
  "replayRootPath": "<root path as configured in your dropwizard yml file of the server, e.g. replay>",
  "timelineSize": <timeline size, e.g. 32>
}
```
- Run ```npm install```. 
- Start the server with ```npm start```.

If you want to use the [de.acegen](https://github.com/annettedorothea/de.acegen) 
Eclpise plugin, see [de.anfelisa.server](https://github.com/annettedorothea/com.anfelisa.server)
for instructions.

## License
[ISC](License.txt)
