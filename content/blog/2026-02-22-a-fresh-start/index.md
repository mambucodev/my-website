+++
title = "A Fresh Start"
description = "First article of 2026 — a set of goals, a new lifestyle, a home server, and the slow migration away from Apple."
date = 2026-02-22T17:43:00+02:00
[taxonomies]
tags = ["personal", "self-hosting", "homelab"]
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

It's not really easy to explain this because I can't fully understand it either, but obviously this has a consequence on my will to do any other thing. But hey, I'm recovering, I swear. This article is proof of it!

The turning point wasn't dramatic. Somewhere between therapy, and a few weeks of just sitting with how bad I felt, it seems like something loosened. I managed to work on a small project. Then another. Bad mornings still happen — I'm not going to pretend otherwise — but now everything's not dark anymore, if that's the way we can put it. This article is part of that: I couldn't have written it three months ago. So here's what I'm committing to this year.


### 2026 Goals
<small>Notice: checked boxes are at time of writing</small>

- [x] Setup a home server
- [ ] Move to Android
- [x] Self-host most of my paid services
- [ ] Fix my study routine
- [x] Coding at least 1hr/day
- [ ] Finish 3+ books/month
- [x] Use my calendar better
- [x] Find a job (and keep it)
- [ ] Start a skin-care (why not)
- [ ] Go back to the gym

It's a lot of objectives, right? I realise it even while writing them down. But that's okay — even if I don't manage to achieve them all, there's next year. As long as I keep improving, I'm good.

## New Lifestyle

Right now I really feel like I spend most of my day doing nothing. I wake up, go to school (which already takes up most of my day) and in the evening I either think, doom-scroll, or sleep because I'm bored. When I do stuff like playing or coding it's always messy: no concept of time. If somebody asked how much time I spent studying or coding yesterday I wouldn't know how to answer — everything is so fragmented.

Then I got tired of all of this confusion in my head. I started thinking how I could fix the fragmentation and I thought about a **calendar**! I created a bunch of calendars, added all my already coming events (e.g. school, my barber, various trips) and then added objectives like **studying** at least 1 hour **every day**, and same about coding. Called them "Study Session" and "Code Session". I planned the study sessions right before tests, a whole week of studying for every single one. Not happy yet, I also added 45 minutes of **reading** every night before bed.

It's currently going pretty well. The first days I managed to follow it, then I had to change a few things because I felt it being too strict and now I'm still following every single event I planned.

### Finding a job

I've always wanted to put my coding skills to some use that could also support me financially, I'm not going to lie. I've worked on some commissions here and there to help a few people out, but I'd never actually gone out searching for a proper contract. Truth is I've been looking for one for the past 7 months AND actually found one!

I'm under an NDA agreement so I can't say much about it but it's about software development and I love what I do, so... great!

### Reading

![Rascal Does Not Dream of a Dear Friend - Book Cover](rascal-does-not-dream.webp#end)

I'm currently reading the [Rascal Does Not Dream](https://yenpress.com/series/rascal-does-not-dream-light-novel) series, a Japanese light novel. I watched the anime about a year ago, loved it, and chose to buy the books depicting the whole story. It mixes romance, psychology, and has a subtle grasp on physics. I'm currently on the **4th**, out of 15. I admit I've been going pretty slow, since I "don't have a lot of time to read" — just an excuse. So I set an objective to have more occasions and actually find the time to read!

I've got other books in mind too, like the [Monogatari](https://kodansha.us/series/monogatari/) series — another great piece of fiction — and [The Apothecary Diaries](https://j-novel.club/series/the-apothecary-diaries) of which I've already bought the first volume btw. I'd say the story has some similarities with the first novel I mentioned, but I know it's much more elaborate and deep. I also want to read some novels by **Haruki Murakami** like **Norwegian Wood**. And I swear, all of them being Japanese is just a coincidence.

This also ties back to the time I said I bought a Kindle: now I can put it to more use than just reading manga — I can read actual books! <small>I'm still buying a few physically though.</small>

## Wait, a home server?

![My home server](freeway.webp#end)

Yup, I finally managed. I found an old Acer laptop lying around without any RAM (I'd scavenged it earlier to put into my own laptop) and I added some 4GB I found in my drawer. Yeah, it's not that strong, but it can hold a couple of services. I also have a VPS, so it doesn't have to handle all the traffic.

Since I already had a VPS on Hetzner, I hosted most of my stuff there — but storage was the limit. Storage costs, and my iCloud already holds more than 200GB of **just photos and videos**. In the end I set up Immich and OwnCloud, transferred everything, and now it's ready!

The server has a 500GB SSD, so it should be okay for the moment. I'm already planning on upgrading it, and even finding a better one where I can fit a GPU for heavy work and that can hold *all* of my services, not just these. Here's a full list of what it's running right now:

- Immich (Gallery)
- ~~OwnCloud (Files, Contacts, Calendar)~~[^1]
- Vaultwarden (Passwords & Passkeys)
- [Personal CDN](https://github.com/mambucodev/personal-cdn)
- Glances

> Glances is a monitoring tool that serves a web UI to monitor your server's resources and performance. I use it for personal purposes of course, because I don't want to SSH every time I want to check server stats. And since it's public, you can [see it](https://freeway.mambuco.dev) too!

### The VPS

Apart from the home server (which by the way I named "freeway") I started paying for a **Hetzner VPS** a few months ago, and I host Coolify on it alongside many other services. Linkwarden, Umami, **this website**... somewhere around 15-20 services in total.

It's honestly an insurance policy. I'm not constantly scared that things may stop or overload on the home server, and it can notify me whenever something goes down. Once I upgrade `freeway` I'll probably downgrade the VPS to pay the least possible, but for the moment I need it to be as strong as it is now. It has 8GB of memory and 80GB of disk, and it also runs its own Glances instance [here](https://hetzner.mambuco.dev).

### Android Migration

I said in the [previous article](@/blog/2025-09-23-new-brand/index.md) I'd be trying to migrate to Android, more specifically a **Nothing Phone**. I found a good offer on the Phone 3 with 512GB of storage at only `620€` instead of `999€`, which is kind of crazy.

I don't like Google, so I'd like to use it as little as possible. That also means: **no Google subscriptions**. Luckily I've already taken care of photos and files sync, so that side is covered; what I'm actually worried about is not liking Android itself.

The doubt hasn't vanished — if anything, it's amplified. A lot of recent regulations and updates on both iOS and Android are making me think that in a few years (or even months) having an iPhone or a Nothing won't feel that different. Android phones are getting more and more limited as far as I know, while iPhones are opening up. But I've made up my mind: I'm switching either way. It's just a phone, and if I end up sacrificing some comfort because of a bad choice, it's not going to affect my daily life all that much.

## Conclusion

Funny thing writing this out: a few boxes got ticked mid-draft. The job, the coding hour, the calendar. Started this post with all of them empty.

The rest is a lot, I know. But writing it here, publicly, is part of not letting myself off the hook. I'll probably check back mid-year. Hopefully less empty.

Anyway, thanks for reading! {{ emoji(name="neofox_heart") }}

See ya!

[^1]: I've shut it down already: it has a bad UI, it's difficult to use and I just need something seamless like Immich. I'll eventually fallback to Google's services temporarily if I don't find a valid option.