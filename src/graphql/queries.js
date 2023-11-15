/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getThreads = /* GraphQL */ `
  query GetThreads($id: ID!) {
    getThreads(id: $id) {
      id
      ThreadTitles
      UserID
      Likes
      VideoURL
      Description
      Comments {
        Date
        UserID
        Content
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listThreads = /* GraphQL */ `
  query ListThreads(
    $filter: ModelThreadsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listThreads(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ThreadTitles
        UserID
        Likes
        VideoURL
        Description
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChanllenges = /* GraphQL */ `
  query GetChanllenges($id: ID!) {
    getChanllenges(id: $id) {
      id
      ChallengeList
      EndTime
      RwardPoints
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listChanllenges = /* GraphQL */ `
  query ListChanllenges(
    $filter: ModelChanllengesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChanllenges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ChallengeList
        EndTime
        RwardPoints
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getFamilies = /* GraphQL */ `
  query GetFamilies($id: ID!) {
    getFamilies(id: $id) {
      id
      FamilyName
      Head
      Members
      Rewards {
        RewardName
        RewardCost
        __typename
      }
      ThreadsID
      OnChanllengesID
      EarnedPoints
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFamilies = /* GraphQL */ `
  query ListFamilies(
    $filter: ModelFamiliesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFamilies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        FamilyName
        Head
        Members
        ThreadsID
        OnChanllengesID
        EarnedPoints
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
