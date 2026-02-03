---
sidebar_position: 2
title: Order Detail
description: Guide to managing order details and actions in XStore
slug: /integration/xstore/order-details
tags: ["e-Commerce", "X-Store", "Order Detail"]
---

## Overview

**Order Detail** allows you to view individual order information and perform actions such as cancellations, returns, and refunds. To access this page, click the **Document** icon on any order row.

![order-detail-enter](../../../../static/img/xstore/order-details/order-detail-enter.png)

![order-detail-overview](../../../../static/img/xstore/order-details/order-detail-overview.png)

The Order Details interface allows you to:

- View order information
- Perform order actions (cancel, return, refund)
- Map order items to stock items

> **Quick Feature:** Use the mapping button to quickly link order items to your stock items directly from this page.

## Lazada

### Order Detail Page

![lazada-order-detail](../../../../static/img/xstore/order-details/lazada/order-detail.png)

| Section              | Details                                     |
| -------------------- | ------------------------------------------- |
| **Order Details**    | Order ID, Shop ID, Payment Method           |
| **Payment Details**  | Currency, Payment Time                      |
| **Shipment Details** | Provider type, Shipping type, address, etc. |
| **Voucher Details**  | Applied discounts and promotions on an item |

Order items are grouped by package and tracking ID.

![lazada-cancelled-order-item](../../../../static/img/xstore/order-details/lazada/cancelled-order-item.png)

> **Note:** Cancelled items display a red badge indicating the cancellation reason.

### Return Order Info

![lazada-return-order-info](../../../../static/img/xstore/order-details/lazada/return-order-info.png)

### Cancel Order Info

![lazada-cancel-order-info](../../../../static/img/xstore/order-details/lazada/cancel-order-info.png)

### Repack Order

![lazada-repack-order](../../../../static/img/xstore/order-details/lazada/repack-order.png)

**Available for:** Orders in the **To Process** tab

Use the Repack action to repack specific items in the order after cancellation of specific items.

### Cancel Order (Seller-Initiated)

![lazada-cancel-order-button](../../../../static/img/xstore/order-details/lazada/seller-cancel-order.png)

**Available for:** Orders in **New Order**, **To Process**, or **To Ship** tabs

**Steps to cancel:**

1. Click the **Cancel Order** button
2. Select the cancellation reason
3. Choose the items to cancel
4. Submit the cancellation request

![lazada-cancel-order-form](../../../../static/img/xstore/order-details/lazada/seller-cancel-order-form.png)

![lazada-cancel-order-warning](../../../../static/img/xstore/order-details/lazada/seller-cancel-order-form-warning.png)

> **Warning:** Hover over the warning icon to see Lazada's cancellation policies and potential consequences on this order.

### Return Order (Buyer-Initiated)

![lazada-return-order](../../../../static/img/xstore/order-details/lazada/buyer-return-order.png)

When a buyer initiates a return, the order moves to the **To Return** tab for seller approval.

**Return Processing Options:** May vary based on reason details

| Option                | Description                                |
| --------------------- | ------------------------------------------ |
| **Refund Only**       | Issue refund without requiring item return |
| **Return and Refund** | Refund after receiving returned item       |
| **Reject Refund**     | Decline the refund request with evidence   |

**1. Refund Only**

During **"Request Initiate"** status, process the refund directly to the buyer.

**2. Return and Refund**

![lazada-confirm-return-receipt](../../../../static/img/xstore/order-details/lazada/buyer-return-order-confirm-return-receipt.png)

During **"Buyer Return Item"** status:

1. Wait for the item to be returned
2. Click **Confirm Return Receipt** when received
3. Process the refund

![lazada-process-refund](../../../../static/img/xstore/order-details/lazada/buyer-return-order-process-refund.png)

**3. Reject Refund**

![lazada-reject-refund](../../../../static/img/xstore/order-details/lazada/buyer-return-order-reject.png)

To reject a refund request:

1. Provide a reason for rejection
2. Upload supporting evidence
3. Submit for platform review

**4. Refund Pending**

![lazada-refund-pending](../../../../static/img/xstore/order-details/lazada/buyer-return-order-refund-pending.png)

After processing, the status changes to **Refund Pending** while Lazada processes and reviews the refund.

## Shopee

### Order Detail Page

![shopee-order-detail](../../../../static/img/xstore/order-details/shopee/order-detail.png)

The order information section displays:

| Section              | Details                                   |
| -------------------- | ----------------------------------------- |
| **Buyer Details**    | Customer username, user ID and address    |
| **Payment Details**  | Payment method, Currency and Payment time |
| **Shipment Details** | Carrier information                       |
| **Extra Details**    | Additional order notes and info           |

### Return Order Info

![shopee-return-order-info](../../../../static/img/xstore/order-details/shopee/return-order-info.png)

### Cancel Order (Seller-Initiated)

![shopee-cancel-order-button](../../../../static/img/xstore/order-details/shopee/seller-cancel-order.png)

**Available for:** Orders in the **New Order** and **To Process** tabs

![shopee-cancel-order-form](../../../../static/img/xstore/order-details/shopee/seller-cancel-order-form.png)

**Out of Stock Cancellation:**

![shopee-cancel-order-out-of-stock](../../../../static/img/xstore/order-details/shopee/seller-cancel-order-outofstock.png)

When selecting "Out of Stock" as the reason:

1. Select the out-of-stock items
2. Submit the cancellation

> **Note:** Cancelling with "Out of Stock" may reset the item quantity to 0 on the platform.

### Cancel Order (Buyer-Initiated)

![shopee-cancel-order-button](../../../../static/img/xstore/order-details/shopee/buyer-cancel-order.png)

Sellers can accept or reject the buyer's cancellation request.

### Return Order (Buyer-Initiated)

**1. Refund Only**

![shopee-refund-only](../../../../static/img/xstore/order-details/shopee/buyer-refund-only.png)

When a buyer requests **Refund Only**, review the request and choose between approving or rejecting.

**2. Return and Refund (Buyer's Offer)**

![shopee-return-refund-action](../../../../static/img/xstore/order-details/shopee/buyer-return-refund-action.png)

When the latest offer is from the buyer, you can:

| Action           | Description                       |
| ---------------- | --------------------------------- |
| **Create Offer** | Counter with a new offer amount   |
| **Accept Offer** | Accept the buyer's proposed terms |
| **Dispute**      | Escalate to Shopee for resolution |

**3. Return and Refund (Seller's Offer)**

![shopee-return-refund-order](../../../../static/img/xstore/order-details/shopee/buyer-return-refund.png)

When you've made an offer and are awaiting buyer response, you can still modify your offer.

**Create Offer Form:**

![shopee-create-offer-form](../../../../static/img/xstore/order-details/shopee/buyer-return-refund-create-offer.png)

**Dispute Form:**

![shopee-dispute-form](../../../../static/img/xstore/order-details/shopee/buyer-return-refund-dispute.png)

## TikTok

### Order Detail Page

![tiktok-order-detail](../../../../static/img/xstore/order-details/tiktok/order-detail.png)

The order information section displays:

| Section              | Details                                   |
| -------------------- | ----------------------------------------- |
| **Order Details**    | Order ID, Order status, Payment method    |
| **Buyer Details**    | Customer name and shipping address        |
| **Payment Details**  | Payment method, Currency and Payment time |
| **Shipping Details** | Carrier information                       |

### Cancel Order Info

![tiktok-cancel-order-info](../../../../static/img/xstore/order-details/tiktok/cancel-order-info.png)

Displays cancellation details including the cancel reason and initiator when an order has been cancelled.

### Return Order Info

![tiktok-return-order-info](../../../../static/img/xstore/order-details/tiktok/return-order-info.png)

Displays return request details including the return reason, status, and refund amount when a buyer initiates a return.

### Cancel Order (Seller-Initiated)

![tiktok-cancel-order-button](../../../../static/img/xstore/order-details/tiktok/seller-cancel-order.png)

**Available for:** Orders in the **New Order** and **To Process** tabs

![tiktok-cancel-order-form](../../../../static/img/xstore/order-details/tiktok/seller-cancel-order-form.png)

Select a cancellation reason and submit to cancel the order.

### Cancel Order (Buyer-Initiated)

![tiktok-buyer-cancel-request](../../../../static/img/xstore/order-details/tiktok/buyer-cancel-order.png)

When a buyer requests cancellation, choose your response:

**Approve Cancellation:**

![tiktok-approve-cancellation](../../../../static/img/xstore/order-details/tiktok/buyer-cancel-order-approve.png)

**Reject Cancellation:**

![tiktok-reject-cancellation](../../../../static/img/xstore/order-details/tiktok/buyer-cancel-order-reject.png)

### Return or Refund Order (Buyer-Initiated)

The buttons will be shown according to the **Return Type** and **Return Status**

![tiktok-return-or-refund-request](../../../../static/img/xstore/order-details/tiktok/buyer-return-order.png)

**Reject Return or Refund:**

![tiktok-reject-return-or-refund](../../../../static/img/xstore/order-details/tiktok/buyer-return-order-reject.png)

**Approve Return:**

![tiktok-approve-return](../../../../static/img/xstore/order-details/tiktok/buyer-return-order-approve-return.png)

**Full Refund:**

![tiktok-approve-refund](../../../../static/img/xstore/order-details/tiktok/buyer-return-order-approve-refund.png)

**Partial Refund:**

![tiktok-approve-partial-refund](../../../../static/img/xstore/order-details/tiktok/buyer-return-order-approve-partial-refund.png)

## Shopify

### Order Detail Page

![shopify-order-detail](../../../../static/img/xstore/order-details/shopify/order-detail.png)

The order information section includes:

| Section              | Details                    |
| -------------------- | -------------------------- |
| **Buyer Details**    | Customer name and email    |
| **Payment Details**  | Payment method             |
| **Shipping Details** | Delivery address           |

### Order Actions

![shopify-actions](../../../../static/img/xstore/order-details/shopify/order-actions.png)

| Action              | Description                                        | Availability                                        |
| ------------------- | -------------------------------------------------- | --------------------------------------------------- |
| **Mark As Paid**    | Manually record an order as paid.                  | Only for orders awaiting payment.                   |
| **Update Tracking** | Update carrier, tracking number, and tracking URL. | Available for all orders.                           |
| **Create Return**   | Initiate a return and refund for the buyer.        | Only for fulfilled orders.                          |
| **Cancel Order**    | Cancel the order.                                  | Only for orders that have not been fulfilled.       |

#### Update Tracking

![shopify-update-tracking](../../../../static/img/xstore/order-details/shopify/seller-update-tracking.png)

Update the carrier name, tracking number, and shipment URL to keep the buyer informed.

#### Create Return

![shopify-create-return](../../../../static/img/xstore/order-details/shopify/seller-create-return.png)

Sellers can create a return and refund for specific items in an order.

*   **Reason:** A return reason is required and can be selected from the dropdown menu.
*   **Quantity:** Adjust the number of items being returned.

![shopify-create-return-reason](../../../../static/img/xstore/order-details/shopify/seller-create-return-reason.png)

**Refund Options:**
You can choose from three refund methods:
1.  **No Refund:** Mark the return without issuing a refund.
2.  **Refund Selected Item:** Refund only the cost of the items.
3.  **Refund Selected Item with Shipping Cost:** Refund both the items and the shipping fee.

![shopify-create-return-refund-options](../../../../static/img/xstore/order-details/shopify/seller-create-return-refund.png)

> Sellers can manually adjust the final refund amount. You can also choose whether to **restock** the items during this process.

#### Cancel Order

![shopify-cancel-order](../../../../static/img/xstore/order-details/shopify/seller-cancel-order.png)

This action is only available for orders that are **not yet fulfilled**.

*   **Reason:** Selecting a cancellation reason is mandatory.
*   **Refund:** For paid orders, you can choose whether to process a refund immediately.
*   **Notification:** You can choose to notify the customer about the cancellation.

#### Return/Refund (Buyer-Initiated)

This section is available when a buyer requests a return or refund.

![shopify-return-request](../../../../static/img/xstore/order-details/shopify/buyer-request-return-refund.png)

Sellers can choose from the following actions:

*   **Accept and Refund**: Approve the request and issue a full refund to the buyer.
*   **Decline Return**: Reject the request. This does not close the case, and the request may be resubmitted.
*   **Close Return**: Stop the return and refund process. No further action will be taken.
*   **Restock items**: Return the product quantities to your inventory.

![shopify-decline-return](../../../../static/img/xstore/order-details/shopify/buyer-request-return-refund-decline.png)

> For buyer-initiated requests, the refund amount cannot be manually adjusted.



## WooCommerce

### Order Detail Page

![woo-order-detail](../../../../static/img/xstore/order-details/woocommerce/order-detail.png)

The order information section displays:

| Section              | Details                                                            |
| -------------------- | ------------------------------------------------------------------ |
| **Payment Details**  | Currency, Payment Method, Method Title, Tax Included, Payment time |
| **Shipping Details** | Shipping Address and Billing Address                               |

### Order Notes

![woo-order-note](../../../../static/img/xstore/order-details/woocommerce/order-notes.png)

Allow seller to add Private or Customer Note

### Order Actions

![woo-order-action](../../../../static/img/xstore/order-details/woocommerce/order-actions.png)

| Actions            | Details                                                                                   |
| ------------------ | ----------------------------------------------------------------------------------------- |
| **Cancel Order**   | Cancel a created order, available for **Pending**, **On Hold**, and **Precessing** orders |
| **Process Refund** | Refund an order                                                                           |

**Cancel Order:**

![woo-seller-cancel-order](../../../../static/img/xstore/order-details/woocommerce/seller-cancel-order.png)

**Process Refund:**

![woo-seller-create-refund](../../../../static/img/xstore/order-details/woocommerce/seller-create-refund.png)