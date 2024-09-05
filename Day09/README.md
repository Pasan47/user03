# Mongo DB Aggregation

## !
[
  {
    $match: {
      favoriteFruit: "strawberry",
      eyeColor: "blue",
      gender: "female",
    },
  },
  {
    $project: {
      name: 1,
      age: 1
    }
  },
  {
    $group: {
      _id: "$age",
      hcount: {
        $sum: 1,
      }
    }
  },
  {
    $sort: {
      hcount: 1,
    }
  }
  
]
## 2
[
  {
    $unwind: {
      path: "$tags", // Make seperete objects for tags
    },
  },
  {
    $group: {
      _id: "$_id",
      tagCount: {
        $sum:1 //No of tags for for a id
      }
    }
  },
  {
    $group: {
      _id: null, // To get each user (not specifing)
      averageTagCount: {
        $avg: "$tagCount" //The average count of number of tags  per user
      }
    }
  }
]

## 3 --> get the average tag count of the males who has blue eyes and likes apple
[
  {
    $match: {
      eyeColor: "blue",
      favoriteFruit: "apple",
      gender: "male",
    }
  },
  {
    $unwind: {
      path: "$tags",
    }
  },
  {
    $group: {
      _id: "$_id",
      tagCount: {
        $sum: 1
      } 
    }
  },
  {
    $group: {
      _id: null,
      avgTag: {
        $avg: "$tagCount"
      }
    }
  }
]

## 4 --> multiple objects inside a object

[
  {
    $group: {
      _id: "$company.location.country",
      userCount: {
        $sum: 1,
      },
    },
  },
  {
    $sort: {
      userCount: -1,
    },
  },
]

## 5 --> Regular expression
[
  {
    $match: {
      "company.phone": {
        $regex: /^\+1 \(940\)/,
      },
    },
  },
]

## 6
[
  {
    $match: {
      "company.location.country": "USA",
      isActive: false,
      favoriteFruit: "banana",
      "company.phone": {
        $regex: /^\+1 \(940\)/,
      },
    },
  },
  {
    $project: {
      name: 1,
      age: 1,
    },
  },
]

## 7 --> the documents that have both ad and id tags
[
  {
    $match: {
      tags: {
        $all: ["ad", "id"],
      },
    },
  },
]