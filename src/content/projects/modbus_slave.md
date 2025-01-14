---
title: "Modbus Slave in a Multriprotocol Network"
summary: "This project was the final assignment for the Industrial Networks II course in the Control and Automation Engineering program. It involves applying industrial network protocols in a simulated industrial control system responsible for the pasteurization of beverages."
image: "/eletronico.jpg"
category: "Electronics"
---

**Knowledge applied:** _Industrial Networks, Embedded Systems, Programming, Electronics, 3D design_

**Project Overview:** This project was the final assignment for the Industrial Networks II course in the Control and Automation Engineering program. It involves applying industrial network protocols in a simulated industrial control system responsible for the pasteurization of beverages. Using a Raspberry Pi 3 board and a temperature sensor, we simulated a temperature transmitter and a slave level sensor, and set up a multiprotocol integration network with Profinet and Modbus TCP. This network includes actuators, frequency inverters, PLCs, and HMIs, which simulate an industrial pasteurization environment. The data received from the temperature sensor triggers the activation of a heat exchanger, which heats the liquid in a boiler and signals alarms on an HMI for the operator.

## Methods

**1. Development of Raspberry Pi Firmware:**

Development of firmware for the Raspberry Pi 3 capable of reading input values from the ADS1115 4-channel analog-to-digital converter to measure temperature from the LM35 sensor. The sensor readings are sent via Modbus TCP protocol, and based on commands from the Modbus master, the firmware controls the activation and deactivation of indicator LEDs, making the device a Modbus TCP slave.

**2. Development of Ladder Logic on PLC:**

Creation of a ladder logic algorithm using Siemens TIA Portal software to request temperature values through Modbus TCP. Based on these values, the algorithm controls a frequency inverter via Profinet, which regulates the motor of a heat exchanger pump. In this setup, the PLC functions as both a Modbus TCP master and a Profinet master.

**3. Development of HMI Application:**

Development of a graphical interface application that receives temperature values from the sensor, plots graphs, triggers alarms, and controls the pump motor's speed.

## How this system works?
The system proposed in this work is an industrial network composed of two protocols: Modbus TCP and Profinet. This network integrates a temperature transmitter, a level sensor, a motor control with a frequency inverter, and an HMI (Human-Machine Interface), working together to monitor and control a beverage pasteurization process. Below are the details of each component's functions and descriptions:

**Temperature Transmitter and Level Sensor:**

The temperature transmitter and level sensor are simulated components, represented in this application by a Raspberry Pi with embedded firmware operating as a slave device in a Modbus TCP industrial network. The embedded program includes connections for three input and three output I/Os. The input I/Os are:

-   **Power Button**: Initializes the system.
-   **Temperature Sensor**: Measures the ambient temperature.
-   **Retentive Level Sensor Button**: Simulates a level sensor. When pressed, it indicates that the boiler has sufficient liquid for evacuation; when released, it indicates that the boiler can still accept more liquid.

The output I/Os are:

-   **Red LED**: Indicates that a high and inappropriate temperature has been reached.
-   **Yellow LED**: Signals that the boiler's content is properly pasteurized (between 30 and 40 degrees) and that the liquid level is adequate for evacuation and continuation of the process.
-   **Green LED**: Indicates that the system is powered on.

The values read by the sensors are sent to the master PLC via Modbus TCP. The logic applied in the S7-1200 PLC allows the master to change the state of the output I/Os according to the input I/O values.

**S7-1200 Siemens PLC:**

A logic control is applied in the PLC that, based on the received temperature data, uses Profinet to send commands to a frequency inverter. This inverter controls the rotation of a three-phase motor, which simulates a heat exchanger pump. The transmitter values sent to the frequency inverter are also transmitted via Profinet to the HMI, which monitors the sensor temperature, level sensor status, motor action/rotation, and LED status.

**HMI (Human-Machine Interface):**

The HMI provides a graphical interface to display the values read and applied in the control system, as well as to create alarms signaling important events, such as cable disconnections, delays in data reception, and operational notifications (e.g., confirmation that the liquid is properly pasteurized). Screen 1 (Figure X) shows general information about the project.
imagem: redes-tela1

Screen 2 (Figure X) monitors digital variables from the transmitter. 
imagem: redes-tela2

Screen 3 displays temperature values, motor speed, and boiler flow rate.
imagem: redes-tela3
Screen 4 shows the alarms programmed by the system. 
imagem: redes-tela5
When the pasteurization process is complete, in addition to the yellow LED lighting up (both on the HMI and physically on the transmitter), the operator can record the boiler flow rate as a percentage on the HMI. Since this is a simulated environment, the retentive level sensor button must be released to represent that the boiler is empty, marking the end of a pasteurization cycle and allowing the start of a new cycle. A schematic of the system is shown in figure below.

imagem: modbus-schematic

## Hardware 

A PCB was made using perforated copper board to connect the I/Os of the Raspberry Pi with the temperature sensor and the LEDs. The Modbus TCP connection was established through the Ethernet port present on the Raspberry Pi hardware and the Siemens S7-1200 PLC. Other Profinet connections are also made through the Ethernet physical layer protocol.

images: pcb, pcb+rasp
   
## Mechanical Design

A structure was designed to accommodate the Modbus simulation slave. The structure includes space for the sensor, activation buttons, and LEDs.

imagem: case-support-and-button, case-top

## System Images

imagens: view1, view2, top
