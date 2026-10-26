---
layout: post
title: What 4,100 hours of timesheets say about writing code
description: Three years at Josh Technology Group, read back through the time I logged.
---

I logged my time at Josh Technology Group for three years. 36 months, 2,307 rows, about 4,100 hours.

I went back through them recently, expecting to find the features I shipped. Mostly I found the work around them.

About 510 of those hours were induction and ramp-up. Roughly one hour in eight. Most of the rest went into one large product, a few smaller ones, and a lot of tasks that never make it onto a resume.

A few things stood out.

## Sometimes the fix isn't code

Production had duplicate summary records. It looked like a race condition, and it was one.

Before touching anything, I read the git history. The race had already been fixed in a later commit. The duplicates were leftovers from before the fix.

So the change wasn't a code change. It was a cleanup script. About 24 hours, most of it reading.

The most useful thing I did that week was not write the patch I came in to write.

## Read for a long time first

Users could edit data in an accounting period that had already closed.

I spent about 12 hours exploring before I wrote anything, and talked to three people, because nobody had the full picture of every place data could come in. Then another 8 hours adding the check to every one of those paths. That included one nobody had reported, copying a weekend menu plan.

The reported path was one line. The bug was all the others.

## Move one page at a time

In 2023 we migrated the job post feature over about four months. Not in one go. Page by page, behind feature flags, so each page could go live or go back on its own.

It's slower on paper. But every step was small enough to undo.

## Don't leave the bypass in

Angular's sanitizer was stripping base64 images out of content. The quick fix is to bypass the sanitizer, and it works straight away.

It's also an XSS hole. So I logged a separate task to put the protection back after the bypass. The quick fix bought time. It wasn't allowed to stay.

## Reproduce it where it happens

A report was slow for exactly one customer. It wouldn't reproduce on dev.

I followed it through the background job logs, then sat with a senior engineer against production until it showed up. About 55 hours across the whole thing, and most of what I know about how that system really ran.

## Own the boring system

Over two years I spent around 416 hours on email templates. Converting HTML to MJML. Fixing rendering in mail clients that each break in their own way. Keeping shared templates working for every team that used them.

Nobody puts email templates on a slide. But every customer sees them, and someone has to know them end to end. For a while, that was me.

## Change your plan when the room is right

For a shared modal, I'd planned one container for the whole form. After talking it through with the team, we split it into five.

The first plan isn't the one you have to keep.

## Teach

About 96 hours were mentoring. Reviewing juniors' pull requests, running knowledge-transfer sessions on React, helping on features.

Explaining why code should look a certain way is the fastest way to find out whether you actually know.

## The pattern

Looking back at the hours, the code was rarely the expensive part. Understanding was. Reading the history, finding every path, reproducing the real problem, asking the person who knows.

Good code mostly comes from the hours before you write it.
