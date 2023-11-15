/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateThreads = /* GraphQL */ `
  subscription OnCreateThreads($filter: ModelSubscriptionThreadsFilterInput) {
    onCreateThreads(filter: $filter) {
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
export const onUpdateThreads = /* GraphQL */ `
  subscription OnUpdateThreads($filter: ModelSubscriptionThreadsFilterInput) {
    onUpdateThreads(filter: $filter) {
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
export const onDeleteThreads = /* GraphQL */ `
  subscription OnDeleteThreads($filter: ModelSubscriptionThreadsFilterInput) {
    onDeleteThreads(filter: $filter) {
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
export const onCreateChanllenges = /* GraphQL */ `
  subscription OnCreateChanllenges(
    $filter: ModelSubscriptionChanllengesFilterInput
  ) {
    onCreateChanllenges(filter: $filter) {
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
export const onUpdateChanllenges = /* GraphQL */ `
  subscription OnUpdateChanllenges(
    $filter: ModelSubscriptionChanllengesFilterInput
  ) {
    onUpdateChanllenges(filter: $filter) {
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
export const onDeleteChanllenges = /* GraphQL */ `
  subscription OnDeleteChanllenges(
    $filter: ModelSubscriptionChanllengesFilterInput
  ) {
    onDeleteChanllenges(filter: $filter) {
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
