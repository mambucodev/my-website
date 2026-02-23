+++
title = "A Fresh Start"
description = "Placeholder because idk what description to use yet"
date = 2026-02-22T17:43:00+02:00
[taxonomies]
tags = []
[extra]
accent_color = ["hsl(210, 85%, 35%)", "hsl(210, 85%, 65%)"]
# banner = "banner.webp"
music = [
  { type = "album", artist = "ROSALÍA", name = "LUX" },
  { type = "album", artist = "Charli xcx", name = "BRAT" },
  { type = "album", artist = "Billie Eilish", name = "Happier Than Ever" }
]
[extra.weather]
condition = "Clear Sky"
style = "cloudy"
icon = "sun"
temp = "10"
unit = "C"
# [extra.fediverse]
# id = ""
+++

We've got the first article of 2026! *About time*.

Honestly these months have been kind of busy, as I said on fedi [3 months ago](https://wetdry.world/@mambuco/115606889445500135): I haven't been dead at all, just reorganizing my thoughts, going to therapy and a bunch of other things.

Now I really felt like coming back. I've got a set of goals for this year, with the objective of becoming a new person, because I'm not okay with the way I am right now: lazy, not motivated, and not putting any effort into the things that matter.

{% alert(icon="info", title="Note", color="blue") %}
This article mixes tech and personal stuff. Feel free to skip the technical parts if that's not your thing.
{% end %}


## Back on Track

In 2025 I had quit so many passions. Even more in the previous years. The one that hit the hardest was **coding**; even now I feel like I've lost some of the creativity I've always had and couldn't keep going for a while.

Apparently, the cause seems to be **motivation**. Yes, the same motivation that makes you want to wake up every morning... but I didn't. I didn't want to wake up, and I still don't want to.

It's not really easy to explain this because I can't fully understand it either, but obviously this has a consequence on my will to do any other thing. BUT hey I'm recovering, I swear. This article is proof of it!

### 2026 Goals
<small>Notice: checked boxes are at time of writing</small>

- [x] Setup a home server
- [ ] Move to Android
- [x] Self-host most of my paid services
- [ ] Fix my study routine
- [ ] Coding at least 1hr/day
- [ ] Finish 3+ books/month
- [x] Use my calendar better
- [ ] Find a job (and keep it)
- [ ] Start a skin-care (why not)
- [ ] Go back to the gym

It's sooo many objectives, right? I realize this even while writing them down. But it's okay, even if I don't manage to achieve them all, there's next year. As long as I improve myself, it's okay.

## New Lifestyle

I realised I want to drastically change and become more productive, self-sufficient and basically just happy with myself. Right now 

## Wait, a home server?

![My home server](freeway.webp#end)

Yup, I finally managed. I found an old Acer laptop laying around, without any RAM (I scraped it earlier to put it in my own laptop) and I added some 4gb I found in my drawer. Yeah it's not that strong, but it can hold a couple services. I also have a VPS so it doesn't have to handle all the traffic.

Since I already had a VPS on Hetzner, I hosted most of my stuff on there but storage was the limit. Storage costs, and my iCloud already holds more than 200GB of **just photos and videos**. At the end I setup Immich and OwnCloud, transferred everything and now it's ready!

The server has a 500GB SSD so it should be okay for the moment. I'm already planning on upgrading it, and even finding a better one where I can put a GPU for heavy work and that can hold ALL of my services, not just these. Oh and, here's a full list of what it's running right now:

- Immich (Gallery)
- OwnCloud (Files, Contacts, Calendar)
- Vaultwarden (Passwords & Passkeys)
- [Personal CDN](https://github.com/mambucodev/personal-cdn)
- Glances

> Glances is a monitoring tool that serves a web UI to monitor your server's resources and performance. I use it for personal purposes of course, because I don't want to SSH every time I want to check server stats. And since it's public, you can [see it](https://freeway.mambuco.dev) too!

### The VPS

Apart from the home server (which by the way I named "freeway") I started paying a **Hetzner VPS** a few months ago, and started hosting Coolify together with many other services. Linkwarden, Umami, **this website**... We can sum up a total amount of around 15-20 services.

It's honestly an insurance. I'm not constantly scared things may stop or overload on the home server, and it can notify me whenever it goes down. When I get to upgrade `freeway` I'll probably downgrade it to pay the least amount possible, but for the moment I need it to be as strong as it is now. It has 8GB of memory and 80GB of disk, and it also has a glances service on [here](https://hetzner.mambuco.dev).

### Android Migration

I said in the [previous article](@/blog/2025-09-23-new-brand/index.md) I'd be trying to migrate to Android, more specifically a **Nothing Phone**. I found a good offer that sells the Phone 3 with 512GB of storage at only `620€` instead of `999€` which is kind of crazy.

I don't like Google, so I'd like to use it the least possible. This also means: **no google subscriptions**. Luckily I managed to take care of photos and files sync so we don't really care about that; what I'm worried about is not liking Android itself.

The doubt did not vanish, it actually amplified. Recently a lot of regulations and updates on both iOS and Android are making me think that in a few years (or even months) either having an iPhone or a Nothing won't change much. Android phones are getting more and more limited as far as I know, while iPhones are opening up. But i've made my mind over it, I'm gonna switch either way. I mean, *it is* just a phone and if I'm sacrificing some comfort because of a bad choice, it's not going to affect my daily life at all.

simonissimo was here
