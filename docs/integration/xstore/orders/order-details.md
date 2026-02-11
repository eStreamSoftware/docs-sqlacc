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

:::info
**Quick Feature:** Use the mapping button to quickly link order items to your stock items directly from this page.
:::

## Lazada

### Order Detail Page

![lazada-order-detail](../../../../static/img/xstore/order-details/lazada/order-detail.png)

| Section            | Details                                                                                   |
| -------------------| ------------------------------------------------------------------------------------------|
| **Order Items**    | The item details in the order, including the status and shipping details                  |
| **Order Details**  | The other information of the order, including payment details. shipping details, and etc. |
| **Summary**        | The summary payment information                                                           |

#### Return Order Info

![lazada-return-order-info](../../../../static/img/xstore/order-details/lazada/return-order-info.png)

#### Cancel Order Info

![lazada-cancel-order-info](../../../../static/img/xstore/order-details/lazada/cancel-order-info.png)

### Repack Order

:::info
Available for orders in the **To Process** tab
:::

![lazada-repack-order](../../../../static/img/xstore/order-details/lazada/repack-order.png)

Use the **Repack** action to repack specific items in the order after cancellation of specific items.

### Cancel Order (Seller-Initiated)

:::info
Available for orders in the **New Order**, **To Process**, and **To Ship** tabs
:::

![lazada-cancel-order-button](../../../../static/img/xstore/order-details/lazada/seller-cancel-order.png)

1. Click the **Cancel Order** button at the top right corner

2. Select the cancellation reason and choose the items to cancel

    ![lazada-cancel-order-form](../../../../static/img/xstore/order-details/lazada/seller-cancel-order-form.png)

3. Submit the cancellation request

:::warning
Hover over the warning icon to see Lazada's cancellation policies and potential consequences on this order.

![lazada-cancel-order-warning](../../../../static/img/xstore/order-details/lazada/seller-cancel-order-form-warning.png)
:::

### Return Order (Buyer-Initiated)

:::info
When a buyer initiates a return, the order moves to the **To Return** tab for seller approval.

Return and Refund process may **vary based on the reason** selected by buyers.
:::

![lazada-return-order](../../../../static/img/xstore/order-details/lazada/buyer-return-order.png)

#### 1. Refund Only

During **"Request Initiate"** status, process the refund directly to the buyer.

#### 2. Return and Refund

![lazada-confirm-return-receipt](../../../../static/img/xstore/order-details/lazada/buyer-return-order-confirm-return-receipt.png)

During **"Buyer Return Item"** status:
  1. Wait for the item to be returned
  2. Click **Confirm Return Receipt** when received
  3. Refresh or Resync the order to go to next step
  4. Process or Reject the refund request
    
    ![lazada-process-refund](../../../../static/img/xstore/order-details/lazada/buyer-return-order-process-refund.png)

#### 3. Reject Refund

![lazada-reject-refund](../../../../static/img/xstore/order-details/lazada/buyer-return-order-reject.png)

To reject a refund request:
  1. Provide a reason for rejection
  2. Upload supporting evidence
  3. Submit for platform review

#### 4. Refund Pending

![lazada-refund-pending](../../../../static/img/xstore/order-details/lazada/buyer-return-order-refund-pending.png)

After processing, the status changes to **Refund Pending** while Lazada processes and reviews the refund.

## Shopee

### Order Detail Page

![shopee-order-detail](../../../../static/img/xstore/order-details/shopee/order-detail.png)

| Section            | Details                                                                                   |
| -------------------| ------------------------------------------------------------------------------------------|
| **Order Items**    | The item details in the order, including the status and shipping details                  |
| **Order Details**  | The other information of the order, including buyer details. payment details, and etc.    |
| **Summary**        | The summary payment information                                                           |

#### Return Order Info

![shopee-return-order-info](../../../../static/img/xstore/order-details/shopee/return-order-info.png)

#### Cancel Order Info

![shopee-cancel-order-info](../../../../static/img/xstore/order-details/shopee/cancel-order-info.png)

### Cancel Order (Seller-Initiated)

:::info
Available for orders in the **New Order** and **To Process** tabs
:::

![shopee-cancel-order-button](../../../../static/img/xstore/order-details/shopee/seller-cancel-order.png)

1. Click the **Cancel Order** button at the top right corner

2. Select the cancellation reason

  ![shopee-cancel-order-form](../../../../static/img/xstore/order-details/shopee/seller-cancel-order-form.png)

3. For **Our of stock cancellation**, need to select the out of stock items

  ![shopee-cancel-order-out-of-stock](../../../../static/img/xstore/order-details/shopee/seller-cancel-order-outofstock.png)

4. Submit the cancellation request

:::warning
Cancelling with "Out of Stock" may reset the item quantity to 0 on the platform
:::

### Cancel Order (Buyer-Initiated)

![shopee-cancel-order-button](../../../../static/img/xstore/order-details/shopee/buyer-cancel-order.png)

Sellers can accept or reject the buyer's cancellation request.

### Return Order (Buyer-Initiated)

#### 1. Refund Only

![shopee-refund-only](../../../../static/img/xstore/order-details/shopee/buyer-refund-only.png)

When a buyer requests **Refund Only**, review the request and confirm refund.

#### 2. Return and Refund (Buyer's Offer)

![shopee-return-refund-action](../../../../static/img/xstore/order-details/shopee/buyer-return-refund.png)

When the latest offer is from the buyer, you can:

  | Action           | Description                       |
  | ---------------- | --------------------------------- |
  | **Create Offer** | Counter with a new offer amount   |
  | **Accept Offer** | Accept the buyer's proposed terms |
  | **Dispute**      | Escalate to Shopee for resolution |

#### 3. Return and Refund (Seller's Offer)

![shopee-return-refund-order](../../../../static/img/xstore/order-details/shopee/seller-return-refund.png)

When you've made an offer and are awaiting buyer response, you can still modify your offer.

#### Create Offer Form:

![shopee-create-offer-form](../../../../static/img/xstore/order-details/shopee/buyer-return-refund-create-offer.png)

#### Dispute Form:

![shopee-dispute-form](../../../../static/img/xstore/order-details/shopee/buyer-return-refund-dispute.png)

## TikTok

### Order Detail Page

![tiktok-order-detail](../../../../static/img/xstore/order-details/tiktok/order-detail.png)

| Section            | Details                                                                                   |
| -------------------| ------------------------------------------------------------------------------------------|
| **Order Items**    | The item details in the order, including the status and shipping details                  |
| **Order Details**  | The other information of the order, including buyer details. payment details, and etc.    |
| **Summary**        | The summary payment information                                                           |

#### Cancel Order Info

![tiktok-cancel-order-info](../../../../static/img/xstore/order-details/tiktok/cancel-order-info.png)

#### Return Order Info

![tiktok-return-order-info](../../../../static/img/xstore/order-details/tiktok/return-order-info.png)

### Cancel Order (Seller-Initiated)

:::info
Available for orders in the **New Order** and **To Process** tabs
:::

![tiktok-cancel-order-button](../../../../static/img/xstore/order-details/tiktok/seller-cancel-order.png)

1. Click the **Cancel Order** button at the top right corner

2. Select the cancellation reason

  ![tiktok-cancel-order-form](../../../../static/img/xstore/order-details/tiktok/seller-cancel-order-form.png)

3. Submit the cancellation request

### Cancel Order (Buyer-Initiated)

![tiktok-buyer-cancel-request](../../../../static/img/xstore/order-details/tiktok/buyer-cancel-order.png)

When a buyer requests cancellation, choose your response:
  1. **Approve Cancellation:**

    ![tiktok-approve-cancellation](../../../../static/img/xstore/order-details/tiktok/buyer-cancel-order-approve.png)

  2. **Reject Cancellation:**

    ![tiktok-reject-cancellation](../../../../static/img/xstore/order-details/tiktok/buyer-cancel-order-reject.png)

### Return or Refund Order (Buyer-Initiated)

![tiktok-return-or-refund-request](../../../../static/img/xstore/order-details/tiktok/buyer-return-order.png)

The buttons will be shown according to the **Return Type** and **Return Status**
  1. **Reject Return or Refund:**

    ![tiktok-reject-return-or-refund](../../../../static/img/xstore/order-details/tiktok/buyer-return-order-reject.png)

  2. **Approve Return:**

    ![tiktok-approve-return](../../../../static/img/xstore/order-details/tiktok/buyer-return-order-approve-return.png)

## Shopify

### Order Detail Page

![shopify-order-detail](../../../../static/img/xstore/order-details/shopify/order-detail.png)

| Section            | Details                                                                                   |
| -------------------| ------------------------------------------------------------------------------------------|
| **Order Items**    | The item details in the order, including the status and shipping details                  |
| **Order Details**  | The other information of the order, including payment details. shipping details, and etc. |
| **Summary**        | The summary payment information                                                           |

### Order Actions

![shopify-actions](../../../../static/img/xstore/order-details/shopify/order-actions.png)

| Action              | Description                                        | 
| ------------------- | -------------------------------------------------- | 
| **Mark As Paid**    | Manually record an order as paid.                  | 
| **Update Tracking** | Update carrier, tracking number, and tracking URL. | 
| **Create Return**   | Initiate a return and refund for the buyer.        | 
| **Cancel Order**    | Cancel the order.                                  | 

#### Update Tracking

:::info
Available for all orders
:::

![shopify-update-tracking](../../../../static/img/xstore/order-details/shopify/seller-update-tracking.png)

Update the carrier name, tracking number, and shipment URL to keep the buyer informed.

#### Create Return

:::info
Available for fulfilled orders only
:::

![shopify-create-return](../../../../static/img/xstore/order-details/shopify/seller-create-return.png)

![shopify-create-return-reason](../../../../static/img/xstore/order-details/shopify/seller-create-return-reason.png)

Sellers can create a return and refund for specific items in an order.

*   **Reason:** A return reason is required and can be selected from the dropdown menu.
*   **Quantity:** Adjust the number of items being returned.

![shopify-create-return-refund-options](../../../../static/img/xstore/order-details/shopify/seller-create-return-refund.png)

**Refund Options:**
You can choose from three refund methods:
1.  **No Refund:** Mark the return without issuing a refund.
2.  **Refund Selected Item:** Refund only the cost of the items.
3.  **Refund Selected Item with Shipping Cost:** Refund both the items and the shipping fee.

Sellers can manually adjust the final refund amount. You can also choose whether to **restock** the items during this process.

#### Cancel Order

:::info
Available for orders that have not been fulfilled
:::

![shopify-cancel-order](../../../../static/img/xstore/order-details/shopify/seller-cancel-order.png)

1. Click the **Cancel Order** button at the top right corner
2. Select the cancellation reason
3. You can choose to notify the customer about the cancellation or process refund
4. Submit the cancellation request

### Return or Refund Order (Buyer-Initiated)

This section is available when a buyer requests a return or refund.

![shopify-return-request](../../../../static/img/xstore/order-details/shopify/buyer-request-return-refund.png)

Sellers can choose from the following actions:

*   **Accept and Refund**: Approve the request and issue a full refund to the buyer
*   **Decline Return**: Reject the request. This does not close the case, and the request may be resubmitted
*   **Close Return**: Stop the return and refund process. No further action will be taken

:::info
For buyer-initiated requests, the refund amount cannot be manually adjusted
:::

## WooCommerce

### Order Detail Page

![woo-order-detail](../../../../static/img/xstore/order-details/woocommerce/order-detail.png)

| Section            | Details                                                                                   |
| -------------------| ------------------------------------------------------------------------------------------|
| **Order Items**    | The item details in the order, including the status and shipping details                  |
| **Order Details**  | The other information of the order, including payment details. shipping details, and etc. |
| **Summary**        | The summary payment information                                                           |

### Order Notes

![woo-order-note](../../../../static/img/xstore/order-details/woocommerce/order-notes.png)

Allows the seller to add Private or Customer Notes

### Order Actions

![woo-order-action](../../../../static/img/xstore/order-details/woocommerce/order-actions.png)

| Actions            | Details                |
| ------------------ | -----------------------|
| **Cancel Order**   | Cancel a created order |
| **Process Refund** | Refund an order        |

#### Cancel Order:

:::info
Available for **Pending**, **On Hold** and **Processing** orders
:::

![woo-seller-cancel-order](../../../../static/img/xstore/order-details/woocommerce/seller-cancel-order.png)

#### Process Refund:

![woo-seller-create-refund](../../../../static/img/xstore/order-details/woocommerce/seller-create-refund.png)