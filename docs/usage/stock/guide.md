---
sidebar_position: 1
title: Guide
description: Stock Guide
slug: /usage/stock/guide
tags: ["Inventory Management", "Stock Control", "Product Setup"]
---

## Maintain Stock Group

1. **Stock** > **Maintain Stock Group**.

2. It is commonly used to categorize stock based on the following considerations:

    - Brandings, e.g., **Apple, Sony, Samsung, LG**, etc.
    - Different **costing methods**;
    - Product types, e.g., **raw materials, trading products, manufactured products**;
    - To report different sales/purchase accounts in the **Profit & Loss Statement**.

    ![mtn-stock-grp-list](../../../static/img/usage/stock/stock-guide/mtn-stock-grp-list.png)

3. The Maintain Stock Group form is shown in the screenshot below.

    ![mtn-stock-grp](../../../static/img/usage/stock/stock-guide/mtn-stock-grp.png)

    | **Field Name**         | **Explanation & Properties**                                                                                       |
    | ---------------------- | ------------------------------------------------------------------------------------------------------------------ |
    | **Code**               | • Input the new Stock Group code <br /> • Field type: Alphanumerical <br /> • Length: 20                           |
    | **Description**        | • Input the Stock Group description <br /> • Field type: Alphanumerical <br /> • Length: 200                       |
    | **Costing Method**     | • Select an appropriate Costing Method for stock valuation <br /> • Options: FIFO, Weighted Average, Fixed Costing |
    | **Sales Code**         | • Select a GL Account for Sales                                                                                    |
    | **Cash Sales Code**    | • Select a GL Account for Cash Sales                                                                               |
    | **S.Return Code**      | • Select a GL Account for Sales Returns Inward                                                                     |
    | **Purchase Code**      | • Select a GL Account for Purchase                                                                                 |
    | **Cash Purchase Code** | • Select a GL Account for Cash Purchase                                                                            |
    | **P.Return Code**      | • Select a GL Account for Purchase Returns Outward                                                                 |

## Maintain Stock Item

1. **Stock** > **Maintain Stock Item**.

2. Used to set up the stock item list.

    ![mtn-stock-item-list](../../../static/img/usage/stock/stock-guide/mtn-stock-item-list.png)

### Main Header

1. The Maintain Stock Item entry form is shown in the screenshot below.

    ![mtn-stock-item-main-header](../../../static/img/usage/stock/stock-guide/mtn-stock-item-main-header.png)

    | **Field Name**      | **Explanation & Properties**                                                                                                                                                                |
    | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | **Code**            | • Input the new Stock Code <br /> • Field type: Alphanumerical <br /> • Length: 30                                                                                                          |
    | **Description**     | • Input the Stock Description (This usually appears in most document printouts, e.g., invoices, purchase orders, etc.) <br /> • Field type: Alphanumerical <br /> • Length: 200             |
    | **2nd Description** | • Input the 2nd Description, e.g., size, alternative product name <br /> • Field type: Alphanumerical <br /> • Length: 200                                                                  |
    | **Serial No.**      | • Tick to enable serial control items (Requires Serial Number module) <br /> • Field type: Checkbox                                                                                         |
    | **Stock Control**   | • Tick to enable stock control. The system will check availability to ensure the stock balance does not fall below zero or the reorder level. <br /> • Field type: Checkbox                 |
    | **Active**          | • Tick for stock in use <br /> • Untick for discontinued stock <br /> • Field type: Checkbox                                                                                                |
    | **Item Group**      | • Select an appropriate Stock Group                                                                                                                                                         |
    | **Base UOM**        | • Enter a base UOM for stock valuation, e.g., UNIT                                                                                                                                          |
    | **Ref. Cost**       | • Enter a standard cost                                                                                                                                                                     |
    | **Ref. Price**      | • Enter a standard selling price                                                                                                                                                            |
    | **Shelf**           | • Enter a shelf/rack no., e.g., A-01, A-02, A-03 in location A                                                                                                                              |
    | **Reorder Level**   | • Enter a stock reorder level to alert for new orders <br /> • Refer to menu: Stock \ Print Stock Reorder Advice...                                                                         |
    | **Reorder Qty**     | • Enter a reorder qty (MOQ)                                                                                                                                                                 |
    | **Lead Time**       | • Enter a lead time to receive the goods                                                                                                                                                    |
    | **Output Tax**      | • Enter a default Output Tax                                                                                                                                                                |
    | **Input Tax**       | • Enter a default Input Tax                                                                                                                                                                 |
    | **Remark 1**        | • Free field to enter extra info                                                                                                                                                            |
    | **Remark 2**        | • Free field to enter extra info                                                                                                                                                            |
    | **Barcode**         | • Enter a barcode (represents base UOM)                                                                                                                                                     |
    | **Tariff**          | • Assign a tariff code <br /> • Lookup from Maintain Tax <br /> • Related Topic: [Maintain Customer → Tax Tab](../customer/guide#tax-tab), [Maintain Supplier → Tax](../supplier/guide#tax) |
    | **Bal Qty**         | • Displays the latest qty balance                                                                                                                                                           |

### UOM

1. Allows you to set multiple UOMs, e.g., 1 carton = 12 units.
2. Additionally, you can set the default UOM for Sales, Purchase, and Stock entry forms.
3. See the screenshot below.

    ![mtn-stock-item-uom](../../../static/img/usage/stock/stock-guide/mtn-stock-item-uom.png)

### Cust. Price

1. Allows you to set **multiple pricing/contract prices** for customers.
2. You can use **price tags** to tag the price for a customer.
3. The **Multiple Pricing** module is required.
4. See the screenshot below.

    ![mtn-stock-item-cust-price](../../../static/img/usage/stock/stock-guide/mtn-stock-item-cust-price.png)

### Supp. Price

1. Allows you to set **multiple pricing/contract prices** for suppliers.
2. You can use **price tags** to tag the price for a supplier.
3. The **Multiple Pricing** module is required.
4. See the screenshot below.

    ![mtn-stock-item-supp-price](../../../static/img/usage/stock/stock-guide/mtn-stock-item-supp-price.png)

- Related Topic : [How does the Price Tag work?](https://sites.google.com/site/sqlestream/sql-financial-accounting/7-system-setting/7-20-how-is-the-price-tag-work)

### Reorder By Location

Reorder Level by Location allows you to set different inventory parameters for the same item at different locations.
For each location, you can preset:

- Reorder Level
- Reorder Quantity
- Minimum Quantity
- Maximum Quantity
- Shelf
- Lead Time

This gives you greater flexibility to manage stock levels based on the specific requirements of each location.

![mtn-stock-item-reorder-lvel-by-location](../../../static/img/usage/stock/stock-guide/mtn-stock-item-reorder-level-by-location.png)

Please refer to [Reorder Level by Location](#reorder-level-by-location) for setup instructions.

### BOM

1. Allows you to set up **recipes/ingredients** for a manufactured product.
2. The **Bill of Materials** module is required.
3. See the screenshot below.

    ![mtn-stock-item-bom](../../../static/img/usage/stock/stock-guide/mtn-stock-item-bom.png)

### More Desc

1. Enter the product details or specifications.
2. See the screenshot below.

    ![mtn-stock-item-more-desc](../../../static/img/usage/stock/stock-guide/mtn-stock-item-more-desc.png)

    > **Tips:**
    > Example view from Sales Tax Invoice:

    ![mtn-stock-item-more-desc1](../../../static/img/usage/stock/stock-guide/mtn-stock-item-more-desc1.png)

### Opn Bal

1. Used to enter the opening stock quantity and value balances.

    ![mtn-stock-item-opn-bal](../../../static/img/usage/stock/stock-guide/mtn-stock-item-opn-bal.png)

### Category

1. Used to set multiple stock categories for reporting purposes, e.g., country of origin, brands, etc.
2. See the screenshot below.

    ![mtn-stock-item-category](../../../static/img/usage/stock/stock-guide/mtn-stock-item-category.png)

### Alternative

1. Enables you to identify alternative items for replacement.

    ![mtn-stock-item-alternative](../../../static/img/usage/stock/stock-guide/mtn-stock-item-alternative.png)

### Cust. Item

1. Used to enter the **customer item code** and **description**.
2. The purpose is to search for or print the customer item code and description in a tax invoice instead of using the original item description.

    ![mtn-stock-item-cust-item](../../../static/img/usage/stock/stock-guide/mtn-stock-item-cust-item.png)

### Supp. Item

1. Used to enter the **supplier item code** and **description**.
2. The purpose is to search for or print the supplier item code and description in a purchase invoice instead of using the original item description.

    ![mtn-stock-item-supp-item](../../../static/img/usage/stock/stock-guide/mtn-stock-item-supp-item.png)

### Barcode

1. Used to enter the barcode for different UOMs.
2. See the screenshot below.

    ![mtn-stock-item-barcode](../../../static/img/usage/stock/stock-guide/mtn-stock-item-barcode.png)

### Note

1. Other stock information.

    | **Field Name**         | **Explanation & Properties**                                                                                           |
    | ---------------------- | ---------------------------------------------------------------------------------------------------------------------- |
    | **Item Creation Date** | • Item creation date. <br /> • Field type: Date                                                                        |
    | **Item Matrix**        | • Requires Stock Matrix module. <br /> • Field type: Lookup                                                            |
    | **Min Qty**            | • Enter the minimum qty. <br /> • Field type: Float                                                                    |
    | **Max Qty**            | • Enter the maximum qty. <br /> • Field type: Float                                                                    |
    | **Picture**            | • Load a product picture. <br /> • Recommended picture size (jpg or jpeg) less than 16kb. <br /> • Field type: Picture |
    | **Note**               | • Enter additional product information for internal view. <br /> • Field type: Rich Text                               |

2. See the screenshot below.

    ![mtn-stock-item-note](../../../static/img/usage/stock/stock-guide/mtn-stock-item-note.png)

    > **Note:**
    > Do not load pictures larger than 16kb to avoid excessive database growth.

## Maintain Stock Category

1. It can be used to further categorize stock besides the stock group.
2. It allows you to set multiple stock categories for a stock item code.
3. Commonly used for:
    1. Brandings, e.g., Apple, Sony, Samsung, LG, etc.
    2. Country of origin.
    3. Product types, e.g., raw materials, trading products, manufactured products.
4. **Stock** > **Maintain Stock Category**.

    ![mtn-stock-category](../../../static/img/usage/stock/stock-guide/mtn-stock-category.png)

5. The Maintain Stock Category form is shown in the screenshot below.

    ![mtn-stock-category1](../../../static/img/usage/stock/stock-guide/mtn-stock-category1.png)

    | **Field Name**  | **Explanation & Properties**                                                                         |
    | --------------- | ---------------------------------------------------------------------------------------------------- |
    | **Code**        | • Input the new **Stock Category** code. <br /> • Field type: Alphanumerical <br /> • Length: 15     |
    | **Description** | • Input the **Stock Category** description. <br /> • Field type: Alphanumerical <br /> • Length: 200 |

## Maintain Stock Category Template

1. It pre-defines the conditions for Stock Category use in reports.
2. It allows you to set conditions using **AND** or **OR** for stock categories.
3. **Stock** > **Maintain Stock Category Template**.

    ![mtn-stock-category-template](../../../static/img/usage/stock/stock-guide/mtn-stock-category-template.png)

4. The Maintain Stock Category Template form is shown in the screenshot below.

    ![mtn-stock-category-template1](../../../static/img/usage/stock/stock-guide/mtn-stock-category-template1.png)

    | **Field Name**  | **Explanation & Properties**                                                                     |
    | --------------- | ------------------------------------------------------------------------------------------------ |
    | **Code**        | • Input the new Stock Category code. <br /> • Field type: Alphanumerical <br /> • Length: 15     |
    | **Description** | • Input the Stock Category description. <br /> • Field type: Alphanumerical <br /> • Length: 200 |
    | **Template**    | • Used to set pre-defined conditions for stock categories.                                       |

### How To Set The Template

-   Use **OR** condition

1. In the **Maintain Category View**, click the **+** sign.
2. Drag the selected **stock category** into the blank line.

    ![mtn-stock-category-template2](../../../static/img/usage/stock/stock-guide/mtn-stock-category-template2.png)

3. You will see the stock category added to the template list as shown in the screenshot below.

    ![mtn-stock-category-template3](../../../static/img/usage/stock/stock-guide/mtn-stock-category-template3.png)

-   Use **AND** condition

1. In the **Maintain Category View**, click the **+** sign.
2. Select multiple stock categories (**Hold CTRL** + click on **stock category**).
3. Drag the selected **stock categories** into the **blank** line.

    ![mtn-stock-category-template4](../../../static/img/usage/stock/stock-guide/mtn-stock-category-template4.png)

4. You will see the stock categories added to the template list as shown in the screenshots below.

    ![mtn-stock-category-template5](../../../static/img/usage/stock/stock-guide/mtn-stock-category-template5.png)

    ![mtn-stock-category-template6](../../../static/img/usage/stock/stock-guide/mtn-stock-category-template6.png)

## Maintain Item Template

1. It is usually used for sets or package items.
2. You can create a template consisting of selected items to use in Sales, Purchase, or Stock documents.
3. **Stock** > **Maintain Item Template**.

    ![mtn-item-template](../../../static/img/usage/stock/stock-guide/mtn-item-template.png)

4. The Maintain Item Template form is shown in the screenshot below.

    ![mtn-item-template1](../../../static/img/usage/stock/stock-guide/mtn-item-template1.png)

    | **Field Name**      | **Explanation & Properties**                                                                      |
    | ------------------- | ------------------------------------------------------------------------------------------------- |
    | **Code**            | • Input the new Item Template code. <br /> • Field type: Alphanumerical <br /> • Length: 20       |
    | **Description**     | • Input the Item Template description. <br /> • Field type: Alphanumerical <br /> • Length: 200   |
    | **Description 2**   | • Input the Item Template description 2. <br /> • Field type: Alphanumerical <br /> • Length: 200 |
    | **Reference Price** | • Input the Reference Selling Price. <br /> • Field type: Float                                   |
    | **Item Template**   | • Insert the item details.                                                                        |
    | **Matrix**          | • Used to load the Matrix profile. <br /> • Requires Stock Matrix module.                         |

### How to Use The Template

1. For example, in a Sales Invoice, click on **Item Template** in the left sidebar.
2. Double-click on the Item Template. See the screenshot below.

    ![mtn-item-template2](../../../static/img/usage/stock/stock-guide/mtn-item-template2.png)

3. The list of items is updated in the Sales Invoice details. See the screenshot below.

    ![mtn-item-template3](../../../static/img/usage/stock/stock-guide/mtn-item-template3.png)

## Maintain Item Matrix Profile

1. It is commonly used to organize coding requirements for generating item codes. It is frequently used in industries such as apparel, footwear, and electronics.
2. **Stock** > **Maintain Stock Item Matrix Profile**.

    ![mtn-item-matrix-profile](../../../static/img/usage/stock/stock-guide/mtn-item-matrix-profile.png)

3. Example of stock item matrix settings to generate T-shirt codes with different sizes and colors.
4. See the requirement settings as shown in the screenshot below.

    ![mtn-item-matrix-profile1](../../../static/img/usage/stock/stock-guide/mtn-item-matrix-profile1.png)

5. Matrix settings:

    | **Matrix**               | **Setting** | **Length** | **Code**                                              | **Note**                                                   |
    | ------------------------ | ----------- | ---------- | ----------------------------------------------------- | ---------------------------------------------------------- |
    | **Prefix**               | 1 - 5       | 5          |                                                       | Enter a prefix when generating the item code.              |
    | **Dimension 1 (Row)**    | 7 - 10      | 4          | BLUE <br /> YELL <br /> BLCK <br /> WHIT <br /> RED\_ | Preset code list.                                          |
    | **Dimension 2 (Column)** | 12 - 13     | 1          | \_S <br /> \_M <br /> \_L <br /> XL                   | Preset code list.                                          |
    | **Separator**            | -           | 1          |                                                       | A separator between the prefix, dimension row, and column. |

> **Note:**
> Code length must consistently follow the Matrix Settings, especially for Dimension 1 (Row) and 2 (Column).

### How It Works

#### Generate Matrix Item Code

1. Go to **Maintain Stock Item**.
2. Right-click the area below the **Detail** button.
3. Click on **Generate Item Code**. See the screenshot below.

    ![mtn-item-matrix-profile2](../../../static/img/usage/stock/stock-guide/mtn-item-matrix-profile2.png)

4. Select the **Matrix Profile**, e.g., **SHIRT**.
5. Enter a **Prefix**, e.g., **CROC**.
6. Select an **Item Group**, e.g., **T-Shirt**.
7. Press **OK** to start generating.

    ![mtn-item-matrix-profile3](../../../static/img/usage/stock/stock-guide/mtn-item-matrix-profile3.png)

8. List of CROC item codes created in Maintain Stock Item.

    ![mtn-item-matrix-profile4](../../../static/img/usage/stock/stock-guide/mtn-item-matrix-profile4.png)

#### Generate Invoice Using Matrix

1. In a Sales Invoice, select one of the prefix item codes, e.g., **CROC**.

    ![mtn-item-matrix-profile5](../../../static/img/usage/stock/stock-guide/mtn-item-matrix-profile5.png)

2. Click on the **Matrix** tab. You can start entering the quantity in the dimension row and column.

    ![mtn-item-matrix-profile6](../../../static/img/usage/stock/stock-guide/mtn-item-matrix-profile6.png)

3. Click back to the **Invoice** tab. The item code will be inserted automatically.

    ![mtn-item-matrix-profile7](../../../static/img/usage/stock/stock-guide/mtn-item-matrix-profile7.png)

## Maintain Location

1. It is used for warehouses, inter-branch transfers, consignment, van sales, etc.
2. The **Multiple Location (Warehouse)** module is required.
3. **Stock** > **Maintain Location**.

    ![mtn-location](../../../static/img/usage/stock/stock-guide/mtn-location.png)

4. The Maintain Location form is shown in the screenshot below.

    ![mtn-location1](../../../static/img/usage/stock/stock-guide/mtn-location1.png)

    | **Field Name**     | **Explanation & Properties**                                                                 |
    | ------------------ | -------------------------------------------------------------------------------------------- |
    | **Code**           | • Input the new Location code. <br /> • Field type: Alphanumerical <br /> • Length: 20       |
    | **Description**    | • Input the Location description. <br /> • Field type: Alphanumerical <br /> • Length: 200   |
    | **Description 2**  | • Input the Location description 2. <br /> • Field type: Alphanumerical <br /> • Length: 200 |
    | **Address Line 1** | • Input the Location Address Line 1. <br /> • Field type: Alphanumerical <br /> • Length: 60 |
    | **Address Line 2** | • Input the Location Address Line 2. <br /> • Field type: Alphanumerical <br /> • Length: 60 |
    | **Address Line 3** | • Input the Location Address Line 3. <br /> • Field type: Alphanumerical <br /> • Length: 60 |
    | **Address Line 4** | • Input the Location Address Line 4. <br /> • Field type: Alphanumerical <br /> • Length: 60 |
    | **Attention**      | • Input the contact person's name. <br /> • Field type: Alphanumerical <br /> • Length: 70   |
    | **Phone 1**        | • Input Phone 1. <br /> • Field type: Alphanumerical <br /> • Length: 30                     |
    | **Phone 2**        | • Input Phone 2. <br /> • Field type: Alphanumerical <br /> • Length: 30                     |
    | **Fax 1**          | • Input Fax 1. <br /> • Field type: Alphanumerical <br /> • Length: 30                       |
    | **Fax 2**          | • Input Fax 2. <br /> • Field type: Alphanumerical <br /> • Length: 30                       |
    | **Email**          | • Input the Email. <br /> • Field type: Alphanumerical <br /> • Length: 200                  |
    | **ISACTIVE**       | • Set the location to Active or Inactive. <br /> • Field type: Checkbox                      |
    | **Note**           | • Input an additional note to describe the location. <br /> • Field type: Rich Text          |
    | **Attachments**    | • Insert attachment files, such as Excel, PDF, pictures, etc.                                |

## Maintain Batch

1. **Batch numbers** are very useful and widely explored for alternative usage. Common usages include:
    - Tracing goods purchased from suppliers;
    - Tracing which production batch returned goods come from;
    - Differentiating the costing of products;
2. **Stock** > **Maintain Batch**.

    ![mtn-batch](../../../static/img/usage/stock/stock-guide/mtn-batch.png)

3. Fill in the batch details. See the screenshot below.

    ![mtn-batch1](../../../static/img/usage/stock/stock-guide/mtn-batch1.png)

    | **Field Name**         | **Explanation & Properties**                                                                |
    | ---------------------- | ------------------------------------------------------------------------------------------- |
    | **Code**               | • Input the new **Batch** code. <br /> • Field type: Alphanumerical <br /> • Length: 30     |
    | **Description**        | • Input the **Batch** description. <br /> • Field type: Alphanumerical <br /> • Length: 160 |
    | **Expiry Date**        | • Set an **Expiry Date**. <br /> • Field type: Date                                         |
    | **Manufacturing Date** | • Set a **Manufacturing Date**. <br /> • Field type: Date                                   |
    | **Remark 1**           | • Free field. <br /> • Field type: Alphanumerical <br /> • Length: 200                      |
    | **Remark 2**           | • Free field. <br /> • Field type: Alphanumerical <br /> • Length: 200                      |
    | **ISACTIVE**           | • Set the batch to **Active** or **Inactive**. <br /> • Field type: Checkbox                |

4. You can choose to lock a stock item to a batch number. The purpose is to prevent other users from assigning the wrong batch number to an item code.

    ![mtn-batch2](../../../static/img/usage/stock/stock-guide/mtn-batch2.png)

### Copy & Paste Function

#### Append to an Existing Batch Number

1. Click on **More** (down arrow).
2. Select **Copy Stock Batch**.

    ![mtn-batch3](../../../static/img/usage/stock/stock-guide/mtn-batch3.png)

3. Click on **New**.
4. Click on **More** (down arrow).
5. Select **Paste Stock Batch**.

    ![mtn-batch4](../../../static/img/usage/stock/stock-guide/mtn-batch4.png)

6. The batch code is copied and will be pasted into the new batch code.
7. Append to the batch code and save it.

    ![mtn-batch5](../../../static/img/usage/stock/stock-guide/mtn-batch5.png)

#### New Batch Number

1. Click on **More** (down arrow).
2. Select **Copy Stock Batch**.

    ![mtn-batch6](../../../static/img/usage/stock/stock-guide/mtn-batch6.png)

3. Click on **New**.
4. Click on **More** (down arrow).
5. Select **Paste Stock Batch**.

    ![mtn-batch7](../../../static/img/usage/stock/stock-guide/mtn-batch7.png)

6. The batch code is copied and will be pasted into the new batch code.
7. Remove the batch number.
8. Click on **Save**. The system will assign a new batch number automatically.

    ![mtn-batch8](../../../static/img/usage/stock/stock-guide/mtn-batch8.png)

## Stock Received

Allows users to increase stock quantity without a purchase. It is normally used when you have assembled or manufactured finished goods. Simply enter the item code, quantity IN, and the cost.

1. **Stock** > **Stock Received** > **New**.

    ![68](../../../static/img/usage/stock/stock-guide/stock-received.png)

## Stock Issue

Allows users to **decrease stock quantity without a sale**. It is normally used when you consume raw materials during assembly, when manufacturing finished goods, or for internal usage. Simply enter the item code, quantity OUT, and the cost. You can also click **Update Cost**, and the system will automatically detect the actual cost based on the document date.

1. **Stock** > **Stock Issue** > **New**.

    ![69](../../../static/img/usage/stock/stock-guide/stock-issue.png)

## Stock Transfer

**Stock Transfer** is an entry used to handle stock movement from one location to another, **e.g., from Location A to Location B**. Common usages include:

- Consignment stock;
- Van sales locations representing vans;
- Inter-branch transfers;
- Goods in transit;

    ![stock-transfer](../../../static/img/usage/stock/stock-guide/stock-transfer.png)

1. Click on **New**.

    ![stock-transfer1](../../../static/img/usage/stock/stock-guide/stock-transfer1.png)

2. Enter a **Description** to describe the stock transfer entry, e.g., "Stock Transfer from BALAKONG TO BATU CAVE".
3. Add the items to be transferred.
4. You may enter a **reason, remark, and authorized by** for future reference.

    ![stock-transfer2](../../../static/img/usage/stock/stock-guide/stock-transfer2.png)

5. Click on **Save** to commit the stock movement between locations.
6. In some circumstances, you may need to select a customer code and enter the unit price, tax code, tax amount, and subtotal for consignment sales.

    ![stock-transfer3](../../../static/img/usage/stock/stock-guide/stock-transfer3.png)

### Update Cost

1. You can update the unit cost by clicking the **Update Cost** button.
2. The system will retrieve the unit cost for each item based on the update cost method. These methods are:

    ![stock-transfer4](../../../static/img/usage/stock/stock-guide/stock-transfer4.png)

    | **No.** | **Update Cost Method**                   | **Explanation**                                                                                                     |
    | ------- | ---------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
    | 1       | Use Ref. Cost When Qty &lt;= 0 (default) | If the quantity balance is below 0, the unit cost will be updated with the Reference Cost from Maintain Stock Item. |
    | 2       | Use Strict Costing                       | The unit cost is calculated from the Costing Method set in Maintain Stock Group.                                    |
    | 3       | Use Serial Number Costing                | The unit cost will be based on the serial number.                                                                   |

## Stock Adjustment

:::success[INFO]
Check out our new [stock take app](https://www.sql.com.my/sqlstocktake/)
:::

Allows users to enter quantity in and quantity out in the system, similar to a combination of stock received and stock issue. It is normally used for stock take purposes. (**Stock** > **Stock Adjustment** > **New**)

:::info
Watch tutorial video here: [youtube](https://www.youtube.com/watch?v=uEbCRAftQ4A&feature=youtu.be)
:::

1. Click on **Stock**

2. Choose **Print Stock Physical Worksheet**

3. **Filter** by date, stock group or others **information** that you want to do for the stock take, please **make sure that you choose the correct location and batch if you have these two modules**.

    ![70](../../../static/img/usage/stock/stock-guide/stock-adjustment.png)

4. Click on Preview & choose your report format.

    ![71](../../../static/img/usage/stock/stock-guide/stock-adjustment1.png)

5. **Print out the “Stock Take Sheet”** for stock keeper.

    The stock keeper should manually **fill in the actual quantity into the “physical qty” column**.

    ![72](../../../static/img/usage/stock/stock-guide/stock-adjustment2.png)

6. After complete updating the stock take report by your stock-keeper, do your stock adjustment in system from **Stock** > **Stock Adjustment** > **and drag out Book Qty and Physical Qty**.

    ![73](../../../static/img/usage/stock/stock-guide/stock-adjustment3.png)

    ![74](../../../static/img/usage/stock/stock-guide/stock-adjustment4.png)

7. Click on the first item in **Stock Physical Worksheet**, press on **Ctrl + A** on the keyboard to select all items.

    **Then Drag & Drop into Stock Adjustment**.

    ![75](../../../static/img/usage/stock/stock-guide/stock-adjustment5.png)

8. Based on the stock keeper’s Stock Take Report, **fill in the actual physical quantity** in your warehouse into the Stock Adjustment **Physical Qty column**, the system will calculate the variance based on the Book Qty and apply a correction to the Qty column.

    :::info

    **Book Qty** = Quantity that is recorded in system.

    **Physical Qty** = Actual Quantity at your warehouse.

    **Qty** = Variance between Physical and Book Quantity, system will auto-adjust then update accordingly. (Physical Qty – Book Qty)

    :::

## Reorder Level by Location

### How it works

In **Maintain Stock Item**, a new **Reorder by Location** tab has been added. You can preset different reorder information for each location here.

1. You may define the reorder information here if it differs from the master info.

    ![reorder-by-locaton-reorder-info](../../../static/img/usage/stock/stock-guide/reorder-by-locaton-reorder-info.png)

### Query Reorder Info Priority Sequence

The system will first use the reorder information defined under Reorder by Location.

1. If a location is defined here, the system will use its Min Qty, Max Qty, Reorder Level, Reorder Qty, Shelf, and Lead Time settings.
2. If no reorder information is defined for the location, the system will use the corresponding master value instead.

### Footer Min Qty and Max Qty Value

This indicates the difference between the total Max/Min Qty defined for all locations and the master Max/Min Qty.

![reorder-by-location-footer](../../../static/img/usage/stock/stock-guide/reorder-by-location-footer.png)

:::info[Example]

```math
Min Qty = Total Min Qty defined in Reorder by Location − Master Min Qty
        = 2 - 5
        = -3

Max Qty = Total Max Qty defined in Reorder by Location − Master Max Qty
        = 150 - 300
        = -150
```

*A negative value indicates that the total quantity defined for the locations is lower than the corresponding master value.*
:::

### Master Value Changes Automatically Update Reorder by Location

For Reorder Level and Reorder Qty, if the value defined under Reorder by Location is the same as the corresponding Master Value, changing the Master Value will automatically update the Reorder by Location value accordingly.

![reorder-by-location-master-value-changes](../../../static/img/usage/stock/stock-guide/reorder-by-location-master-value-changes.png)

:::info[Example]

```math
Master Reorder Level = 180
Reorder by Location Reorder Level = 180
```

If the Master Reorder Level is changed to 200, the Reorder by Location Reorder Level will also be automatically changed to 200.
:::

### Print Stock Reorder Advise

- The report will first capture the Reorder Information defined under Reorder by Location for the selected location.
- If no reorder information is defined for the location, the system will use the corresponding Master Value instead.
- Added Shelf and Lead Time columns to Print Stock Reorder Advise.

![reorder-by-location-print-stock-reorder-advice](../../../static/img/usage/stock/stock-guide/reorder-by-location-print-stock-reorder-advice.png)

:::info[Example]

- Location `----` and `JB` are **defined** under Reorder by Location.
  - Therefore, the system will capture all reorder information from the **Reorder by Location** settings.
- `KL`, `Melaka`, and `Penang` are **not defined** under Reorder by Location.
  - Therefore, the system will capture the reorder information from the **Master Value**.

:::

### Stock Available Balance (Ctrl + F11)

Stock Level Information is captured based on the selected Location.

![reoder-by-location-stock-avail-balance](../../../static/img/usage/stock/stock-guide/reoder-by-location-stock-avail-balance.png)

Click on a location to view the respective Reorder Level information for that location.
