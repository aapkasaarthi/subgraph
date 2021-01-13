# Subgraph for Aapka Saarthi

### Explore the subgraph here 👉 [https://thegraph.com/explorer/subgraph/anudit/saarthi](https://thegraph.com/explorer/subgraph/anudit/saarthi)
### The Graph Documentation 👉 [https://thegraph.com/docs/](https://thegraph.com/docs/)

### Endpoints
```
Queries (HTTP):     https://api.thegraph.com/subgraphs/name/anudit/saarthi
IPFS:               https://api.thegraph.com/subgraphs/id/QmW3q6XtPqHo3x1kDYainz8hHw36hyphgkqoxvVYeSrL2z
Subscriptions (WS): wss://api.thegraph.com/subgraphs/name/anudit/saarthi
```

### Sample Queries
<br/>

Get Campaign Data.

```
{
    campaigns {
        id
        campaigner
        campaignCount
      	campaignEnabled
        donationCount
        amountReceived
        campaignHistory {
            id
            campaignData
            createdOn
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
        "campaignEnabled": true,
        "campaignHistory": [
          {
            "amountReceived": "0",
            "campaignData": "QmR3VgpgJcGJZX4iazxBcvn2G7jHktLCdozaWF6Hp8DLLH",
            "createdOn": "1610423578",
            "donationCount": "0",
            "donatorAddresses": [],
            "id": "0x99ca5dc3da5ba953d78847d3b852f1bec1b63637261ed86942793657746727ae"
          }
        ],
        "campaigner": "0x707ac3937a9b31c225d8c240f5917be97cab9f20",
        "donationCount": "0",
        "id": "0x707ac3937a9b31c225d8c240f5917be97cab9f20"
      },
      {
        "amountReceived": "50000000000000000",
        "campaignCount": "1",
        "campaignEnabled": true,
        "campaignHistory": [
          {
            "amountReceived": "50000000000000000",
            "campaignData": "QmR3VgpgJcGJZX4iazxBcvn2G7jHktLCdozaWF6Hp8DLLH",
            "createdOn": "1610423593",
            "donationCount": "1",
            "donatorAddresses": [
              "0x707ac3937a9b31c225d8c240f5917be97cab9f20"
            ],
            "id": "0x766791c2e0218c18f032d16d6c819676a7a9c42ed5a346d7fe34b5a8bd1ba7bd"
          }
        ],
        "campaigner": "0xbeb71662ff9c08afef3866f85a6591d4aebe6e4e",
        "donationCount": "1",
        "id": "0xbeb71662ff9c08afef3866f85a6591d4aebe6e4e"
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
            "details": "An Anonymous Report filed at GooglePlex.",
            "file": "QmR3VgpgJcGJZX4iazxBcvn2G7jHktLCdozaWF6Hp8DLLH",
            "id": "0x0",
            "location": "37.4221 N, 122.0841 W",
            "reportIndex": "0",
            "reportedOn": "1610423608",
            "reporter": "0x707ac3937a9b31c225d8c240f5917be97cab9f20"
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


Get Hospital Data

```
{
  	hospitals {
      id
      state
      totalBilledAmount
      billsCount
      bills {
        id
        from
        to
        amount
      }
    }
    userHospitalBills {
      id
      totalBilledAmount
      billsCount
      bills {
        id
        from
        to
        amount
      }
    }
}
```
<details>
 <summary>Response</summary>
 <pre>{
  "data": {
    "hospitals": [
      {
        "bills": [
          {
            "amount": "1000000000000000000",
            "from": "0xbeb71662ff9c08afef3866f85a6591d4aebe6e4e",
            "id": "0x99d44cc52a747267a0f6af6a81f63f69d0826ebf84ffbd79e9d24664f900f9e3",
            "to": "0xd90c844c0252797c2e3f87aa63a8389a16a63767"
          }
        ],
        "billsCount": "1",
        "id": "0xbeb71662ff9c08afef3866f85a6591d4aebe6e4e",
        "state": true,
        "totalBilledAmount": "1000000000000000000"
      }
    ],
    "userHospitalBills": [
      {
        "bills": [
          {
            "amount": "1000000000000000000",
            "from": "0xbeb71662ff9c08afef3866f85a6591d4aebe6e4e",
            "id": "0x99d44cc52a747267a0f6af6a81f63f69d0826ebf84ffbd79e9d24664f900f9e3",
            "to": "0xd90c844c0252797c2e3f87aa63a8389a16a63767"
          }
        ],
        "billsCount": "1",
        "id": "0xd90c844c0252797c2e3f87aa63a8389a16a63767",
        "totalBilledAmount": "1000000000000000000"
      }
    ]
  }
} </pre>
</details>
<br/>
<br/>

