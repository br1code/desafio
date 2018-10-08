# Desafío

> Este documento es utilizado para el desarrollo de este proyecto. Contiene notas y diagramas del desarrollador.

El juego está inspirado en Quiplash, pero la idea es combinar la temática del juego con lo educativo.

### El ciclo normal del juego es:

- Un jugador entra y crea una sesión de juego.
- Se genera un ID de juego con el cual los otros participantes pueden ingresar.
- Tiene que haber un mínimo de de jugadores, 3 o 4. Definir máximo tambien.
- Cada jugador tendrá un avatar aleatorio.
- Cada jugador puede escribir su nombre.
- Cuando los jugadores ya estan adentro, el creador puede iniciar el juego.
- El juego tendrá "preguntas" almacenadas previamente en una DB.
- El juego consiste de 3 etapas.
    - 1er etapa : puntos comunes - sin bonus - preguntas a cada player
    - 2da etapa : puntos dobles - con bonus - preguntas a cada player
    - 3er etapa : puntos triples - con bonus - todos una misma pregunta
- Cada etapa tiene preguntas. La cantidad será proporcional al nro de players. Lo ideal sería 2 preguntas.
- Al final de cada etapa, se muestran los resultados parciales.
- Al final de la última etapa, se muestran los resultados finales y el ganador.


## Preguntas

Las "preguntas" deben ser relacionadas a temas educativos. Como historia, literatura, matemática, etc. Tienen que tener un poco de humor.

Generalmente las "preguntas" son frases que debes llenar o preguntas indirectas.

Ejemplos : 
- Algo que te sorprendería que tu profesor de matemática haga
- Tu escuela debería llamarse _____
- Que tienen en común Cristobal Colón con tu compañero de al lado en el aula?
- Un billete con la cara de Bartolome Mitré valia menos que _____
- Si sabes resolver 10 x 2. Por qué sigues reprobando Matemáticas?
- Si el "Raton Perez" fuera real, cual de tus compañeros se pareceria más?
- Si algun día terminás la escuela. A quien le darías más las gracias?


Si hay 4 players. Cada uno recibirá 2 preguntas para responder. Al terminar el tiempo total, las preguntas con sus respuestas aparecerán en pantalla y los jugadores que no tuvieron esa pregunta, deberán votar por la mejor respuesta. Así hasta votar por todas las demás preguntas.


## Estados de juego

- Un player crea una sala
- Otros players ingresan en la sala
- Cuando todos están listos, el creador inicia el juego
- Se calculan la cantidad de preguntas/respuestas, contadores de tiempo y puntajes establecidos
- Comienza la *primera* etapa. Se informan las reglas de la primera etapa
- Se realizan las preguntas y comienzan los contadores de tiempo
- Los players escriben sus respuestas
- Al terminar el tiempo, se muestra cada pregunta con las respuestas ingresadas
- Cada player vota por la mejor respuesta (si le corresponde votar)
- Termina la *primera* etapa. Se muestran las estadisticas
- Comienza la *segunda* etapa. Se informan las reglas de la segunda etapa.
- Se realizan las preguntas y comienzan los contadores de tiempo
- Los players escriben sus respuestas
- Al terminar el tiempo, se muestra cada pregunta con las respuestas ingresadas
- Cada player vota por la mejor respuesta (si le corresponde votar)
- Termina la *segunda* etapa. Se muestran las estadisticas
- Comienza la *tercera* etapa. Se informan las reglas de la tercera etapa.
- Se realiza la pregunta unica y comienzan los contadores de tiempo
- Los players escriben sus respuestas
- Al terminar el tiempo, se muestra la pregunta con todas las respuestas
- Cada player vota por la mejor respuesta, tiene 3 votos para gastar
- Termina la *tercera* etapa. Se muestran las estadisticas y el ganador final
- Se muestra información de las preguntas realizadas, con el objetivo de enseñar. Se muestran las respuestas mas votadas
- Termina el juego, permite reiniciar el juego con los mismos participantes o iniciar uno nuevo.