---
layout: post
title: 'Computer Vision'
---

Aug – December 2019

- I learnt about the concepts and applications of computer vision in the problem sets for this <a href="https://www.omscs.gatech.edu/cs-6476-computer-vision" target="_blank"> class</a>.

- Specifically, I learnt about:
    <ul>
    <li>application of hough transforms for traffic sign detection,</li>
    <li>optic <a href="https://drive.google.com/open?id=1Y9CLjqKRwD-GieJSB_eNJkNGmwVK9VoP " target="_blank"> flow</a> for small motion using Hierarchial Lucas Kanade algorithm.</li>
    <li>image transformation and homography for marker <a href="https://drive.google.com/file/d/1-HgpJFW9h2S8Q0tjpfNzvMmLZkHLf4sc/view" target="_blank"> tracking</a>,</li>
    <li>pedestrian detection and tracking using Kalman and Particle Filter and,</li>
    <li>face detection using Viola Jones classifier.</li>
    </ul>

**Final Project**
 -  VGG16 was used to detect street numbers.Test accuracy of 96% was obtained training on Street View House Numbers <a href= "http://ufldl.stanford.edu/housenumbers" target="_blank"> dataset</a>.
-  The <a href="/documents/cv/report.pdf" target="_blank"> report</a> includes the output images and link to video running the classifier on unseen images
- The presentation <a href= "https://drive.google.com/open?id=19tfkQmbPsQkMztQmvv0NcLGrAdrx3I_S " target="_blank"> video</a> describes the workflow on how this project was completed.


**Tools used**: Python, OpenCV, Tensorflow, Keras, NumPy

{% include image_plain.html image="projects/proj-4/signs.png" %}

**Figure 1**:Traffic Sign detection using Hough Transform from OpenCV.Parameter tuning was essential to be able to detect the traffic sign shapes correctly.

{% include image_plain.html image="projects/proj-4/ped.png" %}

**Figure 2**:Particle Filter implemented from scratch in Python was tuned to track a student walking on the TUD university campus.