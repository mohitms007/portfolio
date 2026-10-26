---
layout: post
title: Use the model to read, not to calculate
description: How I divided the work between a language model and code in a tool that checks financial reports.
---

I built a tool that reads the monthly financial report of a company. The tool checks the report against the rules in the loan agreement of that company. An example rule is: debt must not be more than 3.75 times earnings.

The simple design uses one prompt. You give the model the PDF and the rules. Then you ask the model if the company passed.

This design works in a demo. But it can give a wrong answer, and you cannot easily see the error.

## The problem with one prompt

A language model reads text well. It does not calculate reliably.

If the model says that leverage is 3.62x, you do not know where that number came from. The model can read the number from the page, calculate it, or invent it. If the number looks correct, people usually do not check it.

Thus I divided the work into parts. Each part does the task that it does best.

## The model reads and code calculates

The model has one task. It finds six numbers in the PDF:

- revenue
- EBITDA
- interest
- debt
- cash
- the undrawn facility.

For each number, the model copies the exact line from the page.

Then code checks each line. The code looks for the line on the page that the model gave. If the line is not on that page, the code rejects the number. The model must then try again.

Code does all the calculations. It calculates the ratios, compares them with the limits, and gives a pass or a fail. The model cannot change these results.

This design also gives protection against prompt injection. One test report has hidden white text. The text tells the AI to report that the company complies. The model reads this text, but the text has no effect, because the model does not make the decision.

## Compare the two documents

A company sends a compliance certificate with its report. In the certificate, the company says that it passed.

In one test case, the certificate says that leverage complies. The profit and loss statement shows a breach. The difference is $470k of costs that the certificate adds back.

This difference was the most useful result. The tool shows each place where the two documents do not agree, and the page for each difference.

## A person makes the decision

The tool does not make the final decision. An analyst examines each issue on the PDF and decides. The analyst cannot sign off until all issues have a decision.

When a tool makes the decision, the user must trust the tool. When a tool shows the evidence, the user can check it. It is easier to check evidence than to trust a result.

## Tests with hidden answers

I wrote eight test reports. Each report contains a problem that can cause an error. For example:

- figures in thousands on one page and in millions on a different page
- a different cash value on two pages
- a report for the wrong month
- a hidden instruction to the AI.

The expected answers are in separate files. The agent cannot see these files. Each test uses the same code as the real application. The last run passed 119 of 119 checks. It cost less than five cents.

Because the tests are cheap, I run them after each prompt change. I do not have to guess if a change made the results better.

## Summary

Use the model only for the tasks that need a model. In this tool, that task is to read the documents.

Use code for the calculations and the rules. Let a person make the final decision.
