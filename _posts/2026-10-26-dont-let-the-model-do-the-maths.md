---
layout: post
title: Don't let the model do the maths
description: What I learned building an AI agent that reads financial reports.
---

I recently built a tool that reads a company's monthly financial report and checks it against the rules in its loan agreement. Rules like: debt can't be more than 3.75 times earnings.

The obvious version is one prompt. Give the model the PDF and the rules, and ask whether the company passed.

That works in a demo. It's also wrong in a way nobody would notice.

## Where the obvious version breaks

A language model is good at reading. It isn't a calculator, and it isn't a witness.

If it tells you leverage is 3.62x, you can't tell whether it read that number, worked it out, or made it up. And when the answer looks plausible, nobody checks.

So I split the job by what each part is actually good at.

## The model reads, code decides

The model has one job: find six numbers in the PDF. Revenue, EBITDA, interest, debt, cash and the undrawn facility. For each one, it has to copy the exact line from the page it found it on.

Then code takes over. It looks for that line on that page. If the line isn't there, the number is rejected and the model tries again. No quote, no number.

Everything after that is plain code. Ratios, limits, pass or fail. The model never touches it, so it can't get it wrong.

It also can't be talked out of it. One of my test reports has white text hidden on a page, telling the AI to report that everything complies. The model reads it, because it reads everything. It doesn't matter. The model doesn't get a vote.

## The disagreement is the product

Companies send a compliance certificate with their report, saying they passed. In one of my test cases the certificate says leverage complies. The P&L says it doesn't, because the certificate quietly adds back $470k of costs.

That gap turned out to be the most useful thing the tool finds. Not the ratio. The place where two documents from the same company disagree, pinned to a page.

## A person signs off

I didn't want the tool to make the call. An analyst goes through each issue on the PDF and decides. Sign-off stays locked until every issue has a decision.

If a tool decides, someone has to trust it. If a tool shows its evidence, someone only has to check it. The second is a much easier thing to ask.

## Tests the model can't see

I wrote eight test reports, each with a trap. Figures in thousands on one page and millions on another. Cash that's different on two pages. A report for the wrong month. The hidden instruction.

The expected answers live in separate files the agent never sees, and every test runs through the same code as the real app. The last run passed 119 of 119 checks and cost under five cents.

When tests are that cheap, you stop arguing about whether a prompt change helped. You just run them.

## What I'd tell myself at the start

Use the model for the part only a model can do. Here, that was reading messy documents.

The maths, the rules and the final decision belong to code and to people. The model finds the page. It doesn't sign.
