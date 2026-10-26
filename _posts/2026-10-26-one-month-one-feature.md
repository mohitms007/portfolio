---
layout: post
title: One month, one feature
description: Shipping the iOS MVP of Nudge to 200 beta testers.
---

Nudge is a budgeting app built around one idea: stop the purchase before it happens. I built the iOS MVP over the summer and got it to 200 beta testers in under a month.

Most budgeting apps tell you what you spent. By then it's done. We wanted to step in when someone opens the app they overspend in.

## The API that makes it possible

Apple's Screen Time API can do this. FamilyControls asks for permission and lets the person pick the apps to limit. ManagedSettings puts a shield over them.

Two things shaped the product more than I expected. The app never learns which apps were picked. It gets opaque tokens and nothing else. And Apple has to approve the Family Controls entitlement before you can ship it.

Both are good for users. Both mean you design around what you're not allowed to know.

## Keep the clever part small

The AI part is small on purpose. Spending data goes to a FastAPI service on AWS, which uses the OpenAI API to spot patterns and write recommendations and alerts.

The app is native SwiftUI, and the backend is thin. A month isn't long enough to be clever in two places.

## What a month buys you

It doesn't buy polish. It buys real people using the thing. The product was accepted into Antler Launchpad, and Monash IT News covered it.

Ship the one thing only your app can do. Keep everything else boring.
