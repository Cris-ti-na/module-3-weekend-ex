This project was bootstrapped with [Create React App]

# Modulo 3 Ejercicio Series fin de semana

### Objetivos del ejercicio:

1. Pintado de series: Al inicio la app se conectará a http://api.tvmaze.com/search/shows?q=girls. Tendrá como mínimo dos componentes **ShowList** y **Show** (contendrá .Foto .Título .Puntuación y .Estado)
2. Filtros:
    -Incluir un input text (mejor si es un componente) que se encargará de mostrar sólo las series que coincidan con los caracteres incluidos en la búsqueda. Este input se controlará a través del estado. Enviará su valor a nuestro filter (si la propiedad de mi objeto en el filter includes el valor de value -> pintará la serie).
    -Crear un checkbox, que al activar muestre sólo las series que en la actualidad tienen estado running.