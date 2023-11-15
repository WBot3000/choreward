/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateThreads = /* GraphQL */ `
  subscription OnCreateThreads($filter: ModelSubscriptionThreadsFilterInput) {
    onCreateThreads(filter: $filter) {
      id
      ThreadTitles
      ThreadTypes
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
export const onUpdateThreads = /* GraphQL */ `
  subscription OnUpdateThreads($filter: ModelSubscriptionThreadsFilterInput) {
    onUpdateThreads(filter: $filter) {
      id
      ThreadTitles
      ThreadTypes
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
export const onDeleteThreads = /* GraphQL */ `
  subscription OnDeleteThreads($filter: ModelSubscriptionThreadsFilterInput) {
    onDeleteThreads(filter: $filter) {
      id
      ThreadTitles
      ThreadTypes
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
export const onCreateChallenges = /* GraphQL */ `
  subscription OnCreateChallenges(
    $filter: ModelSubscriptionChallengesFilterInput
  ) {
    onCreateChallenges(filter: $filter) {
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
export const onUpdateChallenges = /* GraphQL */ `
  subscription OnUpdateChallenges(
    $filter: ModelSubscriptionChallengesFilterInput
  ) {
    onUpdateChallenges(filter: $filter) {
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
export const onDeleteChallenges = /* GraphQL */ `
  subscription OnDeleteChallenges(
    $filter: ModelSubscriptionChallengesFilterInput
  ) {
    onDeleteChallenges(filter: $filter) {
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
export const onCreateFamilies = /* GraphQL */ `
  subscription OnCreateFamilies($filter: ModelSubscriptionFamiliesFilterInput) {
    onCreateFamilies(filter: $filter) {
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
export const onUpdateFamilies = /* GraphQL */ `
  subscription OnUpdateFamilies($filter: ModelSubscriptionFamiliesFilterInput) {
    onUpdateFamilies(filter: $filter) {
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
export const onDeleteFamilies = /* GraphQL */ `
  subscription OnDeleteFamilies($filter: ModelSubscriptionFamiliesFilterInput) {
    onDeleteFamilies(filter: $filter) {
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
