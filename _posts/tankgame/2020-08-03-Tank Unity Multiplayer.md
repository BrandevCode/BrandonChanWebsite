---
title: Unity Project - Multiplayer Tank Game
categories: code
tags: [Unity, Game]
maths: 1
comment: 1
---

## Unity Has Some Great Tutorials

As a person who knows how to code in C#, I feel like Unity is an ideal game engine for me to learn game development. I did plenty of research on what I need to know about Unity. This involved going through tutorials with <a href="https://www.youtube.com/user/Brackeys" target="_blank">Brackeys</a> and <a href="https://academy.zenva.com/" target="_blank">Zenva Academy</a> but I think the most helpful was with <a href="https://learn.unity.com/" target="_blank">Learn Unity</a>. This is where I found the <a href="https://learn.unity.com/project/tanks-tutorial?uv=5.x" target="_blank">tanks tutorial</a> which taught:

1. Scene Setup for Tanks
2. Tank Creation and Control
3. Camera Control
4. Tank Health
5. Creating and Firing Shells
6. Game Managers
7. Audio Mixing for Tanks

<img src="../images/posts/tanks/unityeditor.jpg" class="inline_img_right z-depth-5"/>
What made me excited the most about this project was that it had local multiplayer which means it could be played on one computer using one keyboard. They mentioned in the first tutorial that they had a version of the game with online multiplayer, this was later taken down due to their <a href="https://support.unity3d.com/hc/en-us/articles/360001252086-UNet-Deprecation-FAQ" target="_blank">UNET</a> legacy multiplayer solution being deprecated. 

## Adding Online To A Local Multiplayer Game

To prove my understanding of the tank tutorials and also learn something interesting, I made it a goal to add online multiplayer to the tank tutorial game. This involved me learning heavily from Alex Hicks in his <a href="https://youtu.be/J0udhTJwR88" target="_blank">Unity Multiplayer Tutorial</a> series using NodeJS and Socket.IO. Since Unity currently only allows one project to be opened by one editor at a time, he also made a tutorial on how to work around it <a href="https://youtu.be/w7Wvt5cf_-o" target="_blank">here</a>. This is important because it allows the developer to test out the game with multiple players connected. 

<img src="../images/posts/tanks/clientserver.jpg" class="inline_img_left z-depth-5"/>

## Heroku Deployment

Since the NodeJS tutorial runs locally through the command "nodemon [index.js]", I needed to research on how to deploy a NodeJS app and found this tutorial on how to do it through <a href="https://youtu.be/MxfxiR8TVNU" target="_blank">Heroku</a>. This is a great platform to host NodeJS projects as they have a free plan. The only issue I found was that it has a couple of minutes startup time to load since the server is not being run constantly.

<br>
<br>
<br>
<br>

## Issues

I came across some issues during my time working on this tank project.

1. The movement/rotation of the tanks is sent and synced on the nodeJS server, however, the bullets are not. The clients tell the server that a bullet has been fired but by that time the other tanks have probably moved, causing the game to be desynced. This can be resolved by adding the bullet fired and the bullet movement onto the server.
2. Health needs to also be saved on the server otherwise the tank health will desync.
3. There is no indicator of controls so the player will not know how to play the game.
4. No lobby system.
5. Not supported by WebGL. Possible solution with <a href="https://assetstore.unity.com/packages/tools/network/socketio-for-native-and-webgl-builds-76508" target="_blank">SocketIO for Native and WebGL builds</a>.

## Final Thoughts

Overall I learned a lot about Unity and NodeJS in this project. I will definitely be doing more Learn Unity tutorials and I hope that their new <a href="https://unity.com/dots?utm_source=youtube&utm_medium=website&utm_campaign=event_global_generalpromo_2019-09-26_unite-copenhagen-dots-sample&utm_content=video" target="_blank">DOTS netcode</a> gets released soon.

If you want to play, feel free to download the latest version here: <a href="https://drive.google.com/file/d/13Xxu5t0NsqA7gi9lCOV6I7zrOQEXnGCs/view?usp=sharing" target="_blank">TANKS Unity Multiplayer exe - Download</a>. Just download, extract and run the file "TANKS test.exe". Controls are WASD to move and space to shoot (holding it down will cause the bullet to fly farther).

## Additional Resources

* <a href="https://learn.unity.com/projects" target="_blank">Learn Unity - Projects</a>
* <a href="https://www.heroku.com/" target="_blank">Heroku</a> 
* <a href="https://socket.io/" target="_blank">Socket.io</a>
* <a href="https://youtu.be/J0udhTJwR88" target="_blank">Alex Hicks - Multiplayer Game with Unity and Node JS</a>
* <a href="https://youtu.be/w7Wvt5cf_-o" target="_blank">Alex Hicks - Two Editors, One Project with Unity</a>