---
layout: post
title: 'Robotics:AI Techniques'
---

I learnt about search and localization techniques in the course projects and assignments for this <a href="https://www.omscs.gatech.edu/cs-7638-artificial-intelligence-robotics" target="_blank"> class</a>.

**Localization** :I implemented Kalman and Particle filters to localize and then navigate simulated vehicles.

{% include image_plain.html image="projects/proj-4/mars.gif" %}

**Figure 1**:The simulated glider in red is first localized by randomly simulating gliders shown in back using Particle Filter algorithm.Once the actual glider position is determined,the glider is steered towards the goal.

**Search**: I applied A* search algorithm to find a path for a pick up and delivery robot in a simulated warehouse.
{% include image_plain.html image="projects/proj-4/warehouse.gif" %}


 **Figure 2**:The simulated robot picking up a box and navigating back to drop location.


 **SLAM**:We used online version of Graph SLAM(Simultaneous Localization and Mapping) to localize and then navigate a simulated rover on Antarctica.


**Tools used** :Python ,NumPy

