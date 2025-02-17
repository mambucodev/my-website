+++
title = "Da Arch a Fedora"
description = "Il mio viaggio verso Fedora, e il perché ho cambiato da Arch Linux."
date = 2025-02-04
[taxonomies]
tags = ["Linux", "Fedora"]
[extra]
accent_color = "#51a2da"
banner = "banner.webp"
+++

Hey, questo è il mio primo post. Va bene, sembra tutto a posto.

{% alert(note=true) %}
Questo è effettivamente il primo post che scrivo su questo blog.
Non sono molto abituato a scrivere articoli.
Mi abituerò con il tempo, ma non aspettatevi contenuti di qualità in questo momento.
{% end %}

Parliamo di ciò che dice il titolo stesso. Recentemente sono passato da Arch Linux a Fedora.
Questo mi obbliga a parlare un po' di più del passato...

## Primo approccio a Ubuntu

Quando avevo 5 anni avevo un piccolo portatile con Ubuntu Desktop, ricordo che era una versione molto vecchia di Ubuntu, ma non ricordo quale.
Non era in grado di far girare nulla di pesante ma **chissenefrega**, avevo letteralmente 5 anni.

Il tempo passava e arrivavano nuovi portatili, tutti con Windows, e a me andava bene. Ho anche preso il mio computer fisso (quello che uso ora) e ho usato Windows 10/11 per anni fino alla scorsa primavera.

## Riscoprendo Linux

Negli ultimi due anni ho riscoperto Linux allestendo un server casalingo con un amico e mi è piaciuto molto.
Ho imparato a usare il terminale e ho imparato molto sui computer e sull'hardware in generale.

Un giorno ho incontrato un amico del mio amico, che stava usando Ubuntu Desktop sul suo portatile.
Ovviamente ho fatto un sacco di domande al riguardo e ho scoperto quante distro ci fossero, quanti Desktop Environment e cose del genere.

## Installando Arch

Scorrendo su Reddit ho trovato un post su una [rice](https://excaliburzero.gitbooks.io/an-introduction-to-linux-ricing/content/ricing.html/) di Arch Linux e ho iniziato a fare ricerche su Arch stesso.
Ho scoperto che è considerata una delle distro più “difficili” da installare e utilizzare, e io ero alla ricerca di una sfida.

Il fatto è che l'ho installata seguendo il **vero metodo Arch**, **compiendo errori**.
Ho scoperto che invece di installare Arch come dual-boot con Windows, ho cancellato l'intera partizione Windows del mio portatile e ho perso praticamente tutto.
*Devo dire che grazie a Dio esiste OneDrive.*

## Usando Arch

Voglio dire, l'installazione è andata molto bene perché ho usato l'[Archinstall](https://wiki.archlinux.org/title/Archinstall/) e ha funzionato, ma anche in questo caso ero molto confuso.
Intelligente come sono, ho deciso di non selezionare la maggior parte delle opzioni nell'interfaccia di Archi´nstall, quindi non c'era il Desktop Environment.
*Alla fine sono riuscito a installarlo con `sudo pacman -S gnome`.*

Tutto sommato, è andata alla grande.
Io e la [Arch Wiki](https://wiki.archlinux.org/) siamo diventati migliori amici, e ho anche imparato molto su Linux e sui computer.

## Il GRANDE problema

Tutto andava bene, fino a quando un **aggiornamento del kernel** ha deciso che la mia installazione di Arch non doveva più avviarsi.
Senza parlare troppo del problema, vi dirò solo che 2 settimane fa (quando è successo) mi sono malato e volevo usare un po' il PC, ma non potevo proprio perché non partiva.

Passato del tempo mi sono stancato degli sbalzi d'umore del mio computer, ogni mese qualcosa si rompeva.
So già che questa è la filosofia di Arch, ed è stato divertente all'inizio finché non lo è più stato.

## La Soluzione

Una cosa tirò l'altra, ed ero semplicemente furioso, così ho installato **Fedora**.
Non potete immaginare quanto sia stato felice di scoprire che Fedora è già dotata del mio <abbr title=“Desktop Environment”>DE</abbr> preferito, GNOME.
L'ho personalizzato un po' all'inizio, ho installato tutto ciò che mi serviva ed era pronto a partire.

## Conclusione

Sono molto contento di Fedora, ma mi manca Arch.
Mi manca la AUR, la rolling release, la wiki, la community.

Ma seriamente, abituarsi alla AUR è orribile.
Nel momento in cui cambi a una distro non basata su Arch, finisci per dover gestire le repository di `dnf` come me, e non è assolutamente divertente.
Magari un giorno tornerò ad Arch, ma per adesso, sono contento con il mio sistema adesso **stabile**, e lo sto ritrovando anche un po' divertente da usare.

Per ora è tutto, vado a letto. Spero che questo articolo vi sia piaciuto e spero di farne altri in futuro.
