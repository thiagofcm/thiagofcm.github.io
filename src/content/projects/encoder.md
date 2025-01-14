---
title: "Optical Encoder"
summary: "The goal of this project is to design and implement the hardware and software components of an optical encoder."
image: "/eletronico.jpg"
category: "Robotics"
---

imagem: encoder-5,

**Knowledge applied:** _Robotics, Programming, Electronics, 3D design_

**Project Overview:** The goal of this project is to design and implement the hardware and software components of an optical encoder. This encoder detects the angular position of a rotating disk using infrared sensors and displays the position on a digital display. The system, built with and MCU for control and processing, also features a 3D-printed mechanical structure that houses the components and ensures precise alignment for accurate measurement and display of the disk's angular position.

## Methods

**1. Development of Arduino Software:** 
- Development of an Arduino program that interfaces with infrared sensors to analyze input data and determine the disk's angular position. The software also updates a display with the corresponding angle based on the sensor readings.

**2. Structure and Mechanical Design:**

-   Design and fabrication of a 3D-printed disk.
-   Design and fabrication of a 3D-printed structure to support all hardware components and ensure system functionality.

## How this system works?
-   **Sensor Reading:** The system reads the values from the infrared sensors.
 
-  **Angle Calculation:** Based on the sensor readings, the system determines the disk's angle. The possible angles are 0°, 45°, 90°, 135°, 180°, 225°, 270°, and 315°, which are determined by specific combinations of sensor readings.

-   **Display Output:** The display is set up to show the calculated angle value. It presents a message in the format: "Angle: [angle] degrees."

## Hardware 
The hardware of this system includes the following components:
-   IR TCRT5000 Infrared Sensor Module
-   5V 500RPM Motor with Gearbox
-   0.96 I2C White OLED Display
-   Arduino UNO

The schematic of this system is represented in the figure below:
   
## Mechanical Design
Disk: 
imagem: Estrutura-Circ
Display Structure:
imagem: Estrutura-Display
Encoder Structure:
imagem: Estrutura-Encoder

## System Images

imagem: encoder-1,encoder-5, encoder-6, encoder-7, 
