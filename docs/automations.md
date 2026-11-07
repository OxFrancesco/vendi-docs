# Automations

Work that runs on a schedule or after each meeting.

On the site: https://ttfunnel.ai/docs/automations

Ask any agent for something that should happen by itself, and it sets up an automation. There's no form to fill in.

- "Every Monday at 9, recap last week's meetings."
- "After each meeting, write down the decisions and next steps."
- "Every weekday at 8:30, prep me for today's meetings."

## When they run

- **On a schedule**: daily, weekdays, weekly or monthly, at your time
- **Once**, at a set time
- **After each meeting**, when a new meeting of yours has its notes. If the notes take more than 24 hours to arrive, that meeting starts no run.

Times follow your time zone in **Settings › Account**. Add "until Friday" or "for two weeks" to give one an end.

## Where the results go

All the runs of an automation share one chat, where you can see each of them. A run starts from its instructions and a digest of what the earlier runs reported, so it tells you only what's new, then posts its answer in the conversation of the agent you asked, under **Ran automation**. Press its name there to see the whole run. The answer can also go to your [chat app](chat-apps.md). Automations can't change anything in your apps unless you allowed it when you set them up, and even then each change waits for you unless Autopilot is on. That covers notes in your notetaker and work an automation hands to a co-worker. Each app says which of its tools only read, and Vendi treats any other as a change, even one whose name sounds like a read, so an automation that can't change anything doesn't get it. An automation that can't change anything can't set up one that can, and it can't pause, edit or delete an automation. The one exception is Executor tools, as below. A change from an automation stays open until its next run, for at least 30 minutes and at most 7 days. They never wait on a question.

Tools you add through Executor follow Executor's own approvals, in automations too. In an automation that can't change anything, Vendi declines what Executor pauses, but a call Executor doesn't pause still runs. Where Executor does pause, the card lasts as long as Executor keeps the call, about 15 minutes.

Ask for one in a group and it [posts in that group](chat-apps.md#in-a-group), and only reads.

## Manage them

Open **Automations** at the bottom of the sidebar for **Run now**, **Edit**, **Pause** and **Delete**. In a chat app, send `/automations`.

Note: Free includes one automation. Pro includes many.
