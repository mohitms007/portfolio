---
layout: post
title: One month, one feature
description: How I built the iOS MVP of Nudge for 200 beta testers.
---

Nudge is a budgeting app. Its main function is to stop a purchase before it occurs. I built the iOS MVP in the summer of 2025–26. In less than one month, 200 beta testers used it.

Most budgeting apps show what you spent. At that time, the money is already gone. Nudge stops the user when they open an app where they usually spend too much.

## The API

The Apple Screen Time API makes this possible. FamilyControls asks the user for permission. Then the user selects the apps to limit. ManagedSettings puts a shield on those apps.

Two rules of this API had a large effect on the design:

- The app does not know which apps the user selected. It gets only opaque tokens.
- Apple must approve the Family Controls entitlement before you can release the app.

These rules protect the user. They also limit the data that the app can use. We designed the product within these limits.

## The AI part

The AI part is small. The app sends spending data to a FastAPI service on AWS. The service uses the OpenAI API to find patterns. Then it writes recommendations and alerts.

The app uses native SwiftUI, and the backend is small. One month is not sufficient time to build two complex systems.

## Result

The product went into Antler Launchpad. Monash IT News wrote an article about it.

Build the one function that only your app can do. Keep the other parts simple.
