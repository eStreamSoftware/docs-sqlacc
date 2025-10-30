---
sidebar_position: 3
id: integration-methods
title: Alternative Integration Methods
description: A guide to integrate SQL API with different languages
slug: /sql-account-api/integration-methods
tags: ["SQL Account", "SQL Account API", "Generate API Secret Key"]
---

## Demo Account

- Updated 18 July 2025
- URL: [https://api.sql.my](https://api.sql.my/)
- AWSv4 AccessKey: may email to support@sql.com.my to get the info
- AWSv4 SecretKey: may email to support@sql.com.my to get the info
- [Sample Json File for Below sample coding](https://download.sql.com.my/customer/Fairy/APISampleJson.zip) - Updated 18 Oct 2025

## Available Programming Languages

- Python
- Node JS

### Python

Module Require in Python

- boto3 -> pip install boto3
- requests -> pip install requests

### Python Common

<details>
    <summary>APICommon.py file for example code - click to expand</summary>

```python
#Updated 07 Aug 2025
import os
import boto3
from botocore.auth import SigV4Auth
from botocore.awsrequest import AWSRequest
import requests
import json

access_key = 'The Access Key'
secret_key = 'The Secret Key'
service = 'execute-api'
host = 'api.sql.my'
region = 'ap-southeast-1'

def QuotedStr(ACode):
    return "'" + ACode.replace("'", "''") + "'"

def update_updatecount(file_path, updatecount):
    """
    Loads a JSON file, increments the 'updatecount' field by 1,
    and saves the changes back to the file.

    Args:
        file_path (str): The path to the JSON file.
    """
    try:
        with open(file_path, 'r') as file:
            data = json.load(file)

        # Check if 'updatecount' key exists and is an integer
        if 'updatecount' in data and isinstance(data['updatecount'], int): 
            if updatecount is None:
                    updatecount = 0
            data['updatecount'] = updatecount + 1
            print(f"Updated 'updatecount' to: {data['updatecount']}")
        else:
            print("The key 'updatecount' does not exist or is not an integer.")
            return

        # Save the updated data back to the same file
        with open(file_path, 'w') as file:
            json.dump(data, file, indent=3)
            print("File updated successfully.")

    except FileNotFoundError:
        print(f"Error: The file at {file_path} was not found.")
    except json.JSONDecodeError:
        print(f"Error: Failed to decode JSON from the file at {file_path}.")
    except Exception as e:
        print(f"An unexpected error occurred: {e}")

def ShowAuth(request):
    authorization_header = request.headers.get('Authorization')
    if authorization_header:
        print(f"GET Request Authorization Header (Signature): {authorization_header}")
    else:
        print("Authorization header not found for GET request.")

def get_payload_data(file_path: str):
    try:
        with open(file_path, 'r') as f:
            payload_data = json.load(f) # Load JSON data directly into a dictionary
        print(json.dumps(payload_data))
        return json.dumps(payload_data) # Convert dict back to JSON string for sending

    except FileNotFoundError:
        print(f"Error: The file '{file_path}' was not found.")
    except json.JSONDecodeError:
        print(f"Error: Could not decode JSON from file '{file_path}'. Please ensure it's valid JSON.")
    except Exception as e:
        print(f'An unexpected error occurred: {e}')

def get_field_value(response_data, fieldname : str):
    def find_field_value(data, target_fieldname):
        if isinstance(data, dict):
            for key, value in data.items():
                if key == target_fieldname:
                    return value
                # If the value is a dictionary or list, recurse
                result = find_field_value(value, target_fieldname)
                if result is not None:
                    return result
        elif isinstance(data, list):
            for item in data:
                result = find_field_value(item, target_fieldname)
                if result is not None:
                    return result
        return None # Field not found in this branch

    value = find_field_value(response_data, fieldname)

    if value is not None:
        #print(f"Successfully retrieved value for field '{fieldname}': {value}")
        return value
    else:
        #print(f"Field '{fieldname}' not found in the API response.")
        return None

def auto_parse_json(response_data, limit=100, indent_level=0):
    """
    Automatically parses JSON data, displaying all fields and values.

    Args:
        response_data: The JSON data (usually from response.json()).
        limit (int): The maximum number of records to display if 'data' is a list.
        indent_level (int): Used for pretty printing nested structures.
    """
    indent = "  " * indent_level

    if isinstance(response_data, dict):
        if indent_level == 0: # Only print for the top-level object
            print(f"\n{indent}--- Parsed Record Data ---")

        for key, value in response_data.items():
            if isinstance(value, dict):
                print(f"{indent}{key}:")
                auto_parse_json(value, limit, indent_level + 1)
            elif isinstance(value, list):
                print(f"{indent}{key}: [")
                if key == 'data' and indent_level == 0: # Special handling for a top-level 'data' list
                    print(f"\nTotal Record found: {len(value)}")
                    print(f"--- Displaying first {min(len(value), limit)} records ---")
                    for i, item in enumerate(value[:limit]):
                        print(f"\n {indent}  Record {i+1} of {len(value)}:")
                        print(f"{indent}   "+ "-"*50)
                        auto_parse_json(item, limit, indent_level + 2)
                    if len(value) > limit:
                        print(f"{indent}  ...and {len(value) - limit} more records.")
                else:
                    for i, item in enumerate(value):
                        print(f"{indent}  [{i+1} of {len(value)}]:")
                        auto_parse_json(item, limit, indent_level + 2)
                print(f"{indent}]")
            else:
                print(f"{indent}{key}: {value}")
    elif isinstance(response_data, list):
        if indent_level == 0: # This case is if the top-level JSON is a list
            print(f"\nTotal Record found: {len(response_data)}")
            print(f"--- Displaying first {min(len(response_data), limit)} records ---")
        for i, item in enumerate(response_data[:limit]):
            print(f"{indent}  Item {i+1}:")
            auto_parse_json(item, limit, indent_level + 2)
        if len(response_data) > limit:
            print(f"{indent}  ...and {len(response_data) - limit} more items.")
    else:
        # For simple values like strings, numbers, booleans at the top level
        if indent_level == 0:
            print(f"\n--- Parsed Value ---")
        print(f"{indent}{response_data}")

class BaseApiClient:
    """
    A base client for interacting with AWS API Gateway endpoints using SigV4 authentication.
    Encapsulates common setup like session, headers, and request signing.
    """
    def __init__(self, service: str, host: str, region: str, access_key: str, secret_key: str, session_token: str = None):
        self.service = service
        self.host = host
        self.region = region
        self.session_token = session_token

        self.session = boto3.Session(
            aws_access_key_id=access_key,
            aws_secret_access_key=secret_key,
            aws_session_token=session_token,
            region_name=region
        )
        self.headers = {
            'Host': host,
            'Content-Type': 'application/json'
        }

    def _send_request(self, method: str, full_url: str, payload: str = None, custom_headers: dict = None) -> requests.Response | None:
        """
        Sends an authenticated request to the specified URL.

        Args:
            method (str): HTTP method (e.g., "GET", "POST", "PUT", "DELETE").
            full_url (str): The complete URL for the API endpoint.
            payload (str, optional): JSON payload as a string for POST/PUT requests. Defaults to None.
            custom_headers (dict, optional): Dictionary of additional or overriding headers. Defaults to None.

        Returns:
            requests.Response or None: The response object if successful, None otherwise.
        """
        request_data = payload.encode('utf-8') if payload else b''

        # Merge custom headers with default headers
        request_headers = self.headers.copy()
        if custom_headers:
            request_headers.update(custom_headers)

        request = AWSRequest(
            method,
            full_url,
            headers=request_headers,
            data=request_data
        )

        SigV4Auth(self.session.get_credentials(), self.service, self.region).add_auth(request)
        #ShowAuth(request) # For debugging, shows the Authorization header

        try:
            response = requests.request(method, request.url, headers=dict(request.headers), data=request_data, timeout=30)
            print(f'Response Status: {response.status_code}')

            # Print body only if it's not a PDF or other binary content
            if 'application/json' in response.headers.get('Content-Type', ''):
                print(f'Response Body: {response.content.decode("utf-8")}')
            else:
                print(f'Response Body: (Binary Content - Type: {response.headers.get("Content-Type")})')

            response.raise_for_status() # Raise an exception for HTTP errors (4xx or 5xx)
            return response
        except requests.exceptions.RequestException as e:
            print(f'Error making request: {e}')
            return None
        except Exception as e:
            print(f'An unexpected error occurred: {e}')
            return None

```

</details>

### Agent

<details>
    <summary>Agent - Get List, Add, Update & Delete Function - click to expand</summary>

```python
#Updated 20 Aug 2025
import os
import requests
import json
import APICommon

# Centralized API configuration from APICommon.py
session_token = os.environ.get('AWS_SESSION_TOKEN')
access_key = APICommon.access_key
secret_key = APICommon.secret_key
service = APICommon.service
host = APICommon.host
region = APICommon.region

# Base URL for the Agent API
url = f'https://{host}/agent'

class AgentApiClient(APICommon.BaseApiClient):
    """
    Client for the Agent API, inheriting common functionality from BaseApiClient.
    """
    def __init__(self, base_url: str):
        super().__init__(
            service=service,
            host=host,
            region=region,
            access_key=access_key,
            secret_key=secret_key,
            session_token=session_token
        )
        self.base_url = base_url

    def get_agent_data(self, offset: int = 0, limit: int = 10):
        """
        Retrieves agent data with pagination.

        Args:
            offset (int): The number of records to skip. Defaults to 0.
            limit (int): The maximum number of records to shown. Defaults to 10.
        """
        query_params = f'offset={offset}'
        full_url = f'{self.base_url}?{query_params}'

        response = self._send_request("GET", full_url)
        if response:
            try:
                data = response.json()
                APICommon.auto_parse_json(data, limit=limit) # Automatically parse and display JSON
            except json.JSONDecodeError:
                print("Error: Could not decode JSON from response.")
            except Exception as e:
                print(f"Error processing response JSON: {e}")

    def create_agent_data(self, code: str, description: str, is_active: bool):
        """
        Creates a new agent record.

        Args:
            code (str): The unique code for the agent.
            description (str): The description of the agent.
            is_active (bool): Whether the agent is active.
        """
        payload_data = {
            "code": code,
            "description": description,
            "isactive": is_active
        }
        payload_str = json.dumps(payload_data) # Convert dict to JSON string

        self._send_request("POST", self.base_url, payload=payload_str)

    def update_agent_data(self, code: str, description: str, is_active: bool):
        """
        Updates an existing agent record.

        Args:
            code (str): The code of the agent to update.
            description (str): The new description of the agent.
            is_active (bool): The new active status of the agent.
        """
        payload_data = {
            "code": code,
            "description": description,
            "isactive": is_active
        }
        payload_str = json.dumps(payload_data) # Convert dict to JSON string
        full_url = f'{self.base_url}/{code}'

        self._send_request("PUT", full_url, payload=payload_str)

    def delete_agent_data(self, code: str):
        """
        Deletes an agent record by code.

        Args:
            code (str): The code of the agent to delete.
        """
        full_url = f'{self.base_url}/{code}'

        self._send_request("DELETE", full_url)

if __name__ == "__main__":
    agent_api = AgentApiClient(base_url=url) # Initialize with the base URL defined earlier

    # Example: Fetch existing agents
    print("--- Fetching Agents (Offset 0, Limit 10) ---")
    agent_api.get_agent_data(offset=0)

    print("\n" + "="*50 + "\n")

    print("--- Fetching Agents (Offset 10, Limit 10) ---")
    agent_api.get_agent_data(offset=10) # Start from Record 11 (i.e. skip 1st 10 records)

    print("\n" + "="*50 + "\n")

    # Example: Create a new agent
    answer = input("Continue New Record? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print("\n--- Creating Agent 'Fairy5' ---")
        agent_api.create_agent_data(code="Fairy5", description="Fairy Desc 4", is_active=True)

        print("\n" + "="*50 + "\n")

        print("--- Re-fetching Agents after Creation ---")
        agent_api.get_agent_data(offset=0)

        print("\n" + "="*50 + "\n")

    # Example: Update an agent
    answer = input("Continue Update Record? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print("\n--- Updating Agent 'Fairy5' ---")
        agent_api.update_agent_data(code="Fairy5", description="Fairy Desc 5 edited", is_active=True)

        print("\n" + "="*50 + "\n")
        print("--- Re-fetching Agents after Update ---")
        agent_api.get_agent_data(offset=0)

        print("\n" + "="*50 + "\n")

    # Example: Delete agent
    answer = input("Continue Delete Record? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print("\n--- Deleting Agent 'Fairy5' ---")
        agent_api.delete_agent_data(code="Fairy5")

        print("\n" + "="*50 + "\n")
        print("--- Re-fetching Agents after Deletion ---")
        agent_api.get_agent_data(offset=0)

        print("\n" + "="*50 + "\n")

```

</details>

### Sales Invoice

<details>
    <summary>Sales Invoice - Get List, PDF, Add, Update & Delete Function - click to expand</summary>

```python
#Updated 18 Oct 2025
import os
import requests
import json
import APICommon

# Centralized API configuration from APICommon.py
session_token = os.environ.get('AWS_SESSION_TOKEN')
access_key = APICommon.access_key
secret_key = APICommon.secret_key
service = APICommon.service
host = APICommon.host
region = APICommon.region

# Base URL for the Sales Invoice API
url = f'https://{host}/salesinvoice'
json_path_new = '..\\API\\SL_IV-New'
json_path_edit = '..\\API\\SL_IV-Edit'
sDocNo = '--IV-Test--'
sRptName = 'Sales Invoice 8 (SST 1)'

class SLIVApiClient(APICommon.BaseApiClient):
    """
    Client for the Sales Invoice (SLIV) API, inheriting common functionality from BaseApiClient.
    """
    def __init__(self, base_url: str):
        super().__init__(
            service=service,
            host=host,
            region=region,
            access_key=access_key,
            secret_key=secret_key,
            session_token=session_token
        )
        self.base_url = base_url

    def get_SLIV_data(self, offset: int = 0, limit: int = 10):
        """
        Retrieves sales invoice data with pagination.
        
        Args:
            offset (int): The number of records to skip. Defaults to 0.
            limit (int): The maximum number of records to shown. Defaults to 10.
        """
        query_params = f'offset={offset}'
        full_url = f'{self.base_url}?{query_params}'
        
        response = self._send_request("GET", full_url)
        if response:
            try:
                data = response.json()
                APICommon.auto_parse_json(data, limit=limit) # Automatically parse and display JSON
            except json.JSONDecodeError:
                print("Error: Could not decode JSON from response.")
            except Exception as e:
                print(f"Error processing response JSON: {e}")

    def get_SLIV_Single(self, ADocNo: str, ShowResult: bool = True, AFld: str =''):
        """
        Retrieves a single sales invoice record by document number.
        
        Args:
            ADocNo (str): The document number of the sales invoice.
            ShowResult (bool): If True, automatically parses and prints the result. 
                               If False, returns the JSON response. Defaults to True.
            AFld (str): Search field

        Returns:
            dict or None: The parsed JSON data if ShowResult is False and successful, None otherwise.
        """

        """
        There got 3 type of GET:
        01. Get Detail =>  /salesinvoice/*?
            - Return Result with Detail Records
            - only got this fields => code=&docdate=&docno=&postdate=&eiv_utc=
        02. Normal Get =>  /salesinvoice?
            - Return Result only Header Records
            - eg lastmodified=1757557610
        03. Get by Dockey /{Dockey}

        https://wiki.sql.com.my/wiki/Restful_API#How_many_ways_for_GET_Method_available%3F
        """

        vFld = AFld
        if vFld == '':
            vFld = 'DocNo'
        vData = ADocNo

        aKey = '?'
        if vFld.lower() in ["code", "docdate", "docno", "postdate", "eiv_utc"]:
            aKey = '*?'
        else:
            if vFld.lower() == "dockey":
                aKey = ''

        if vFld.lower() == "dockey":
            full_url = f'{self.base_url}/{vData}'
        else:
            full_url = f'{self.base_url}/{aKey}{vFld}={vData}'
        print(f"URL = {full_url}")
        response = self._send_request("GET", full_url)
        if response:
            try:
                data = response.json()

                # Base case for recursion: if we are already searching by dockey, we should not recurse again.
                if vFld.lower() == "dockey":
                    if ShowResult:
                        APICommon.auto_parse_json(data)
                    return data

                # Recursive step: if not a dockey search, find the dockey and recurse.
                if vFld.lower() in ["code", "docdate", "docno", "postdate", "eiv_utc"]:
                    if ShowResult:
                        APICommon.auto_parse_json(data) # Automatically parse and display JSON
                    else:
                        return data
                else:
                    # This is the "normal get" which returns a header. We get the dockey from it.
                    vdockey = APICommon.get_field_value(data, "dockey")
                    if vdockey:
                        # Corrected recursive call:
                        return self.get_SLIV_Single(vdockey, AFld="Dockey")
                    else:
                        print("Error: 'dockey' not found in response.")

            except json.JSONDecodeError:
                print("Error: Could not decode JSON from response.")
            except Exception as e:
                print(f"Error processing response JSON: {e}")
        return None

    def get_SLIV_PDF(self, ADocNo: str, report_name: str, save_path: str):
        """
        Downloads a sales invoice as a PDF.

        Args:
            ADocNo (str): The document number of the sales invoice.
            report_name (str): The template name for the PDF report (e.g., 'Sales Invoice 8 (SST 1)').
            save_path (str): The directory where the PDF should be saved.
        """
        data = self.get_SLIV_Single(ADocNo, ShowResult=False)

        if data:
            dockey = APICommon.get_field_value(data, "dockey")
            full_url = f'{self.base_url}/{dockey}'
            print(f"URL = {full_url}")

            custom_headers = {
                'Content-Type': f'application/pdf;template={report_name}'
            }

            print(f"Attempting to download PDF document for DocNo: {ADocNo} using template: {report_name}")
            print(f"\nRemember to check the '{save_path}' folder for the downloaded PDF.")
            response = self._send_request("GET", full_url, custom_headers=custom_headers)
            if response:
                try:
                    output_filename = f"{report_name}_{ADocNo}.pdf"
                    full_save_path = os.path.join(save_path, output_filename)

                    # Ensure the directory exists
                    os.makedirs(os.path.dirname(full_save_path), exist_ok=True)

                    # Write the content to a file in binary mode
                    with open(full_save_path, 'wb') as pdf_file:
                        for chunk in response.iter_content(chunk_size=8192):
                            if chunk: # Filter out keep-alive chunks
                                pdf_file.write(chunk)

                    print(f"PDF for DocNo '{ADocNo}' with template '{report_name}' successfully downloaded to: {save_path}")
                except IOError as e:
                    print(f"Error saving PDF to file: {e}")
                except Exception as e:
                    print(f"An unexpected error occurred during PDF saving: {e}")

    def create_SLIV(self, file_path: str):
        """
        Creates a new sales invoice from a JSON payload file.

        Args:
            file_path (str): The path to the JSON file containing the invoice data.
        """
        payload_str = APICommon.get_payload_data(file_path)
        if payload_str:
            self._send_request("POST", self.base_url, payload=payload_str)

    def update_SLIV(self, docno: str, code: str, file_path: str):
        """
        Updates an existing sales document record.

        Args:
            docno (str): The document number to update.
            code (str): The code associated with the document (used for verification).
            file_path (str): The path to the JSON file containing the updated document data.
        """
        # Retrieve necessary fields from the existing record
        data = self.get_SLIV_Single(docno, ShowResult=False)

        if data:
            dockey = APICommon.get_field_value(data, "dockey")
            cocode = APICommon.get_field_value(data, "code")
            updatecount = APICommon.get_field_value(data, "updatecount") 
            print(f"Retrieved updatecount: {updatecount}")

            if dockey is not None and str(cocode) == code: # Ensure code matches for the right document
                APICommon.update_updatecount(file_path, updatecount)

                payload_str = APICommon.get_payload_data(file_path)
                if payload_str:
                    full_url = f'{self.base_url}/{dockey}'
                    print(f"Attempting to update document at: {full_url}")
                    self._send_request("PUT", full_url, payload=payload_str)
            else:
                print(f"Error: No record found for DocNo '{docno}' with code '{code}' or dockey is missing.")
        else:
            print(f"Error: Could not retrieve existing document data for DocNo '{docno}'. Cannot update.")

    def delete_SLIV1(self, dockey: str):
        """
        Deletes a sales invoice by its dockey (document key).

        Args:
            dockey (str): The document key of the invoice to delete.
        """
        full_url = f'{self.base_url}/{dockey}'
        self._send_request("DELETE", full_url)

    def delete_SLIV(self, docno: str, code: str):
        """
        Deletes a sales invoice by its document number and code.
        First retrieves the dockey using docno and code for verification.

        Args:
            docno (str): The document number of the invoice to delete.
            code (str): The code associated with the invoice.
        """
        data = self.get_SLIV_Single(docno, ShowResult=False)

        if data:
            dockey = APICommon.get_field_value(data, "dockey")
            cocode = APICommon.get_field_value(data, "code")

            if dockey is not None and str(cocode) == code: # Ensure code matches for the right document
                full_url = f'{self.base_url}/{dockey}'
                print(f"Attempting to delete document at: {full_url}")
                self._send_request("DELETE", full_url)
            else:
                print(f"Error: No record found for DocNo '{docno}' with code '{code}' or dockey is missing. Cannot delete.")
        else:
            print(f"Error: Could not retrieve existing document data for DocNo '{docno}'. Cannot delete.")

if __name__ == "__main__":
    sliv_api = SLIVApiClient(base_url=url) # Initialize with the base URL defined earlier

    # Example: Fetch List data
    answer = input("Continue Get document List? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print("--- Fetching Sales documents (Offset 0, Limit 10) ---")
        sliv_api.get_SLIV_data(offset=0)

    print("\n" + "="*50 + "\n")

    answer = input("Continue Get document next list? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print("--- Fetching Sales Invoices (Offset 10, Limit 10) ---")
        sliv_api.get_SLIV_data(offset=10) # Start from Record 11 (i.e. skip 1st 10 records)

    print("\n" + "="*50 + "\n")

    # Example: Get Single DocNo
    answer = input("Continue Get Single DocNo? (y/n): ")
    if answer.lower() in ["y","yes"]:
        vdata = input("Enter Search Value : ")
        afld = 'DocNo'
        afld = input(f"Enter Search Field : {afld} ")
        print(f"--- Getting Single Doc : {vdata} & Search field {afld}---")
        sliv_api.get_SLIV_Single(vdata, AFld=afld)

    print("\n" + "="*50 + "\n")

    # Example: Get PDF
    answer = input("Continue Downloading PDF? (y/n): ")
    if answer.lower() in ["y","yes"]:
        desktop_path = os.path.expanduser("~\Desktop") # Cross-platform way to get Desktop path
        vDocNo = input("Enter Search Value : ")
        print(f"\n--- Downloading PDF for '{vDocNo}' to {desktop_path} ---")
        sliv_api.get_SLIV_PDF(vDocNo, sRptName, desktop_path)

    print("\n" + "="*50 + "\n")

    # Example: Create document
    answer = input("Continue Creating New document? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print(f"\n--- Creating document from '{json_path_new}.json' ---")
        sliv_api.create_SLIV(f'{json_path_new}.json') # Ensure this path is correct for your setup

        print("\n" + "="*50 + "\n")
        print(f"--- Getting Newly Created document '{sDocNo}' ---")
        sliv_api.get_SLIV_Single(sDocNo)

    print("\n" + "="*50 + "\n")

    # Example: Edit document
    answer = input("Continue Updating document? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print(f"\n--- Updating document '{sDocNo}' with '{json_path_edit}.json' ---")
        sliv_api.update_SLIV(sDocNo,'300-G0002', f'{json_path_edit}.json') # Ensure paths are correct

        print("\n" + "="*50 + "\n")
        print(f"--- Getting Updated document '{sDocNo}' ---")
        sliv_api.get_SLIV_Single(sDocNo)

    print("\n" + "="*50 + "\n")

    # Example: Delete document
    answer = input("Continue Deleting document? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print(f"\n--- Deleting document '{sDocNo}' (code '300-G0002') ---")
        sliv_api.delete_SLIV(sDocNo,'300-G0002')

    print("\n--- End of Script ---")

```

</details>

### Purchase Invoice

<details>
    <summary>Purchase Invoice - Get List, PDF, Add, Update & Delete Function - click to expand</summary>

```python
#Updated 20 Aug 2025
import os
import requests
import json
import APICommon

# Centralized API configuration from APICommon.py
session_token = os.environ.get('AWS_SESSION_TOKEN')
access_key = APICommon.access_key
secret_key = APICommon.secret_key
service = APICommon.service
host = APICommon.host
region = APICommon.region

# Base URL for the Purchase Invoice API
url = f'https://{host}/purchaseinvoice'
json_path = '..\\API\\'

class PHPIApiClient(APICommon.BaseApiClient):
    """
    Client for the Purchase Invoice (PHPI) API, inheriting common functionality from BaseApiClient.
    """
    def __init__(self, base_url: str):
        super().__init__(
            service=service,
            host=host,
            region=region,
            access_key=access_key,
            secret_key=secret_key,
            session_token=session_token
        )
        self.base_url = base_url

    def get_PHPI_data(self, offset: int = 0, limit: int = 10):
        """
        Retrieves Purchase invoice data with pagination.
        
        Args:
            offset (int): The number of records to skip. Defaults to 0.
            limit (int): The maximum number of records to shown. Defaults to 10.
        """
        query_params = f'offset={offset}'
        full_url = f'{self.base_url}?{query_params}'
        
        response = self._send_request("GET", full_url)
        if response:
            try:
                data = response.json()
                APICommon.auto_parse_json(data, limit=limit) # Automatically parse and display JSON
            except json.JSONDecodeError:
                print("Error: Could not decode JSON from response.")
            except Exception as e:
                print(f"Error processing response JSON: {e}")

    def get_PHPI_Single(self, ADocNo, ACode: str, ShowResult: bool = True):
        """
        Retrieves a single Purchase invoice record by document number.
        
        Args:
            ADocNo (str): The document number of the Purchase invoice.
            ShowResult (bool): If True, automatically parses and prints the result. 
                               If False, returns the JSON response. Defaults to True.
        
        Returns:
            dict or None: The parsed JSON data if ShowResult is False and successful, None otherwise.
        """
        full_url = f'{self.base_url}/*?docno={ADocNo}&code={ACode}' #*?docno=PI-00001&code=400-A0001
        #full_url = f'{self.base_url}/35' #Find by Dockey
        response = self._send_request("GET", full_url)
        if response:
            try:
                data = response.json()
                if ShowResult:
                    APICommon.auto_parse_json(data) # Automatically parse and display JSON
                else:
                    return data
            except json.JSONDecodeError:
                print("Error: Could not decode JSON from response.")
            except Exception as e:
                print(f"Error processing response JSON: {e}")
        return None

    def get_PHPI_PDF(self, ADocNo, ACode: str, report_name: str, save_path: str):
        """
        Downloads a Purchase invoice as a PDF.
        
        Args:
            ADocNo (str): The document number of the Purchase invoice.
            report_name (str): The template name for the PDF report (e.g., 'Purchase Invoice 8 (SST 1)').
            save_path (str): The directory where the PDF should be saved.
        """
        data = self.get_PHPI_Single(ADocNo, ACode, ShowResult=False)
        
        if data:
            dockey = APICommon.get_field_value(data, "dockey")        
            full_url = f'{self.base_url}/{dockey}'
            print(f"URL : {full_url}")
        
            custom_headers = {
                'Content-Type': f'application/pdf;template={report_name}'        
            } 
        
            print(f"Attempting to download PDF invoice for DocNo: {ADocNo} using template: {report_name}")
            print(f"\nRemember to check the '{save_path}' folder for the downloaded PDF.")
        
            response = self._send_request("GET", full_url, custom_headers=custom_headers)
            if response:
                try:
                    output_filename = f"Purchase_invoice_{ADocNo}.pdf"
                    full_save_path = os.path.join(save_path, output_filename)

                    # Ensure the directory exists
                    os.makedirs(os.path.dirname(full_save_path), exist_ok=True)

                    # Write the content to a file in binary mode
                    with open(full_save_path, 'wb') as pdf_file:
                        for chunk in response.iter_content(chunk_size=8192):
                            if chunk: # Filter out keep-alive chunks
                                pdf_file.write(chunk)

                    print(f"PDF for DocNo '{ADocNo}' with template '{report_name}' successfully downloaded to: {save_path}")        
                except IOError as e:
                    print(f"Error saving PDF to file: {e}")
                except Exception as e:
                    print(f"An unexpected error occurred during PDF saving: {e}")

    def create_PHPI(self, file_path: str):
        """
        Creates a new Purchase invoice from a JSON payload file.
        
        Args:
            file_path (str): The path to the JSON file containing the invoice data.
        """
        payload_str = APICommon.get_payload_data(file_path)
        if payload_str:
            self._send_request("POST", self.base_url, payload=payload_str)

    def update_PHPI(self, docno: str, code: str, file_path: str):
        """
        Updates an existing Purchase invoice record.
        
        Args:
            docno (str): The document number of the invoice to update.
            code (str): The code associated with the invoice (used for verification).
            file_path (str): The path to the JSON file containing the updated invoice data.
        """
        # Retrieve necessary fields from the existing record
        data = self.get_PHPI_Single(docno, code, ShowResult=False)
        
        if data:
            dockey = APICommon.get_field_value(data, "dockey")
            cocode = APICommon.get_field_value(data, "code")
            updatecount = APICommon.get_field_value(data, "updatecount") 
            print(f"Retrieved updatecount: {updatecount}")

            if dockey is not None and str(cocode) == code: # Ensure code matches for the right document
                APICommon.update_updatecount(file_path, updatecount)
                
                payload_str = APICommon.get_payload_data(file_path)
                if payload_str:
                    full_url = f'{self.base_url}/{dockey}'
                    print(f"Attempting to update invoice at: {full_url}")
                    self._send_request("PUT", full_url, payload=payload_str)
            else:
                print(f"Error: No record found for DocNo '{docno}' with code '{code}' or dockey is missing.")
        else:
            print(f"Error: Could not retrieve existing invoice data for DocNo '{docno}'. Cannot update.")

    def delete_PHPI1(self, dockey: str):
        """
        Deletes a Purchase invoice by its dockey (document key).
        
        Args:
            dockey (str): The document key of the invoice to delete.
        """
        full_url = f'{self.base_url}/{dockey}'
        self._send_request("DELETE", full_url)

    def delete_PHPI(self, docno: str, code: str):
        """
        Deletes a Purchase invoice by its document number and code.
        First retrieves the dockey using docno and code for verification.
        
        Args:
            docno (str): The document number of the invoice to delete.
            code (str): The code associated with the invoice.
        """
        data = self.get_PHPI_Single(docno, code, ShowResult=False)
        
        if data:
            dockey = APICommon.get_field_value(data, "dockey")
            cocode = APICommon.get_field_value(data, "code")
            
            if dockey is not None and str(cocode) == code: # Ensure code matches for the right document
                full_url = f'{self.base_url}/{dockey}'
                print(f"Attempting to delete invoice at: {full_url}")
                self._send_request("DELETE", full_url)
            else:
                print(f"Error: No record found for DocNo '{docno}' with code '{code}' or dockey is missing. Cannot delete.")
        else:
            print(f"Error: Could not retrieve existing invoice data for DocNo '{docno}'. Cannot delete.")
            
if __name__ == "__main__":
    PHPI_api = PHPIApiClient(base_url=url) # Initialize with the base URL defined earlier

    # Example: Fetch List data
    answer = input("Continue Get Invoice List? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print("--- Fetching Purchase Invoices (Offset 0, Limit 10) ---")
        PHPI_api.get_PHPI_data(offset=0)

    print("\n" + "="*50 + "\n")
    
    answer = input("Continue Get Invoice next list? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print("--- Fetching Purchase Invoices (Offset 10, Limit 10) ---")
        PHPI_api.get_PHPI_data(offset=10) # Start from Record 11 (i.e. skip 1st 10 records)

    print("\n" + "="*50 + "\n")

    # Example: Get Single DocNo
    answer = input("Continue Get Single DocNo? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print("--- Getting Single Purchase Invoice 'PI-00002' ---")
        PHPI_api.get_PHPI_Single('PI-00002','400-E0001')

    print("\n" + "="*50 + "\n")

    # Example: Get PDF
    answer = input("Continue Downloading PDF? (y/n): ")
    if answer.lower() in ["y","yes"]:
        desktop_path = os.path.expanduser("~\Desktop") # Cross-platform way to get Desktop path
        print(f"\n--- Downloading PDF for 'PI-00002' to {desktop_path} ---")
        PHPI_api.get_PHPI_PDF('PI-00002', '400-N0001', 'Purchase Invoice 8 (SST 1)', desktop_path)
    
    print("\n" + "="*50 + "\n")

    # Example: Create Invoice
    answer = input("Continue Creating New Invoice? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print(f"\n--- Creating Invoice from '{json_path}PH_PI-New.json' ---")
        PHPI_api.create_PHPI(f'{json_path}PH_PI-New.json') # Ensure this path is correct for your setup
        
        print("\n" + "="*50 + "\n")
        print("--- Getting Newly Created Invoice '--PI-Test1--' ---")
        PHPI_api.get_PHPI_Single('--PI-Test1--','400-E0001')
    
    print("\n" + "="*50 + "\n")

    # Example: Edit Invoice
    answer = input("Continue Updating Invoice? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print(f"\n--- Updating Invoice 'IV-Test1' with '{json_path}PH_PI-Edit.json' ---")
        PHPI_api.update_PHPI('--PI-Test1--','400-E0001', f'{json_path}PH_PI-Edit.json') # Ensure paths are correct
        
        print("\n" + "="*50 + "\n")
        print("--- Getting Updated Invoice '--PI-Test1--' ---")
        PHPI_api.get_PHPI_Single('--PI-Test1--','400-E0001')

    print("\n" + "="*50 + "\n")
    
    # Example: Delete Invoice
    answer = input("Continue Deleting Invoice? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print("\n--- Deleting Invoice '--PI-Test1--' (code '400-E0001') ---")
        PHPI_api.delete_PHPI('--PI-Test1--','400-E0001')
        
        print("\n--- End of Script ---")

```

</details>

### Sales Order to Sales Invoice

<details>
    <summary>Transfer from Sales Order to Sales Invoice - click to expand</summary>

```python
#Updated 20 Aug 2025
import os
import requests
import json
import APICommon

# Centralized API configuration from APICommon.py
session_token = os.environ.get('AWS_SESSION_TOKEN')
access_key = APICommon.access_key
secret_key = APICommon.secret_key
service = APICommon.service
host = APICommon.host
region = APICommon.region

# Base URL for the Sales Invoice API
url = f'https://{host}/salesinvoice'
json_path = '..\\API\\'

class SLIVApiClient(APICommon.BaseApiClient):
    """
    Client for the Sales Invoice (SLIV) API, inheriting common functionality from BaseApiClient.
    """
    def __init__(self, base_url: str):
        super().__init__(
            service=service,
            host=host,
            region=region,
            access_key=access_key,
            secret_key=secret_key,
            session_token=session_token
        )
        self.base_url = base_url

    def get_SLIV_data(self, offset: int = 0, limit: int = 10):
        """
        Retrieves sales invoice data with pagination.
        
        Args:
            offset (int): The number of records to skip. Defaults to 0.
            limit (int): The maximum number of records to shown. Defaults to 10.
        """
        query_params = f'offset={offset}'
        full_url = f'{self.base_url}?{query_params}'
        
        response = self._send_request("GET", full_url)
        if response:
            try:
                data = response.json()
                APICommon.auto_parse_json(data, limit=limit) # Automatically parse and display JSON
            except json.JSONDecodeError:
                print("Error: Could not decode JSON from response.")
            except Exception as e:
                print(f"Error processing response JSON: {e}")

    def get_SLIV_Single(self, ADocNo: str, ShowResult: bool = True):
        """
        Retrieves a single sales invoice record by document number.
        
        Args:
            ADocNo (str): The document number of the sales invoice.
            ShowResult (bool): If True, automatically parses and prints the result. 
                               If False, returns the JSON response. Defaults to True.
        
        Returns:
            dict or None: The parsed JSON data if ShowResult is False and successful, None otherwise.
        """
        full_url = f'{self.base_url}/*?docno={ADocNo}'
        #full_url = f'{self.base_url}/35' #Find by Dockey
        response = self._send_request("GET", full_url)
        if response:
            try:
                data = response.json()
                if ShowResult:
                    APICommon.auto_parse_json(data) # Automatically parse and display JSON
                else:
                    return data
            except json.JSONDecodeError:
                print("Error: Could not decode JSON from response.")
            except Exception as e:
                print(f"Error processing response JSON: {e}")
        return None

    def get_SLIV_PDF(self, ADocNo: str, report_name: str, save_path: str):
        """
        Downloads a sales invoice as a PDF.
        
        Args:
            ADocNo (str): The document number of the sales invoice.
            report_name (str): The template name for the PDF report (e.g., 'Sales Invoice 8 (SST 1)').
            save_path (str): The directory where the PDF should be saved.
        """
        data = self.get_SLIV_Single(ADocNo, ShowResult=False)
        
        if data:
            dockey = APICommon.get_field_value(data, "dockey")        
            full_url = f'{self.base_url}/{dockey}'
        
            custom_headers = {
                'Content-Type': f'application/pdf;template={report_name}'        
            } 
        
            print(f"Attempting to download PDF invoice for DocNo: {ADocNo} using template: {report_name}")
            print(f"\nRemember to check the '{save_path}' folder for the downloaded PDF.")
        
            response = self._send_request("GET", full_url, custom_headers=custom_headers)
            if response:
                try:
                    output_filename = f"sales_invoice_{ADocNo}.pdf"
                    full_save_path = os.path.join(save_path, output_filename)

                    # Ensure the directory exists
                    os.makedirs(os.path.dirname(full_save_path), exist_ok=True)

                    # Write the content to a file in binary mode
                    with open(full_save_path, 'wb') as pdf_file:
                        for chunk in response.iter_content(chunk_size=8192):
                            if chunk: # Filter out keep-alive chunks
                                pdf_file.write(chunk)

                    print(f"PDF for DocNo '{ADocNo}' with template '{report_name}' successfully downloaded to: {save_path}")        
                except IOError as e:
                    print(f"Error saving PDF to file: {e}")
                except Exception as e:
                    print(f"An unexpected error occurred during PDF saving: {e}")

    def create_SLIV(self, file_path: str):
        """
        Creates a new sales invoice from a JSON payload file.
        
        Args:
            file_path (str): The path to the JSON file containing the invoice data.
        """
        payload_str = APICommon.get_payload_data(file_path)
        if payload_str:
            self._send_request("POST", self.base_url, payload=payload_str)

    def update_SLIV(self, docno: str, code: str, file_path: str):
        """
        Updates an existing sales invoice record.
        
        Args:
            docno (str): The document number of the invoice to update.
            code (str): The code associated with the invoice (used for verification).
            file_path (str): The path to the JSON file containing the updated invoice data.
        """
        # Retrieve necessary fields from the existing record
        data = self.get_SLIV_Single(docno, ShowResult=False)
        
        if data:
            dockey = APICommon.get_field_value(data, "dockey")
            cocode = APICommon.get_field_value(data, "code")
            updatecount = APICommon.get_field_value(data, "updatecount") 
            print(f"Retrieved updatecount: {updatecount}")

            if dockey is not None and str(cocode) == code: # Ensure code matches for the right document
                APICommon.update_updatecount(file_path, updatecount)
                
                payload_str = APICommon.get_payload_data(file_path)
                if payload_str:
                    full_url = f'{self.base_url}/{dockey}'
                    print(f"Attempting to update invoice at: {full_url}")
                    self._send_request("PUT", full_url, payload=payload_str)
            else:
                print(f"Error: No record found for DocNo '{docno}' with code '{code}' or dockey is missing.")
        else:
            print(f"Error: Could not retrieve existing invoice data for DocNo '{docno}'. Cannot update.")

    def delete_SLIV1(self, dockey: str):
        """
        Deletes a sales invoice by its dockey (document key).
        
        Args:
            dockey (str): The document key of the invoice to delete.
        """
        full_url = f'{self.base_url}/{dockey}'
        self._send_request("DELETE", full_url)

    def delete_SLIV(self, docno: str, code: str):
        """
        Deletes a sales invoice by its document number and code.
        First retrieves the dockey using docno and code for verification.
        
        Args:
            docno (str): The document number of the invoice to delete.
            code (str): The code associated with the invoice.
        """
        data = self.get_SLIV_Single(docno, ShowResult=False)
        
        if data:
            dockey = APICommon.get_field_value(data, "dockey")
            cocode = APICommon.get_field_value(data, "code")
            
            if dockey is not None and str(cocode) == code: # Ensure code matches for the right document
                full_url = f'{self.base_url}/{dockey}'
                print(f"Attempting to delete invoice at: {full_url}")
                self._send_request("DELETE", full_url)
            else:
                print(f"Error: No record found for DocNo '{docno}' with code '{code}' or dockey is missing. Cannot delete.")
        else:
            print(f"Error: Could not retrieve existing invoice data for DocNo '{docno}'. Cannot delete.")
            
if __name__ == "__main__":
    sliv_api = SLIVApiClient(base_url=url) # Initialize with the base URL defined earlier

    # Example: Create Invoice
    answer = input("Continue Creating New Invoice? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print(f"\n--- Creating Invoice from '{json_path}SL_SO2SL_IV.json' ---")
        sliv_api.create_SLIV(f'{json_path}SL_SO2SL_IV.json') # Ensure this path is correct for your setup
        
        print("\n" + "="*50 + "\n")
        print("--- Getting Newly Created Invoice '--IV-Test1--' ---")
        sliv_api.get_SLIV_Single('--IV-Test1--')
    
    print("\n" + "="*50 + "\n")

    # Example: Get PDF
    answer = input("Continue Downloading PDF? (y/n): ")
    if answer.lower() in ["y","yes"]:
        desktop_path = os.path.expanduser("~\Desktop") # Cross-platform way to get Desktop path
        print(f"\n--- Downloading PDF for '--IV-Test1--' to {desktop_path} ---")
        sliv_api.get_SLIV_PDF('--IV-Test1--', 'Sales Invoice 8 (SST 1)', desktop_path)
    
    print("\n" + "="*50 + "\n")

    # Example: Delete Invoice
    answer = input("Continue Deleting Invoice? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print("\n--- Deleting Invoice '--IV-Test1--' (code '300-W0002') ---")
        sliv_api.delete_SLIV('--IV-Test1--','300-W0002')
        
        print("\n--- End of Script ---")

```

</details>

### Customer Payment

<details>
    <summary>Customer Payment - Get List, PDF, Add, Update & Delete Function - click to expand</summary>

```python
#Updated 18 Oct 2025
import os
import requests
import json
import APICommon
import urllib.parse

# Centralized API configuration from APICommon.py
session_token = os.environ.get('AWS_SESSION_TOKEN')
access_key = APICommon.access_key
secret_key = APICommon.secret_key
service = APICommon.service
host = APICommon.host
region = APICommon.region

# Base URL for the Customer Payment API
url = f'https://{host}/customerpayment'
json_path_new = '..\\API\\AR_PM-New'
json_path_edit = '..\\API\\AR_PM-Edit'
sDocNo = '--PM-Test--'
sRptName = 'GL Official Receipt - Detail - Full (with other CNnOR info)'

class ARPMApiClient(APICommon.BaseApiClient):
    """
    Client for the Customer Payment (ARPM) API, inheriting common functionality from BaseApiClient.
    """
    def __init__(self, base_url: str):
        super().__init__(
            service=service,
            host=host,
            region=region,
            access_key=access_key,
            secret_key=secret_key,
            session_token=session_token
        )
        self.base_url = base_url

    def get_ARPM_data(self, offset: int = 0, limit: int = 10):
        """
        Retrieves Customer Payment data with pagination.
        
        Args:
            offset (int): The number of records to skip. Defaults to 0.
            limit (int): The maximum number of records to shown. Defaults to 10.
        """
        query_params = f'offset={offset}'
        full_url = f'{self.base_url}?{query_params}'
        
        response = self._send_request("GET", full_url)
        if response:
            try:
                data = response.json()
                APICommon.auto_parse_json(data, limit=limit) # Automatically parse and display JSON
            except json.JSONDecodeError:
                print("Error: Could not decode JSON from response.")
            except Exception as e:
                print(f"Error processing response JSON: {e}")

    def get_ARPM_Single(self, ADocNo: str, ShowResult: bool = True):
        """
        Retrieves a single Customer Payment record by document number.
        
        Args:
            ADocNo (str): The document number of the Customer Payment.
            ShowResult (bool): If True, automatically parses and prints the result. 
                               If False, returns the JSON response. Defaults to True.
        
        Returns:
            dict or None: The parsed JSON data if ShowResult is False and successful, None otherwise.
        """
        lDocNo = urllib.parse.quote(ADocNo) # To avoid problem when string have space
        full_url = f'{self.base_url}/*?docno={lDocNo}'
        #full_url = f'{self.base_url}/35' #Find by Dockey
        response = self._send_request("GET", full_url)
        if response:
            try:
                data = response.json()
                if ShowResult:
                    APICommon.auto_parse_json(data) # Automatically parse and display JSON
                else:
                    return data
            except json.JSONDecodeError:
                print("Error: Could not decode JSON from response.")
            except Exception as e:
                print(f"Error processing response JSON: {e}")
        return None

    def get_ARPM_PDF(self, ADocNo: str, report_name: str, save_path: str):
        """
        Downloads a Customer Payment as a PDF.
        
        Args:
            ADocNo (str): The document number of the Customer Payment.
            report_name (str): The template name for the PDF report (e.g., 'Customer Payment 8 (SST 1)').
            save_path (str): The directory where the PDF should be saved.
        """
        data = self.get_ARPM_Single(ADocNo, ShowResult=False)
        
        if data:
            dockey = APICommon.get_field_value(data, "dockey")        
            full_url = f'{self.base_url}/{dockey}'
        
            custom_headers = {
                'Content-Type': f'application/pdf;template={report_name}'        
            } 
        
            print(f"Attempting to download PDF Payment for DocNo: {ADocNo} using template: {report_name}")
            print(f"\nRemember to check the '{save_path}' folder for the downloaded PDF.")
        
            response = self._send_request("GET", full_url, custom_headers=custom_headers)
            if response:
                try:
                    output_filename = f"{sRptName}_{ADocNo}.pdf"
                    full_save_path = os.path.join(save_path, output_filename)

                    # Ensure the directory exists
                    os.makedirs(os.path.dirname(full_save_path), exist_ok=True)

                    # Write the content to a file in binary mode
                    with open(full_save_path, 'wb') as pdf_file:
                        for chunk in response.iter_content(chunk_size=8192):
                            if chunk: # Filter out keep-alive chunks
                                pdf_file.write(chunk)

                    print(f"PDF for DocNo '{ADocNo}' with template '{report_name}' successfully downloaded to: {save_path}")        
                except IOError as e:
                    print(f"Error saving PDF to file: {e}")
                except Exception as e:
                    print(f"An unexpected error occurred during PDF saving: {e}")

    def create_ARPM(self, file_path: str):
        """
        Creates a new Customer Payment from a JSON payload file.
        
        Args:
            file_path (str): The path to the JSON file containing the Payment data.
        """
        payload_str = APICommon.get_payload_data(file_path)
        if payload_str:
            self._send_request("POST", self.base_url, payload=payload_str)

    def update_ARPM(self, docno: str, file_path: str):
        """
        Updates an existing Customer Payment record.
        
        Args:
            docno (str): The document number of the Payment to update.
            file_path (str): The path to the JSON file containing the updated Payment data.
        """
        # Retrieve necessary fields from the existing record
        data = self.get_ARPM_Single(docno, ShowResult=False)
        
        if data:
            dockey = APICommon.get_field_value(data, "dockey")
            updatecount = APICommon.get_field_value(data, "updatecount") 
            print(f"Retrieved updatecount: {updatecount}")

            if dockey is not None:
                APICommon.update_updatecount(file_path, updatecount)
                
                payload_str = APICommon.get_payload_data(file_path)
                if payload_str:
                    full_url = f'{self.base_url}/{dockey}'
                    print(f"Attempting to update Payment at: {full_url}")
                    self._send_request("PUT", full_url, payload=payload_str)
            else:
                print(f"Error: No record found for DocNo '{docno}' or dockey is missing.")
        else:
            print(f"Error: Could not retrieve existing Payment data for DocNo '{docno}'. Cannot update.")

    def delete_ARPM1(self, dockey: str):
        """
        Deletes a Customer Payment by its dockey (document key).
        
        Args:
            dockey (str): The document key of the Payment to delete.
        """
        full_url = f'{self.base_url}/{dockey}'
        self._send_request("DELETE", full_url)

    def delete_ARPM(self, docno: str, code: str):
        """
        Deletes a Customer Payment by its document number and code.
        First retrieves the dockey using docno and code for verification.
        
        Args:
            docno (str): The document number of the Payment to delete.
            code (str): The code associated with the Payment.
        """
        data = self.get_ARPM_Single(docno, ShowResult=False)
        
        if data:
            dockey = APICommon.get_field_value(data, "dockey")
            cocode = APICommon.get_field_value(data, "code")
            
            if dockey is not None and str(cocode) == code: # Ensure code matches for the right document
                full_url = f'{self.base_url}/{dockey}'
                print(f"Attempting to delete Payment at: {full_url}")
                self._send_request("DELETE", full_url)
            else:
                print(f"Error: No record found for DocNo '{docno}' with code '{code}' or dockey is missing. Cannot delete.")
        else:
            print(f"Error: Could not retrieve existing Payment data for DocNo '{docno}'. Cannot delete.")
            
if __name__ == "__main__":
    ARPM_api = ARPMApiClient(base_url=url) # Initialize with the base URL defined earlier

    # Example: Fetch List data
    answer = input("Continue Get Payment List? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print("--- Fetching Customer Payments (Offset 0, Limit 10) ---")
        ARPM_api.get_ARPM_data(offset=0)

    print("\n" + "="*50 + "\n")
    
    answer = input("Continue Get Payment next list? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print("--- Fetching Customer Payments (Offset 10, Limit 10) ---")
        ARPM_api.get_ARPM_data(offset=10) # Start from Record 11 (i.e. skip 1st 10 records)

    print("\n" + "="*50 + "\n")

    # Example: Get Single DocNo
    answer = input("Continue Get Single DocNo? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print("--- Getting Single Customer Payment 'OR-00008' ---")
        ARPM_api.get_ARPM_Single('OR-00008')

    print("\n" + "="*50 + "\n")

    # Example: Get PDF
    answer = input("Continue Downloading PDF? (y/n): ")
    if answer.lower() in ["y","yes"]:
        desktop_path = os.path.expanduser("~\Desktop") # Cross-platform way to get Desktop path
        print(f"\n--- Downloading PDF for 'OR-00008' to {desktop_path} ---")
        ARPM_api.get_ARPM_PDF('OR-00008', sRptName, desktop_path)
    
    print("\n" + "="*50 + "\n")

    # Example: Create Payment
    answer = input("Continue Creating New Payment? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print(f"\n--- Creating Payment from '{json_path_new}.json' ---")
        ARPM_api.create_ARPM(f'{json_path_new}.json') # Ensure this path is correct for your setup
        
        print("\n" + "="*50 + "\n")
        print(f"--- Getting Newly Created Payment '{sDocNo}' ---")
        ARPM_api.get_ARPM_Single(sDocNo)
    
    print("\n" + "="*50 + "\n")

    # Example: Edit Payment
    answer = input("Continue Updating Payment? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print(f"\n--- Updating Payment '{sDocNo}' with '{json_path_edit}.json' ---")
        ARPM_api.update_ARPM(sDocNo, f'{json_path_edit}.json') # Ensure paths are correct
        
        print("\n" + "="*50 + "\n")
        print(f"--- Getting Updated Payment '{sDocNo}' ---")
        ARPM_api.get_ARPM_Single(sDocNo)

    print("\n" + "="*50 + "\n")
    
    # Example: Delete Payment
    answer = input("Continue Deleting Payment? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print(f"\n--- Deleting Payment '{sDocNo}' (code '300-G0002') ---")
        ARPM_api.delete_ARPM(sDocNo,'300-G0002')
        
        print("\n--- End of Script ---")

```

</details>

### Stock Item

<details>
    <summary>Stock Item - Get List, Add, Update & Delete Function - click to expand</summary>

```python
#Updated 18 Oct 2025
import os
import requests
import json
import APICommon
from urllib.parse import quote

# Centralized API configuration from APICommon.py
session_token = os.environ.get('AWS_SESSION_TOKEN')
access_key = APICommon.access_key
secret_key = APICommon.secret_key
service = APICommon.service
host = APICommon.host
region = APICommon.region

# Base URL for the Stock Item API
url = f'https://{host}/stockitem'
json_path_new = '..\\API\\ST_Item-New'  # Path to your payload files
json_path_edit = '..\\API\\ST_Item-Edit'
sCode = 'OISHI250'

class StockItemApiClient(APICommon.BaseApiClient):
    """
    Client for the Stock Item API, inheriting common functionality from BaseApiClient.
    """
    def __init__(self, base_url: str):
        super().__init__(
            service=service,
            host=host,
            region=region,
            access_key=access_key,
            secret_key=secret_key,
            session_token=session_token
        )
        self.base_url = base_url

    def get_stock_items(self, offset: int = 0, limit: int = 10):
        """
        Retrieves stock items with pagination.
        
        Args:
            offset (int): The number of records to skip. Defaults to 0.
            limit (int): The maximum number of records to shown. Defaults to 10.
        """
        query_params = f'offset={offset}'
        full_url = f'{self.base_url}?{query_params}'
        print(full_url)
        response = self._send_request("GET", full_url)
        if response:
            try:
                data = response.json()
                APICommon.auto_parse_json(data, limit=limit)
            except json.JSONDecodeError:
                print("Error: Could not decode JSON from response.")
            except Exception as e:
                print(f"Error processing response JSON: {e}")

    def get_stock_item_single(self, code: str, ShowResult: bool = True):
        """
        Retrieves a single stock item by code.
        
        Args:
            code (str): The code of the stock group item.
            ShowResult (bool): If True, automatically parses and prints the result. 
                               If False, returns the JSON response. Defaults to True.
            
        Returns:
            dict or None: The parsed JSON data if ShowResult is False and successful, None otherwise.
        """
        aCode = quote(code, safe='') #Avoid invalid char for URL
        full_url = f'{self.base_url}/*?code={aCode}'
        print(full_url)
        response = self._send_request("GET", full_url)
        if response:
            try:
                data = response.json()
                if ShowResult:
                    APICommon.auto_parse_json(data) # Automatically parse and display JSON
                else:
                    return data
                
                dockey = data["data"][0]["dockey"]
        
                # Fetch the item by dockey
                full_url = f"{self.base_url}/{dockey}"
                response = self._send_request("GET", full_url)
                if response:
                    data = response.json()
                    if ShowResult:
                        APICommon.auto_parse_json(data)
                    else:
                        return data
                
            except json.JSONDecodeError:
                print("Error: Could not decode JSON from response.")
            except Exception as e:
                print(f"Error processing response JSON: {e}")
        return None

    def create_stock_item(self, file_path: str):
        """
        Creates a new stock item from a JSON payload file.
        
        Args:
            file_path (str): The path to the JSON file containing the stock item data.
        """
        payload_str = APICommon.get_payload_data(file_path)
        if payload_str:
            self._send_request("POST", self.base_url, payload=payload_str)

    def update_stock_item(self, code: str, file_path: str):
        """
        Updates an existing stock item record.
        
        Args:
            code (str): The code of the stock item to update.
            file_path (str): The path to the JSON file containing the updated stock item data.
        """
        # Retrieve necessary fields from the existing record
        data = self.get_stock_item_single(code, ShowResult=False)
        if data:
            dockey = APICommon.get_field_value(data, "dockey")
            cocode = APICommon.get_field_value(data, "code")

            if dockey is not None and str(cocode) == code: # Ensure code matches
                payload_str = APICommon.get_payload_data(file_path)
                if payload_str:
                    full_url = f'{self.base_url}/{dockey}'
                    print(f"Attempting to update stock item at: {full_url}")
                    self._send_request("PUT", full_url, payload=payload_str)
            else:
                print(f"Error: Could not find updatecount for stock item '{code}'")
        else:
            print(f"Error: Could not retrieve stock item data for code '{code}'.")

    def delete_stock_item(self, code: str):
        """
        Deletes a stock item by code.
        
        Args:
            code (str): The code associated with the stock item.
        """
        data = self.get_stock_item_single(code, ShowResult=False)
        
        if data:
            dockey = APICommon.get_field_value(data, "dockey")
            cocode = APICommon.get_field_value(data, "code")
            
            if dockey is not None and str(cocode) == code: # Ensure code matches for the right document
                full_url = f'{self.base_url}/{dockey}'
                print(f"Attempting to delete stock item at: {full_url}")
                self._send_request("DELETE", full_url)
                
            else:
                print(f"Error: No record found for Code '{code}' or Dockey is missing. Cannot delete.")
        else:
            print(f"Error: Could not retrieve existing Stock Item data for Code '{code}'. Cannot delete.")


if __name__ == "__main__":
    stock_api = StockItemApiClient(base_url=url)

    # Example: Fetch stock item list
    answer = input("Get Stock Item List? (y/n): ")
    if answer.lower() in ["y", "yes"]:
        print("--- Fetching Stock Items (Offset 0, Limit 10) ---")
        stock_api.get_stock_items(offset=0)

    print("\n" + "=" * 50 + "\n")

    # Example: Fetch next stock item list
    answer = input("Continue Get Stock Item next list? (y/n): ")
    if answer.lower() in ["y", "yes"]:
        print("--- Fetching Stock Items (Offset 50, Limit 10) ---")
        stock_api.get_stock_items(offset=50)

    print("\n" + "=" * 50 + "\n")

    # Example: Fetch Single Stock Item
    answer = input("Continue Get Single Stock Item? (y/n): ")
    if answer.lower() in ["y", "yes"]:
        code = input("Enter Stock Item Code: ")
        stock_api.get_stock_item_single(code)

    print("\n" + "=" * 50 + "\n")

    # Example: Create Stock Item
    answer = input("Continue Creating New Stock Item? (y/n): ")
    if answer.lower() in ["y", "yes"]:
        print(f"\n--- Creating Stock Item from '{json_path_new}.json' ---")
        stock_api.create_stock_item(f'{json_path_new}.json') # Ensure this path is correct for your setup

        print("\n" + "=" * 50 + "\n")
        print(f"--- Getting Newly Created Stock Item '{sCode}' ---")
        stock_api.get_stock_item_single(sCode)
        
    print("\n" + "="*50 + "\n")

    # Example: Update Stock Item
    answer = input("Continue Updating Stock Item? (y/n): ")
    if answer.lower() in ["y", "yes"]:
        print(f"\n--- Updating Stock Item '{sCode}' with '{json_path_edit}.json' ---")
        stock_api.update_stock_item(sCode, f'{json_path_edit}.json') # Ensure paths is correct
        
        print("\n" + "=" * 50 + "\n")
        print(f"--- Getting Updated Stock Item '{sCode}' ---")
        stock_api.get_stock_item_single(sCode)

    print("\n" + "=" * 50 + "\n")

    # Example: Delete Stock Item
    answer = input("Continue Deleting Stock Item? (y/n): ")
    if answer.lower() in ["y", "yes"]:
        code = input("Enter Stock Item Code to delete: ")
        print(f"--- Deleting Stock Item '{code}' ---")
        stock_api.delete_stock_item(code)

    print("\n--- End of Script ---")

```

</details>

### Maintain Customer

<details>
    <summary>Maintain Customer - Get List, Add, Update & Delete Function - click to expand</summary>

```python
#Updated 25 Aug 2025
import os
import requests
import json
import APICommon
import urllib.parse

# Centralized API configuration from APICommon.py
session_token = os.environ.get('AWS_SESSION_TOKEN')
access_key = APICommon.access_key
secret_key = APICommon.secret_key
service = APICommon.service
host = APICommon.host
region = APICommon.region

# Base URL for the AR Customer API
url = f'https://{host}/customer'
json_path = '..\\API\\'  # Path to your payload files

class ARCustApiClient(APICommon.BaseApiClient):
    """
    Client for the AR Customer API, inheriting common functionality from BaseApiClient.
    """
    def __init__(self, base_url: str):
        super().__init__(
            service=service,
            host=host,
            region=region,
            access_key=access_key,
            secret_key=secret_key,
            session_token=session_token
        )
        self.base_url = base_url

    def get_ar_cust(self, offset: int = 0, limit: int = 10):
        """
        Retrieves AR Customers with pagination.
        
        Args:
            offset (int): The number of records to skip. Defaults to 0.
            limit (int): The maximum number of records to shown. Defaults to 10.
        """
        query_params = f'offset={offset}'
        full_url = f'{self.base_url}?{query_params}'
        
        response = self._send_request("GET", full_url)
        if response:
            try:
                data = response.json()
                APICommon.auto_parse_json(data, limit=limit)
            except json.JSONDecodeError:
                print("Error: Could not decode JSON from response.")
            except Exception as e:
                print(f"Error processing response JSON: {e}")

    def get_ar_cust_single(self, code: str, ShowResult: bool = True):
        """
        Retrieves a single AR Customer by code.
        
        Args:
            code (str): The code of the stock group item.
            ShowResult (bool): If True, automatically parses and prints the result. 
                               If False, returns the JSON response. Defaults to True.
            
        Returns:
            dict or None: The parsed JSON data if ShowResult is False and successful, None otherwise.
        """
        
        try:
            ACode = urllib.parse.quote(code) # To avoid problem when string have space
            full_url = f'{self.base_url}/*?code={ACode}'
            response = self._send_request("GET", full_url)
            if response:
                try:
                    data = response.json()
                    if ShowResult:
                        APICommon.auto_parse_json(data) # Automatically parse and display JSON
                    else:
                        return data                    

                except json.JSONDecodeError:
                    print("Error: Could not decode JSON from response.")
                
        except Exception as e:
            print(f"Error processing response JSON: {e}")

    def create_ar_cust(self, file_path: str):
        """
        Creates a new AR Customer from a JSON payload file.
        
        Args:
            file_path (str): The path to the JSON file containing the AR Customer data.
        """
        payload_str = APICommon.get_payload_data(file_path)
        if payload_str:
            self._send_request("POST", self.base_url, payload=payload_str)

    def update_ar_cust(self, code: str, file_path: str):
        """
        Updates an existing AR Customer record.
        
        Args:
            code (str): The code of the AR Customer to update.
            file_path (str): The path to the JSON file containing the updated AR Customer data.
        """
        # Retrieve necessary fields from the existing record
        data = self.get_ar_cust_single(code, False)
        if data:
            cocode = APICommon.get_field_value(data, "code")

            if str(cocode) == code: # Ensure code matches
                payload_str = APICommon.get_payload_data(file_path)
                if payload_str:
                    full_url = f'{self.base_url}/{cocode}'
                    print(f"Attempting to update AR Customer at: {full_url}")
                    self._send_request("PUT", full_url, payload=payload_str)
            else:
                print(f"Error: Could not find updatecount for AR Customer '{code}'")
        else:
            print(f"Error: Could not retrieve AR Customer data for code '{code}'.")

    def delete_ar_cust(self, code: str):
        """
        Deletes a AR Customer by code.
        
        Args:
            code (str): The code associated with the AR Customer.
        """
        data = self.get_ar_cust_single(code, ShowResult=False)
        
        if data:
            cocode = APICommon.get_field_value(data, "code")
            
            if str(cocode) == code: # Ensure code matches
                full_url = f'{self.base_url}/{code}'
                print(f"Attempting to delete AR Customer at: {full_url}")
                self._send_request("DELETE", full_url)
                
            else:
                print(f"Error: No record found for Code '{code}'")
        else:
            print(f"Error: Could not retrieve existing AR Customer data for Code '{code}'. Cannot delete.")


if __name__ == "__main__":
    stock_api = ARCustApiClient(base_url=url)

    # Example: Fetch AR Customer list
    answer = input("Get AR Customer List? (y/n): ")
    if answer.lower() in ["y", "yes"]:
        print("--- Fetching AR Customers (Offset 0, Limit 10) ---")
        stock_api.get_ar_cust(offset=0)

    print("\n" + "=" * 50 + "\n")

    # Example: Fetch next AR Customer list
    answer = input("Continue Get AR Customer next list? (y/n): ")
    if answer.lower() in ["y", "yes"]:
        print("--- Fetching AR Customers (Offset 50, Limit 10) ---")
        stock_api.get_ar_cust(offset=50)

    print("\n" + "=" * 50 + "\n")

    # Example: Fetch Single AR Customer
    answer = input("Continue Get Single AR Customer? (y/n): ")
    if answer.lower() in ["y", "yes"]:
        code = input("Enter AR Customer Code: ")
        stock_api.get_ar_cust_single(code)

    print("\n" + "=" * 50 + "\n")

    # Example: Create AR Customer
    answer = input("Continue Creating New AR Customer? (y/n): ")
    if answer.lower() in ["y", "yes"]:
        print(f"\n--- Creating AR Customer from '{json_path}AR_Customer-New.json' ---")
        stock_api.create_ar_cust(f'{json_path}AR_Customer-New.json') # Ensure this path is correct for your setup

        print("\n" + "=" * 50 + "\n")
        print("--- Getting Newly Created AR Customer '0Test-Cust' ---")
        stock_api.get_ar_cust_single('0Test-Cust')
        
    print("\n" + "="*50 + "\n")

    # Example: Update AR Customer
    answer = input("Continue Updating AR Customer? (y/n): ")
    if answer.lower() in ["y", "yes"]:
        print(f"\n--- Updating AR Customer '0Test-Cust' with '{json_path}AR_Customer-Edit.json' ---")
        stock_api.update_ar_cust('0Test-Cust', f'{json_path}AR_Customer-Edit.json') # Ensure paths is correct
        
        print("\n" + "=" * 50 + "\n")
        print("--- Getting Updated AR Customer '0Test-Cust' ---")
        stock_api.get_ar_cust_single('0Test-Cust')

    print("\n" + "=" * 50 + "\n")

    # Example: Delete AR Customer
    answer = input("Continue Deleting AR Customer? (y/n): ")
    if answer.lower() in ["y", "yes"]:
        code = input("Enter AR Customer Code to delete: ")
        print(f"--- Deleting AR Customer '{code}' ---")
        stock_api.delete_ar_cust(code)

    print("\n--- End of Script ---")

```

### Journal Entry

</details>

<details>
    <summary>Journal Entry - Get List, Add, Update & Delete Function - click to expand</summary>

```python
#Updated 25 Sep 2025 - PDF not ready yet...
import os
import requests
import json
import APICommon

# Centralized API configuration from APICommon.py
session_token = os.environ.get('AWS_SESSION_TOKEN')
access_key = APICommon.access_key
secret_key = APICommon.secret_key
service = APICommon.service
host = APICommon.host
region = APICommon.region

# Base URL for the Journal Entry API
url = f'https://{host}/journalentry'
json_path = '..\\API\\GL_JE-'
sDocNo = '--JE-Test--'
sRptName = 'GL Journal Voucher - Half (SST)'

class GLJEApiClient(APICommon.BaseApiClient):
    """
    Client for the Journal Entry (GLJE) API, inheriting common functionality from BaseApiClient.
    """
    def __init__(self, base_url: str):
        super().__init__(
            service=service,
            host=host,
            region=region,
            access_key=access_key,
            secret_key=secret_key,
            session_token=session_token
        )
        self.base_url = base_url

    def get_GLJE_data(self, offset: int = 0, limit: int = 10):
        """
        Retrieves Journal Entry data with pagination.
        
        Args:
            offset (int): The number of records to skip. Defaults to 0.
            limit (int): The maximum number of records to shown. Defaults to 10.
        """
        query_params = f'offset={offset}'
        full_url = f'{self.base_url}?{query_params}'
        
        response = self._send_request("GET", full_url)
        if response:
            try:
                data = response.json()
                APICommon.auto_parse_json(data, limit=limit) # Automatically parse and display JSON
            except json.JSONDecodeError:
                print("Error: Could not decode JSON from response.")
            except Exception as e:
                print(f"Error processing response JSON: {e}")

    def get_GLJE_Single(self, ADocNo: str, ShowResult: bool = True, AFld: str =''):
        """
        Retrieves a single Journal Entry record by document number.
        
        Args:
            ADocNo (str): The document number of the Journal Entry.
            ShowResult (bool): If True, automatically parses and prints the result. 
                               If False, returns the JSON response. Defaults to True.
            AFld (str): Search field
            
        Returns:
            dict or None: The parsed JSON data if ShowResult is False and successful, None otherwise.
        """
        
        """
        There got 3 type of GET:        
        01. Get Detail =>  /salesJournal/*?
            - Return Result with Detail Records
            - only got this fields => code=&docdate=&docno=&postdate=&eiv_utc=
        02. Normal Get =>  /salesJournal?
            - Return Result only Header Records
            - eg lastmodified=1757557610
        03. Get by Dockey /{Dockey}
        
        https://wiki.sql.com.my/wiki/Restful_API#How_many_ways_for_GET_Method_available%3F
        """

        vFld = AFld
        if vFld == '':
            vFld = 'DocNo'
        vData = ADocNo
        
        aKey = '?'
        if vFld.lower() in ["code", "docdate", "docno", "postdate", "eiv_utc"]:
            aKey = '*?'
        else:
            if vFld.lower() == "dockey":
                aKey = ''

        if vFld.lower() == "dockey":
            full_url = f'{self.base_url}/{vData}'
        else:
            full_url = f'{self.base_url}/{aKey}{vFld}={vData}'        
        print(f"URL = {full_url}")
        response = self._send_request("GET", full_url)
        if response:
            try:
                data = response.json()
                
                # Base case for recursion: if we are already searching by dockey, we should not recurse again.
                if vFld.lower() == "dockey":
                    if ShowResult:
                        APICommon.auto_parse_json(data)
                    return data
                
                # Recursive step: if not a dockey search, find the dockey and recurse.
                if vFld.lower() in ["code", "docdate", "docno", "postdate", "eiv_utc"]:
                    if ShowResult:
                        APICommon.auto_parse_json(data) # Automatically parse and display JSON
                    else:
                        return data
                else:
                    # This is the "normal get" which returns a header. We get the dockey from it.
                    vdockey = APICommon.get_field_value(data, "dockey")
                    if vdockey:
                        # Corrected recursive call:
                        return self.get_GLJE_Single(vdockey, AFld="Dockey")
                    else:
                        print("Error: 'dockey' not found in response.")
                  
            except json.JSONDecodeError:
                print("Error: Could not decode JSON from response.")
            except Exception as e:
                print(f"Error processing response JSON: {e}")
        return None

    def get_GLJE_PDF(self, ADocNo: str, report_name: str, save_path: str):
        """
        Downloads a Journal Entry as a PDF.
        
        Args:
            ADocNo (str): The document number of the Journal Entry.
            report_name (str): The template name for the PDF report (e.g., 'GL Journal Voucher - Half (SST)').
            save_path (str): The directory where the PDF should be saved.
        """
        data = self.get_GLJE_Single(ADocNo, ShowResult=False)
        
        if data:
            dockey = APICommon.get_field_value(data, "dockey")        
            full_url = f'{self.base_url}/{dockey}'
        
            custom_headers = {
                'Content-Type': f'application/pdf;template={report_name}'        
            } 
        
            print(f"Attempting to download PDF Journal for DocNo: {ADocNo} using template: {report_name}")
            print(f"\nRemember to check the '{save_path}' folder for the downloaded PDF.")
        
            response = self._send_request("GET", full_url, custom_headers=custom_headers)
            if response:
                try:
                    output_filename = f"GL_Journal_{ADocNo}.pdf"
                    full_save_path = os.path.join(save_path, output_filename)

                    # Ensure the directory exists
                    os.makedirs(os.path.dirname(full_save_path), exist_ok=True)

                    # Write the content to a file in binary mode
                    with open(full_save_path, 'wb') as pdf_file:
                        for chunk in response.iter_content(chunk_size=8192):
                            if chunk: # Filter out keep-alive chunks
                                pdf_file.write(chunk)

                    print(f"PDF for DocNo '{ADocNo}' with template '{report_name}' successfully downloaded to: {save_path}")        
                except IOError as e:
                    print(f"Error saving PDF to file: {e}")
                except Exception as e:
                    print(f"An unexpected error occurred during PDF saving: {e}")

    def create_GLJE(self, file_path: str):
        """
        Creates a new Journal Entry from a JSON payload file.
        
        Args:
            file_path (str): The path to the JSON file containing the Journal data.
        """
        payload_str = APICommon.get_payload_data(file_path)
        if payload_str:
            self._send_request("POST", self.base_url, payload=payload_str)

    def update_GLJE(self, docno: str, file_path: str):
        """
        Updates an existing Journal Entry record.
        
        Args:
            docno (str): The document number of the Journal to update.
            file_path (str): The path to the JSON file containing the updated Journal data.
        """
        # Retrieve necessary fields from the existing record
        data = self.get_GLJE_Single(docno, ShowResult=False)
        
        if data:
            dockey = APICommon.get_field_value(data, "dockey")
            updatecount = APICommon.get_field_value(data, "updatecount") 
            print(f"Retrieved updatecount: {updatecount}")

            if dockey is not None: 
                APICommon.update_updatecount(file_path, updatecount)
                
                payload_str = APICommon.get_payload_data(file_path)
                if payload_str:
                    full_url = f'{self.base_url}/{dockey}'
                    print(f"Attempting to update Journal at: {full_url}")
                    self._send_request("PUT", full_url, payload=payload_str)
            else:
                print(f"Error: No record found for DocNo '{docno}' or dockey is missing.")
        else:
            print(f"Error: Could not retrieve existing Journal data for DocNo '{docno}'. Cannot update.")

    def delete_GLJE1(self, dockey: str):
        """
        Deletes a Journal Entry by its dockey (document key).
        
        Args:
            dockey (str): The document key of the Journal to delete.
        """
        full_url = f'{self.base_url}/{dockey}'
        self._send_request("DELETE", full_url)

    def delete_GLJE(self, docno: str):
        """
        Deletes a Journal Entry by its document number and code.
        First retrieves the dockey using docno and code for verification.
        
        Args:
            docno (str): The document number of the Journal to delete.
        """
        data = self.get_GLJE_Single(docno, ShowResult=False)
        
        if data:
            dockey = APICommon.get_field_value(data, "dockey")
            
            if dockey is not None: # Ensure code matches for the right document
                full_url = f'{self.base_url}/{dockey}'
                print(f"Attempting to delete Journal at: {full_url}")
                self._send_request("DELETE", full_url)
            else:
                print(f"Error: No record found for DocNo '{docno}' or dockey is missing. Cannot delete.")
        else:
            print(f"Error: Could not retrieve existing Journal data for DocNo '{docno}'. Cannot delete.")
            
if __name__ == "__main__":
    GLJE_api = GLJEApiClient(base_url=url) # Initialize with the base URL defined earlier

    # Example: Fetch List data
    answer = input("Continue Get Journal List? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print("--- Fetching Journal Entrys (Offset 0, Limit 10) ---")
        GLJE_api.get_GLJE_data(offset=0)

    print("\n" + "="*50 + "\n")
    
    answer = input("Continue Get Journal next list? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print("--- Fetching Journal Entrys (Offset 10, Limit 10) ---")
        GLJE_api.get_GLJE_data(offset=10) # Start from Record 11 (i.e. skip 1st 10 records)

    print("\n" + "="*50 + "\n")

    # Example: Get Single DocNo
    answer = input("Continue Get Single DocNo? (y/n): ")
    if answer.lower() in ["y","yes"]:
        vdata = input("Enter Search Value : ")
        afld = 'DocNo'
        afld = input(f"Enter Search Field : {afld} ")
        print(f"--- Getting Single Doc : {vdata} & Search field {afld}---")
        GLJE_api.get_GLJE_Single(vdata, AFld=afld)

    print("\n" + "="*50 + "\n")

    # Example: Get PDF
#     answer = input("Continue Downloading PDF? (y/n): ")
#     if answer.lower() in ["y","yes"]:
#         desktop_path = os.path.expanduser("~\Desktop") # Cross-platform way to get Desktop path
#         vDocNo = input("Enter Search Value : ")
#         print(f"\n--- Downloading PDF for '{vDocNo}' to {desktop_path} ---")
#         GLJE_api.get_GLJE_PDF(vDocNo, sRptName, desktop_path)
#     
#     print("\n" + "="*50 + "\n")

    # Example: Create New Record
    answer = input("Continue Creating New Record? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print(f"\n--- Creating New Record from '{json_path}New.json' ---")
        GLJE_api.create_GLJE(f'{json_path}New.json') # Ensure this path is correct for your setup
        
        print("\n" + "="*50 + "\n")
        print(f"--- Getting Newly Created '{sDocNo}' ---")
        GLJE_api.get_GLJE_Single(sDocNo)
    
    print("\n" + "="*50 + "\n")

    # Example: Edit Record
    answer = input("Continue Updating Record? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print(f"\n--- Updating Record with '{json_path}Edit.json' ---")
        GLJE_api.update_GLJE(sDocNo, f'{json_path}Edit.json') # Ensure paths are correct
        
        print("\n" + "="*50 + "\n")
        print(f"--- Getting Updated Journal '{sDocNo}' ---")
        GLJE_api.get_GLJE_Single(sDocNo)

    print("\n" + "="*50 + "\n")
    
    # Example: Delete Record
    answer = input("Continue Deleting? (y/n): ")
    if answer.lower() in ["y","yes"]:
        vdata = input("Enter Search Value : ")
        print(f"--- Delete Record : {vdata}---")
        GLJE_api.delete_GLJE(vdata)
        
    print("\n--- End of Script ---")

```

</details>

### Stock Received

<details>
    <summary>Stock Received - Get List, Add, Update & Delete Function - click to expand</summary>

```python
#Updated 18 Oct 2025 - PDF not ready yet...
import os
import requests
import json
import APICommon

# Centralized API configuration from APICommon.py
session_token = os.environ.get('AWS_SESSION_TOKEN')
access_key = APICommon.access_key
secret_key = APICommon.secret_key
service = APICommon.service
host = APICommon.host
region = APICommon.region

# Base URL for the Stock Receive API
url = f'https://{host}/stockadjustment'
json_path_new = '..\\API\\ST_RC-New'
json_path_edit = '..\\API\\ST_RC-Edit'
sDocNo = '--RC-Test--'
sRptName = 'Stock Received - Location'

class STRCApiClient(APICommon.BaseApiClient):
    """
    Client for the Stock Receive (STRC) API, inheriting common functionality from BaseApiClient.
    """
    def __init__(self, base_url: str):
        super().__init__(
            service=service,
            host=host,
            region=region,
            access_key=access_key,
            secret_key=secret_key,
            session_token=session_token
        )
        self.base_url = base_url

    def get_STRC_data(self, offset: int = 0, limit: int = 10):
        """
        Retrieves Stock Receive data with pagination.
        
        Args:
            offset (int): The number of records to skip. Defaults to 0.
            limit (int): The maximum number of records to shown. Defaults to 10.
        """
        query_params = f'offset={offset}'
        full_url = f'{self.base_url}?{query_params}'
        
        response = self._send_request("GET", full_url)
        if response:
            try:
                data = response.json()
                APICommon.auto_parse_json(data, limit=limit) # Automatically parse and display JSON
            except json.JSONDecodeError:
                print("Error: Could not decode JSON from response.")
            except Exception as e:
                print(f"Error processing response JSON: {e}")

    def get_STRC_Single(self, ADocNo: str, ShowResult: bool = True, AFld: str =''):
        """
        Retrieves a single Stock Receive record by document number.
        
        Args:
            ADocNo (str): The document number of the Stock Receive.
            ShowResult (bool): If True, automatically parses and prints the result. 
                               If False, returns the JSON response. Defaults to True.
            AFld (str): Search field
            
        Returns:
            dict or None: The parsed JSON data if ShowResult is False and successful, None otherwise.
        """
        
        """
        There got 3 type of GET:        
        01. Get Detail =>  /salesJournal/*?
            - Return Result with Detail Records
            - only got this fields => code=&docdate=&docno=&postdate=&eiv_utc=
        02. Normal Get =>  /salesJournal?
            - Return Result only Header Records
            - eg lastmodified=1757557610
        03. Get by Dockey /{Dockey}
        
        https://wiki.sql.com.my/wiki/Restful_API#How_many_ways_for_GET_Method_available%3F
        """

        vFld = AFld
        if vFld == '':
            vFld = 'DocNo'
        vData = ADocNo
        
        aKey = '?'
        if vFld.lower() in ["code", "docdate", "docno", "postdate", "eiv_utc"]:
            aKey = '*?'
        else:
            if vFld.lower() == "dockey":
                aKey = ''

        if vFld.lower() == "dockey":
            full_url = f'{self.base_url}/{vData}'
        else:
            full_url = f'{self.base_url}/{aKey}{vFld}={vData}'        
        print(f"URL = {full_url}")
        response = self._send_request("GET", full_url)
        if response:
            try:
                data = response.json()
                
                # Base case for recursion: if we are already searching by dockey, we should not recurse again.
                if vFld.lower() == "dockey":
                    if ShowResult:
                        APICommon.auto_parse_json(data)
                    return data
                
                # Recursive step: if not a dockey search, find the dockey and recurse.
                if vFld.lower() in ["code", "docdate", "docno", "postdate", "eiv_utc"]:
                    if ShowResult:
                        APICommon.auto_parse_json(data) # Automatically parse and display JSON
                    else:
                        return data
                else:
                    # This is the "normal get" which returns a header. We get the dockey from it.
                    vdockey = APICommon.get_field_value(data, "dockey")
                    if vdockey:
                        # Corrected recursive call:
                        return self.get_STRC_Single(vdockey, AFld="Dockey")
                    else:
                        print("Error: 'dockey' not found in response.")
                  
            except json.JSONDecodeError:
                print("Error: Could not decode JSON from response.")
            except Exception as e:
                print(f"Error processing response JSON: {e}")
        return None

    def get_STRC_PDF(self, ADocNo: str, report_name: str, save_path: str):
        """
        Downloads a Stock Receive as a PDF.
        
        Args:
            ADocNo (str): The document number of the Stock Receive.
            report_name (str): The template name for the PDF report (e.g., 'GL Journal Voucher - Half (SST)').
            save_path (str): The directory where the PDF should be saved.
        """
        data = self.get_STRC_Single(ADocNo, ShowResult=False)
        
        if data:
            dockey = APICommon.get_field_value(data, "dockey")        
            full_url = f'{self.base_url}/{dockey}'
        
            custom_headers = {
                'Content-Type': f'application/pdf;template={report_name}'        
            } 
        
            print(f"Attempting to download PDF Journal for DocNo: {ADocNo} using template: {report_name}")
            print(f"\nRemember to check the '{save_path}' folder for the downloaded PDF.")
        
            response = self._send_request("GET", full_url, custom_headers=custom_headers)
            if response:
                try:
                    output_filename = f"GL_Journal_{ADocNo}.pdf"
                    full_save_path = os.path.join(save_path, output_filename)

                    # Ensure the directory exists
                    os.makedirs(os.path.dirname(full_save_path), exist_ok=True)

                    # Write the content to a file in binary mode
                    with open(full_save_path, 'wb') as pdf_file:
                        for chunk in response.iter_content(chunk_size=8192):
                            if chunk: # Filter out keep-alive chunks
                                pdf_file.write(chunk)

                    print(f"PDF for DocNo '{ADocNo}' with template '{report_name}' successfully downloaded to: {save_path}")        
                except IOError as e:
                    print(f"Error saving PDF to file: {e}")
                except Exception as e:
                    print(f"An unexpected error occurred during PDF saving: {e}")

    def create_STRC(self, file_path: str):
        """
        Creates a new Stock Receive from a JSON payload file.
        
        Args:
            file_path (str): The path to the JSON file containing the Journal data.
        """
        payload_str = APICommon.get_payload_data(file_path)
        if payload_str:
            self._send_request("POST", self.base_url, payload=payload_str)

    def update_STRC(self, docno: str, file_path: str):
        """
        Updates an existing Stock Receive record.
        
        Args:
            docno (str): The document number of the Journal to update.
            file_path (str): The path to the JSON file containing the updated Journal data.
        """
        # Retrieve necessary fields from the existing record
        data = self.get_STRC_Single(docno, ShowResult=False)
        
        if data:
            dockey = APICommon.get_field_value(data, "dockey")
            updatecount = APICommon.get_field_value(data, "updatecount") 
            print(f"Retrieved updatecount: {updatecount}")

            if dockey is not None: 
                APICommon.update_updatecount(file_path, updatecount)
                
                payload_str = APICommon.get_payload_data(file_path)
                if payload_str:
                    full_url = f'{self.base_url}/{dockey}'
                    print(f"Attempting to update Journal at: {full_url}")
                    self._send_request("PUT", full_url, payload=payload_str)
            else:
                print(f"Error: No record found for DocNo '{docno}' or dockey is missing.")
        else:
            print(f"Error: Could not retrieve existing Journal data for DocNo '{docno}'. Cannot update.")

    def delete_STRC1(self, dockey: str):
        """
        Deletes a Stock Receive by its dockey (document key).
        
        Args:
            dockey (str): The document key of the Journal to delete.
        """
        full_url = f'{self.base_url}/{dockey}'
        self._send_request("DELETE", full_url)

    def delete_STRC(self, docno: str):
        """
        Deletes a Stock Receive by its document number and code.
        First retrieves the dockey using docno and code for verification.
        
        Args:
            docno (str): The document number of the Journal to delete.
        """
        data = self.get_STRC_Single(docno, ShowResult=False)
        
        if data:
            dockey = APICommon.get_field_value(data, "dockey")
            
            if dockey is not None: # Ensure code matches for the right document
                full_url = f'{self.base_url}/{dockey}'
                print(f"Attempting to delete Journal at: {full_url}")
                self._send_request("DELETE", full_url)
            else:
                print(f"Error: No record found for DocNo '{docno}' or dockey is missing. Cannot delete.")
        else:
            print(f"Error: Could not retrieve existing Journal data for DocNo '{docno}'. Cannot delete.")
            
if __name__ == "__main__":
    STRC_api = STRCApiClient(base_url=url) # Initialize with the base URL defined earlier

    # Example: Fetch List data
    answer = input("Continue Get List? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print("--- Fetching Stock Received (Offset 0, Limit 10) ---")
        STRC_api.get_STRC_data(offset=0)

    print("\n" + "="*50 + "\n")
    
    answer = input("Continue Get next list? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print("--- Fetching Stock Received (Offset 10, Limit 10) ---")
        STRC_api.get_STRC_data(offset=10) # Start from Record 11 (i.e. skip 1st 10 records)

    print("\n" + "="*50 + "\n")

    # Example: Get Single DocNo
    answer = input("Continue Get Single DocNo? (y/n): ")
    if answer.lower() in ["y","yes"]:
        vdata = input("Enter Search Value : ")
        afld = 'DocNo'
        afld = input(f"Enter Search Field : {afld} ")
        print(f"--- Getting Single Doc : {vdata} & Search field {afld}---")
        STRC_api.get_STRC_Single(vdata, AFld=afld)

    print("\n" + "="*50 + "\n")

    # Example: Get PDF
#     answer = input("Continue Downloading PDF? (y/n): ")
#     if answer.lower() in ["y","yes"]:
#         desktop_path = os.path.expanduser("~\Desktop") # Cross-platform way to get Desktop path
#         vDocNo = input("Enter Search Value : ")
#         print(f"\n--- Downloading PDF for '{vDocNo}' to {desktop_path} ---")
#         STRC_api.get_STRC_PDF(vDocNo, sRptName, desktop_path)
#     
#     print("\n" + "="*50 + "\n")

    # Example: Create New Record
    answer = input("Continue Creating New Record? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print(f"\n--- Creating Journal from '{json_path_new}.json' ---")
        STRC_api.create_STRC(f'{json_path_new}.json') # Ensure this path is correct for your setup
        
        print("\n" + "="*50 + "\n")
        print(f"--- Getting Newly Created Record '{sDocNo}' ---")
        STRC_api.get_STRC_Single(sDocNo)
    
    print("\n" + "="*50 + "\n")

    # Example: Edit Record
    answer = input("Continue Updating Record? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print(f"\n--- Updating Record with '{json_path_edit}.json' ---")
        STRC_api.update_STRC(sDocNo, f'{json_path_edit}.json') # Ensure paths are correct
        
        print("\n" + "="*50 + "\n")
        print(f"--- Getting Updated Record '{sDocNo}' ---")
        STRC_api.get_STRC_Single(sDocNo)

    print("\n" + "="*50 + "\n")
    
    # Example: Delete Record
    answer = input("Continue Deleting? (y/n): ")
    if answer.lower() in ["y","yes"]:
        vdata = input("Enter Search Value : ")
        print(f"--- Delete Record : {vdata}---")
        STRC_api.delete_STRC(vdata)
        
    print("\n--- End of Script ---")

```

</details>

### GL Payment Voucher

<details>
    <summary>GL Payment Voucher - Get List, Add, Update & Delete Function - click to expand</summary>

```python
#Updated 25 Sep 2025 - PDF not ready yet...
import os
import requests
import json
import APICommon

# Centralized API configuration from APICommon.py
session_token = os.environ.get('AWS_SESSION_TOKEN')
access_key = APICommon.access_key
secret_key = APICommon.secret_key
service = APICommon.service
host = APICommon.host
region = APICommon.region

# Base URL for the GL Payment Voucher API
url = f'https://{host}/paymentvoucher'
json_path = '..\\API\\GL_PV-'
sDocNo = '--PV-Test--'
sRptName = 'GL Payment Voucher - Detail - Half (SST)'

class GLPVApiClient(APICommon.BaseApiClient):
    """
    Client for the GL Payment Voucher (GLPV) API, inheriting common functionality from BaseApiClient.
    """
    def __init__(self, base_url: str):
        super().__init__(
            service=service,
            host=host,
            region=region,
            access_key=access_key,
            secret_key=secret_key,
            session_token=session_token
        )
        self.base_url = base_url

    def get_GLPV_data(self, offset: int = 0, limit: int = 10):
        """
        Retrieves GL Payment Voucher data with pagination.
        
        Args:
            offset (int): The number of records to skip. Defaults to 0.
            limit (int): The maximum number of records to shown. Defaults to 10.
        """
        query_params = f'offset={offset}'
        full_url = f'{self.base_url}?{query_params}'
        
        response = self._send_request("GET", full_url)
        if response:
            try:
                data = response.json()
                APICommon.auto_parse_json(data, limit=limit) # Automatically parse and display JSON
            except json.JSONDecodeError:
                print("Error: Could not decode JSON from response.")
            except Exception as e:
                print(f"Error processing response JSON: {e}")

    def get_GLPV_Single(self, ADocNo: str, ShowResult: bool = True, AFld: str =''):
        """
        Retrieves a single GL Payment Voucher record by document number.
        
        Args:
            ADocNo (str): The document number of the GL Payment Voucher.
            ShowResult (bool): If True, automatically parses and prints the result. 
                               If False, returns the JSON response. Defaults to True.
            AFld (str): Search field
            
        Returns:
            dict or None: The parsed JSON data if ShowResult is False and successful, None otherwise.
        """
        
        """
        There got 3 type of GET:        
        01. Get Detail =>  /salesJournal/*?
            - Return Result with Detail Records
            - only got this fields => code=&docdate=&docno=&postdate=&eiv_utc=
        02. Normal Get =>  /salesJournal?
            - Return Result only Header Records
            - eg lastmodified=1757557610
        03. Get by Dockey /{Dockey}
        
        https://wiki.sql.com.my/wiki/Restful_API#How_many_ways_for_GET_Method_available%3F
        """

        vFld = AFld
        if vFld == '':
            vFld = 'DocNo'
        vData = ADocNo
        
        aKey = '?'
        if vFld.lower() in ["code", "docdate", "docno", "postdate", "eiv_utc"]:
            aKey = '*?'
        else:
            if vFld.lower() == "dockey":
                aKey = ''

        if vFld.lower() == "dockey":
            full_url = f'{self.base_url}/{vData}'
        else:
            full_url = f'{self.base_url}/{aKey}{vFld}={vData}'        
        print(f"URL = {full_url}")
        response = self._send_request("GET", full_url)
        if response:
            try:
                data = response.json()
                
                # Base case for recursion: if we are already searching by dockey, we should not recurse again.
                if vFld.lower() == "dockey":
                    if ShowResult:
                        APICommon.auto_parse_json(data)
                    return data
                
                # Recursive step: if not a dockey search, find the dockey and recurse.
                if vFld.lower() in ["code", "docdate", "docno", "postdate", "eiv_utc"]:
                    if ShowResult:
                        APICommon.auto_parse_json(data) # Automatically parse and display JSON
                    else:
                        return data
                else:
                    # This is the "normal get" which returns a header. We get the dockey from it.
                    vdockey = APICommon.get_field_value(data, "dockey")
                    if vdockey:
                        # Corrected recursive call:
                        return self.get_GLPV_Single(vdockey, AFld="Dockey")
                    else:
                        print("Error: 'dockey' not found in response.")
                  
            except json.JSONDecodeError:
                print("Error: Could not decode JSON from response.")
            except Exception as e:
                print(f"Error processing response JSON: {e}")
        return None

    def get_GLPV_PDF(self, ADocNo: str, report_name: str, save_path: str):
        """
        Downloads a GL Payment Voucher as a PDF.
        
        Args:
            ADocNo (str): The document number of the GL Payment Voucher.
            report_name (str): The template name for the PDF report (e.g., 'GL Journal Voucher - Half (SST)').
            save_path (str): The directory where the PDF should be saved.
        """
        data = self.get_GLPV_Single(ADocNo, ShowResult=False)
        
        if data:
            dockey = APICommon.get_field_value(data, "dockey")        
            full_url = f'{self.base_url}/{dockey}'
        
            custom_headers = {
                'Content-Type': f'application/pdf;template={report_name}'        
            } 
        
            print(f"Attempting to download PDF Journal for DocNo: {ADocNo} using template: {report_name}")
            print(f"\nRemember to check the '{save_path}' folder for the downloaded PDF.")
        
            response = self._send_request("GET", full_url, custom_headers=custom_headers)
            if response:
                try:
                    output_filename = f"GL_Journal_{ADocNo}.pdf"
                    full_save_path = os.path.join(save_path, output_filename)

                    # Ensure the directory exists
                    os.makedirs(os.path.dirname(full_save_path), exist_ok=True)

                    # Write the content to a file in binary mode
                    with open(full_save_path, 'wb') as pdf_file:
                        for chunk in response.iter_content(chunk_size=8192):
                            if chunk: # Filter out keep-alive chunks
                                pdf_file.write(chunk)

                    print(f"PDF for DocNo '{ADocNo}' with template '{report_name}' successfully downloaded to: {save_path}")        
                except IOError as e:
                    print(f"Error saving PDF to file: {e}")
                except Exception as e:
                    print(f"An unexpected error occurred during PDF saving: {e}")

    def create_GLPV(self, file_path: str):
        """
        Creates a new GL Payment Voucher from a JSON payload file.
        
        Args:
            file_path (str): The path to the JSON file containing the Journal data.
        """
        payload_str = APICommon.get_payload_data(file_path)
        if payload_str:
            self._send_request("POST", self.base_url, payload=payload_str)

    def update_GLPV(self, docno: str, file_path: str):
        """
        Updates an existing GL Payment Voucher record.
        
        Args:
            docno (str): The document number of the Journal to update.
            file_path (str): The path to the JSON file containing the updated Journal data.
        """
        # Retrieve necessary fields from the existing record
        data = self.get_GLPV_Single(docno, ShowResult=False)
        
        if data:
            dockey = APICommon.get_field_value(data, "dockey")
            updatecount = APICommon.get_field_value(data, "updatecount") 
            print(f"Retrieved updatecount: {updatecount}")

            if dockey is not None: 
                APICommon.update_updatecount(file_path, updatecount)
                
                payload_str = APICommon.get_payload_data(file_path)
                if payload_str:
                    full_url = f'{self.base_url}/{dockey}'
                    print(f"Attempting to update Journal at: {full_url}")
                    self._send_request("PUT", full_url, payload=payload_str)
            else:
                print(f"Error: No record found for DocNo '{docno}' or dockey is missing.")
        else:
            print(f"Error: Could not retrieve existing Journal data for DocNo '{docno}'. Cannot update.")

    def delete_GLPV1(self, dockey: str):
        """
        Deletes a GL Payment Voucher by its dockey (document key).
        
        Args:
            dockey (str): The document key of the Journal to delete.
        """
        full_url = f'{self.base_url}/{dockey}'
        self._send_request("DELETE", full_url)

    def delete_GLPV(self, docno: str):
        """
        Deletes a GL Payment Voucher by its document number and code.
        First retrieves the dockey using docno and code for verification.
        
        Args:
            docno (str): The document number of the Journal to delete.
        """
        data = self.get_GLPV_Single(docno, ShowResult=False)
        
        if data:
            dockey = APICommon.get_field_value(data, "dockey")
            
            if dockey is not None: # Ensure code matches for the right document
                full_url = f'{self.base_url}/{dockey}'
                print(f"Attempting to delete Journal at: {full_url}")
                self._send_request("DELETE", full_url)
            else:
                print(f"Error: No record found for DocNo '{docno}' or dockey is missing. Cannot delete.")
        else:
            print(f"Error: Could not retrieve existing Journal data for DocNo '{docno}'. Cannot delete.")
            
if __name__ == "__main__":
    GLPV_api = GLPVApiClient(base_url=url) # Initialize with the base URL defined earlier

    # Example: Fetch List data
    answer = input("Continue Get List? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print("--- Fetching GL Payment Voucher (Offset 0, Limit 10) ---")
        GLPV_api.get_GLPV_data(offset=0)

    print("\n" + "="*50 + "\n")
    
    answer = input("Continue Get next list? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print("--- Fetching GL Payment Voucher (Offset 10, Limit 10) ---")
        GLPV_api.get_GLPV_data(offset=10) # Start from Record 11 (i.e. skip 1st 10 records)

    print("\n" + "="*50 + "\n")

    # Example: Get Single DocNo
    answer = input("Continue Get Single DocNo? (y/n): ")
    if answer.lower() in ["y","yes"]:
        vdata = input("Enter Search Value : ")
        afld = 'DocNo'
        afld = input(f"Enter Search Field : {afld} ")
        print(f"--- Getting Single Doc : {vdata} & Search field {afld}---")
        GLPV_api.get_GLPV_Single(vdata, AFld=afld)

    print("\n" + "="*50 + "\n")

    # Example: Get PDF
#     answer = input("Continue Downloading PDF? (y/n): ")
#     if answer.lower() in ["y","yes"]:
#         desktop_path = os.path.expanduser("~\Desktop") # Cross-platform way to get Desktop path
#         vDocNo = input("Enter Search Value : ")
#         print(f"\n--- Downloading PDF for '{vDocNo}' to {desktop_path} ---")
#         GLPV_api.get_GLPV_PDF(vDocNo, sRptName, desktop_path)
#     
#     print("\n" + "="*50 + "\n")

    # Example: Create New Record
    answer = input("Continue Creating New Record? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print(f"\n--- Creating New Record from '{json_path}New.json' ---")
        GLPV_api.create_GLPV(f'{json_path}New.json') # Ensure this path is correct for your setup
        
        print("\n" + "="*50 + "\n")
        print(f"--- Getting Newly Created Record '{sDocNo}' ---")
        GLPV_api.get_GLPV_Single(sDocNo)
    
    print("\n" + "="*50 + "\n")

    # Example: Edit Record
    answer = input("Continue Updating Record? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print(f"\n--- Updating Record with '{json_path}Edit.json' ---")
        GLPV_api.update_GLPV(sDocNo, f'{json_path}Edit.json') # Ensure paths are correct
        
        print("\n" + "="*50 + "\n")
        print(f"--- Getting Updated Record '{sDocNo}' ---")
        GLPV_api.get_GLPV_Single(sDocNo)

    print("\n" + "="*50 + "\n")
    
    # Example: Delete Record
    answer = input("Continue Deleting? (y/n): ")
    if answer.lower() in ["y","yes"]:
        vdata = input("Enter Search Value : ")
        print(f"--- Delete Record : {vdata}---")
        GLPV_api.delete_GLPV(vdata)
        
    print("\n--- End of Script ---")

```

</details>

### Stock Transfer

<details>
    <summary>Stock Transfer - Get List, Add, Update & Delete Function - click to expand</summary>

```python
#Updated 16 Oct 2025 - PDF not ready yet...
import os
import requests
import json
import APICommon

# Centralized API configuration from APICommon.py
session_token = os.environ.get('AWS_SESSION_TOKEN')
access_key = APICommon.access_key
secret_key = APICommon.secret_key
service = APICommon.service
host = APICommon.host
region = APICommon.region

# Base URL for the Stock Transfer API
url = f'https://{host}/stocktransfer'
sDocNo = '--XF-Test--'
json_path = '..\\API\\ST_XF-'
sRptName = 'Stock Transfer'

class STXFApiClient(APICommon.BaseApiClient):
    """
    Client for the Stock Transfer (STXF) API, inheriting common functionality from BaseApiClient.
    """
    def __init__(self, base_url: str):
        super().__init__(
            service=service,
            host=host,
            region=region,
            access_key=access_key,
            secret_key=secret_key,
            session_token=session_token
        )
        self.base_url = base_url

    def get_STXF_data(self, offset: int = 0, limit: int = 10):
        """
        Retrieves Stock Transfer data with pagination.
        
        Args:
            offset (int): The number of records to skip. Defaults to 0.
            limit (int): The maximum number of records to shown. Defaults to 10.
        """
        query_params = f'offset={offset}'
        full_url = f'{self.base_url}?{query_params}'
        
        response = self._send_request("GET", full_url)
        if response:
            try:
                data = response.json()
                APICommon.auto_parse_json(data, limit=limit) # Automatically parse and display JSON
            except json.JSONDecodeError:
                print("Error: Could not decode JSON from response.")
            except Exception as e:
                print(f"Error processing response JSON: {e}")

    def get_STXF_Single(self, ADocNo: str, ShowResult: bool = True, AFld: str =''):
        """
        Retrieves a single Stock Transfer record by document number.
        
        Args:
            ADocNo (str): The document number of the Stock Transfer.
            ShowResult (bool): If True, automatically parses and prints the result. 
                               If False, returns the JSON response. Defaults to True.
            AFld (str): Search field
            
        Returns:
            dict or None: The parsed JSON data if ShowResult is False and successful, None otherwise.
        """
        
        """
        There got 3 type of GET:        
        01. Get Detail =>  /salesinvoice/*?
            - Return Result with Detail Records
            - only got this fields => code=&docdate=&docno=&postdate=&eiv_utc=
        02. Normal Get =>  /salesinvoice?
            - Return Result only Header Records
            - eg lastmodified=1757557610
        03. Get by Dockey /{Dockey}
        
        https://wiki.sql.com.my/wiki/Restful_API#How_many_ways_for_GET_Method_available%3F
        """

        vFld = AFld
        if vFld == '':
            vFld = 'DocNo'
        vData = ADocNo
        
        aKey = '?'
        if vFld.lower() in ["code", "docdate", "docno", "postdate", "eiv_utc"]:
            aKey = '*?'
        else:
            if vFld.lower() == "dockey":
                aKey = ''

        if vFld.lower() == "dockey":
            full_url = f'{self.base_url}/{vData}'
        else:
            full_url = f'{self.base_url}/{aKey}{vFld}={vData}'        
        print(f"URL = {full_url}")
        response = self._send_request("GET", full_url)
        if response:
            try:
                data = response.json()
                
                # Base case for recursion: if we are already searching by dockey, we should not recurse again.
                if vFld.lower() == "dockey":
                    if ShowResult:
                        APICommon.auto_parse_json(data)
                    return data
                
                # Recursive step: if not a dockey search, find the dockey and recurse.
                if vFld.lower() in ["code", "docdate", "docno", "postdate", "eiv_utc"]:
                    if ShowResult:
                        APICommon.auto_parse_json(data) # Automatically parse and display JSON
                    else:
                        return data
                else:
                    # This is the "normal get" which returns a header. We get the dockey from it.
                    vdockey = APICommon.get_field_value(data, "dockey")
                    if vdockey:
                        # Corrected recursive call:
                        return self.get_STXF_Single(vdockey, AFld="Dockey")
                    else:
                        print("Error: 'dockey' not found in response.")
                  
            except json.JSONDecodeError:
                print("Error: Could not decode JSON from response.")
            except Exception as e:
                print(f"Error processing response JSON: {e}")
        return None

    def get_STXF_PDF(self, ADocNo: str, report_name: str, save_path: str):
        """
        Downloads a Stock Transfer as a PDF.
        
        Args:
            ADocNo (str): The document number of the Stock Transfer.
            report_name (str): The template name for the PDF report (e.g., 'Stock Transfer 8 (SST 1)').
            save_path (str): The directory where the PDF should be saved.
        """
        data = self.get_STXF_Single(ADocNo, ShowResult=False)
        
        if data:
            dockey = APICommon.get_field_value(data, "dockey")        
            full_url = f'{self.base_url}/{dockey}'
            print(f"URL = {full_url}")
        
            custom_headers = {
                'Content-Type': f'application/pdf;template={report_name}'        
            } 
        
            print(f"Attempting to download PDF Document for DocNo: {ADocNo} using template: {report_name}")
            print(f"\nRemember to check the '{save_path}' folder for the downloaded PDF.")
        
            response = self._send_request("GET", full_url, custom_headers=custom_headers)
            if response:
                try:
                    output_filename = f"{report_name}_{ADocNo}.pdf"
                    full_save_path = os.path.join(save_path, output_filename)

                    # Ensure the directory exists
                    os.makedirs(os.path.dirname(full_save_path), exist_ok=True)

                    # Write the content to a file in binary mode
                    with open(full_save_path, 'wb') as pdf_file:
                        for chunk in response.iter_content(chunk_size=8192):
                            if chunk: # Filter out keep-alive chunks
                                pdf_file.write(chunk)

                    print(f"PDF for DocNo '{ADocNo}' with template '{report_name}' successfully downloaded to: {save_path}")        
                except IOError as e:
                    print(f"Error saving PDF to file: {e}")
                except Exception as e:
                    print(f"An unexpected error occurred during PDF saving: {e}")

    def create_STXF(self, file_path: str):
        """
        Creates a new Stock Transfer from a JSON payload file.
        
        Args:
            file_path (str): The path to the JSON file containing the Document data.
        """
        payload_str = APICommon.get_payload_data(file_path)
        if payload_str:
            self._send_request("POST", self.base_url, payload=payload_str)

    def update_STXF(self, docno: str, code: str, file_path: str):
        """
        Updates an existing Stock Transfer record.
        
        Args:
            docno (str): The document number to update.
            code (str): The code associated with the document.
            file_path (str): The path to the JSON file containing the updated data.
        """
        # Retrieve necessary fields from the existing record
        data = self.get_STXF_Single(docno, ShowResult=False)
        
        if data:
            dockey = APICommon.get_field_value(data, "dockey")
            updatecount = APICommon.get_field_value(data, "updatecount") 
            print(f"Retrieved updatecount: {updatecount}")

            if dockey is not None:
                APICommon.update_updatecount(file_path, updatecount)
                
                payload_str = APICommon.get_payload_data(file_path)
                if payload_str:
                    full_url = f'{self.base_url}/{dockey}'
                    print(f"Attempting to update data at: {full_url}")
                    self._send_request("PUT", full_url, payload=payload_str)
            else:
                print(f"Error: No record found for DocNo '{docno}' or dockey is missing.")
        else:
            print(f"Error: Could not retrieve existing data for DocNo '{docno}'. Cannot update.")

    def delete_STXF1(self, dockey: str):
        """
        Deletes a Stock Transfer by its dockey (document key).
        
        Args:
            dockey (str): The document key of the document to delete.
        """
        full_url = f'{self.base_url}/{dockey}'
        self._send_request("DELETE", full_url)

    def delete_STXF(self, docno: str):
        """
        Deletes a Stock Transfer by its document number and code.
        First retrieves the dockey using docno and code for verification.
        
        Args:
            docno (str): The document number to delete.
            code (str): The code associated with the document.
        """
        data = self.get_STXF_Single(docno, ShowResult=False)
        
        if data:
            dockey = APICommon.get_field_value(data, "dockey")            
            
            if dockey is not None: # Ensure code matches for the right document
                full_url = f'{self.base_url}/{dockey}'
                print(f"Attempting to delete document at: {full_url}")
                self._send_request("DELETE", full_url)
            else:
                print(f"Error: No record found for DocNo '{docno}' or dockey is missing. Cannot delete.")
        else:
            print(f"Error: Could not retrieve existing document data for DocNo '{docno}'. Cannot delete.")
            
if __name__ == "__main__":
    STXF_api = STXFApiClient(base_url=url) # Initialize with the base URL defined earlier

    # Example: Fetch List data
    answer = input("Continue Get Document List? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print("--- Fetching Stock Transfers (Offset 0, Limit 10) ---")
        STXF_api.get_STXF_data(offset=0)

    print("\n" + "="*50 + "\n")
    
    answer = input("Continue Get Document next list? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print("--- Fetching Stock Transfers (Offset 10, Limit 10) ---")
        STXF_api.get_STXF_data(offset=10) # Start from Record 11 (i.e. skip 1st 10 records)

    print("\n" + "="*50 + "\n")

    # Example: Get Single DocNo
    answer = input("Continue Get Single DocNo? (y/n): ")
    if answer.lower() in ["y","yes"]:
        vdata = input("Enter Search Value : ")
        afld = 'DocNo'
        afld = input(f"Enter Search Field : {afld} ")
        print(f"--- Getting Single Doc : {vdata} & Search field {afld}---")
        STXF_api.get_STXF_Single(vdata, AFld=afld)

    print("\n" + "="*50 + "\n")

    # Example: Get PDF
#     answer = input("Continue Downloading PDF? (y/n): ")
#     if answer.lower() in ["y","yes"]:
#         desktop_path = os.path.expanduser("~\Desktop") # Cross-platform way to get Desktop path
#         vDocNo = input("Enter Search Value : ")
#         print(f"\n--- Downloading PDF for '{vDocNo}' to {desktop_path} ---")
#         STXF_api.get_STXF_PDF(vDocNo, 'Stock Transfer 8 (SST 1)', desktop_path)
#     
#     print("\n" + "="*50 + "\n")

    # Example: Create Document
    answer = input("Continue Creating New Dcoument? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print(f"\n--- Creating Document from '{json_path}New.json' ---")
        STXF_api.create_STXF(f'{json_path}New.json') # Ensure this path is correct for your setup
        
        print("\n" + "="*50 + "\n")
        print(f"--- Getting Newly Created Document '{sDocNo}' ---")
        STXF_api.get_STXF_Single(sDocNo)
    
    print("\n" + "="*50 + "\n")

    # Example: Edit Document
    answer = input("Continue Updating Document? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print(f"\n--- Updating Document '{sDocNo}' with '{json_path}Edit.json' ---")
        STXF_api.update_STXF(sDocNo,'300-G0002', f'{json_path}Edit.json') # Ensure paths are correct
        
        print("\n" + "="*50 + "\n")
        print(f"--- Getting Updated Document '{sDocNo}' ---")
        STXF_api.get_STXF_Single(sDocNo)

    print("\n" + "="*50 + "\n")
    
    # Example: Delete Document
    answer = input("Continue Deleting Document? (y/n): ")
    if answer.lower() in ["y","yes"]:
        print(f"\n--- Deleting Document '{sDocNo}' (code '') ---")
        STXF_api.delete_STXF(sDocNo)
        
    print("\n--- End of Script ---")

```

</details>

### Node JS

Module Require in Node JS

- express -> npm install express
- axios -> npm install axios
- dotenv -> npm install dotenv
- aws -> npm install aws4

### Node JS Common

<details>
    <summary>APICommon.js file for example code - click to expand</summary>

```js
//Updated on 22 Aug 2025
import axios from "axios";
import crypto from "crypto";

const accessKey = "The Access Key";
const secretKey = "The Secret Key";
const service = "execute-api";
const host = "api.sql.my";
const region = "ap-southeast-1";

/**
 * HMAC helper
 */
function sign(key, msg) {
  return crypto.createHmac("sha256", key).update(msg).digest();
}

/**
 * Create AWS SigV4 signed headers
 */
function signRequest(method, urlObj, body = "") {
  const now = new Date();
  const amzDate = now.toISOString().replace(/[:-]|\.\d{3}/g, ""); // e.g. 20250818T030159Z
  const dateStamp = amzDate.substring(0, 8);

  // Canonical URI adjustment
  let canonicalUri = urlObj.pathname;
  if (canonicalUri.endsWith("/*")) {
    canonicalUri = canonicalUri.replace("/*", "/"); // Sign as /salesinvoice/
  }

  // Canonical query string (AWS requires sorted by key)
  let canonicalQuerystring = "";
  if (urlObj.search) {
    const params = urlObj.search.substring(1).split("&");
    const kvPairs = params.map(p => p.split("="));
    const sorted = kvPairs.sort(([a], [b]) => a.localeCompare(b));
    canonicalQuerystring = sorted
      .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v || "")}`)
      .join("&");
  }

  const canonicalHeaders = `host:${host}\n` + `x-amz-date:${amzDate}\n`;
  const signedHeaders = "host;x-amz-date";
  const payloadHash = crypto.createHash("sha256").update(body).digest("hex");

  const canonicalRequest = [
    method,
    canonicalUri,
    canonicalQuerystring,
    canonicalHeaders,
    signedHeaders,
    payloadHash,
  ].join("\n");

  const algorithm = "AWS4-HMAC-SHA256";
  const credentialScope = `${dateStamp}/${region}/${service}/aws4_request`;
  const stringToSign = [
    algorithm,
    amzDate,
    credentialScope,
    crypto.createHash("sha256").update(canonicalRequest).digest("hex"),
  ].join("\n");

  // Derive signing key
  const kDate = sign("AWS4" + secretKey, dateStamp);
  const kRegion = sign(kDate, region);
  const kService = sign(kRegion, service);
  const kSigning = sign(kService, "aws4_request");
  const signature = crypto
    .createHmac("sha256", kSigning)
    .update(stringToSign)
    .digest("hex");

  const authorizationHeader = `${algorithm} Credential=${accessKey}/${credentialScope}, SignedHeaders=${signedHeaders}, Signature=${signature}`;

  // Debug output for checking purpose
  //console.log("\n=== DEBUG SigV4 ===");
  //console.log("CanonicalRequest:\n", canonicalRequest);
  //console.log("StringToSign:\n", stringToSign);


  // Create line
  let symbolString = '';
  for (let i = 0; i < 50; i++) {
    symbolString += '=';
  }

  console.log(symbolString, '\n');

  return {
    "x-amz-date": amzDate,
    "x-amz-content-sha256": payloadHash,
    Authorization: authorizationHeader,
    "Content-Type": "application/json",
  };
}

/**
 * Base client to send signed requests
 */
export async function sendRequest(method, path, body = null, query = "", opts = {}) {
  try {
    // Build request URL
    const requestUrl = `https://${host}${path}${query ? "?" + query : ""}`;
    const urlObj = new URL(requestUrl);

    // For signing, strip the trailing "/*"
    let canonicalPath = urlObj.pathname;
    if (canonicalPath.endsWith("/*")) {
      canonicalPath = canonicalPath.slice(0, -2) + "/"; // sign as /salesinvoice/
    }
    urlObj.pathname = canonicalPath;

    // Prepare request body
    const bodyString = body ? JSON.stringify(body) : "";
    const headers = signRequest(method, urlObj, bodyString);

    if (opts.headers) {
      Object.assign(headers, opts.headers);
    }

    // Perform request
    const response = await axios({
      method,
      url: requestUrl, // still send request to original URL
      headers,
      data: body || undefined,
      responseType: opts.responseType || "json", // "json" or "arraybuffer"
    });

    return opts.raw ? response.data : response.data;
  } catch (err) {
    if (err.response) {
      console.error("Error Response:", err.response.status, err.response.data);
    } else {
      console.error("Error:", err.message);
    }
    throw err;
  }
}

```

</details>

### Node JS Agent

<details>
    <summary>Agent - Get List, Add, Update & Delete Function - click to expand</summary>

```js
//Updated on 01 Oct 2025
import { sendRequest } from "./api/APICommon.js";  // base client
import readline from "readline";
import fs from "fs";

/**
 * Pretty-print JSON responses for debugging
 */
function debugPrintJson(data) {
  if (!data) {
    console.log("No data returned.");
    return;
  }

  if (Array.isArray(data.items)) {
    console.log(`Found ${data.items.length} agents:`);
    data.items.forEach((item, idx) => {
      console.log(`[${idx + 1}] code= ${item.code}, name= ${item.description}`);
    });
  } else if (Array.isArray(data.data)) {
    console.log(`Found ${data.data.length} record(s):`);
    data.data.forEach((item, idx) => {
      console.log(`[${idx + 1}] code= ${item.code}, name= ${item.description}`);
    });
  } else if (typeof data === "object") {
    console.log("Single agent record:");
    Object.entries(data).forEach(([k, v]) => {
      console.log(`  ${k}: ${JSON.stringify(v)}`);
    });
  } else {
    console.log("Raw:", data);
  }
}

export class AgentApi {
  constructor() {
    this.basePath = "/agent"; // base path
  }

  /**
   * Get agent list with pagination (default: offset=0, limit=5)
   */
  async get_list(offset = 0, limit = 5) {
    const path = this.basePath;
    const query = `offset=${offset}&limit=${limit}`;
    console.log("\n--- Fetching agent list ---");
    try {
    const data = await sendRequest("GET", path, null, query);

     // Force limit client-side if API ignore
    if(data && Array.isArray(data.data)) {
      data.data = data.data.slice(offset, offset + limit);
    }

    debugPrintJson(data);
    return data;
    } catch (err){
        console.error("Failed to fetch agent list:", err.response?.data || err.message);
        throw err;
    }
  }

  /**
   * Get a single agent by code
   */
  async get_single(code) {
    const path = this.basePath;
    const query = `code=${encodeURIComponent(code)}`;
    console.log(`\n--- Fetching single agent '${code}' ---`);
    try {
    const data = await sendRequest("GET", path, null, query);
    debugPrintJson(data);
    return data;
    } catch (err) {
        console.error(`Failed to fetch agent '${code}':`, err.response?.data || err.message);
        throw err;
    }
  }

  /**
   * Create a new agent
   */
  async create(payload) {
    console.log("\n--- Creating new agent ---");
    try {
    const data = await sendRequest("POST", this.basePath, payload);
    debugPrintJson(data);
    return data;
    } catch (err) {
        console.error("Failed to create agent:", err.response?.data || err.message);
        throw err;
    }
  }

  /**
   * Edit an existing agent
   */
  async update(code, payload) {
    const path = `${this.basePath}/${encodeURIComponent(code)}`;
    console.log(`\n--- Updating agent '${code}' ---`);
    try {
    const data = await sendRequest("PUT", path, payload);
    debugPrintJson(data);
    return data;
    } catch (err) {
        console.error(`Failed to update agent '${code}':`, err.response?.data || err.message);
        throw err;
    }
  }

  /**
   * Delete an existing agent by code
   */
  async delete(code) {
    const path = `${this.basePath}/${encodeURIComponent(code)}`;
    console.log(`\n--- Deleting agent '${code}' ---`);
    try {
    const data = await sendRequest("DELETE", path);
    debugPrintJson(data);
    return data;
    } catch (err) {
        console.error(`Failed to delete agent '${code}':`, err.response?.data || err.message);
        throw err;
    }
  }
}

const agentApi = new AgentApi();
const JSON_FOLDER = "./JSON/"; // your json folder file path, if same path as node.js, leave it blank

// Readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Helper to ask question and return Promise<string>
 */
function ask(q) {
  return new Promise(resolve => rl.question(q, resolve));
}
async function confirm(msg) {
  const ans = (await ask(`${msg} (y/n): `)).toLowerCase();
  return ans === "y" || ans === "yes";
}

// Helper to load JSON file
function loadJson(filename) {
  try {
    return JSON.parse(fs.readFileSync(filename, "utf8"));
  } catch {
    return null;
  }
}

async function Agent() {
  try {
    // Example: Get agent list
    console.log("\n================= Agent List =================");
    if (await confirm("Fetch agent list?")) {
      const list = await agentApi.get_list(0, 5);
      console.table(JSON.stringify(list, null, 2));
    }

    // Example: Get single agent
    console.log("\n================= Single Agent =================");
    if (await confirm("Fetch a single agent?")) {
      const code = await ask("Enter agent code: ");
      const list = await agentApi.get_single(code.trim());
      console.table(JSON.stringify(list, null, 2));
    }

    // Example: Create new agent
    console.log("\n================= Create Agent =================");
    if (await confirm("Create new agent?")) {
      const payload = loadJson(JSON_FOLDER + "Agent-New.json"); // Make sure file name is correct
      if (payload) {
        await agentApi.create(payload);
      } else {
        console.log("Skipped create agent (no valid JSON)")
      }
    }

    // Example: Edit existing agent
    console.log("\n================= Edit Agent =================");
    if (await confirm("Update an agent?")) {
      const payload = loadJson(JSON_FOLDER + "Agent-Edit.json"); // Make sure file name is correct
      if (payload && payload.code) {
        await agentApi.update(payload.code, payload);
      }
    }

    // Example: Delete existing agent
    console.log("\n================= Delete Agent =================");
    if (await confirm("Do you want to Delete an agent?")) {
      const code = await ask("Enter agent code to delete: ");
      await agentApi.delete(code.trim());
    }
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    console.log("--- End of the Script ---");
    rl.close();
  }
}

Agent();

```
</details>

### Node JS Sales Invoice

<details>
    <summary>Sales Invoice - Get List, PDF, Add, Update & Delete Function - click to expand</summary>

```js
//Updated on 01 Oct 2025
import { sendRequest } from "./api/APICommon.js"; // base client
import fs from "fs";
import readline from "readline";

/**
 * Pretty-print JSON responses for debugging
 */
function debugPrintJson(data) {
  if (!data) {
    console.log("No data returned.");
    return;
  }

  if (Array.isArray(data.items)) {
    console.log(`Found ${data.items.length} records:`);
    data.items.forEach((item, idx) => {
      console.log(
        `[${idx + 1}] docno= ${item.docno}, dockey= ${item.dockey}, amount= ${item.docamt}`
      );
    });
  } else if (Array.isArray(data.data)) {
    console.log(`Found ${data.data.length} record(s):`);
    data.data.forEach((item, idx) => {
      console.log(
        `[${idx + 1}] docno= ${item.docno}, dockey= ${item.dockey}, amount= ${item.docamt}`
      );
    });
  } else if (typeof data === "object") {
    console.log("Single record:");
    Object.entries(data).forEach(([k, v]) => {
      console.log(`  ${k}: ${JSON.stringify(v)}`);
    });
  } else {
    console.log("Raw:", data);
  }
}

export class SalesInvoiceApi {
  constructor() {
    this.basePath = "/salesinvoice"; // base path
  }

  /**
   * Get sales invoice list with pagination (default: offset=0, limit=5)
   */
  async get_list(offset = 0, limit = 5) {
    const path = this.basePath;
    const query = `offset=${offset}&limit=${limit}`;
    console.log("\n--- Fetching sales invoice list (offset = 0, limit = 5) ---");
    const data = await sendRequest("GET", path, null, query);

    // Force limit client-side if API ignore
    if(data && Array.isArray(data.data)) {
      data.data = data.data.slice(offset, offset + limit);
    }

    debugPrintJson(data);
    return data;
  }

  /**
   * Get a single sales invoice by docno
   */
  async get_single(docno) {
    const path = this.basePath;
    const query = `docno=${encodeURIComponent(docno)}`;
    console.log(`\n--- Fetching single sales invoice '${docno}' ---`);

    try {
      const data = await sendRequest("GET", path, null, query);
      debugPrintJson(data);
      return data;
    } catch (err) {
      console.error(`Failed to fetch invoice '${docno}':`, err.message);
      throw err;
    }
  }

  /**
   * Print a sales invoice as PDF
   * 
   * Args: 
   *    docno: document number of the sales invoice
   *    reportName: name of the report want to be print (E.g. Sales Invoice 8 (SST 1))
   *    savePath: output folder (E.g. ./PDF)
   */ 
  async print(docno, reportName = "Sales Invoice 8 (SST 1)", savePath = "./PDF") {
    console.log(`\n--- Printing sales invoice '${docno}' to PDF ---`);

      // Step 1: Find dockey for the given docno
      const existing = await this.get_single(docno);
      if(!existing || !Array.isArray(existing.data) || existing.data.length === 0) {
        throw new Error(`Invoice '${docno}' not found`);
      }

      const record = existing.data[0];
      const dockey = record.dockey;
      const path = `${this.basePath}/${dockey}`;

      const pdfData = await sendRequest("GET", path, null, "", {
        headers: { "Content-Type": `application/pdf;template=${reportName}`},
        responseType: "arraybuffer",
        raw: true,
      });

      const fs = await import("fs");
      const fullSavePath = `${savePath}/Sales_Invoice_${docno}.pdf`;
      fs.mkdirSync(savePath, { recursive: true });
      fs.writeFileSync(fullSavePath, pdfData);
      console.log(`PDF saved: ${fullSavePath}`);
  }

  /**
   * Create a new sales invoice
   */
  async create(payload) {
    console.log("\n--- Creating sales invoice ---");
    try {
      const data = await sendRequest("POST", this.basePath, payload);
      debugPrintJson(data);
      return data;
    } catch (err) {
      console.error("Failed to create invoice:", err.message);
      throw err;
    }
  }

  /**
   * Edit an existing sales invoice
   */
  async update(dockey, payload) {
    console.log(`\n--- Editing sales invoice dockey: ${dockey} ---`);

    try {
      // Step 1: Fetch existing record to get updatecount
      const query = `dockey=${encodeURIComponent(dockey)}`;
      const existing = await sendRequest("GET", this.basePath, null, query);

      console.log("Existing record:", JSON.stringify(existing, null, 2));

      const record =
        (existing.data && existing.data[0]) ||
        (existing.items && existing.items[0]) ||
        existing;

      if (!record || typeof record.updatecount === "undefined") {
      throw new Error("Updatecount missing. Try fetching via list API with dockey filter.");
    }

      // Step 2: Merge updatecount into payload
      const finalPayload = {
        ...payload,
        updatecount: record.updatecount,
      };

      // Step 3: Send PUT request with updatecount
      const path = `${this.basePath}/${dockey}`;
      const data = await sendRequest("PUT", path, finalPayload);
      debugPrintJson(data);
      console.log("Invoice updated successfully.");
      return data;
    } catch (err) {
      console.error(`Failed to edit invoice ${dockey}:`, err.message);
      throw err;
    }
  }

  /**
   * Delete a sales invoice by docno
   */
  async delete(dockey) {
    const path = `${this.basePath}/${dockey}`;
    console.log(`\n--- Deleting sales invoice dockey: ${dockey} ---`);
    try {
      const data = await sendRequest("DELETE", path);
      debugPrintJson(data);
      return data;
    } catch (err) {
      console.error(`Failed to delete invoice ${dockey}:`, err.message);
      throw err;
    }
  }
}

const ivApi = new SalesInvoiceApi();
const JSON_FOLDER = "./JSON/"; // your json folder file path, if same path as node.js, leave it blank

// Readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Helper to ask question and return Promise<string>
 */
function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function confirm(message) {
  const ans = (await ask(`${message} (y/n): `)).toLowerCase();
  return ans === "y" || ans === "yes";
}

// Helper to load JSON file
function loadJson(filename) {
  try {
    const file = fs.readFileSync(filename, "utf8");
    return JSON.parse(file);
  } catch (err) {
    console.error(`Failed to read ${filename}:`, err.message);
    return null;
  }
}

async function SL_IV() {
  try {
    // Example: Get invoice list
    console.log("\n================= Invoice List =================");
    if (await confirm("Proceed to fetch sales invoice list?")) {
      const list = await ivApi.get_list();
      console.table(JSON.stringify(list, null, 2));
    }

    // Example: Get single invoice
    console.log("\n================= Single Invoice =================");
    if (await confirm("Do you want to fetch a single invoice?")) {
      const docno = await ask("Enter docno: ");
      const list = await ivApi.get_single(docno.trim());
      console.table(JSON.stringify(list, null, 2));
    }

    // Example: Print invoice PDF
    console.log("\n================= Print Invoice =================");
    if(await confirm("Do you want to print an invoice to PDF?")) {
      const docno = await ask("Enter docno to print: ");
      await ivApi.print(docno.trim());
    }

    // Example: Create new sales invoice
    console.log("\n================= Create New Invoice =================");
    if (await confirm("Do you want to create new invoice?")) {
      const payload = loadJson(JSON_FOLDER + "SL_IV-New.json"); // Make sure file name is correct
      if (payload) {
        await ivApi.create(payload);
      } else {
        console.log("Skipped create invoice (no valid JSON)");
      }
    }

    // Example: Edit existing sales invoice
    console.log("\n================= Edit Invoice =================");
    if (await confirm("Do you want to edit an invoice?")) {
      const payload = loadJson(JSON_FOLDER + "SL_IV-Edit.json"); // Make sure the file name is correct
      if (!payload || !payload.docno) {
        console.log("The file must contain Docno.");
      } else {
        const docno = payload.docno.trim();
        console.log(`\n--- Looking for invoice docno '${docno}' ---`);

        // Fetching record by docno
        const existing = await ivApi.get_single(docno);
        if (
          !existing ||
          !Array.isArray(existing.data) ||
          existing.data.length === 0
        ) {
          console.log(`Invoice docno '${docno}' not found.`);
        } else {
          const record = existing.data[0];
          const dockey = record.dockey;
          const updatecount = record.updatecount;

          console.log(`Found dockey '${dockey}', updatecount '${updatecount}'`);

          //Merge fields into payload
          const finalPayload = {
            ...payload,
            dockey,
            updatecount,
          };

          // Write back updated JSON (so user can see updatecount added)
          fs.writeFileSync(
            JSON_FOLDER + "SL_IV-Edit.json", // Make sure file name is correct
            JSON.stringify(finalPayload, null, 2)
          );

          await ivApi.update(dockey, finalPayload);
        }
      }
    }

    // Example: Delete existing sales invoice
    console.log("\n================= Delete Invoice =================");
    if (await confirm("Do you want to delete an invoice?")) {
      const docno = await ask("Enter docno to delete: ");
      if (!docno) {
        console.log(`Invalid docno, please provide a valid docno.`);
      } else {
        const existing = await ivApi.get_single(docno);
        if (
          !existing ||
          !Array.isArray(existing.data) ||
          existing.data.length === 0
        ) {
          console.log(`Invoice with docno '${docno}' not found.`);
        } else {
          const record = existing.data[0];
          const dockey = record.dockey;

          console.log(`--- Deleting invoice '${docno}' ---`);
          await ivApi.delete(dockey);
        }
      }
    }
  } catch (err) {
    console.error("\nError:", err.message);
  } finally {
    console.log(`--- End of the Script ---`);
    rl.close();
  }
}

import { fileURLToPath } from "url";
import path from "path";

const currentFile = fileURLToPath(import.meta.url);
const entryFile = path.resolve(process.argv[1]);

if (currentFile === entryFile) {
  SL_IV();
}

```
</details>

### Node JS Purchase Invoice

<details>
    <summary>Purchase Invoice - Get List, PDF, Add, Update & Delete Function - click to expand</summary>

```js
//Updated on 01 Oct 2025
import { sendRequest } from "./api/APICommon.js";  // base client
import fs from "fs";
import readline from "readline";

/**
 * Pretty-print JSON responses for debugging
 */
function debugPrintJson(data) {
  if (!data) {
    console.log("No data returned.");
    return;
  }

  if (Array.isArray(data.items)) {
    console.log(`Found ${data.items.length} records:`);
    data.items.forEach((item, idx) => {
      console.log(
        `[${idx + 1}] docno= ${item.docno}, dockey= ${item.dockey}, amount= ${item.docamt}`
      );
    });
  } else if (Array.isArray(data.data)) {
    console.log(`Found ${data.data.length} record(s):`);
    data.data.forEach((item, idx) => {
      console.log(
        `[${idx + 1}] docno= ${item.docno}, dockey= ${item.dockey}, amount= ${item.docamt}`
      );
    });
  }else if (typeof data === "object") {
    console.log("Single record:");
    Object.entries(data).forEach(([k, v]) => {
      console.log(`  ${k}: ${JSON.stringify(v)}`);
    });
  } else {
    console.log("Raw:", data);
  }
}

export class PurchaseInvoiceApi {
  constructor() {
    this.basePath = "/purchaseinvoice"; // base path
  }

  /**
   * Get purchase invoice list with pagination (default: offset=0, limit=5)
   */
  async get_list(offset = 0, limit = 5) {
    const path = this.basePath;
    const query = `offset=${offset}&limit=${limit}`;
    console.log("\n--- Fetching purchase invoice list ---");
    const data = await sendRequest("GET", path, null, query);

    // Force limit client-side if API ignore
    if (data && Array.isArray(data.data)) {
      data.data = data.data.slice(offset, offset + limit);
    }

    debugPrintJson(data);
    return data;
  }

  /**
   * Get a single purchase invoice by docno
   */
  async get_single(docno) {
    const path = this.basePath;
    const query = `docno=${encodeURIComponent(docno)}`;
    console.log(`\n--- Fetching single purchase invoice '${docno}' ---`);
    try {
      const data = await sendRequest("GET", path, null, query);
      debugPrintJson(data);
      return data;
    } catch (err) {
      console.error(
        `Failed to fetch purchase invoice '${docno}':`,
        err.response?.data || err.message
      );
      throw err;
    }
  }

  /**
   * Print a purchase invoice as PDF
   * 
   * Args: 
   *    docno: document number of the purchase invoice
   *    reportName: name of the report want to be print (E.g. Sales Invoice 8 (SST 1))
   *    savePath: output folder (E.g. ./PDF)
   */ 
  async print(docno, reportName = "Purchase Invoice 8 (SST 1)", savePath = "./PDF") {
    console.log(`\n--- Printing purchase invoice '${docno}' to PDF ---`);

      // Step 1: Find dockey for the given docno
      const existing = await this.get_single(docno);
      if(!existing || !Array.isArray(existing.data) || existing.data.length === 0) {
        throw new Error(`Purchase invoice '${docno}' not found`);
      }

      const record = existing.data[0];
      const dockey = record.dockey;
      const path = `${this.basePath}/${dockey}`;

      const pdfData = await sendRequest("GET", path, null, "", {
        headers: { "Content-Type": `application/pdf;template=${reportName}`},
        responseType: "arraybuffer",
        raw: true,
      });

      const fs = await import("fs");
      const fullSavePath = `${savePath}/Purchase_Invoice_${docno}.pdf`;
      fs.mkdirSync(savePath, { recursive: true });
      fs.writeFileSync(fullSavePath, pdfData);
      console.log(`PDF saved: ${fullSavePath}`);
  }

  /**
   * Create a new purchase invoice
   */
  async create(payload) {
    console.log("\n--- Creating purchase invoice ---");
    try {
      const data = await sendRequest("POST", this.basePath, payload);
      debugPrintJson(data);
      return data;
    } catch (err) {
      console.error(
        "Failed to create purchase invoice:",
        err.response?.data || err.message
      );
      throw err;
    }
  }

  /**
   * Update an existing purchase invoice
   */
  async update(dockey, payload) {
    const path = `${this.basePath}/${dockey}`;
    console.log(`\n--- Updating purchase invoice dockey=${dockey} ---`);

    try {
      // Step 1: Fetch existing record to get updatecount
      const query = `dockey=${encodeURIComponent(dockey)}`;
      const existing = await sendRequest("GET", this.basePath, null, query);

      console.log("Existing record:", JSON.stringify(existing, null, 2));

      const record =
        (existing.data && existing.data[0]) ||
        (existing.items && existing.items[0]) ||
        existing;

      if (!record || typeof record.updatecount === "undefined") {
        throw new Error(
          "Updatecount missing. Try fetching via list API with dockey filter."
        );
      }

      //Step 2: Merge updatecount into payload
      const finalPayload = {
        ...payload,
        updatecount: record.updatecount,
      };

      // Step 3: send PUT request with updatecount
      const path = `${this.basePath}/${dockey}`;
      const data = await sendRequest("PUT", path, finalPayload);
      debugPrintJson(data);
      console.log("Purchase invoice updated successfully.");
      return data;
    } catch (err) {
      console.error(`Failed to edit purchase invoice ${dockey}:`, err.message);
      throw err;
    }
  }

  /**
   * Delete a purchase invoice by docno
   */
  async delete(dockey) {
    const path = `${this.basePath}/${dockey}`;
    console.log(`\n--- Deleting purchase invoice dockey=${dockey} ---`);
    try {
      const data = await sendRequest("DELETE", path);
      debugPrintJson(data);
      return data;
    } catch (err) {
      console.error(`Failed to delete purchase invoice '${dockey}':`,err.response?.data || err.message);
      throw err;
    }
  }
}

const piApi = new PurchaseInvoiceApi();
const JSON_FOLDER = "./JSON/"; // your json folder file path, if same path as node.js, leave it blank

// Readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Helper to ask question and return Promise<string>
 */
function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function confirm(message) {
  const ans = (await ask(`${message} (y/n): `)).toLowerCase();
  return ans === "y" || ans === "yes";
}

// Helper to load JSON file
function loadJson(filename) {
  try {
    const file = fs.readFileSync(filename, "utf8");
    return JSON.parse(file);
  } catch (err) {
    console.error(`Failed to read ${filename}:`, err.message);
    return null;
  }
}

async function PH_PI() {
  try {
    // Example: Get purchase invoice list
    console.log("\n================= Purchase Invoice List =================");
    if (await confirm("Proceed to fetch purchase invoice list?")) {
      const list = await piApi.get_list();
      console.table(JSON.stringify(list, null, 2));
    }

    // Example: Get single purchase invoice
    console.log("\n================= Single Purchase Invoice =================");
    if (await confirm("Do you want to fetch a single purchase invoice?")) {
      const docno = await ask("Enter docno: ");
      const list = await piApi.get_single(docno.trim());
      console.table(JSON.stringify(list, null, 2));
    }

    // Example: Print invoice PDF
    console.log("\n================= Print Purchase Invoice =================");
    if(await confirm("Do you want to print an invoice to PDF?")) {
      const docno = await ask("Enter docno to print: ");
      await piApi.print(docno.trim());
    }

    // Example: Create new purchase invoice
    console.log("\n================= Create New Purchase Invoice =================");
    if (await confirm("Do you want to create a new purchase invoice?")) {
      const payload = loadJson(JSON_FOLDER + "PH_PI-New.json"); // Make sure file name is correct
      if (payload) {
        await piApi.create(payload);
      } else {
        console.log("Skipped create purchase invoice (no valid JSON).");
      }
    }

    // Example: Edit existing purchase invoice
    console.log("\n================= Edit Purchase Invoice =================");
    if (await confirm("Do you want to edit a purchase invoice?")) {
      const payload = loadJson(JSON_FOLDER + "PH_PI-Edit.json"); // Make sure file path is correct
      if (!payload || !payload.docno) {
        console.log("The file must contain Docno.");
      } else {
        const docno = payload.docno.trim();
        console.log(`\n--- Looking for purchase invoice docno '${docno}' ---`);

        // Fetch existing by docno
        const existing = await piApi.get_single(docno);
        if (
          !existing || 
          !Array.isArray(existing.data) || 
          existing.data.length === 0
        ) {
          console.log(`Purchase invoice docno '${docno}' not found.`);
        } else {
          const record = existing.data[0];
          const dockey = record.dockey;
          const updatecount = record.updatecount;

          console.log(`Found dockey '${dockey}', updatecount '${updatecount}'`);

          // Merge with payload
          const finalPayload = { 
            ...payload,
             dockey, 
             updatecount 
            };

          // Save updated JSON (so user can see updatecount added)
          fs.writeFileSync(
            JSON_FOLDER + "PH_PI-Edit.json", // Make sure file path is correct
            JSON.stringify(finalPayload, null, 2));

          await piApi.update(dockey, finalPayload);
        }
      }
    }

    // Example: Delete existing purchase invoice
    console.log("\n================= Delete Purchase Invoice =================");
    if (await confirm("Do you want to delete a purchase invoice?")) {
      const docno = await ask("Enter docno to delete: ");
      if (!docno) {
        console.log("Invalid docno, please provide a valid docno.");
      } else {
        const existing = await piApi.get_single(docno.trim());
        if (
          !existing || 
          !Array.isArray(existing.data) || 
          existing.data.length === 0
        ) {
          console.log(`Purchase invoice with docno '${docno}' not found.`);
        } else {
          const record = existing.data[0];
          const dockey = record.dockey;

          console.log(`--- Deleting purchase invoice '${docno}' ---`);
          await piApi.delete(dockey);
        }
      }
    }
  } catch (err) {
    console.error("\nError in tests:", err.message);
  } finally {
    console.log(`--- End of the Script ---`);
    rl.close();
  }
}

import { fileURLToPath } from "url";
import path from "path";

const currentFile = fileURLToPath(import.meta.url);
const entryFile = path.resolve(process.argv[1]);

if (currentFile === entryFile) {
  PH_PI();
}

```
</details>

### NOde JS Sales Order to Sales Invoice

<details>
    <summary>Transfer from Sales Order to Sales Invoice - click to expand</summary>

```js
// Updated on 01 Oct 2025
import { sendRequest } from "./api/APICommon.js"; // base client
import fs from "fs";
import readline from "readline";

/**
 * Pretty-print JSON responses for debugging
 */
function debugPrintJson(data) {
  if (!data) {
    console.log("No data returned.");
    return;
  }

  if (Array.isArray(data.items)) {
    console.log(`Found ${data.items.length} records:`);
    data.items.forEach((item, idx) => {
      console.log(
        `[${idx + 1}] docno=${item.docno}, dockey=${item.dockey}, amount=${item.docamt}`
      );
    });
  } else if (Array.isArray(data.data)) {
    console.log(`Found ${data.data.length} record(s):`);
    data.data.forEach((item, idx) => {
      console.log(`[${idx + 1}] docno= ${item.docno}, dockey= ${item.dockey}, amount= ${item.docamt}`);
    });
  } else if (typeof data === "object") {
    console.log("Single record:");
    Object.entries(data).forEach(([k, v]) => {
      console.log(`  ${k}: ${JSON.stringify(v)}`);
    });
  } else {
    console.log("Raw:", data);
  }
}

export class SalesInvoiceApi {
  constructor() {
    this.basePath = "/salesinvoice"; // base path
  }

  /**
   * Get sales invoice list with pagination
   */
  async get_list(offset = 0, limit = 5) {
    const path = this.basePath;
    const query = `offset=${offset}&limit=${limit}`;
    console.log("\n--- Fetching sales invoice list (offset = 0, limit = 5) ---");
    const data = await sendRequest("GET", path, null, query);

    // Force limit cliend-side if API ignore
    if(data && Array.isArray(data.data)) {
      data.data = data.data.slice(offset, offset + limit);
    }

    debugPrintJson(data);
    return data;
  }

  /**
   * Get a single sales invoice by docno
   */
  async get_single(docno) {
    const path = this.basePath;
    const query = `docno=${encodeURIComponent(docno)}`;
    console.log(`\n--- Fetching single sales invoice '${docno}' ---`);

    try {
      const data = await sendRequest("GET", path, null, query);
      debugPrintJson(data);
      return data;
    } catch (err) {
      console.error(`Failed to fetch invoice '${docno}':`, err.message);
      throw err;
    }
  }

  /**
   * Create a new sales invoice
   */
  async create(payload) {
    console.log("\n--- Creating sales invoice ---");
    try {
      const data = await sendRequest("POST", this.basePath, payload);
      debugPrintJson(data);
      return data;
    } catch (err) {
      console.error("Failed to create invoice:", err.message);
      throw err;
    }
  }

  /**
   * Edit an existing sales invoice
   */
  async update(dockey, payload) {
    console.log(`\n--- Editing sales invoice dockey: ${dockey} ---`);

    try {
      // Step 1: Fetch existing record to get updatecount
      const query = `dockey=${encodeURIComponent(dockey)}`;
      const existing = await sendRequest("GET", this.basePath, null, query);

      console.log("Existing record:", JSON.stringify(existing, null, 2));

      const record =
        (existing.data && existing.data[0]) ||
        (existing.items && existing.items[0]) ||
        existing;

      if (!record || typeof record.updatecount === "undefined") {
      throw new Error("Updatecount missing. Try fetching via list API with dockey filter.");
    }

      // Step 2: Merge updatecount into payload
      const finalPayload = {
        ...payload,
        updatecount: record.updatecount,
      };

      // Step 3: Send PUT request with updatecount
      const path = `${this.basePath}/${dockey}`;
      const data = await sendRequest("PUT", path, finalPayload);
      debugPrintJson(data);
      console.log("Invoice updated successfully.");
      return data;
    } catch (err) {
      console.error(`Failed to edit invoice ${dockey}:`, err.message);
      throw err;
    }
  }

  /**
   * Delete a sales invoice by dockey
   */
  async delete(dockey) {
    const path = `${this.basePath}/${dockey}`;
    console.log(`\n--- Deleting sales invoice dockey: ${dockey} ---`);
    try {
      const data = await sendRequest("DELETE", path);
      debugPrintJson(data);
      return data;
    } catch (err) {
      console.error(`Failed to delete invoice ${dockey}:`, err.message);
      throw err;
    }
  }
}

const ivApi = new SalesInvoiceApi();
const JSON_FOLDER = "./JSON/"; // your json folder file path, if same path as node.js, leave it blank

// Readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * Helper to ask question and return Promise<string>
 */
function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function confirm(message) {
  const ans = (await ask(`${message} (y/n): `)).toLowerCase();
  return ans === "y" || ans === "yes";
}

// Helper to load JSON file
function loadJson(filename) {
  try {
    const file = fs.readFileSync(filename, "utf8");
    return JSON.parse(file);
  } catch (err) {
    console.error(`Failed to read ${filename}:`, err.message);
    return null;
  }
}

async function SL_IV() {
  try {

    // Example: Create new sales invoice
    console.log("\n================= Create New Invoice =================");
    if (await confirm("Do you want to create new invoice?")) {
      const payload = loadJson(JSON_FOLDER + "SO2IV-New.json"); //make sure file name is correct
      if (payload) {
        await ivApi.create(payload);
      } else {
        console.log("Skipped create invoice (no valid JSON)");
      }
    }

    // Example: Delete existing sales invoice
    console.log("\n================= Delete Invoice =================");
    if (await confirm("Do you want to delete an invoice?")) {
      const docno = await ask("Enter docno to delete: ");
      if (!docno) {
        console.log(`Invalid docno, please provide a valid docno.`);
      } else {
        const existing = await ivApi.get_single(docno);
        if (
          !existing ||
          !Array.isArray(existing.data) ||
          existing.data.length === 0
        ) {
          console.log(`Invoice with docno '${docno}' not found.`);
        } else {
          const record = existing.data[0];
          const dockey = record.dockey;

          console.log(`--- Deleting invoice '${docno}' ---`);
          await ivApi.delete(dockey);
        }
      }
    }
  } catch (err) {
    console.error("\nError in tests:", err.message);
  } finally {
    console.log(`--- End of the Script ---`);
    rl.close();
  }
}

SL_IV();

```
</details>

### Maintain Customer

<details>
    <summary>Maintain Customer - Get List, Add, Update & Delete Function - click to expand</summary>

```js
// Updated on 01 Oct 2025
import { sendRequest } from "./api/APICommon.js"; // base client
import fs from "fs";
import readline from "readline";

/**
 * Pretty-print JSON responses for debugging
 */
function debugPrintJson(data) {
  if (!data) {
    console.log("No data returned.");
    return;
  }

  if (Array.isArray(data.items)) {
    console.log(`Found ${data.items.length} records:`);
    data.items.forEach((item, idx) => {
      console.log(`[${idx + 1}] code= ${item.code}, name= ${item.companyname}`);
    });
  } else if (Array.isArray(data.data)) {
    console.log(`Found ${data.data.length} record(s):`);
    data.data.forEach((item, idx) => {
      console.log(`[${idx + 1}] code= ${item.code}, name= ${item.companyname}`);
    });
  } else if (typeof data === "object") {
    console.log("Single record:");
    Object.entries(data).forEach(([k, v]) => {
      console.log(`  ${k}: ${JSON.stringify(v)}`);
    });
  } else {
    console.log("Raw:", data);
  }
}

export class CustomerApi {
  constructor() {
    this.basePath = "/customer"; // base path
  }

  /**
   * Get customer list with pagination (default: offset=0, limit=5)
   */
  async get_list(offset = 0, limit = 5) {
    const query = `offset=${offset}&limit=${limit}`;
    console.log("\n--- Fetching customer list (offset = 0, limit = 5)---");
    const data = await sendRequest("GET", this.basePath, null, query);

    // Force limit client-side if API ignore
    if (data && Array.isArray(data.data)) {
      data.data = data.data.slice(offset, offset + limit);
    }

    debugPrintJson(data);
    return data;
  }

  /**
   * Get a single customer by code
   */
  async get_single(code) {
    const query = `code=${encodeURIComponent(code)}`;
    try {
      const data = await sendRequest("GET", this.basePath, null, query);
      debugPrintJson(data);
      return data;
    } catch (err) {
      console.error(`Failed to fetch customer '${code}':`, err.message);
      throw err;
    }
  }

  /**
   * Create new customer
   */
  async create(payload) {
    console.log("\n--- Creating new customer ---");
    try {
      const data = await sendRequest("POST", this.basePath, payload);
      debugPrintJson(data);
      console.log("Customer created successfully.");
      return data;
    } catch (err) {
      console.error(
        "Failed to create customer:",
        err.response?.data || err.message
      );
      throw err;
    }
  }

  /**
   * Update existing customer
   */
  async update(code, payload) {
    if (!code) throw new Error("Code required for update");
    console.log(`\n--- Updating customer code: ${code} ---`);

    // Ensure code is included in payload
    const finalPayload = { ...payload, code };

    const path = `${this.basePath}/${encodeURIComponent(code)}`;
    const data = await sendRequest("PUT", path, finalPayload);
    debugPrintJson(data);
    console.log("Customer updated successfully.");
    return data;
  }

  /**
   * Delete customer by code
   */
  async delete(dockey) {
    const path = `${this.basePath}/${dockey}`;
    console.log(`\n--- Deleting customer dockey: ${dockey} ---`);
    try {
      const data = await sendRequest("DELETE", path);
      debugPrintJson(data);
      console.log("Customer deleted successfully.");
      return data;
    } catch (err) {
      console.error(
        `Failed to delete customer '${dockey}':`,
        err.response?.data || err.message
      );
      throw err;
    }
  }
}

// ========== Runner ==========

const custApi = new CustomerApi();
const JSON_FOLDER = "./JSON/"; // your json folder file path, is same path as node.js, leave it blank

// Readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 *
 * Helper to ask question and return Promise<string>
 */
function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function confirm(message) {
  const ans = (await ask(`${message} (y/n): `)).toLowerCase();
  return ans === "y" || ans === "yes";
}

// Helper to load JSON file
function loadJson(filename) {
  try {
    const file = fs.readFileSync(filename, "utf8");
    return JSON.parse(file);
  } catch (err) {
    console.error(`Failed to read ${filename}:`, err.message);
    return null;
  }
}

async function AR_Customer() {
  try {
    // Customer list
    console.log("\n================= Customer List =================");
    if (await confirm("Proceed to fetch customer list?")) {
      const list = await custApi.get_list();
      console.table(JSON.stringify(list, null, 2));
    }

    // Single customer
    console.log("\n================= Fetch Single Customer =================");
    if (await confirm("Do you want to fetch a single customer?")) {
      const code = await ask("Enter customer code: ");
      const cust = await custApi.get_single(code.trim());
      console.log(`\n--- Fetching customer code'${code}' ---`);
      console.table(JSON.stringify(cust, null, 2));
    }

    // Create new customer
    console.log("\n================= Create New Customer =================");
    if (await confirm("Do you want to create a new customer?")) {
      const payload = loadJson(JSON_FOLDER + "AR_Customer-New.json"); // Make sure file name is correct
      if (payload) {
        await custApi.create(payload);
      } else {
        console.log("Skipped create customer (no valid JSON).");
      }
    }

    // Edit existing customer
    console.log("\n================= Edit Customer =================");
    if (await confirm("Do you want to edit a customer?")) {
      const payload = loadJson(JSON_FOLDER + "AR_Customer-Edit.json"); // Make sure the file name is correct
      if (!payload?.code) {
        console.log("The file must contain customer code.");
      } else {
        const code = payload.code.trim();
        console.log(`\n--- Looking for customer code '${code}' ---`);

        // Fetch existing record by code
        const existing = await custApi.get_single(code);

        // normalize record extraction
        const record =
          (existing && existing.data && existing.data[0]) ||
          (existing && existing.items && existing.items[0]) ||
          existing;

        if (!record) {
          console.log(`Customer Code '${code}' not found.`);
        } else {
          const finalPayload = { ...record, ...payload, code };

          fs.writeFileSync(
            JSON_FOLDER + "AR_Customer-Edit.json",
            JSON.stringify(finalPayload, null, 2)
          );

          await custApi.update(code, finalPayload);
        }
      }
    }

    // Delete existing customer
    console.log("\n================= Delete Customer =================");
    if (await confirm("Do you want to delete a customer?")) {
      const code = await ask("Enter customer code to delete: ");
      if (code) {
        console.log(`--- Deleting customer '${code}' ---`);
        await custApi.delete(code.trim());
      }
    }
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    console.log(`--- End of the Script ---`);
    rl.close();
  }
}

import { fileURLToPath } from "url";
import path from "path";

const currentFile = fileURLToPath(import.meta.url);
const entryFile = path.resolve(process.argv[1]);

if (currentFile === entryFile) {
  AR_Customer();
}

```
</details>

### Stock Transfer

<details>
    <summary>Stock Transfer - Get List, Add, Update & Delete Function - click to expand</summary>

```js
// Updated on 11 Oct 2025 Print PDF not ready yet
import { sendRequest } from "./api/APICommon.js"; // base client
import fs from "fs";
import readline from "readline";

/**
 * Pretty-print JSON responses for debugging
 */
function debugPrintJson(data) {
  if (!data) {
    console.log("No data returned.");
    return;
  }

  if (Array.isArray(data.items)) {
    console.log(`Found ${data.items.length} record(s):`);
    data.items.forEach((item, idx) => {
      console.log(`[${idx + 1}] docno= ${item.docno}, desc= ${item.description}, date= ${item.docdate}`);
    });
  } else if (Array.isArray(data.data)) {
    console.log(`Found ${data.data.length} record(s):`);
    data.data.forEach((item, idx) => {
      console.log(`[${idx + 1}] docno= ${item.docno}, descr= ${item.description}, date= ${item.docdate}`);
    });
  } else if (typeof data === "object") {
    console.log("Single record:");
    Object.entries(data).forEach(([k, v]) => {
      console.log(`  ${k}: ${JSON.stringify(v)}`);
    });
  } else {
    console.log("Raw:", data);
  }
}

export class StockTransferApi {
  constructor() {
    this.basePath = "/stocktransfer"; // base path
  }

  /**
   * Get stock transfer list with pagination (default offset=0, limit=5)
   */
  async get_list(offset = 0, limit = 5) {
    const query = `offset=${offset}&limit=${limit}`;
    console.log("\n--- Fetching stock transfer list (offset = 0, limit = 5)---");
    const data = await sendRequest("GET", this.basePath, null, query);

    // Force limit client-side if API ignore
    if (data && Array.isArray(data.data)) {
      data.data = data.data.slice(offset, offset + limit);
    }

    debugPrintJson(data);
    return data;
  }

  /**
   * Get a single stock transfer by docno
   */
  async get_single(docno) {
    const query = `docno=${encodeURIComponent(docno)}`;
    console.log(`\n--- Fetching stock transfer '${docno}' ---`);

    try {
      const data = await sendRequest("GET", this.basePath, null, query);
      debugPrintJson(data);
      return data;
    } catch (err) {
      console.error(`Failed to fetch stock transfer '${docno}':`, err.response?.data || err.message);
      throw err;
    }
  }

  /**
   * Print a stock transfer as PDF
   * 
   * Args: 
   *    docno: document number of the stock transfer
   *    reportName: name of the report want to be print (E.g. Stock Transfer (With Cost))
   *    savePath: output folder (E.g. ./PDF)
   */ 
  async print(docno, reportName = "Stock Transfer (With Cost)", savePath = "./PDF") {
    console.log(`\n--- Printing stock transfer '${docno}' to PDF ---`);

      // Step 1: Find dockey for the given docno
      const existing = await this.get_single(docno);
      if(!existing || !Array.isArray(existing.data) || existing.data.length === 0) {
        throw new Error(`Stock Transfer '${docno}' not found`);
      }

      const record = existing.data[0];
      const dockey = record.dockey;
      const path = `${this.basePath}/${dockey}`;

      const pdfData = await sendRequest("GET", path, null, "", {
        headers: { "Content-Type": `application/pdf;template=${reportName}`},
        responseType: "arraybuffer",
        raw: true,
      });

      const fs = await import("fs");
      const fullSavePath = `${savePath}/Stock_Transfer_${docno}.pdf`;
      fs.mkdirSync(savePath, { recursive: true });
      fs.writeFileSync(fullSavePath, pdfData);
      console.log(`PDF saved: ${fullSavePath}`);
  }

  /**
   * Create new stock transfer
   */
  async create(payload) {
    console.log("\n--- Creating new stock transfer ---");
    try {
      const data = await sendRequest("POST", this.basePath, payload);
      debugPrintJson(data);
      console.log("Stock transfer created successfully.");
      return data;
    } catch (err) {
      console.error("Failed to create stock transfer:", err.response?.data || err.message);
      throw err;
    }
  }

  /**
   * Update existing stock transfer by dockey
   */
  async update(dockey, payload) {
    console.log(`\n--- Updating stock transfer dockey=${dockey} ---`);

    try {
      // Step 1: fetch existing to get updatecount
      const query = `dockey=${encodeURIComponent(dockey)}`;
      const existing = await sendRequest("GET", this.basePath, null, query);

      const record =
        (existing.data && existing.data[0]) ||
        (existing.items && existing.items[0]) ||
        existing;

      if (!record || typeof record.updatecount === "undefined") {
        throw new Error("Updatecount missing. Try fetching via list API with dockey filter.");
      }

      // Step 2: merge updatecount
      const finalPayload = { ...payload, updatecount: record.updatecount };

      // Step 3: PUT to update
      const path = `${this.basePath}/${dockey}`;
      const data = await sendRequest("PUT", path, finalPayload);
      debugPrintJson(data);
      console.log("Stock transfer updated successfully.");
      return data;
    } catch (err) {
      console.error(`Failed to update stock transfer ${dockey}:`, err.response?.data || err.message);
      throw err;
    }
  }

  /**
   * Delete stock transfer by docno
   */
  async delete(docno) {
    const path = `${this.basePath}/${docno}`;
    try {
      const data = await sendRequest("DELETE", path);
      debugPrintJson(data);
      console.log("Stock transfer deleted successfully.");
      return data;
    } catch (err) {
      console.error(`Failed to delete stock transfer '${docno}':`, err.response?.data || err.message);
      throw err;
    }
  }
}

// ========  Runner ========

const xfApi = new StockTransferApi();
const JSON_FOLDER = "./JSON/"; // your json folder file path, if same path as node.js, leave it blank

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * 
 * Helper to ask question and return Promise<string>
 */
function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function confirm(msg) {
  const ans = (await ask(`${msg} (y/n): `)).toLowerCase();
  return ans === "y" || ans === "yes";
}

// Helper to load JSON file
function loadJson(filename) {
  try {
    const file = fs.readFileSync(filename, "utf8");
    return JSON.parse(file);
  } catch (err) {
    console.error(`Failed to read ${filename}:`, err.message);
    return null;
  }
}

async function ST_XF() {
  try {
    // Example: Get stock transfer list
    console.log("\n================= Stock Transfer List =================");
    if (await confirm("Proceed to fetch stock transfer list?")) {
      const list = await xfApi.get_list();
      console.table(JSON.stringify(list, null, 2));
    }

    // Example: Get single stock transfer
    console.log("\n================= Single Stock Transfer =================");
    if (await confirm("Do you want to fetch a single stock transfer?")) {
      const docno = await ask("Enter docno: ");
      const data = await xfApi.get_single(docno.trim());
      console.table(JSON.stringify(data, null, 2));
    }

    /**
    // Example: Print stock transfer PDF
    console.log("\n================= Print Stock Transfer =================");
    if(await confirm("Do you want to printa stock transfer to PDF?")) {
        const docno = await ask("Enter docno to print:");
        await xfApi.print(docno.trim());
    }
     */

    // Example: Create new stock transfer
    console.log("\n================= Create Stock Transfer =================");
    if (await confirm("Do you want to create new stock transfer?")) {
      const payload = loadJson(JSON_FOLDER + "ST_XF-New.json"); // make sure your file name is correct
      if (payload) await xfApi.create(payload);
      else console.log("Skipped create stock transfer (no valid JSON).");
    }

    // Example: Edit existing stock transfer
    console.log("\n================= Edit Stock Transfer =================");
    if (await confirm("Do you want to edit a stock transfer?")) {
      const payload = loadJson(JSON_FOLDER + "ST_XF-Edit.json"); // make sure your file name is correct
      if (payload?.docno) {
        const existing = await xfApi.get_single(payload.docno.trim());
        if (existing?.data?.length > 0) {
          const record = existing.data[0];
          const dockey = record.dockey;

          console.log(`Found dockey '${dockey}', updatecount '${record.updatecount}'`);

          const finalPayload = { ...payload, dockey, updatecount: record.updatecount };
          fs.writeFileSync(JSON_FOLDER + "ST_XF-Edit.json", JSON.stringify(finalPayload, null, 2)); // make sure your file name is correct

          await xfApi.update(dockey, finalPayload);
        } else {
          console.log(`Stock transfer docno '${payload.docno}' not found.`);
        }
      } else {
        console.log("The file must contain docno.");
      }
    }

    // Example: Delete existing stock transfer
    console.log("\n================= Delete Stock Transfer =================");
    if (await confirm("Do you want to delete a stock transfer?")) {
      const docno = await ask("Enter docno to delete: ");
      const existing = await xfApi.get_single(docno.trim());
      if (existing?.data?.length > 0) {
        const dockey = existing.data[0].dockey;
        console.log(`--- Deleting stock transfer '${docno}' (dockey=${dockey}) ---`);
        await xfApi.delete(dockey);
      } else {
        console.log(`Stock transfer '${docno}' not found.`);
      }
    }
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    console.log("--- End of the Script ---");
    rl.close();
  }
}

import { fileURLToPath } from "url";
import path from "path";
const currentFile = fileURLToPath(import.meta.url);
const entryFile = path.resolve(process.argv[1]);

if (currentFile === entryFile) {
  ST_XF();
}

```
</details>

### GL Payment Voucher

<details>
    <summary>GL Payment Voucher - Get List, Add, Update & Delete Function - click to expand</summary>

```js
// Updated on 15 Oct 2025 Print PDF not ready yet
import { sendRequest } from "./api/APICommon.js"; // base client
import fs from "fs";
import readline from "readline";

/**
 * Pretty-print JSON for debugging for debugging
 */
function debugPrintJson(data) {
  if (!data) {
    console.log("No data returned.");
    return;
  }

  if (Array.isArray(data.items)) {
    console.log(`Found ${data.items.length} record(s):`);
    data.items.forEach((item, idx) => {
      console.log(`[${idx + 1}] docno= ${item.docno}, desc= ${item.description}`);
    });
  } else if (Array.isArray(data.data)) {
    console.log(`Found ${data.data.length} record(s):`);
    data.data.forEach((item, idx) => {
      console.log(`[${idx + 1}] docno= ${item.docno}, desc= ${item.description}`);
    });
  } else if (typeof data === "object") {
    console.log("Single record:");
    Object.entries(data).forEach(([k, v]) => {
      console.log(`  ${k}: ${JSON.stringify(v)}`);
    });
  } else {
    console.log("Raw:", data);
  }
}

export class PaymentVoucherApi {
  constructor() {
    this.basePath = "/paymentvoucher"; // base path
  }

  /**
   * Get list of payment vouchers with pagination (default: offset=0, limit=5)
   */
  async get_list(offset = 0, limit = 5) {
    const query = `offset=${offset}&limit=${limit}`;
    console.log("\n--- Fetching payment voucher list (offset = 0, limit = 5)---");
    const data = await sendRequest("GET", this.basePath, null, query);

    // Force limit client-side if API ignore
    if (data && Array.isArray(data.data)) {
      data.data = data.data.slice(offset, offset + limit);
    }

    debugPrintJson(data);
    return data;
  }

  /**
   * Get single payment voucher by docno
   */
  async get_single(docno) {
    const query = `docno=${encodeURIComponent(docno)}`;
    console.log(`\n--- Fetching single payment voucher '${docno}' ---`);
    try {
      const data = await sendRequest("GET", this.basePath, null, query);
      debugPrintJson(data);
      return data;
    } catch (err) {
      console.error(
        `Failed to fetch payment voucher '${docno}':`,
        err.response?.data || err.message
      );
      throw err;
    }
  }

  /**
   * Print a payment voucher as PDF
   * 
   * Args: 
   *    docno: document number of the payment voucher
   *    reportName: name of the report want to be print (E.g. GL Payment Voucher - Detail - Full)
   *    savePath: output folder (E.g. ./PDF)
   */ 
  async print(docno, reportName = "GL Payment Voucher - Detail - Full", savePath = "./PDF") {
    console.log(`\n--- Printing Payment Voucher '${docno}' to PDF ---`);

      // Step 1: Find dockey for the given docno
      const existing = await this.get_single(docno);
      if(!existing || !Array.isArray(existing.data) || existing.data.length === 0) {
        throw new Error(`Payment Voucher '${docno}' not found`);
      }

      const record = existing.data[0];
      const dockey = record.dockey;
      const path = `${this.basePath}/${dockey}`;

      const pdfData = await sendRequest("GET", path, null, "", {
        headers: { "Content-Type": `application/pdf;template=${reportName}`},
        responseType: "arraybuffer",
        raw: true,
      });

      const fs = await import("fs");
      const fullSavePath = `${savePath}/Payment_Voucher_${docno}.pdf`;
      fs.mkdirSync(savePath, { recursive: true });
      fs.writeFileSync(fullSavePath, pdfData);
      console.log(`PDF saved: ${fullSavePath}`);
  }

  /**
   * Create new payment voucher
   */
  async create(payload) {
    console.log("\n--- Creating new payment voucher ---");
    try {
      const data = await sendRequest("POST", this.basePath, payload);
      debugPrintJson(data);
      console.log("Payment voucher created successfully.");
      return data;
    } catch (err) {
      console.error(
        "Failed to create payment voucher:",
        err.response?.data || err.message
      );
      throw err;
    }
  }

  /**
   * Update existing payment voucher
   */
  async update(dockey, payload) {
    console.log(`\n--- Updating payment voucher dockey=${dockey} ---`);
    try {
      // Step 1: Fetch existing record for updatecount
      const query = `dockey=${encodeURIComponent(dockey)}`;
      const existing = await sendRequest("GET", this.basePath, null, query);

      const record =
        (existing.data && existing.data[0]) ||
        (existing.items && existing.items[0]) ||
        existing;

      if (!record || typeof record.updatecount === "undefined") {
        throw new Error(
          "Updatecount missing. Try fetching via list API with dockey filter."
        );
      }

      // Step 2: Merge updatecount into payload
      const finalPayload = { ...payload, updatecount: record.updatecount };
      const path = `${this.basePath}/${dockey}`;

      // Step 3: Send PUT request with updatecount
      const data = await sendRequest("PUT", path, finalPayload);
      debugPrintJson(data);
      console.log("Payment voucher updated successfully.");
      return data;
    } catch (err) {
      console.error(
        `Failed to update payment voucher ${dockey}:`,
        err.response?.data || err.message
      );
      throw err;
    }
  }

  /**
   * Delete payment voucher by dockey
   */
  async delete(dockey) {
    const path = `${this.basePath}/${dockey}`;
    try {
      const data = await sendRequest("DELETE", path);
      debugPrintJson(data);
      console.log("Payment voucher deleted successfully.");
      return data;
    } catch (err) {
      console.error(
        `Failed to delete payment voucher '${dockey}':`,
        err.response?.data || err.message
      );
      throw err;
    }
  }
}

// ===== Runner =====

const pvApi = new PaymentVoucherApi();
const JSON_FOLDER = "./JSON/"; // your json folder file path, if same path as node.js, leave it blank

// Readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * 
 * Helper to ask question and return Promise<string>
 */
function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function confirm(message) {
  const ans = (await ask(`${message} (y/n): `)).toLowerCase();
  return ans === "y" || ans === "yes";
}

// Helper to load JSON file
function loadJson(filename) {
  try {
    const file = fs.readFileSync(filename, "utf8");
    return JSON.parse(file);
  } catch (err) {
    console.error(`Failed to read ${filename}:`, err.message);
    return null;
  }
}

async function GL_PV() {
  try {
    // Example: Get payment voucher list
    console.log("\n================= Payment Voucher List =================");
    if (await confirm("Proceed to fetch payment voucher list?")) {
      const list = await pvApi.get_list();
      console.table(JSON.stringify(list, null, 2));
    }

    // Example: Get single payment voucher
    console.log("\n================= Single Payment Voucher =================");
    if (await confirm("Do you want to fetch a single payment voucher?")) {
      const docno = await ask("Enter docno: ");
      const data = await pvApi.get_single(docno.trim());
      console.table(JSON.stringify(data, null, 2));
    }

    /**
    // Example: Print payment voucher PDF
    console.log("\n================= Print Payment Voucher =================");
    if(await confirm("Do you want to print an payment voucher to PDF?")) {
      const docno = await ask("Enter docno to print: ");
      await pvApi.print(docno.trim());
    }
     */

    // Example: Create new payment voucher
    console.log("\n================= Create Payment Voucher =================");
    if (await confirm("Do you want to create a new payment voucher?")) {
      const payload = loadJson(JSON_FOLDER + "GL_PV-New.json"); // make sure your file name is correct
      if (payload) await pvApi.create(payload);
      else console.log("Skipped create payment voucher (no valid JSON).");
    }

    // Example: Edit existing payment voucher
    console.log("\n================= Edit Payment Voucher =================");
    if (await confirm("Do you want to edit a payment voucher?")) {
      const payload = loadJson(JSON_FOLDER + "GL_PV-Edit.json"); // make sure your file name is correct
      if (payload?.docno) {
        const existing = await pvApi.get_single(payload.docno.trim());
        if (existing?.data?.length > 0) {
          const record = existing.data[0];
          const dockey = record.dockey;
          console.log(
            `Found dockey '${dockey}', updatecount '${record.updatecount}'`
          );

          const finalPayload = { ...payload, dockey, updatecount: record.updatecount };
          fs.writeFileSync(
            JSON_FOLDER + "GL_PV-Edit.json", // make sure your file name is correct
            JSON.stringify(finalPayload, null, 2)
          );

          await pvApi.update(dockey, finalPayload);
        } else {
          console.log(`Payment voucher docno '${payload.docno}' not found.`);
        }
      } else {
        console.log("The file must contain docno.");
      }
    }

    // Example: Delete existing payment voucher
    console.log("\n================= Delete Payment Voucher =================");
    if (await confirm("Do you want to delete a payment voucher?")) {
      const docno = await ask("Enter docno to delete: ");
      const existing = await pvApi.get_single(docno.trim());
      if (existing?.data?.length > 0) {
        const dockey = existing.data[0].dockey;
        console.log(`--- Deleting payment voucher '${docno}' ---`);
        await pvApi.delete(dockey);
      } else {
        console.log(`Payment voucher '${docno}' not found.`);
      }
    }
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    console.log("--- End of the Script ---");
    rl.close();
  }
}

// Run directly
import { fileURLToPath } from "url";
import path from "path";
const currentFile = fileURLToPath(import.meta.url);
const entryFile = path.resolve(process.argv[1]);

if (currentFile === entryFile) {
  GL_PV();
}

```
</details>

### Journal Entry

<details>
    <summary>Journal Entry - Get List, Add, Update & Delete Function - click to expand</summary>

```js
// Updated on 15 Oct 2025 print PDF not ready yet
import { sendRequest } from "./api/APICommon.js"; // base client
import fs from "fs";
import readline from "readline";

/**
 * Pretty-print JSON responses for debugging
 */
function debugPrintJson(data) {
  if (!data) {
    console.log("No data returned.");
    return;
  }

  if (Array.isArray(data.items)) {
    console.log(`Found ${data.items.length} record(s):`);
    data.items.forEach((item, idx) => {
      console.log(`[${idx + 1}] docno= ${item.docno}, desc= ${item.description}`);
    });
  } else if (Array.isArray(data.data)) {
    console.log(`Found ${data.data.length} record(s):`);
    data.data.forEach((item, idx) => {
      console.log(`[${idx + 1}] docno= ${item.docno}, desc= ${item.description}`);
    });
  } else if (typeof data === "object") {
    console.log("Single record:");
    Object.entries(data).forEach(([k, v]) => {
      console.log(`  ${k}: ${JSON.stringify(v)}`);
    });
  } else {
    console.log("Raw:", data);
  }
}

export class JournalEntryApi {
  constructor() {
    this.basePath = "/journalentry"; // base bath
  }

  /**
   * Get journal entry list with pagination (default: offset=0, limit=5)
   */
  async get_list(offset = 0, limit = 5) {
    const query = `offset=${offset}&limit=${limit}`;
    console.log("\n--- Fetching journal entry list (offset = 0, limit = 5)---");
    const data = await sendRequest("GET", this.basePath, null, query);

    // Force limit client-side if API ignore
    if (data && Array.isArray(data.data)) {
      data.data = data.data.slice(offset, offset + limit);
    }

    debugPrintJson(data);
    return data;
  }

  /**
   * Get a single journal entry by docno
   */
  async get_single(docno) {
    const query = `docno=${encodeURIComponent(docno)}`;
    console.log(`\n--- Fetching single journal entry '${docno}' ---`);
    try {
      const data = await sendRequest("GET", this.basePath, null, query);
      debugPrintJson(data);
      return data;
    } catch (err) {
      console.error(
        `Failed to fetch journal entry '${docno}':`,
        err.response?.data || err.message
      );
      throw err;
    }
  }

  /**
   * Print a journal entry as PDF
   * 
   * Args: 
   *    docno: document number of the journal entry
   *    reportName: name of the report want to be print (E.g. GL Journal Voucher - Full)
   *    savePath: output folder (E.g. ./PDF)
   */ 
  async print(docno, reportName = "GL Journal Voucher - Full", savePath = "./PDF") {
    console.log(`\n--- Printing journal entry '${docno}' to PDF ---`);

      // Step 1: Find dockey for the given docno
      const existing = await this.get_single(docno);
      if(!existing || !Array.isArray(existing.data) || existing.data.length === 0) {
        throw new Error(`Journal Entry '${docno}' not found`);
      }

      const record = existing.data[0];
      const dockey = record.dockey;
      const path = `${this.basePath}/${dockey}`;

      const pdfData = await sendRequest("GET", path, null, "", {
        headers: { "Content-Type": `application/pdf;template=${reportName}`},
        responseType: "arraybuffer",
        raw: true,
      });

      const fs = await import("fs");
      const fullSavePath = `${savePath}/Journal_Entry_${docno}.pdf`;
      fs.mkdirSync(savePath, { recursive: true });
      fs.writeFileSync(fullSavePath, pdfData);
      console.log(`PDF saved: ${fullSavePath}`);
  }

  /**
   * Create new journal entry
   */
  async create(payload) {
    console.log("\n--- Creating new journal entry ---");
    try {
      const data = await sendRequest("POST", this.basePath, payload);
      debugPrintJson(data);
      console.log("Journal entry created successfully.");
      return data;
    } catch (err) {
      console.error(
        "Failed to create journal entry:",
        err.response?.data || err.message
      );
      throw err;
    }
  }

  /**
   * Update existing journal entry
   */
  async update(dockey, payload) {
    console.log(`\n--- Updating journal entry dockey=${dockey} ---`);
    try {
      // Step 1: Fetch record for updatecount
      const query = `dockey=${encodeURIComponent(dockey)}`;
      const existing = await sendRequest("GET", this.basePath, null, query);

      const record =
        (existing.data && existing.data[0]) ||
        (existing.items && existing.items[0]) ||
        existing;

      if (!record || typeof record.updatecount === "undefined") {
        throw new Error("Updatecount missing. Try fetching via list API with dockey filter.");
      }

      // Step 2: Merge updatecount into payload
      const finalPayload = { ...payload, updatecount: record.updatecount };

      // Step 3: Send PUT request with updatecount
      const path = `${this.basePath}/${dockey}`;
      const data = await sendRequest("PUT", path, finalPayload);
      debugPrintJson(data);
      console.log("Journal entry updated successfully.");
      return data;
    } catch (err) {
      console.error(
        `Failed to update journal entry ${dockey}:`,
        err.response?.data || err.message
      );
      throw err;
    }
  }

  /**
   * Delete journal entry by dockey
   */
  async delete(dockey) {
    const path = `${this.basePath}/${dockey}`;
    try {
      const data = await sendRequest("DELETE", path);
      debugPrintJson(data);
      console.log("Journal entry deleted successfully.");
      return data;
    } catch (err) {
      console.error(
        `Failed to delete journal entry '${dockey}':`,
        err.response?.data || err.message
      );
      throw err;
    }
  }
}

// ===== Runner =====

const jeApi = new JournalEntryApi();
const JSON_FOLDER = "./JSON/"; // your json folder file path, if same path as node.js, leave it blank

// Readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * 
 * Helper to ask question and return Promise<string>
 */
function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function confirm(message) {
  const ans = (await ask(`${message} (y/n): `)).toLowerCase();
  return ans === "y" || ans === "yes";
}

// Helper to load JSON file
function loadJson(filename) {
  try {
    const file = fs.readFileSync(filename, "utf8");
    return JSON.parse(file);
  } catch (err) {
    console.error(`Failed to read ${filename}:`, err.message);
    return null;
  }
}

async function GL_Journal() {
  try {
    // Example: Get journal entry list
    console.log("\n================= Journal Entry List =================");
    if (await confirm("Proceed to fetch journal entry list?")) {
      const list = await jeApi.get_list();
      console.table(JSON.stringify(list, null, 2));
    }

    // Example: Get single journal entry
    console.log("\n================= Single Journal Entry =================");
    if (await confirm("Do you want to fetch a single journal entry?")) {
      const docno = await ask("Enter docno: ");
      const data = await jeApi.get_single(docno.trim());
      console.table(JSON.stringify(data, null, 2));
    }

    /**
    // Example: Print journal entry PDF
    console.log("\n================= Print Journal Entry =================");
    if(await confirm("Do you want to print a journal entry to PDF?")) {
      const docno = await ask("Enter docno to print: ");
      await jeApi.print(docno.trim());
    }
     */

    // Example: Create new journal entry
    console.log("\n================= Create Journal Entry =================");
    if (await confirm("Do you want to create a new journal entry?")) {
      const payload = loadJson(JSON_FOLDER + "GL_JE-New.json"); // make sure your file name is correct
      if (payload) await jeApi.create(payload);
      else console.log("Skipped create journal entry (no valid JSON).");
    }

    // Example: Edit existing journal entry
    console.log("\n================= Edit Journal Entry =================");
    if (await confirm("Do you want to edit a journal entry?")) {
      const payload = loadJson(JSON_FOLDER + "GL_JE-Edit.json"); // make sure your file name is correct
      if (payload?.docno) {
        const existing = await jeApi.get_single(payload.docno.trim());
        if (existing?.data?.length > 0) {
          const record = existing.data[0];
          const dockey = record.dockey;
          console.log(`Found dockey '${dockey}', updatecount '${record.updatecount}'`);

          const finalPayload = { ...payload, dockey, updatecount: record.updatecount };
          fs.writeFileSync(JSON_FOLDER + "GL_JE-Edit.json", JSON.stringify(finalPayload, null, 2)); // make sure your file name is correct

          await jeApi.update(dockey, finalPayload);
        } else {
          console.log(`Journal entry docno '${payload.docno}' not found.`);
        }
      } else {
        console.log("The file must contain docno.");
      }
    }

    // Example: Delete existing journal entry
    console.log("\n================= Delete Journal Entry =================");
    if (await confirm("Do you want to delete a journal entry?")) {
      const docno = await ask("Enter docno to delete: ");
      const existing = await jeApi.get_single(docno.trim());
      if (existing?.data?.length > 0) {
        const dockey = existing.data[0].dockey;
        console.log(`--- Deleting journal entry '${docno}' ---`);
        await jeApi.delete(dockey);
      } else {
        console.log(`Journal entry '${docno}' not found.`);
      }
    }
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    console.log("--- End of the Script ---");
    rl.close();
  }
}

// Run script only if executed directly
import { fileURLToPath } from "url";
import path from "path";
const currentFile = fileURLToPath(import.meta.url);
const entryFile = path.resolve(process.argv[1]);

if (currentFile === entryFile) {
  GL_Journal();
}

```
</details>

### Stock Item

<details>
    <summary>Stock Item - Get List, Add, Update & Delete Function - click to expand</summary>

```js
// Updated on 04 Oct 2025
import { sendRequest } from "./api/APICommon.js"; // base client
import fs from "fs";
import readline from "readline";

/**
 * Pretty-print JSON responses for debugging
 */
function debugPrintJson(data) {
  if (!data) {
    console.log("No data returned.");
    return;
  }

  if (Array.isArray(data.items)) {
    console.log(`Found ${data.items.length} records:`);
    data.items.forEach((item, idx) => {
      console.log(`[${idx + 1}] code= ${item.code}, dockey= ${item.dockey}, desc= ${item.description}, stockgroup= ${item.stockgroup}`);
    });
  } else if (Array.isArray(data.data)) {
    console.log(`Found ${data.data.length} record(s):`);
    data.data.forEach((item, idx) => {
      console.log(`[${idx + 1}] code= ${item.code}, dockey= ${item.dockey}, desc= ${item.description}, stockgroup= ${item.stockgroup}`);
    });
  } else if (typeof data === "object") {
    console.log("Single record:");
    Object.entries(data).forEach(([k, v]) => {
      console.log(`  ${k}: ${JSON.stringify(v)}`);
    });
  } else {
    console.log("Raw:", data);
  }
}

export class StockItemApi {
  constructor() {
    this.basePath = "/stockitem"; // base path
  }

  /**
   * Get stock item list
   */
  async get_list(offset = 0, limit = 10) {
    const query = `offset=${offset}&limit=${limit}`;
    console.log("\n--- Fetching stock item list ---");
    const data = await sendRequest("GET", this.basePath, null, query);

    if (data && Array.isArray(data.data)) {
      data.data = data.data.slice(offset, offset + limit);
    }

    debugPrintJson(data);
    return data;
  }

  /**
   * Get a single stock item by code
   */
  async get_single(code) {
    const query = `code=${encodeURIComponent(code)}`;
    console.log(`\n--- Fetching single stock item '${code}' ---`);
    try {
      const data = await sendRequest("GET", this.basePath, null, query);
      debugPrintJson(data);
      return data;
    } catch (err) {
      console.error(`Failed to fetch stock item '${code}':`, err.message);
      throw err;
    }
  }

  /**
   * Create new stock item
   */
  async create(payload) {
    console.log("\n--- Creating new stock item ---");
    try {
      const data = await sendRequest("POST", this.basePath, payload);
      debugPrintJson(data);
      console.log("Stock item created successfully.");
      return data;
    } catch (err) {
      console.error("Failed to create stock item:", err.response?.data || err.message);
      throw err;
    }
  }

  /**
   * Update existing stock item
   */
  async update(dockey, payload) {
    if (!dockey) throw new Error("Dockey required for update");
    console.log(`\n--- Updating stock item dockey: ${dockey} ---`);

    const finalPayload = { ...payload, dockey };
    const path = `${this.basePath}/${encodeURIComponent(dockey)}`;

    try {
      const data = await sendRequest("PUT", path, finalPayload);
      debugPrintJson(data);
      console.log("Stock item updated successfully.");
      return data;
    } catch (err) {
      console.error(`Failed to update stock item '${dockey}':`, err.response?.data || err.message);
      throw err;
    }
  }

  /**
   * Delete stock item by code
   */
  async delete(dockey) {
    const path = `${this.basePath}/${encodeURIComponent(dockey)}`;
    try {
      const data = await sendRequest("DELETE", path);
      debugPrintJson(data);
      console.log("Stock item deleted successfully.");
      return data;
    } catch (err) {
      console.error(`Failed to delete stock item '${dockey}':`, err.response?.data || err.message);
      throw err;
    }
  }
}

// ========== Runner ==========

const itemApi = new StockItemApi();
const JSON_FOLDER = "./JSON/"; // your json folder file path, if same path as node.js, leave it blank

// Readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * 
 * Helper to ask question and return Promise<string>
 */
function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function confirm(message) {
  const ans = (await ask(`${message} (y/n): `)).toLowerCase();
  return ans === "y" || ans === "yes";
}

// Helper to load JSON file
function loadJson(filename) {
  try {
    const file = fs.readFileSync(filename, "utf8");
    return JSON.parse(file);
  } catch (err) {
    console.error(`Failed to read ${filename}:`, err.message);
    return null;
  }
}

async function ST_Item() {
  try {
    // List stock items
    console.log("\n================= Stock Item List =================");
    if (await confirm("Proceed to fetch stock item list?")) {
      const list = await itemApi.get_list();
      console.table(JSON.stringify(list, null, 2));
    }

    // Single stock item
    console.log("\n================= Single Stock Item =================");
    if (await confirm("Do you want to fetch a single stock item?")) {
      const code = await ask("Enter stock item code: ");
      const item = await itemApi.get_single(code.trim());
      console.log(`\n--- Fetching stock item code '${code}' ---`);
      console.table(JSON.stringify(item, null, 2));
    }

    // Create stock item
    console.log("\n================= Create New Stock Item =================");
    if (await confirm("Do you want to create a new stock item?")) {
      const payload = loadJson(JSON_FOLDER + "ST_Item-New.json"); // Make sure your file name is correct
      if (payload) {
        await itemApi.create(payload);
      } else {
        console.log("Skipped create stock item (no valid JSON).");
      }
    }

    // Edit stock item
    console.log("\n================= Edit Stock Item =================");
    if (await confirm("Do you want to edit a stock item?")) {
      const payload = loadJson(JSON_FOLDER + "ST_Item-Edit.json");
      if (!payload?.code) {
        console.log("The file must contain stock item code.");
      } else {
        const code = payload.code.trim();
        console.log(`\n--- Looking for stock item code '${code}' ---`);

        // Fetch existing record by code
        const existing = await itemApi.get_single(code);

        // Normalize record extraction
        const record = 
        (existing && existing.data && existing.data[0]) ||
        (existing && existing.items && existing.items[0]) ||
        existing;

        if (!record) {
          console.log(`Stock Item Code '${code}' not found.`);
        } else {
          const dockey = record.dockey;

          const finalPayload = { ...record, ...payload, dockey};

          fs.writeFileSync(
            JSON_FOLDER + "ST_Item-Edit.json",
            JSON.stringify(finalPayload, null, 2)
          );

          await itemApi.update(dockey, finalPayload);
        }
      }
    }

    // Delete stock item
    console.log("\n================= Delete Stock Item =================");
    if (await confirm("Do you want to delete a stock item?")) {
      const code = await ask("Enter stock item code to delete: ");
      if (code) {
        console.log(`--- Deleting stock item '${code}' ---`);
        const existing = await itemApi.get_single(code.trim());

        const record =
        (existing && existing.data && existing.data[0]) ||
        (existing && existing.items && existing.items[0]) ||
        existing;

        if (!record) {
          console.log(`Stock Item Code '${code}' not found.`);
        } else {
          const dockey = record.dockey;
          await itemApi.delete(dockey);
        }
      }
    }
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    console.log("--- End of the Script ---");
    rl.close();
  }
}

import { fileURLToPath } from "url";
import path from "path";

const currentFile = fileURLToPath(import.meta.url);
const entryFile = path.resolve(process.argv[1]);

if (currentFile === entryFile) {
  ST_Item();
}

```
</details>

### Stock Received

<details>
    <summary>Stock Received - Get List, Add, Update & Delete Function - click to expand</summary>

```js
// Updated on 04 Oct 2025 Print PDF not ready yet
import { sendRequest } from "./api/APICommon.js";  // base client
import fs from "fs";
import readline from "readline";

/**
 * Pretty-print JSON responses for debugging
 */
function debugPrintJson(data) {
  if (!data) {
    console.log("No data returned.");
    return;
  }

  if (Array.isArray(data.items)) {
    console.log(`Found ${data.items.length} records:`);
    data.items.forEach((item, idx) => {
      console.log(
        `[${idx + 1}] docno= ${item.docno}, dockey= ${item.dockey}, amount= ${item.docamt}`
      );
    });
  } else if (Array.isArray(data.data)) {
    console.log(`Found ${data.data.length} record(s):`);
    data.data.forEach((item, idx) => {
        console.log(
            `[${idx + 1}] docno= ${item.docno}, dockey= ${item.dockey}, amount= ${item.docamt}`
        );
    });
  } else if (typeof data === "object") {
    console.log("Single record:");
    Object.entries(data).forEach(([k, v]) => {
      console.log(`  ${k}: ${JSON.stringify(v)}`);
    });
  } else {
    console.log("Raw:", data);
  }
}

export class StockReceivedApi {
  constructor() {
    this.basePath = "/stockreceived"; // base path
  }

  /**
   * Get stock received list with pagination (default: offset=0, limit=5)
   */
  async get_list(offset = 0, limit = 5) {
    const query = `offset=${offset}&limit=${limit}`;
    console.log("\n--- Fetching stock received list (offset = 0, limit = 5)---");
    const data = await sendRequest("GET", this.basePath, null, query);

    // Force limit client-side if API ignore
    if (data && Array.isArray(data.data)) {
      data.data = data.data.slice(offset, offset + limit);
    }

    debugPrintJson(data);
    return data;
  }

  /**
   * Get a single stock received by docno
   */
  async get_single(docno) {
    const query = `docno=${encodeURIComponent(docno)}`;
    console.log(`\n--- Fetching stock received '${docno}' ---`);
    try {
      const data = await sendRequest("GET", this.basePath, null, query);
      debugPrintJson(data);
      return data;
    } catch (err) {
      console.error(`Failed to fetch stock received '${docno}':`, err.response?.data || err.message);
      throw err;
    }
  }

  /**
   * Print a stock received as PDF
   * 
   * Args: 
   *    docno: document number of the stock received
   *    reportName: name of the report want to be print (E.g. Stock Received - Actual cost)
   *    savePath: output folder (E.g. ./PDF)
   */ 
  async print(docno, reportName = "Stock Received - Actual cost", savePath = "./PDF") {
    console.log(`\n--- Printing stock received '${docno}' to PDF ---`);

      // Step 1: Find dockey for the given docno
      const existing = await this.get_single(docno);
      if(!existing || !Array.isArray(existing.data) || existing.data.length === 0) {
        throw new Error(`Stock Received '${docno}' not found`);
      }

      const record = existing.data[0];
      const dockey = record.dockey;
      const path = `${this.basePath}/${dockey}`;

      const pdfData = await sendRequest("GET", path, null, "", {
        headers: { "Content-Type": `application/pdf;template=${reportName}`},
        responseType: "arraybuffer",
        raw: true,
      });

      const fs = await import("fs");
      const fullSavePath = `${savePath}/Stock_Received_${docno}.pdf`;
      fs.mkdirSync(savePath, { recursive: true });
      fs.writeFileSync(fullSavePath, pdfData);
      console.log(`PDF saved: ${fullSavePath}`);
  }

  /**
   * Create stock received
   */
  async create(payload) {
    console.log("\n--- Creating stock received ---");
    try {
      const data = await sendRequest("POST", this.basePath, payload);
      debugPrintJson(data);
      console.log("Stock received created successfully.");
      return data;
    } catch (err) {
      console.error("Failed to create stock received:", err.response?.data || err.message);
      throw err;
    }
  }

  /**
   * Edit existing stock received by dockey
   */
  async update(dockey, payload) {
    console.log(`\n--- Updating stock received dockey=${dockey} ---`);
    try {
      // Fetch record to get updatecount
      const query = `dockey=${encodeURIComponent(dockey)}`;
      const existing = await sendRequest("GET", this.basePath, null, query);

      const record =
        (existing.data && existing.data[0]) ||
        (existing.items && existing.items[0]) ||
        existing;

      if (!record || typeof record.updatecount === "undefined") {
        throw new Error("Updatecount missing. Try fetching via list API with dockey filter.");
      }

      const finalPayload = {
        ...payload,
        updatecount: record.updatecount,
      };

      const path = `${this.basePath}/${dockey}`;
      const data = await sendRequest("PUT", path, finalPayload);
      debugPrintJson(data);
      console.log("Stock received updated successfully.");
      return data;
    } catch (err) {
      console.error(`Failed to update stock received ${dockey}:`, err.response?.data || err.message);
      throw err;
    }
  }

  /**
   * Delete stock received
   */
  async delete(dockey) {
    const path = `${this.basePath}/${dockey}`;
    try {
      const data = await sendRequest("DELETE", path);
      debugPrintJson(data);
      console.log("Stock received deleted successfully.");
      return data;
    } catch (err) {
      console.error(`Failed to delete stock received '${dockey}':`, err.response?.data || err.message);
      throw err;
    }
  }
}

// ========== Runner ==========

const srApi = new StockReceivedApi();
const JSON_FOLDER = "./JSON/"; // your json folder file path, if same as node.js, leave it blank

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

/**
 * 
 * Helper to ask question and return Promise<string>
 */
function ask(question) {
  return new Promise(resolve => rl.question(question, resolve));
}

async function confirm(message) {
  const ans = (await ask(`${message} (y/n): `)).toLowerCase();
  return ans === "y" || ans === "yes";
}

// Helper to load JSON file
function loadJson(filename) {
  try {
    const file = fs.readFileSync(filename, "utf8");
    return JSON.parse(file);
  } catch (err) {
    console.error(`Failed to read ${filename}:`, err.message);
    return null;
  }
}

async function ST_Received() {
  try {
    // Example: Get stock recieved list
    console.log("\n================= Stock Received List =================");
    if (await confirm("Proceed to fetch stock received list?")) {
      const list = await srApi.get_list();
      console.table(JSON.stringify(list, null, 2));
    }

    // Example: Get single stock received
    console.log("\n================= Single Stock Received =================");
    if (await confirm("Do you want to fetch a single stock received?")) {
      const docno = await ask("Enter docno: ");
      const list = await srApi.get_single(docno.trim());
      console.table(JSON.stringify(list, null, 2));
    }

    /**
     * Example: Print stock received PDF
    console.log("\n================= Print Stock Received =================");
    if(await confirm("Do you want to print a stock received to PDF?")) {
      const docno = await ask("Enter docno to print: ");
      await srApi.print(docno.trim());
    }
     */

    // Example: Create new stock received
    console.log("\n================= Create Stock Received =================");
    if (await confirm("Do you want to create new stock received?")) {
      const payload = loadJson(JSON_FOLDER + "ST_RC-New.json"); // make sure your file name is correct
      if (payload) await srApi.create(payload);
    }

    // Example: Edit existing stock received
    console.log("\n================= Edit Stock Received =================");
    if (await confirm("Do you want to edit a stock received?")) {
      const payload = loadJson(JSON_FOLDER + "ST_RC-Edit.json"); // make sure your file name is correct
      if (payload?.docno) {
        const existing = await srApi.get_single(payload.docno.trim());
        if (existing?.data?.length > 0) {
          const record = existing.data[0];
          const dockey = record.dockey;

          console.log(`Found dockey '${dockey}', updatecount '${record.updatecount}'`);

          const finalPayload = { ...payload, dockey, updatecount: record.updatecount };
          fs.writeFileSync(JSON_FOLDER + "ST_RC-Edit.json", JSON.stringify(finalPayload, null, 2)); // make sure your file name is correct

          await srApi.update(dockey, finalPayload);
        } else {
          console.log(`Stock received docno '${payload.docno}' not found.`);
        }
      }
    }

    // Example: Delete existing stock received
    console.log("\n================= Delete Stock Received =================");
    if (await confirm("Do you want to delete a stock received?")) {
      const docno = await ask("Enter docno to delete: ");
      if (docno) {
        const existing = await srApi.get_single(docno.trim());
        if (existing?.data?.length > 0) {
          const dockey = existing.data[0].dockey;
          console.log(`Deleting stock received with dockey=${dockey}`);
          await srApi.delete(dockey);
        } else {
          console.log(`Stock received docno '${docno}' not found.`);
        }
      }
    }
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    console.log("--- End of the Script ---");
    rl.close();
  }
}

import { fileURLToPath } from "url";
import path from "path";

const currentFile = fileURLToPath(import.meta.url);
const entryFile = path.resolve(process.argv[1]);

if (currentFile === entryFile) {
  ST_Received();
}

```

</details>
