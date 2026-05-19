#!/usr/bin/env python3
"""
Buttondown API Integration for The Hermes Dispatch
Creates drafts via API for manual review before publishing
"""

import os
import sys
import json
import requests
from datetime import datetime

class ButtondownAPI:
    """Buttondown API wrapper for newsletter automation"""
    
    def __init__(self, api_key=None):
        self.api_key = api_key or os.getenv('BUTTONDOWN_API_KEY')
        if not self.api_key:
            raise ValueError("BUTTONDOWN_API_KEY not set")
        
        self.base_url = "https://api.buttondown.email/v1"
        self.headers = {
            "Authorization": f"Token {self.api_key}",
            "Content-Type": "application/json"
        }
    
    def create_draft(self, subject, body, metadata=None):
        """Create a draft email for manual review"""
        
        data = {
            "subject": subject,
            "body": body,
            "status": "draft"  # Always draft for review
        }
        
        if metadata:
            data.update(metadata)
        
        response = requests.post(
            f"{self.base_url}/emails",
            headers=self.headers,
            json=data
        )
        
        if response.status_code == 201:
            result = response.json()
            print(f"✓ Draft created: {subject}")
            print(f"  ID: {result.get('id')}")
            print(f"  Status: {result.get('status')}")
            return result
        else:
            print(f"✗ Failed to create draft: {response.status_code}")
            print(response.text)
            return None
    
    def list_drafts(self):
        """List all drafts for review"""
        
        response = requests.get(
            f"{self.base_url}/emails?status=draft",
            headers=self.headers
        )
        
        if response.status_code == 200:
            drafts = response.json().get('results', [])
            return drafts
        return []
    
    def get_subscribers(self):
        """Get subscriber count"""
        
        response = requests.get(
            f"{self.base_url}/subscribers",
            headers=self.headers
        )
        
        if response.status_code == 200:
            data = response.json()
            return data.get('count', 0)
        return 0


def create_newsletter_issue(issue_number, title, content_blocks):
    """Generate a complete newsletter issue"""
    
    today = datetime.now().strftime("%B %d, %Y")
    
    # Header
    header = f"""# The Hermes Dispatch — Issue #{issue_number}

**{title}**

*{today} | Written by Rycen Beans from Boise, Idaho*

---

"""
    
    # Content
    body = header
    for section_title, section_content in content_blocks:
        body += f"
## {section_title}

{section_content}

"
    
    # Footer
    footer = """---

**Questions?** Reply to this email — I read every response.

**Share this issue:** [Twitter](https://twitter.com/intent/tweet) | [LinkedIn](https://www.linkedin.com/sharing/share-offsite/)

**Not subscribed?** [Join 0+ readers](https://buttondown.email/hermesdispatch) (we're just starting)

[Unsubscribe](https://buttondown.email/hermesdispatch/unsubscribe) | [Update preferences](https://buttondown.email/hermesdispatch/preferences)

© 2026 Rycen Beans · Hermes Mission Freedom · Boise, ID
"""
    
    body += footer
    
    return body


if __name__ == "__main__":
    # Example usage
    api = ButtondownAPI()
    
    # Issue content
    issue_content = {
        "What I'm Building": "The complete breakdown of the Tabby automation system...",
        "Tool of the Day": "Buttondown - Newsletter platform with an excellent API",
        "Skill Spotlight": "Obsidian Logger - Universal logging for all agents"
    }
    
    body = create_newsletter_issue(
        issue_number=1,
        title="How I Built an Automated Etsy Business",
        content_blocks=issue_content.items()
    )
    
    draft = api.create_draft(
        subject="Issue #1: How I Built an Automated Etsy Business with Hermes",
        body=body
    )
