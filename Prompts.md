# Prompts.md — Sprint 13 (Capstone Blueprint: TaskMatrix)

this sprint was pure planning, so instead of bug-first entries this is scoping-first — what i was unsure about before locking the PRD, and what i asked to get unstuck.

## picking the RFP

wasn't sure if TaskMatrix would read as "enterprise enough" compared to VitalSync, or if it would look like a simple to-do app to evaluators if i under-scoped it. asked for a comparison of build risk across the three RFPs against my sprint 09–11 experience (mongodb/express, socket.io from Wire) before committing, since the scope locks after this friday.

## database schema

initial pass had project membership as an array field inside Projects. realized that doesn't scale cleanly if a project needs role queries later ("find all projects where user X is Admin"), so split it into its own ProjectMembers collection instead of embedding. asked for the tradeoff between embedding vs referencing for many-to-many user↔project relationships in mongoose before finalizing the ERD.

## feature prioritization

had comments, deadline cron reminders, and analytics all in my initial P0 list. asked for help separating true MVP-blocking features from stretch goals so i don't repeat the sprint 05 AI-pattern flag by over-scoping in the plan itself — trimmed those three down to P2 for sprint 16.

---
*(continue this file through sprints 14–17 in the usual before/after debugging-log format once implementation starts)*
