#Farmasun RESTFul.

This is a CRUD application (MongoDB).
  
# Install & Run
## Install
```bash
$ npm install
```

## Run
```bash
$ node bin/www
```

For production enviroment please use forever or similar.

## Debug mode.
This app use "debug" lib. You can run usgin namespace farmasun*

```bash
$ DEBUG=farmasun* node bin/www
```

# Importers

Inside "tools" folder we can find all importers. 
For work, you need stay on main folder proyect.



## CSV
### importer entitis
```bash
node tools/ --csv entities
```

### importer entitiescompanies
```bash
node tools/ --csv entitiesclientes
```

### importer items
```bash
node tools/ --csv items
```

### importer itemsstock
```bash
node tools/ --csv itemstock
```

### importer preciolistadetalle 
```bash
node tools/ --csv csvpreciolistadetalle
```

### Users (from file disk)
Lookup file: ./dump/users-201609.csv

```bash 
$ node tools/ -i users
```
