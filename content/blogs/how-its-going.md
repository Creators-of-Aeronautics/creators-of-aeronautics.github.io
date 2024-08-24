---
title: "Create Simulated: How It's Going"
date: October 23, 2023
description: "Hey all! Normally when we write an announcement for our community it's about showcasing a cool new feature, pulling back the curtain for a bit to show new technology we've built, or to showcase a fun multiplayer game the team has put together using the mods..."
---

# Create Simulated: How It's Going

Hey all! Normally when we write an announcement for our community it's about showcasing a cool new feature, pulling back the curtain for a bit to show new technology we've built, or to showcase a fun multiplayer game the team has put together using the mods. This time we're pulling back the curtain of secrecy for something else though, talking about the status of the project, the state of development, and how everything has been going.

There's a good likelihood that if you're reading this, you've also seen our content created to showcase the mod, or interacted in our discord servers or community, in which you would've been informed of the 2023 planned release of the projects. **We'll rip the bandaid off fast- 2023 is no longer the guaranteed release period for the project.** At the end of 2022, when the team was working on the Landlord showcase trailer, we made the estimation because in no world did we see the mod taking longer than another year to complete. In hindsight, this decision was a bad one- it ended up pressuring us, leading to stress, and ultimately this moment, but at the time we thought it would be just fine.

**With the end of the year approaching, it became increasingly clear an ETA, even if clearly stated as a goal and not a promise, will be taken as a release deadline which is the explicit thing we're avoiding. Some promises were made by us. We did push the 2023 release period on ourselves and our community- and ultimately, we are letting a lot of you all down with this announcement. We hope that you understand why we made this promise to our community, why it is hurting us, and why we are moving forward the way we are.**

From this moment forward, we have no current plans to announce a further release period or date until the projects are in a stable and complete enough state we see fit to release. Our philosophy since the start of the projects in late 2021 has always been that they'll be ready when they're ready. We had the choice to rush the mod and try to maintain the public view of a 2023 release until we had to release at the last moment, but that would be to the detriment of the mods' quality and our own mental health. We want to release the mods in a good state where we're happy with them, the community is happy with them, and everyone who wants to play with them can do so in the way they want to. This isn't us adding new features or details to try and make the mod perfect and delaying it - the intended scope of the mod has been settled for close to a year now - this is us realizing that the mod isn't yet done and polished in time for the initial estimate we optimistically set.

With that out of the way, we'd like to let some of the developers of the different Create Simulated
projects take the pen and show you all some of the stuff they've been working on across the past year:

# The Create Aeronautics Team

Written by Ryan, Starlotte, Eriksonn, Amo

**Create Aeronautics**, one of the Simulated addons, is by far the most well known mod in the Simulated Project (in part due to it being the mod that started the project as a whole). However, there's been a lot of confusion about what's a part of Create Aeronautics, what's a part of Create Simulated, and what Landlord and Tracky are altogether. So, to set things straight:

**Tracky** contains all of the utilities we use in order to force-load chunks on the client and server- the technical backbone to how we are able to get our contraptions, or "Worldshells," interactable. It was originally created by Ryan and GiantLuigi4 to help make compatibility between Landlord and Dynamic Portals (GiantLuigi4's seamless portal mod) easier to develop.

**Landlord** is our "worldshell" library. It takes sections of the world stored in a "plotyard" and turns them into moving projections at different positions called worldshells - these are how Create Aeronautics' airships work. Worldshells can simulate physics or remain static, and are fully interactable - almost everything works as you'd expect them to if the blocks were actually there.

**Create Simulated** is the "core mod" integrating Create with Landlord; it contains content related to physics that doesn't better fit into one of our "addon mods" like Aeronautics. For example, the Stirling Engine is useful in a number of Simulated addons, not just Aeronautics, so it gets put in Simulated instead.

**Create Aeronautics, Create Liftoff, Create Offroad** are all "addon mods" to Simulated, adding each of their respectively themed content onto it. The entire project, including all the mods, is called the Simulated Project.

With all that dependency jargon out of the way, it's time to pull back that curtain and show y'all some of the cool content that's been in the works for a while:

Tons of new features have been implemented to Simulated over the past few months, some of it in the form of equipment! Back in June, we set up a new "airport" server (like the one the initial multiplayer progress log was recorded in) to help test stability. In addition to several other things, we played an improved version of physics volleyball using the Creative Physics Zapper. We love to do these small events, competitions, and games with the project as a team, to both boost morale and test stability.

<center>
    <img class="sshot1" src="/assets/images/equipper.png" />
    <img class="sshot1" src="/assets/images/hammer.png" />
    <img class="sshot1" src="/assets/images/kolis.png" />
    <img class="sshot1" src="/assets/images/volley.png" />
</center>

Due to our relatively private dev cycle, there's still a lot of content that's yet to be formally shown
off. While we'd still like to keep a number of surprises for release, everything from steering wheels
and pedal seats to IR sensors, laser pointers, and much more have since been implemented. We really
believe these features open the door to a wide variety of new possibilities with contraptions and
automation, and are excited to see what the community is able to do with them when we're ready for
release.

<center>
    <img class="sshot2" src="/assets/images/various.png" />
</center>

Of course, development has its hurdles, and some long standing features begin to show their cracks over time and need updating. A recent example of this would have to be our implementation of the Freespin Bearing, a type of bearing which uses worldshells rather than Create's contraption system. While the previous implementation was functional, it was relatively crude and would sag significantly for heavier masses. Eriksonn (our resident math wizard) took the opportunity to not only rework the Freespin constraints, but the constraints system as a whole, greatly improving stability across the board. While the overhaul is still partially underway, its benefits can already be seen with the new possibilities it opens up.

<center>
    <video width="320" height="240" controls>
        <source src="/assets/videos/flapper.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <video width="320" height="240" controls>
        <source src="/assets/videos/vid1.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
    <video width="320" height="240" controls>
        <source src="/assets/videos/vid2.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</center>

We're making good progress on the project, and are super excited about the new content that's been developed. As a team we always internally joke about how much of the project is private- we've managed to form an internal development cycle that is self reinforcing to a certain degree, but that doesn't account for events and happenings in our lives that change our availability.

<center>
    <img class="sshot1" src="/assets/images/coolest picture ever.png" />
    <img class="sshot1" src="/assets/images/bunny plane crash.png" />
</center>

# How's Landlord?

Written by Ryan

There's not much to write about Landlord without going deep into the technical details, but development is happening. Many of the systems that have backed Landlord and GAX (Our physics engine!) have been completely rewritten many times over, and there's a few left that still have to be refactored and rewritten to replace their old messy code with newer more refined stuff based on what I've learned. 

GMan (not the half life character), our shell level of detail and optimization system that's been in the works for a while is quickly reaching a stage it's ready to finish. Lots of the systems in Landlord have been in the state where they're almost good enough, but to finally complete their functionality we needed to rewrite large parts of them.

Even some things people would typically expect about Landlord end up being flipped on their head in reality. For example- assembly, one of the core features of Landlord, the simple ability to take a structure and turn it into a worldshell hasn't existed for the majority of Landlord's lifetime. We prioritized new progress, new work on our physics engine GAX, new performance improvements, new compatibility rather than working on assembly, because we had developer commands which worked just fine for us and assembly is very nuanced to get perfect. It's this type of thing that emphasizes that sometimes our community views the things that require a lot of work and things that don't require a lot of work reversed at times.

I'm excited for Landlord to be finished both for the Simulated project, and for the tons of other projects using it and that plan to use it for powering their worldshells.

# Create High Seas? Huh?

Written by Ryan, Amo

The existence of Create High Seas as a fourth Simulated addon has always been a running joke in our community amongst the development team and the members. In the early days of Aeronautics we joked about it occasionally as a water propulsion based Simulated addon, and some community members eventually caught on. 

Community member "asdfasdferwr" created this image, which gave us quite the laugh:

<center>
    <img class="sshot2" src="/assets/images/highseasreal.png" />
</center>

We're here to say that Create High Seas is real, and does have planned content, and has for a while (many months). We can't exactly say when, or if it will ever see the light of day, but the community was right! It exists, just low priority, and the people who want to work on it are busy working on Aeronautics and other mods, so it is on the backburner for now. But it is on the list of things to do!

# What's happening with Create Liftoff?

Written by Ryan, Tazer, and Adeline

<center>
    <img class="sshot1" src="/assets/images/fuckyeah.png" />
    <img class="sshot1" src="/assets/images/fuckyeah2.png" />
    <img class="sshot1" src="/assets/images/rockey1.png" />
</center>

Liftoff as a project has been through a lot. The mod has been rewritten four whole times, each of them mostly led by different developers and artists. Luckily, it's settled on one codebase now, with one clear fully planned vision, and one clear art style. We've kept Liftoff mostly secret up until now, from the features, to the system, to the graphics, and even the blocks and resources within the project.

Part of this is because we don't want to spoil the project for the player- Liftoff is an enormously planned project, with a full OST, discs, tons of planets and moons crafted by us that each tell unique geological and biological stories, and many new systems. It's the space mod that we, as the Liftoff team, have always wanted to play, and we're making it.

In the recent few months, we've been working on the space graphics, multiblock telescopes, reaction wheels, these things we call "control data frequencies," and most importantly the "flow system." Powered by custom simulation done by Eriksonn, code and implementation by Ryan, and art by Adeline, the flow system consisting of ducts, valves, turbines, nozzles, and many more is the center of much of Liftoff technology. It's how you'll be routing exhaust for RCS systems and propulsion, how you'll be managing flow of oxidizer and fuel in some cases, and generating SU/power for your use on the rocket. 

Liftoff is a semi-realistic mod by nature- we have orbital mechanics, an almost completely seamless transition between space and the surfaces of planets/bodies, and we lean into realism with how you will design systems on your rockets. However, we do have to strike a balance between realism and ease of use- after all, there's no use designing all the content we are for space if nobody but rocket scientists can get there. We believe we've struck a good balance with many of the systems we've implemented.

One of the questions we get most often about Liftoff is about the system, or more specifically the planets/bodies within it. Yes, you can make your own mods that add planets to Liftoff! But unfortunately, we won't be showing you much of the planets within the base Liftoff system until release. We want our players to discover the content in Liftoff first-person by stargazing with telescopes, exploring, and setting off on space ventures. Spoiling all the deepest darkest secrets about all the places in space you'll be able to go would make this experience less meaningful. Just know we're putting a lot of care into the content on these planets- no big-headed blue villagers and no completely barren planets with no life or interesting content. That being said, although life is present in the Liftoff system- it's not in the typical fashion. We want the player to discover Dursels, Glumous Sporespreaders, Duran Sunballoons, and many more by playing the mod itself, and we don't want to spoil the content of the planets. We can say one thing- the system is not based on the real life solar system other than the moon (kindof,) the sun, and ofcourse Minecraft's overworld itself.

<center>
    <video width="320" height="240" controls>
        <source src="/assets/videos/nozzles.mp4" type="video/mp4">
        Your browser does not support the video tag.
    </video>
</center>

# Ready when it's Ready

Written by Ryan

I'd like to end this blog by reminding you all that the Create Simulated teams are made entirely of developers working out of their own passion and dedication. None of us have gotten a single penny from any of our work on these projects- we're working because we want to see the project complete just as much as our community does. I always like to say that if any of the projects were ready to release, they would be released. The entire Simulated team, including me, sincerely want our community to be able to get their hands and create stuff using our work, but we also want to release the projects in a state we are happy with them and where our community will also be happy with them. That isn't the case right now. Therefore, we're giving it more time, and instead of rushing for 2023 and releasing a potentially unfinished project, we're playing it by ear.

Now, we didn't have time to include everything that's happened behind the scenes working on these projects. If there's something you'd really like to see us make an in-depth post on in the future, you can express your interest in our community. If enough people want us to go deep into any system that doesn't involve spoilers, we'll consider it in the future!

See you all next time!