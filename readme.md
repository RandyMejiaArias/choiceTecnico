# Api Choice Técnico Toolbox OTT

Esta api contiene los métodos desarrollados para el Test Técnico para el puesto de FULL STACK DEVELOPER (NODE / REACT)

# Instalación

1. Clonar el repositorio de Git
2. En una terminal dentro de la raíz del proyecto ejecutar el comando _`npm install`_ para instalar las dependencias necesarias.
3. Para correr las prueba del API usar el comando _`npm test`_.
4. Para ejecutar el API usar el comando _`npm start`_.

El servidor se levantará automaticamente en el puerto '4002'.

# Rutas 
En este caso no se ha establecido un dominio por lo que accederemos directamente con la IP del servidor.

Ruta General:
> https://localhost:4002/api

## Archivos
### **_Obtener todos los archivos:_**
#### Método:
    GET
#### Ruta: 
> /files/data
#### Respuesta
##### Exitoso - 200:
    [
      {
        "file": "test2.csv",
        "lines": [
            {
                "text": "xeJWut",
                "number": "8",
                "hex": "eff137b7aff814aefbc9b389b6be8fde"
            }
        ]
      }, 
      { ... }
    ]
##### Errores
    - 500 : Error interno del servidor.
---