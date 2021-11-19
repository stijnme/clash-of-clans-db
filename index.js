import fetch from 'node-fetch';

async function get_player() {
    const response = await fetch("https://api.clashofclans.com/v1/players/%23LOLYC9UYQ", {
        "headers": {
          "accept": "application/json",
          "accept-language": "en-US,en;q=0.9",
          "authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjUxMzhhNWI5LTcyNDktNDIwMy1lNDM3LTUyMWQ5ZmIzNDJiZiIsImlhdCI6MTYzNzM1NjIyMCwiZXhwIjoxNjM3MzU5ODIwLCJzdWIiOiJkZXZlbG9wZXIvNTk3Yjc0NzItZDQ3ZC0xN2U2LTU2NGUtM2I2MWU5OWUyOGMyIiwic2NvcGVzIjpbImNsYXNoIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9icm9uemUiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNzguMjIuNTQuMjE2LzMyIl0sInR5cGUiOiJjbGllbnQifSx7Im9yaWdpbnMiOlsiZGV2ZWxvcGVyLmNsYXNob2ZjbGFucy5jb20iXSwidHlwZSI6ImNvcnMifV19.NCvoQ0nFU9CGzg_wLhFdiMqjGGuEKHQu3SBJLbhBsmMBLJKig-rCEIsmAoNP3X575uL4fLfecOylBrfG6wgu7w",
          "sec-ch-ua": "\"Google Chrome\";v=\"95\", \"Chromium\";v=\"95\", \";Not A Brand\";v=\"99\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"macOS\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "same-site",
          "sec-gpc": "1",
          "Referer": "https://developer.clashofclans.com/",
          "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        "body": null,
        "method": "GET"
      });
    const data = await response.json();
    console.log(data);
}

get_player();

