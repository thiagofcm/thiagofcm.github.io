---
title: "Mini Robotic Arm"
summary: "This project involves developing a mini robotic arm with three degrees of freedom."
image: "/Wisey/wisey-oblique.webp"
category: "Robotics"
---

video do robo funcionando

**Knowledge  applied:** Robotics, Programming, Electronics, Mechanical Design, 3D design

**Project Overview:** This project involves developing a mini robotic arm with three degrees of freedom. The mechanical structure was designed and 3D-printed, incorporating an Arduino Uno module and three servo motors.

## Methods

**1. Development of an Arduino Code to Control Robotic Arm DOFs:**
-   Arduino program responsible to translate analog signals from potentiometers into control signals for each degree of freedom (DOF) of the robotic arm.

**2. Development of a 3D Mechanical Structure:**
-   Designed with Fusion 360 and manufactured using 3D printing technology. The structure includes one rotating base and two rigid segments, all compatible with servo motors, forming a robotic arm with three degrees of freedom.

**3. Development of a PCB Hardware:**
- Designed with a perforated copper board, the hardware of this system was assembled to connect 3 potentiometers to the Arduino's I/O ports.

## How this robot works?

The analog signals received from the potentiometers are sent to the Arduino, where they are stored and scaled to a range of 0 to 1023. This value is then used to set a proportional duty cycle, with PWM signals sent to the servomotors corresponding to each degree of freedom. Thus, the value read from each potentiometer directly controls the position of the servomotor, adjusting the movement of each degree of freedom of the robotic arm.

## Hardware Design

Designed with a perforated copper board, the hardware of this system was meticulously assembled to ensure reliable and efficient operation. The board serves as the foundation for connecting three potentiometers to the Arduino’s I/O ports, facilitating analog input that allows for precise control and adjustment of various parameters within the system. Each potentiometer is securely soldered onto the board, with carefully routed connections to minimize interference and ensure consistent signal transmission. The schematic below shows the connections applied to each of the servos and the analog inputs of the Arduino.
imagem: knob-schema
Below, the hardware designed:
imagem: 9.png

## Software Design
The software provides a simple and effective way to control a robotic arm with three degrees of freedom. It reads input from three analog potentiometers, scales these values to servo angles, and sets the positions of the servos accordingly. .

## Mechanical Design

The structure consists of a rotating base and two rigid segments, all designed to be compatible with servo motors, forming a robotic arm with three degrees of freedom.

1.  **Rotating Base**: Provides stability and allows the entire arm to rotate around its central axis, enabling a wide range of motion.
    
2.  **Rigid Segments**: Extend from the base, connected with servo motors that control the pitch and yaw, ensuring accurate positioning and movement.
    
3.  **Servo Motors**: Integrated at key joints for precise control and smooth operation, enabling the arm to perform complex movements.
    
4.  **Degrees of Freedom**: The rotating base adds one degree of freedom, while the two segments provide additional axes of movement, allowing for versatile and dynamic operations.

images: 
For more information about the structure, refer to the section ..........
    

