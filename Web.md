# Web

## Pàgina principal

Dins de la pàgina hi ha vàries seccions:

**Rànquings**: Mostra les puntuacions més altes dels jugadors per diferents personatges del joc.

**Descripció del joc**: Proporciona informació sobre el joc i les seves mecàniques.

**Inici de sessió**: Permet als usuaris iniciar sessió per veure les seves pròpies puntuacions.

**Tancament de sessió**: Permet als usuaris tancar sessió.

## Iniciar sessió

1. Dirigeix-te a la secció de "Inicio de Sesión".

2. Introdueix el teu nom d'usuari i contrasenya en els camps corresponents.

3. Fes click en el botó "Iniciar Sesión".

Si encara no tens un compte, pots registrar-te seguint les instruccions a la secció de registre (comentada al codi).

## Visualitzar Puntuacions

Després d'iniciar sessió, podràs veure les teves puntuacions guardades a la secció "Rankings". També podrà veure les teves puntuacios juntament amb el temps i el numeroo de mosques recol·lectades.

## Tancar Sessió

Quan hagis acabat de revisar les teves puntuacions, ves a la secció de "Cierre de Sesión".

Fes click en el botó "Cerrar Sesión" per sortir del teu compte.


## FrogRanking.js

### Inicialització de dades

Defineix les propietats de dades utilitzades en l'aplicació, com **'UserArray'** per emmagatzemar informació d'usuaris, **'Scores'** per emmagatzemar puntuacions, i altres propietats per gestionar l'autenticació i l'estat de l'usuari.

### Mètodes

**'logOut()'**: Tanca la sessió de l'usuari i restableix les credencials i l'estat d'inici de sessió.

**'Login()'**: Gestiona la lògica d'inici de sessió de l'usuari. Realitza una solicitud GET a un endpoint de la API per obtenir la llista d'usuaris i després verifica si les credencials proporcionades coincideixen amb algún usuari a la llista.

**'UserRanking(name)'**: Obté el rànquing d'un usuari específic i l'ordena per temps.

**'ChangeRanking(frogType)'**: Obté el rànquing de les puntuacions per un tipus específic de granota i l'ordena per temps.

### Comunicació amb la API

Utilitza la funció **'fetch'** per realitzar sol·licituds HTTP a una API que gestiona usuaris i puntuacions. Les sol·licituds GET s'utilitzen per obtenir dades d'usuaris i puntuacions.

## FrogWeb.html

