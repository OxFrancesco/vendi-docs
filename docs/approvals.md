# Approvals and undo

What waits for your OK, how to undo a change, and Notion backups.

On the site: https://ttfunnel.ai/docs/approvals

Vendi reads your apps freely. Before it changes anything, it shows you a card with the change and waits.

## Approve a change

Each card shows the change, before and after. Press **Approve** or **Dismiss**. Anything that deletes is red and always needs its own press.

Notetakers count too. Any notetaker tool Vendi can't tell is a read waits on a card, like editing your private notes. Filing a note in a folder always needs its own press, since a folder can share it with your workspace. Vendi won't take a note out of a folder or sign you out of a notetaker. To disconnect one, use **Integrations**.

When Vendi adds or changes many CRM records for one request, like a company with its contacts, they come on one card with a row for each record. **Undo** takes them all back together, even from one record's history, and asks first when it reaches other records or removes any.

If you added Beeper as your own tool, a draft's card names the chat. Approving it puts the text in Beeper's message box on your Mac, unsent, and a correction replaces the card still waiting.

Changes waiting from every source, like chats, automations, chat apps and group chats, also collect on **CRM Updates**. Press **Approve N** there to approve them all at once.

## Undo

After a change, **Undo** puts it back. If someone edited the record since, Vendi asks first. A few changes, like a sent email, can't be undone, and the card says so.

**Settings › Activity** lists every change Vendi made or proposed, with undo and redo.

## Approve without cards

- **Autopilot**, in CRM Updates › Approvals, applies changes right away, including ones from Claude, ChatGPT and automations. To turn it on, type the sentence it shows and hold **Hold to continue** for 3 seconds. You're responsible for what it changes. Most changes stay undoable.
- For Notion, choose which kinds of change run without asking in **Integrations › Notion › Approvals**.
- **Approve changes by voice** lets you say "approve" or "dismiss" in a [voice chat](voice.md).
- In [chat apps](chat-apps.md), cards come with buttons, or a poll on WhatsApp. With one change waiting, replying "yes" or "no" works too.

Deletes, emails and invites always wait for you, on Autopilot too. Tools you add through Executor run or pause as Executor's rules say. When Executor pauses one, Vendi asks you. On Autopilot, Vendi approves it unless it recognises it as deleting something, sending email or inviting people.

Note: A card that waits too long expires. Ask again for a fresh one. A card from an automation stays open until that automation's next run, for at least 30 minutes and at most 7 days. A card for a call Executor paused lasts as long as Executor keeps the call, about 15 minutes. [Automations](automations.md) can't change anything unless you allowed it when you set them up, and their changes wait for you unless Autopilot is on. Executor tools are the exception, as that page explains.

## Notion backups (Pro)

Keep copies of your Notion pages in TTFunnel. In **Settings › Activity**, connect Notion for backups, pick the pages, and choose every day, every Sunday, or only when you press **Back up now**.

**Restore a page** brings back a saved version, as a change to approve. **Download backup** gets everything as a zip. Old versions are kept for 90 days, removed pages for a year.
