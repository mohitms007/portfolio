---
layout: post
title: What 4,100 hours of timesheets show about writing code
description: Lessons from three years of logged work at Josh Technology Group.
---

I worked at Josh Technology Group for three years. During that time, I recorded my work in timesheets. The timesheets have 2,307 rows over 36 months. The total is approximately 4,100 hours.

Recently, I read all the rows again. I expected to see the features that I shipped. But most of the hours were for the work around the features.

Approximately 510 hours were for induction and ramp-up. That is approximately one hour in eight. Most of the other hours were for one large product and some smaller products. Many of these tasks do not show on a resume.

These are the lessons from those hours.

## Sometimes the fix is not code

Production had duplicate summary records. The cause was a race condition.

Before I changed the code, I read the git history. A later commit had already fixed the race condition. The duplicate records were from the time before that fix.

Thus the code did not need a change. The fix was a script that removed the duplicate records. The task took approximately 24 hours. Most of that time was for reading.

## Understand the problem before you write code

Users could edit data in an accounting period that was closed.

I examined the system for approximately 12 hours before I wrote code. I spoke with three people, because no one person knew all the places where data could enter.

Then I added the check to each of those paths. This took approximately 8 more hours. One path was not in the bug report: the function that copies a weekend menu plan.

The reported path needed one line of code. The other paths were most of the work.

## Change one page at a time

In 2023, we migrated the job post feature. The migration took approximately four months.

We did not change all the pages at the same time. We changed one page at a time, behind feature flags. Thus we could release each page, or roll it back, independently.

This method is slower. But each step was small, and we could reverse each step.

## Remove the temporary fix

The Angular sanitizer removed base64 images from the content. A quick fix is to bypass the sanitizer. This fix works immediately.

But the bypass causes an XSS vulnerability. Thus I logged a separate task to add the security back after the bypass. The bypass was temporary. It did not stay in the code.

## Find the problem where it occurs

A report was slow for only one customer. I could not reproduce the problem in the development environment.

I examined the background job logs. Then I worked with a senior engineer on the production system until the problem occurred. The work took approximately 55 hours in total.

## Own a shared system

Over two years, I spent approximately 416 hours on email templates:

- I converted HTML templates to MJML.
- I fixed rendering problems in different email clients.
- I kept the shared templates correct for all the teams that used them.

Email templates are not an interesting feature. But all customers see them, and one person must know them completely. For some time, I was that person.

## Change the plan after discussion

For a shared modal, my plan was to use one container for the full form. I discussed the plan with the team. After the discussion, we used five containers.

A first plan is not always the best plan.

## Teach other engineers

I spent approximately 96 hours on mentoring:

- I reviewed pull requests from junior engineers.
- I gave knowledge-transfer sessions on React.
- I helped junior engineers with parts of features.

When you explain why code must be a specific way, you find out if you really know the reason.

## Summary

The hours show that writing code was not the largest cost. Understanding the problem was the largest cost. This included reading the history, finding all the paths, reproducing the real problem, and speaking to the person who knows the system.

Good code comes mostly from the work that you do before you write it.
