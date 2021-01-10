# Subgraph for Aapka Saarthi

### Explore the subgraph here 👉 [https://thegraph.com/explorer/subgraph/anudit/saarthi](https://thegraph.com/explorer/subgraph/anudit/saarthi)
### The Graph Documentation 👉 [https://thegraph.com/docs/](https://thegraph.com/docs/)

### Endpoints
```
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/saarthi
IPFS:               https://api.thegraph.com/subgraphs/id/QmaDuUssL4NDaMLNRZ778dayaDQmQ7sUYQjufM4irHCgop
Subscriptions (WS): wss://api.thegraph.com/subgraphs/name/anudit/saarthi
```

### Sample Queries
<br/>

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
<br/>
<br/>

Get Funds Data.

```
{
  funds(first:2 skip:1) {
    id
    paymentReceiver
    fundIndex
    createdOn
    orgName
    fundName
    donationCount
    amountReceived
    donations {
      id
      createdOn
      from
      amount
    }
  }
}
```

<details>
 <summary>Response</summary>
 <pre>
{
  "data": {
    "funds": [
      {
        "amountReceived": "500000000000000000",
        "createdOn": "1610208416",
        "donationCount": "1",
        "donations": [
          {
            "amount": "500000000000000000",
            "createdOn": "1610208656",
            "from": "0x707ac3937a9b31c225d8c240f5917be97cab9f20",
            "id": "0xf3bc924274d0397d905086b87507a566b46d51ca2aa46198613ae842d66e2c8d"
          }
        ],
        "fundIndex": "2",
        "fundName": "Coronavirus Relief Fund",
        "id": "0x2",
        "orgName": "GlobalGiving",
        "paymentReceiver": "0xbeb71662ff9c08afef3866f85a6591d4aebe6e4e"
      }
    ]
  }
}
 </pre>
</details>
<br/>
<br/>


Get Reports Data.

```
  {
     reportDatas {
      id
      totalReports
      reports{
        id
        reportIndex
        reporter
        location
        file
        details
        reportedOn
      }
    }
  }
```
