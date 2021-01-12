# Subgraph for Aapka Saarthi

### Explore the subgraph here 👉 [https://thegraph.com/explorer/subgraph/anudit/saarthi](https://thegraph.com/explorer/subgraph/anudit/saarthi)
### The Graph Documentation 👉 [https://thegraph.com/docs/](https://thegraph.com/docs/)

### Endpoints
```
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/saarthi
IPFS:               https://api.thegraph.com/subgraphs/id/QmQBFexmtHWGiJpSACykuEFspJ3RWiCPUZQC6YE9mVWCZ6
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
            createdOn
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
            "createdOn": "1610107225",
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
  funds(first:1) {
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

<details>
 <summary>Response</summary>
 <pre>
{
  "data": {
    "reportDatas": [
      {
        "id": "0x1",
        "reports": [
          {
            "details": "This is an anonymous report",
            "file": "QmV3EKe4faozxGuY2ePGMqKjana3zjmkzJEuQ9NEHjefeu",
            "id": "0x2fb80842a9c23d46bcfc72b61748103482018f30400297b8475b06ebf7b0d117",
            "location": "12.9863 10.2736",
            "reportIndex": "0",
            "reportedOn": "1610275499",
            "reporter": "0xbeb71662ff9c08afef3866f85a6591d4aebe6e4e"
          }
        ],
        "totalReports": "1"
      }
    ]
  }
} </pre>
</details>
<br/>
<br/>

Get Approvals Data.

```
{
  approvals {
    id
    from
    to
    state
  }
}
```

<details>
 <summary>Response</summary>
 <pre>
{
  "data": {
    "approvals": [
      {
        "from": "0x707ac3937a9b31c225d8c240f5917be97cab9f20",
        "id": "0x707ac3937a9b31c225d8c240f5917be97cab9f20-0xbeb71662ff9c08afef3866f85a6591d4aebe6e4e",
        "state": true,
        "to": "0xbeb71662ff9c08afef3866f85a6591d4aebe6e4e"
      }
    ]
  }
}
 </pre>
</details>
<br/>
<br/>

Get Task Coordinator Data.

```
{
    tasks {
     id
      taskId
      user
      cost
      createdOn
      currentRound
      totalRounds
      modelstates {
        id
        round
        modelState
        createdOn
      }
    }
}
```

<details>
 <summary>Response</summary>
 <pre>
{
  "data": {
    "tasks": [
      {
        "cost": "0",
        "createdOn": "1610352951",
        "currentRound": "2",
        "id": "1",
        "modelstates": [
          {
            "createdOn": "1610352951",
            "id": "0x6d609f205882c790e794b321c0f7120260f8cbc484a5a5de356e517860b03226",
            "modelState": "QmWmyoMoctfbAaiEs2G46gpeUmhqFRDW6KWo64y5r581Vz",
            "round": "1"
          },
          {
            "createdOn": "1610353041",
            "id": "0xf2abffbc21fdb72465c068b8aa6c79c59a76292b6a70587d5f7e09451faad064",
            "modelState": "QmWmyoMoctfbAaiEs2G46gpeUmhqFRDW6KWo64y5r581Vz",
            "round": "2"
          }
        ],
        "taskId": "1",
        "totalRounds": "2",
        "user": "0x707ac3937a9b31c225d8c240f5917be97cab9f20"
      }
    ]
  }
}  </pre>
</details>
<br/>
<br/>
