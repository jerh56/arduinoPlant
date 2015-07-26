# arduinoPlant
This is a App for android shows the humid value for arduino sensor.
http://orion.lab.fi-ware.org:1026/ngsi10/contextEntities/plant00001/attributes/temperature
Arduino Plant

El proyecto Arduino Plant surge de la necesidad que tienen los invernaderos, agricultores, amas de casa o cualquier entidad de proporcionar un nivel de humedad adecuado para cada tipo de planta.

Este proyecto sera el nacimiento de una empresa llamada GreenSolutions, que estara dedicada a ofrecer soluciones para empresas agricolas, cuyo principal nicho de mercado, seran la agricolas que tengan invernaderos, ya que mediante nuestro producto, podran tener un riego controlado.

La arquitectura es la siguiente

1.- Dispositivo IoT tipo Arduino UNO con un shield ethernet + SD, con un sensor que detecta niveles de humedad y temperatura.
Los sensores envian informacion al Context Brocker.

2.- Orion Context Brocker, en el cual se maneja
3.- Una aplicacion de Android para visualizar los valores de temperatura y humedad. Esta aplicacion consume informacion del Context Brocker, que es alimentada por los dispositivos IoT.


El dispositivo IoT envia cada 10 segundos, la informacion de temperatura y humedad al Context Brocker.

Mediante la aplicacion, se puede monitorear el estado de los dispositivos IoT.

Codigo fuente:
El codigo fuente de la Aplicacion para Android se puede descargar de https://github.com/jerh56/arduinoPlant.git

Ademas, el dispositivo IoT que es un arduino UNO tiene cargado codigo fuente para que el dispositivo pueda conectarse al Context Brocker y alimente los valores de los sensores, este codigo fuente se puede descargar de https://github.com/jerh56/arduinoPlantBoard.git

