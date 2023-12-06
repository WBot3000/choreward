/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateThreads = /* GraphQL */ `
  subscription OnCreateThreads($filter: ModelSubscriptionThreadsFilterInput) {
    onCreateThreads(filter: $filter) {
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
export const onUpdateThreads = /* GraphQL */ `
  subscription OnUpdateThreads($filter: ModelSubscriptionThreadsFilterInput) {
    onUpdateThreads(filter: $filter) {
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
export const onDeleteThreads = /* GraphQL */ `
  subscription OnDeleteThreads($filter: ModelSubscriptionThreadsFilterInput) {
    onDeleteThreads(filter: $filter) {
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
export const onCreateRewards = /* GraphQL */ `
  subscription OnCreateRewards($filter: ModelSubscriptionRewardsFilterInput) {
    onCreateRewards(filter: $filter) {
      id
      RewardName
      RewardCost
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdateRewards = /* GraphQL */ `
  subscription OnUpdateRewards($filter: ModelSubscriptionRewardsFilterInput) {
    onUpdateRewards(filter: $filter) {
      id
      RewardName
      RewardCost
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeleteRewards = /* GraphQL */ `
  subscription OnDeleteRewards($filter: ModelSubscriptionRewardsFilterInput) {
    onDeleteRewards(filter: $filter) {
      id
      RewardName
      RewardCost
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
      Rewards
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
      Rewards
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
      Rewards
      ThreadsID
      OnChanllengesID
      EarnedPoints
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateComments = /* GraphQL */ `
  subscription OnCreateComments($filter: ModelSubscriptionCommentsFilterInput) {
    onCreateComments(filter: $filter) {
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
export const onUpdateComments = /* GraphQL */ `
  subscription OnUpdateComments($filter: ModelSubscriptionCommentsFilterInput) {
    onUpdateComments(filter: $filter) {
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
export const onDeleteComments = /* GraphQL */ `
  subscription OnDeleteComments($filter: ModelSubscriptionCommentsFilterInput) {
    onDeleteComments(filter: $filter) {
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
