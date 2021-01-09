# Subgraph for Aapka Saarthi

### Explore the subgraph here 👉 [https://thegraph.com/explorer/subgraph/anudit/saarthi](https://thegraph.com/explorer/subgraph/anudit/saarthi)
### The Graph Documentation 👉 [https://thegraph.com/docs/](https://thegraph.com/docs/)

### Endpoints
```
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/saarthi
Subscriptions (WS): wss://api.thegraph.com/subgraphs/name/anudit/saarthi
```

### Sample Queries

Get Campaign Data.
```
{
    campaigns(first:1) {
        id
        campaigner
        campaignCount
        donationCount
        amountReceived
        campaignHistory {
            id
            createdAt
            campaignData
            donationCount
            amountReceived
            donatorAddresses
        }
    }
}
```

<details>
 <summary>Response</summary>
 <pre>
{
  "data": {
    "campaigns": [
      {
        "amountReceived": "0",
        "campaignCount": "1",
        "campaignHistory": [
          {
            "amountReceived": "0",
            "campaignData": "Henlo, Plz welp.",
            "createdAt": "1610107225",
            "donationCount": "0",
            "donatorAddresses": [],
            "id": "0x68b33f79309769570c5e3209ad50ce0136497e2ef6ff86717f45ed3b9406c62c"
          }
        ],
        "campaigner": "0x707ac3937a9b31c225d8c240f5917be97cab9f20",
        "donationCount": "0",
        "id": "0x707ac3937a9b31c225d8c240f5917be97cab9f20"
      }
    ]
  }
}
 </pre>
</details>
