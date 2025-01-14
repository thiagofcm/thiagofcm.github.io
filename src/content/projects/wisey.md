---
title: "Wisey I: Personal Assistant Robot"
summary: "This paper presents a novel framework for learning robust bipedal walking by combining a data-driven state representation with a Reinforcement Learning (RL) based locomotion policy."
image: "/Wisey/wisey-oblique.jpg"
category: "Robotics"
---

**Knowledge applied:** _Robotics, Computer Vision, Machine Learning, Control, Mechanical Design, 3D design, Electronics, Embedded Systems, Human-Robot-interaction_

**Project Overview:** The global phenomenon of population aging, responsible for the significant increase in the elderly population in Brazil, demands the search for ways to address the challenges affecting the quality of life of the elderly. Among the characteristics of this population segment, the incidence of motor disabilities and lack of companionship stand out. In the face of this reality, solutions that utilize assistive robotics (AR), a research area exploring the use of robots to support human users in elderly care, become increasingly relevant. In this context, this work proposes the development of a personal assistant robot aimed at providing support for the care of this population segment within the home environment. The robot is designed to perform specific tasks such as following a user, fetching objects, and answering questions through voice commands, offering interactive companionship, as well as alleviating physical strain and preventing potential falls or motor injuries. To achieve this, the robot features not only electromechanical resources but also applications of artificial intelligence, machine learning, and computer vision. The obtained results demonstrated a satisfactory interaction between the robot and the environment, highlighting the system’s ability to track users, detect objects, and provide coherent responses to voice commands. Despite physical and structural challenges, the collected results still suggest that the developed robot could offer a supportive alternative to the challenges faced by this population segment in the home environment.

miniatura do video no yt

## Hardware Design

Aiming for a robust and cost-effective system, the hardware of the proposed system utilizes three distinct controllers at the processing level: the Raspberry Pi 3 board, the Maixduino MCU, and the STM32F411CCEU6 MCU based on the ARM Cortex-M4 core.

The Raspberry Pi board was chosen for its processing power, storage capabilities, and suitable hardware interfaces. The Maixduino was selected for its efficiency in running embedded AI models and its cost-effectiveness compared to other similar devices on the market, in addition to integrating a camera and display. The STM32 was used due to its low power consumption, appropriate I/O resources, and adequate processing capabilities for the functions performed in this system. The MCUs, modules, and sensors were integrated into a PCB designed using KiCad software, as illustrated in the figure below.

![PCB](/Wisey/pcb.jpg)

Among the modules used and integrated into the PCB are three dual-channel TB6612FNG Motor Drivers, employed to control three 9V DC motors: two responsible for moving the tracks and one for controlling the claw's gear system. Three MP1584 DC voltage converter modules were also used to reduce the 12V input voltage supplied by the Lipo batteries to 3.3V, 5V, and 9V. An HC-SR04 ultrasonic sensor module and a buzzer were used to detect and signal obstacles at a distance of 20 cm from the robot, respectively.

## Software Design

The implemented software can be divided into three individual firmwares embedded in the MCUs.

- **Raspberry Pi 3 Embedded Firmware:** Plays the central role of interfacing between the user and the system. It distinguishes, signals, and controls the robot's different operating modes, activating and deactivating them based on voice commands issued by the user and sending messages via UART to the other microcontrollers in the system. To achieve this, the program integrates libraries for voice synthesizers, audio processing, and artificial intelligence and speech recognition APIs.

- **Maixduino MCU Embedded Firmware**: Executes AI models based on UART commands received from the Raspberry Pi. Subsequently, the software detects objects and faces using models based on the YOLO 2 (You Only Look Once 2) detection system, a widely known and used Convolutional Neural Network (CNN) architecture for real-time object detection. Using the movement of the identified objects and faces as a reference, the program also controls a servo motor that positions the camera lens on the Y-axis according to the target's relative position. In this way, the system tracks its objectives and finally sends coordinates to the STM MCU, which in turn controls the motors' rotation and the robot's movement.

- **STM32 (ARM M4) MCU Embedded Firmware:** Through timers, the STM board controls the activation of motors and sensors. Motor control is carried out using coordinated PWM signals applied to the motors based on the target location data received from the Maixduino via UART.

The diagram below illustrates the operation and interaction between the firmwares and the peripherals surrounding each of the controllers.
imagem: Firmwares-Transp-just-diagram

## Mechanical Design

The mechanical and structural design of the robot primarily aimed for compatibility between the system's functionalities and the physical aspects of the chassis. Weighing approximately 1kg, the SN2500 chassis, illustrated in Figure below, features two plastic tracks, each coupled to a motor. Additionally, the chassis includes mounting points that allowed for its integration with the main structure.

![](/Wisey/tanque-estrutura.png)

All other parts located above the chassis were manufactured using 3D printing and designed using the Fusion 360 modeling software.

imagem: oblique-v2
For more information about the structure, refer to the section ..........

## How this robot works?

The system's operation is divided into three distinct modes: Follow Mode, Finder Mode, and Conversation Mode. Each of these modes requires specific voice commands for activation and deactivation. Before any command is issued, the system must detect the wake-word, which is the word defined by the developer as the key to activate voice command recognition. In this project, the wake-word **"robot"** was used to signal the beginning of any request made to the robot. Table below illustrates a table of all the words defined as keys for the system's decision-making process.

imagem: keywords-english

- **Follow Mode**

  In Follow Mode, the robot searches for a face to follow. The trigger for activating Follow Mode is the presence of the expression "follow me" in the command issued by the user after the wake-word is detected. When the trigger is identified, the Raspberry Pi sends the message "follow" to the Maixduino via UART. As soon as the command is received by the Sipeed MCU, the facial recognition model is executed, and the image captured by the camera is displayed on the LCD screen.

  As shown in Figure below, in the case where more than one face is detected, the algorithm is designed to follow the face with the largest bounding box, usually the one closest to the robot. Similarly to the Finder Mode operation, after detecting the desired target, the algorithm calculates the area and the coordinates of the center point of the marked rectangle, highlighting it with a red dot, which is used as a reference for the servo motor and track motor movements.

  ![](/Wisey/face-target.jpg)

  The robot follows the target face until the bounding box reaches a pre-established area value. This area value indicates that the robot is at its proximity limit, and the motors stop rotating. Depending on the user's movements, the robot adjusts its position to remain within this distance limit. Figure below illustrates the operation mode in action.

  imagem: follow mode

- **Finder Mode**

  Finder Mode is the robot's operational mode in which it searches its surroundings for objects requested by the user. Upon finding a specific object, it moves toward it until sensors indicate that the gripping distance has been reached. At this point, the robot stops its trajectory and activates its claws to capture the object. Once the object is captured, it searches for a face to whom it will deliver the object.

  The trigger for activating Finder Mode is the presence of the word "bring" in the voice command issued by the user after the wake-word is detected. Specifically, in this mode, a second keyword is required for the system to understand which object the user desires. The adopted strategy involves not only checking for the word "bring" but also analyzing the presence of the names of objects that the AI model embedded in the Maixduino has been trained to identify. The list of identifiable objects includes items such as airplane, bicycle, bird, boat, bottle, bus, car, cat, chair, cow, dining table, dog, horse, motorcycle, person, potted plant, sheep, sofa, train, and TV monitor. If the name of the desired object spoken by the user is among the objects identifiable by the model, the Raspberry Pi sends the message "bring-" followed by the requested object via UART to the Maixduino. If the desired object is not among the objects identifiable by the model, the robot responds with the message: "Sorry, I am not capable of recognizing this object." Figure below illustrates the operation mode in action as it approaches the requested object: car.

  imagem: finder-mode-right

  As soon as the command is received by the Sipeed microcontroller, the object detection model is activated, and the LCD screen displays the image captured by the camera. Using the Maixduino kit's features, the system can identify objects and draw rectangles around them. A green rectangle is applied around the desired object, and as shown in the Figure below. If other objects are present besides the requested one, the microcontroller draws a red rectangular outline around them.
  imagem: car-and-bottle-target

  Additionally, the algorithm calculates the area and the coordinates of the center point of the marked green rectangle, marking its center with a red dot. In this way, the robot follows the central point until the sensor detects an object at a distance of 20 cm, which is established as the limit. At this point, the buzzer is activated, and the motors stop rotating. Depending on the object detected in front, the robot makes different decisions, such as activating the claw motor if it is the desired object or remaining stationary if it is an unknown object until the obstacle is removed from its path. Once the object is captured, it begins functioning similarly to Follow Mode.

- **Conversation Mode**

  Conversation Mode is the mode in which the robot responds to questions and engages in dialogue with the user, demonstrating the ability to formulate coherent responses and understand contexts. When a question or phrase does not have the necessary structure or keywords to be identified as triggers for Finder Mode or Follow Mode, it is interpreted as a request for Conversation Mode. In these cases, the OpenAI API is activated, and the converted text message is sent directly to the ChatGPT. ChatGPT then responds based on its database of the subject in question, and this response is reproduced through voice synthesizers. Examples of dialogues:

  imagem- dialogos2_ingles

## Robot Images

imagens: wisey-front (2), wisey-oblique, wisey-topv2, inside1, up-pcb-and-robot, wise-button, wise-hook, hook-and-robot-back, wisey-profilecvgn
