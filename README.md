# Tyba-Prueba-Back-end
Tyba Prueba Back-end

# Registro:
![image](https://user-images.githubusercontent.com/42350689/166169568-4d989d3e-09c0-43bc-aa76-53fac885cbb0.png)

# Login:
![image](https://user-images.githubusercontent.com/42350689/166169583-0a1f62df-a661-4684-882c-e6729a75224a.png)
En el login se entrega un acces_token, el cual se usara para acceder a la funcionalidad de obtener los restaurantes cercanos a un punto

# Restaurantes:
![image](https://user-images.githubusercontent.com/42350689/166169624-c6713228-a598-41d4-8a57-5705186898bb.png)
Se debe añadir el token en la consulta que se hace para validar que el usuario este logueado. Este token tiene una validez de 5 minutos.

# Transacciones:
No logre obtener los restaurantes, asi que hice la funcionalidad de POST y GET de transacciones creadas por el usuario:
![image](https://user-images.githubusercontent.com/42350689/166169696-693c1c3d-47ca-432a-8818-9ceca1cbaf9c.png)
![image](https://user-images.githubusercontent.com/42350689/166169701-fcafa4ab-d6e1-48c6-b2fe-702a806fcba2.png)

# Docker-compose:
![image](https://user-images.githubusercontent.com/42350689/166169727-ba79b1e4-440f-45b7-a5ab-fcba7eb97f05.png)

Se uso NestJS para la solucion.

No olvidar de crear el archivo .env para que se puedan leer los variables de entorno necesarias para la aplicacion.

EJEMPLO:
DATABASE_NAME=my_db<br>
DATABASE_PORT=1000<br>
API_KEY='ZPAGOAL77'<br>
PORT=3000<br>
JWT_SECRET='asdfasdfdf8463'<br>
<br><br>
POSTGRES_DB=my_db<br>
POSTGRES_USER=root<br>
POSTGRES_PASSWORD=123456<br>
POSTGRES_PORT=5433<br>
POSTGRES_HOST=localhost<br>



