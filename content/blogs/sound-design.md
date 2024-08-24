---
title: "Sound Design for the Simulated Project"
date: November 22, 2023
description: "Hey all, I'm Starlotte! I've been on the Simulated team for around a year and a half now. If you're active in our Discord, you might recognize me from running our community build events, but my main contribution to the mod has been through sound design..."
---

# Sound Design for the Simulated Project

## Written by Starlotte (and Ryan)

Hey all, I'm Starlotte! I've been on the Simulated team for around a year and a half now. If you're
active in our Discord, you might recognize me from running our community build events, but my main
contribution to the mod has been through sound design. In most of our larger progress logs so far, we've
had the game muted with music playing instead, so most of the work I've done hasn't had the chance to be
properly shown off (which, having edited most of those logs, is kind of my own fault…). While I won't be
showing off everything, I'd like to take the opportunity to go over some of the work I've done for the
project, as well as the thought process that went into my decisions.

# How Create Handles Sound Design
## (Or how I interpret it, at least)

One of my main goals in making sounds for both Sim and Aero was ensuring they didn't feel out of place
with Create. Though Create has a large number of custom sounds, they have far fewer unique audio files,
instead choosing to mostly mix and match Vanilla's existing sounds in new contexts with custom subtitles
(accessibility is important!). These are used extensively to provide audible feedback to just about
everything they're able to, usually correlating to some form of motion - idle rotation for rumbling cogs
and steam engines, feedback for player interaction like being pushed by an encased fan, unique sounds
for mechanical processing components, the list goes on. 

Although the vast majority of Simulated sounds are based closely around this, there are a few notable
exceptions I made. While I used several of the game's existing sounds as a bank to work off of, I mixed
the majority of the sounds externally, giving me far more control over how the individual samples should
sound as well as allowing me to add in my own without any issue. Additionally, while Create almost
exclusively uses existing sounds for block placement/breaking, I made custom sounds for a handful of
Simulated blocks.

One of my favorite examples of these (and one of my favorite sounds I've made for the project in general)
is the Levitite block sounds. I'd initially interpreted Levitite as a crystalline alloy, but I wanted to
take care to avoid it sounding too similar to amethyst, eventually settling on using a slightly modified
version of the sound ender eyes play when they shatter for the base of the sound. 

<center>
<img class="sshot2" src="/assets/soundblog/wow_woah_levitite_flp.png">
</center>

To further emphasize this, I'd also originally planned to layer in glass shattering sounds for the
breaking sounds, but it ended up being a bit too much.

<center>
<video width="320" height="240" controls>
<source src="/assets/soundblog/lev_1.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
</center>


We ultimately settled on the sounds below, instead layering the amethyst shimmer sound when breaking.


<center>
<video width="320" height="240" controls>
<source src="/assets/soundblog/lev_2.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
</center>


Another one of the earlier sounds I made for Simulated was the Stirling Engine. This was before 0.5 had released with Steam Engines, so I had very little reference to go off of for how to properly handle an idly running sound without it becoming annoying. Due to real world stirlings operating directly from heat, they tend to be on the quieter side of things, which I felt wasn't appropriate for what I had in mind.


<center>
<img class="sshot2" src="/assets/soundblog/totally_not_an_arg_lmao.png">
</center>


Although a steam hiss wasn't accurate to how a real world stirling sounds, I felt using a steam train sample as a base was the best fitting option I had. After some heavy modification, primarily to isolate the kinetic sounds to the best of my ability, I added in a recording of paper sliding across my desk to help emulate the sound of the pistons' movement. This, as well as a slightly modified version of the Blast Furnace's idle sound, help the Stirling Engine's rotation feel substantial without being too annoying to have running constantly.


<center>
<video width="320" height="240" controls>
<source src="/assets/soundblog/stirling.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
</center>

# Propellers


Since I first joined as sound designer, one of the most frequent ideas the team recommended was for propellers to have dynamic sounds. We went through a number of iterations, originally going as far as to calculate the player's distance from the closest sail and modify the sounds based on the estimated propeller shape, but we ultimately settled on having two dynamic loops to accommodate both smaller and larger propellers. Most of what's supposed to play when is handled dynamically via the code, though, so I'll hand it over to Ryan to talk a bit more about how it was implemented.


**Propeller Sound Mixing (Ryan)**


In order to make propeller sounds dynamic to the speed/size of propellers, radius, RPM, and the distance to the player from the propeller are taken into account. Two different looping audios are used: one for smaller propellers, and one for larger propellers, and they are dynamically faded between based on the radius of the propeller as the code determines. Pitch, and therefore speed, are dynamically affected by the RPM of the propeller at all sizes. After that, it's up to the visual effects propellers have, along with the other sound effects to sell immersion even more!



<center>
<video width="320" height="240" controls>
<source src="/assets/soundblog/prop_1.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
</center>

# Collisions
## (hi it's star again)


Everything we've talked about so far has been in regards to Simulated and Aeronautics, but something else that caught my interest was the potential for collision sounds and visual effects to help emphasize impacts without undesired effects such as block damage. Like with propellers, we ultimately settled on having a handful of sounds which could then be switched out dynamically to account for different ship sizes, materials, speeds, etc.. Collision sounds were by far the most complicated sounds to do for the project, and still may need some tweaking to get right, but I'm relatively happy with the results:


<center>
<video width="320" height="240" controls>
<source src="/assets/soundblog/collision_1.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<video width="320" height="240" controls>
<source src="/assets/soundblog/collision_2.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<video width="320" height="240" controls>
<source src="/assets/soundblog/collision_3.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
<video width="320" height="240" controls>
<source src="/assets/soundblog/collision_4.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
</center>

I'll pass it on to Ryan again to talk a bit more about how they were implemented.

**Collision Sound Mixing (Ryan)**

Collisions internally are broken up into a few separate groups, those being:

<ol>
<li>Block-block collisions</li>
<li>Small & hard collisions</li>
<li>Large & hard collisions</li>
<li>Large & soft collisions</li>
</ol>

Along with three different splash noises to be blended for splashes.

Block-block collisions use a combination of the step, place, and hit sounds of both blocks involved in a collision, while the other 3 main categories of collisions have their own velocity, frequency, and mass requirements to play. We really wanted these to feel immersive, no matter the size and speed of contraptions at play, so we tried our best!

# The Doppler Effect
## (ryan section real)


When implementing moving sounds on worldshells a few months ago, I couldn't help but notice the fact that we had dynamic control over distortion, pitch, and volume changes. This naturally made me think: what if we implemented the doppler effect? An hour later, I had a basic prototype of the effect hardcoded, applying pitch changes to sounds based on their movement relative to the player. Ocelot stepped in later on with me, and we wrote a version of the effect more integrated with Open Audio Library to increase the quality. Have a fun clip:


<center>
<video width="320" height="240" controls>
<source src="/assets/soundblog/doppler.mp4" type="video/mp4">
Your browser does not support the video tag.
</video>
</center> 

# Music for Simulated?
## (it's star again 2 the squeakquel)

While I've had a couple of years working in sound design, I've been both playing and writing music for far longer. As such, it was inevitable that making new songs for Aeronautics would at the very least be discussed. **It's important to mention this isn't guaranteed to end up in the mod**, but I had too many ideas to not at least make a demo inspired by the earlier Minecraft albums by C418. At the moment it's still up in the air (ha) whether or not we'll be including this or any other new songs in Aeronautics, but if there's enough interest I'd be more than happy to do so. Hope you all enjoy!


<center>
<iframe width="560" height="315" src="https://www.youtube.com/embed/k5LWAo4ba1M?si=Qa9ordwUmOWpqQAw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</center>

# Conclusion

Thanks! I hope you enjoyed, and be sure to let us know what you think about potentially having custom music for Aeronautics. I'll see y'all around!