/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getThreads = /* GraphQL */ `
  query GetThreads($id: ID!) {
    getThreads(id: $id) {
      id
      ThreadTitles
      ThreadTypes
      UserID
      LikedUsers
      Likes
      VideoURL
      Description
      Comments
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
        ThreadTypes
        UserID
        LikedUsers
        Likes
        VideoURL
        Description
        Comments
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChallenges = /* GraphQL */ `
  query GetChallenges($id: ID!) {
    getChallenges(id: $id) {
      id
      ChallengeList
      Family1Name
      Family2Name
      EndTime
      RwardPoints
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listChallenges = /* GraphQL */ `
  query ListChallenges(
    $filter: ModelChallengesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChallenges(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        ChallengeList
        Family1Name
        Family2Name
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
export const getComments = /* GraphQL */ `
  query GetComments($id: ID!) {
    getComments(id: $id) {
      id
      Date
      UserID
      Content
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listComments = /* GraphQL */ `
  query ListComments(
    $filter: ModelCommentsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Date
        UserID
        Content
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
