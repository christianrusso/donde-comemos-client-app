# Donde Comemos? [FE] (Ionic)

## Instalación

```
npm install

ionic serve
```

#### [Known Issues]

##### En Deepin (Debian Linux)

Si no te funciona por algo de node-sass 4.5.3

![](https://i.imgur.com/C0vOvgD.png)

***Primero probá cambiando la version de node a 8.x, recomendado:***

```
nvm install 8.*
```

*Si eso no hace la magia fijate probando esto:*

```
npm install node-sass --save-dev

npm rebuild node-sass

npm update node-sass
```

##### En Windows (Bog diciendo 'no..' o 'ay!')

Te puede decir que no esta instalado python, para esto tendrias que bajar e instalar python 2.6 si mal no recuerdo.

Siguiente a esto, puede tirarte errores porque no puede encontrar el interprete de C++...

En ese caso basta con instalar globalmente el interprete con npm:

```
npm install -g windows-build-tools
```

