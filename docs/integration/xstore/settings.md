---
sidebar_position: 9
title: Settings
description: A guide on Settings
slug: /integration/estore/settings
tags: ["e-Commerce", "X-Store", "Settings"]
---

The Settings module consists of three main sections to help you manage your organization:

- **Company** - Manage your organization's profile and configuration
- **Users** - Control team member access and invitations
- **Permissions** - Define roles and access control

## Company Settings

### Overview

View and update your company's information, including business details and API configurations.
:::info
Check out our [setup-guide](../xstore/setup#step-1-create-company) for detailed instructions on creating your company profile.
:::

![company-overview](../../../static/img/xstore/settings/company-overview.png)

### Company Information

Your company profile displays:

- Company ID
- Company name
- Logo
- Registration number
- Email address
- Phone number

**SQL Account Integration**

Configure your SQL Account API access by setting up:

- Access key
- Secret key

![company-information](../../../static/img/xstore/settings/company-information.png)
:::info
For more details on SQL Account configuration, see our [Setup Guide](../xstore/setup#step-3-configure-company-settings).
:::

#### Update Company Logo

Click on your current logo to upload a new one.

![company-logo-upload-flow](../../../static/img/xstore/settings/company-logo-upload-flow.png)

### Editing Company Details

**To update your company information:**

1. Click the **Update Company Details** button

   ![company-update-details-button](../../../static/img/xstore/settings/company-update-details-button.png)

2. Modify any of the following fields:

   - Company name
   - Registration number
   - Email address
   - Phone number

3. Click **Save** to apply changes

   ![company-update-details-page](../../../static/img/xstore/settings/company-update-details-page.png)

:::warning Validation Required
You must provide valid email and phone number formats. Invalid entries will trigger a warning message.
:::

![company-update-details-warning](../../../static/img/xstore/settings/company-update-details-warning.png)

**Canceling Changes**

If you click **Cancel** after making edits, you'll see a confirmation dialog. Click **Continue** to discard your changes.

![company-update-details-cancel](../../../static/img/xstore/settings/company-update-details-cancel.png)

## Users Settings

### Overview

Manage your team members, including viewing, editing, inviting, and removing users.

![user-management-overview](../../../static/img/xstore/settings/user-management-overview.png)

### Active Users Table

The users table displays all team members with their name, ID (with copy function), email, phone number, assigned role, status, and actions. Use the search bar to filter users by name, ID, email, or phone number. Your account always appears in the first row.

![user-management-table](../../../static/img/xstore/settings/user-management-table.png)

| Column         | Description                 |
| -------------- | --------------------------- |
| User Name & ID | Full name with copyable ID  |
| Email          | Contact email address       |
| Phone Number   | Contact phone number        |
| Role           | User role in company        |
| Status         | User status in company      |
| Actions        | Edit and Remove user        |

### Editing User Details

You can modify a user's role and status directly in the table.

1. Click the **Edit** icon in the user's row
1. Update the desired fields
2. Click the **Save** button

![user-management-update](../../../static/img/xstore/settings/user-management-update.png)

### Removing Users

1. Click the **Delete** icon in the user's row
2. Type `delete user` in the confirmation dialog
3. Click **Continue** to remove the user

![user-management-remove-user](../../../static/img/xstore/settings/user-management-remove-user.png)

### Inviting New Users

#### Step 1: Enter User Details

1. Click the **Invite Users** button
2. In the dialog, enter either:
   - Email address (press Enter after each email)
   - User ID
3. Click **Batch Invite** to add users to the invitation list

:::info Finding User ID
User IDs appear in the users table. Ask the person you want to invite to copy their ID and send it to you.
:::

![user-invitation-input](../../../static/img/xstore/settings/user-invitation-input.png)

#### Step 2: Assign Roles and Send

1. Select a role from the **Role** dropdown for each user
2. Click **Send Invitation** to send all invitations
3. Use **Clear All** to remove all pending invitations from the list

![user-invitation-send](../../../static/img/xstore/settings/user-invitation-send.png)

#### Step 3: Review Invitation Status

After sending, you'll see a status summary showing:

| Status     | Meaning                         |
| ---------- | ------------------------------- |
| ✅ Success | Invitation sent successfully    |
| ℹ️ Exist   | User already joined the company |
| ❌ Failed  | Invitation could not be sent    |

![user-invitation-status](../../../static/img/xstore/settings/user-invitation-status.png)

### Managing Pending Invitations

Click **Pending Invitations** to switch to the pending list view.

- Shows invitations not yet accepted
- Includes a **Revoke** button for each invitation
- Invitations expire after 24 hours
- Expired invitations must be resent

![user-invitation-pending-list](../../../static/img/xstore/settings/user-invitation-pending-list.png)

### Accepting Invitations

Recipients receive an email with an invitation link.

:::tip Invitation with User ID
Users invited by User ID join the company immediately without needing to accept an invitation.
:::

![user-invitation-email](../../../static/img/xstore/settings/user-invitation-email.png)

**Option 1: Sign in with Passkey**

Log in using a Passkey and redirect to the Company List page.

:::info Prerequisite
You must register a user account with a passkey before using this method to accept the invitation.
:::

![user-invitation-accept-passkey](../../../static/img/xstore/settings/user-invitation-accept-passkey.png)

**Option 2: Sign up with Email**

Register a new account, log in automatically, and redirect to the Company List page.

![user-invitation-accept-email](../../../static/img/xstore/settings/user-invitation-accept-email.png)

## Permissions Settings

:::info
Currently add, edit and delete roles are not available
:::

### Overview

Define and manage roles with specific permissions to control what users can do in the system.

The roles table displays:

- Role name
- Last updated date
- Updated by (user name)
- Action buttons (Edit, Delete)

![permissions-overview](../../../static/img/xstore/settings/permissions-overview.png)

### Editing Roles

1. Click the **Edit** icon in the role's row
2. Update the role name or adjust permissions
3. Click **Update Role**
4. Confirm your changes by clicking **Continue**

![permissions-role-edit](../../../static/img/xstore/settings/permissions-role-edit.png)

### Deleting Roles

1. Click the **Delete** icon
2. Confirm the deletion in the dialog

:::warning Deletion Requirements
Roles can only be deleted if they're not assigned to any users. If the role is in use, you'll see a warning message.
:::

![permissions-role-delete](../../../static/img/xstore/settings/permissions-role-delete.png)

### Creating New Roles

1. Click **Create Role** at the top right of the table

   ![permissions-role-create-button](../../../static/img/xstore/settings/permissions-role-create-button.png)

2. In the dialog:
   - Enter a role name
   - Select the permissions to assign
3. Click **Create Role**
4. Confirm by clicking **Continue**

![permissions-role-create-dialog](../../../static/img/xstore/settings/permissions-role-create-dialog.png)
