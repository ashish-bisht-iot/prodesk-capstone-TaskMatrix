# TaskMatrix

**Enterprise-grade Agile Project Management platform** — a Jira/Asana-style tool built for software teams to plan, assign, and track work through drag-and-drop Kanban boards with real-time collaboration.

## Track

Fullstack (Track B)

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React (Vite) |
| Styling | Tailwind CSS + Shadcn UI |
| Backend | Node.js + Express |
| Database | MongoDB Atlas + Mongoose |
| Real-time | Socket.io |
| Auth | JWT (jsonwebtoken + bcryptjs) |
| Deployment | Frontend → Vercel, Backend → Render |

## Core Features (Prioritized)

### P0 — MVP Must-Haves
1. User authentication (register/login, JWT-secured routes)
2. Project creation (a user can own/belong to multiple projects)
3. Kanban board with columns (To Do / In Progress / Review / Done)
4. Task CRUD (create, edit, delete, view task detail)
5. Drag-and-drop task movement between columns, persisted to DB

### P1 — Core Differentiators
6. Task assignment to project members
7. Priority tagging (Low / Medium / High / Urgent)
8. Deadline field with overdue visual indicator
9. Role management (Admin / Member per project)
10. Real-time activity feed (Socket.io — task moved, assigned, commented)

### P2 — Stretch (Sprint 16 candidates, not MVP-blocking)
11. Task comments/threaded discussion
12. Deadline reminder cron job (email or in-app notification)
13. Analytics view (tasks completed per sprint, burndown-style chart)

*Explicitly out of scope for MVP to avoid scope creep: payment gateway, video calling, third-party calendar sync.*

## Wireframes (Figma)

https://www.figma.com/design/d0SAouTCsb5tiPpxsJXuLl/TaskMatrix-%E2%80%94-Wireframes?node-id=0-1&t=ItRo9ritEy2o399C-1

Core viewports covered:
- Auth screen (login/register)
- Main dashboard (project list / board selector)
- Kanban board view (task cards, columns, drag zones)
- Task detail modal/view (assignee, priority, deadline, comments)

All viewports designed mobile-responsive (board view collapses to a swipeable single-column layout under 768px).

## System Architecture

![ERD](architecture/erd.png)

See `architecture/erd.png` (exported from `architecture/schema.dbml`) for the full Entity Relationship Diagram.

**Collections:** Users, Projects, Boards, Tasks, ActivityLog

## AI Usage

See `Prompts.md` for architectural planning queries used during this sprint.

## Repository

`prodesk-capstone-TaskMatrix`
