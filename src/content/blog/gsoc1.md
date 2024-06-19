---
title: "Google Summer of Code week 1 and 2"
description: "This is my blog post going over some of the progress I made during week 1 and 2"
pubDate: "June 19, 2024"
heroImage: "/itemPreview.png"
---

I know this blog post is a bit late, so I will try to make more frequent updates in the future.
Also, I am somewhat behind schedule currently, I hope to work more and try to catch up.
However, in the proposal schedule I have accounted this and left plenty of wiggle-room (Like week 7 and week 9).
I think I will still be on schedule to complete the primary goals.

### Week 1 - CLAP support
During the first week, I managed to add [this](https://github.com/free-audio/clap-juce-extensions) JUCE extension to the project to enable CLAP format build target.
While it works and compiles, there are still work to be done in this area once MIDI support is added.
Also, I got rid of some of the checks in Github Actions, namely building for Windows and MacOS, along with getting rid of pluginval for now. Putting back in pluginval is something on the Todo list. 

The relevant PR is here: https://github.com/Orisu179/AmatiPP/pull/6 and ready for review


### Week 2 and 3 - UI Refactor
I was able to introduce a new custom colour theme and change some of the layout with the old UI. The part that I changed the most was the EditorComponent, I run into a lot of problems with FlexBox in JUCE.
apparently, putting a flexbox inside another flexbox is not supported currently. This was weird to me coming from working with CSS usually.
Thus, I decided to use the bounds system for GUI, which is much more consistent and reusable. This took way longer than it should be, and I was really trying to make it work somehow, mistake on my part.

For Colour, I thought it would be as simple as overriding the LookAndFeelV4 class, but for the code editor, if I want to change the syntax highlight colours, I have to do it within EditorComponent.
[Here](https://github.com/Orisu179/AmatiPP/blob/090415b298be1f6c90e0a748843230f8407b26f4/source/FaustTokeniser.cpp#L260) are the related codes. In the end, I decided to use a Singleton class for the Colour.
This decision wasn't easy, and I am open to any alternatives if my mentors have any idea. I understand that it might even be an anti-pattern for some people, but I do think this is the simplest way of doing this.
The current implementation is a Meyers Singleton, which is thread safe according to StackOverflow.

The relevant PR is here: https://github.com/Orisu179/AmatiPP/pull/7 and ready for review

### What's next
Currently, there are some bugs with the current build relating to the Faust Parameters, having multiple Sliders in Faust code won't all show up, 
while in the original Amati project it does. So I think I have to do some debugging here and then move on to Midi support.

Currently:
Fixing bugs -> Midi support -> Midi keyboard -> polyphonic instruments

