---
title: "Gateway Modbus TCP/RTU"
summary: "This work aimed to develop a Modbus Gateway capable of serving as a low-cost alternative for integrating older equipment, which is already available in the industry, with modern equipment."
image: "/eletronico.jpg"
category: "Electronics"
---

**Knowledge applied:** Industrial Networks, Embedded Systems, Programming, Electronics

**Project Overview:** The constant search for process optimization has been one of the main incentives for technical-scientific advances. The industrial field is one of the sectors that is most nourished by these advances, becoming evident in the context of industrial networks, a fundamental piece today for the construction of modern industry. In this sense, the effervescent evolution of this sector means that the technologies developed quickly replace each other, making some obsolete or incommunicable when compared to the most modern equipment. Thus, this work aimed to develop a Modbus Gateway capable of serving as a low-cost alternative for integrating older equipment, which is already available in the industry, with modern equipment, in order to extend the useful life of these devices and give the possibility to expand the limits and connections of a conventional industrial network. As a result, the device developed in this work was successfully tested and applied in communication with industrial equipment.

queria um quadrinho aqui escrito isso: Research awarded with an incentive grant from the Institutional Scientific Initiation Scholarship Program (PIBIC) and the Foundation for Research Support of the State of Minas Gerais (FAPEMIG)

## Methods
The Modbus TCP/RTU Gateway was developed using the BeagleBone Black (BBB) with an ARM A8 processor (Sitara AM3358). The choice of BBB was due to its capability to run a Linux operating system, allowing for complex, multitasking applications, and its built-in Ethernet port simplifying hardware setup. The firmware development involved several stages:

- **Development of Modbus TCP Slave Firmware**: A firmware was created using the FreeModbus open-source library to handle requests from a TCP Master. Functionality was tested with the ModScan software.
    
- **Development of Gateway as Modbus TCP Slave and Modbus RTU Master**: The firmware was extended to make requests to Modbus RTU slaves and receive commands from a Modbus TCP Master, effectively creating the Modbus TCP/RTU Gateway. Testing involved the ModSim and ModScan simulators, as well as industrial PLCs.

## How this system works?

imagem: SCHEMATIC

This system creates a gateway that translates Modbus TCP requests into Modbus RTU commands and vice versa. It listens for TCP connections, handles incoming requests, communicates with Modbus RTU devices over a serial connection, and responds with appropriate Modbus TCP responses.
-   **Modbus TCP to RTU Conversion**: The gateway converts Modbus TCP requests into Modbus RTU format, enabling communication with devices that use RTU protocol over serial connections. It appends CRC16 checksums to ensure data integrity.
-   **Error Handling**: If an error is detected in the RTU response, the gateway sends an appropriate error response back to the TCP client.
-   **Logging**: Detailed logging of both TCP requests and RTU communications helps in monitoring the system’s behavior and diagnosing issues.
-   **Serial Communication**: The script manages serial communication settings and ensures robust interaction with Modbus RTU devices, including handling the specifics of RS485 communication. 

To illustrate the performance of the Gateway, a supervisory system was created using the ProcessView software from Smar, which shows, through curves, the variation in the values of each parameter read.

## Hardware 

For this application we used the hardware's below:
PLC LC700:
imagem; CLP L700, PANEL WORK,
PLC DF63:
imagem: CLP DF63 TCP CONNECTION
Beagle Bone Black:
imagem: BeagleBone-Black-Rev.C_02		
  
## System Images
imagem: WORKSTATION
Imagem: debug-firmware-gatewaymodbus
Imagem: SUPERVISORY SYSTEM

At the end of this project, the gateway developed was used as a methodological tool for educational purposes for the subject of Industrial Networks, given by Professor Renato Ferreira Fernandes.

-------------------------------------------------------------------------------------------------------------


