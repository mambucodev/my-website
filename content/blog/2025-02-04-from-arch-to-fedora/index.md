+++
title = "From Arch to Fedora"
description = "My journey to Fedora, why did I switch from Arch Linux."
date = 2025-02-04
[taxonomies]
tags = ["Linux", "Fedora"]
[extra]
accent_color = ["hsl(210 87% 34%)", "hsl(205, 65%, 59%)"]
banner = "banner.webp"
+++

Hey, this is my first post here. Alright, seems cool.

{% alert(note=true) %}
This is actually the first post I write on this blog.
I'm not even a native english speaker, and I'm not used to writing blog articles.
I will get used to it with time, but don't expect some quality content right now.
{% end %}

Let's talk about what the title itself says. I recently switched from Arch Linux to Fedora.
This will require me to talk a little more about the past...

## First Approach to Ubuntu

When I was 5 y/o I had a little laptop with Ubuntu Desktop, I remember it was a very old version of Ubuntu, but I don't remember which one.
It couldn't run anything heavy but **who cares**, I was literally 5 years old or something.

Time passed and new laptops came, they all had Windows, and I was fine with it. I even got my desktop computer (my current one) and used Windows 10/11 for years until last spring.

## Re-discovering Linux

During the last 2 years I recently re-discovered linux by setting up a home-server with a friend, and I loved it.
I learned how to use a terminal and learnt a lot about computers and hardware in general.

One day I meet a friend of my friend, and he was using Ubuntu Desktop on his laptop.
I obviously made a lot of questions about it, and I discovered about how many distros there were, as long as Desktop Environments, and stuff like that.

## Installing Arch

By scrolling on Reddit I found a post about an Arch Linux [rice](https://excaliburzero.gitbooks.io/an-introduction-to-linux-ricing/content/ricing.html/) and got to research more about arch itself.
I discovered that it was considered one of the "hardest" distros to install and use, and I was looking for a challenge.

The thing is, I installed it following the **true Arch way**, by **making mistakes**.
Turns out that instead of installing arch as a dual-boot with Windows, I wiped out the entire Windows partition of my laptop and lost pretty much everything.
*I must say, thanks god OneDrive exists.*

## Using Arch

I mean, the installation **did** go really well because I just used the [Archinstall](https://wiki.archlinux.org/title/Archinstall/) tool, and it worked, but even then, I was really confused.
My dumb ass decided to not select most of the options in the Archinstall TUI, so there was no Desktop Environment.
*I did manage how to install it eventually, with `sudo pacman -S gnome`.*

At the end everything turned out great.
I and the [Arch Wiki](https://wiki.archlinux.org/) became best friends, and I also learnt a lot about linux and machines in general.

## The BIG Problem

Everything was going fine, until a **kernel update** decided that my arch installation must not boot anymore.
Without talking about the issue too much, I'll just let you know that 2 weeks ago (when this happened) I was very ill and I just wanted to use my PC for a bit, and I couldn't because of this.

After a while I got tired of my system's mood swings, every month something would eventually break.
I already know that's Arch's philosophy, and it was fun at the beginning until it got boring.

## The Solution

One thing led to another, and I was just furious, so I installed **Fedora**.
You can't imagine how happy I was to discover that Fedora came already in with my favorite <abbr title="Desktop Environment">DE</abbr>, GNOME.
I riced it a bit at the beginning, installed whatever I needed, and it was ready to go.

## Conclusion

I'm really happy with Fedora, but I miss Arch.
I miss the AUR, the rolling release, the wiki, the community.

But seriously, getting used to the AUR is horrible.
Once you [distro hop](https://en.wiktionary.org/wiki/distro-hopping/) to a non-Arch distro, you eventually end up managing `dnf` repositories like I did, and it's not fun at all.
Maybe one day I'll go back to Arch, but for now, I'm happy with my **stable** system, and it's actually pretty fun.

That's all for now, I'm going to bed. I hope you enjoyed this article, and I hope I'll be making more in the future.
