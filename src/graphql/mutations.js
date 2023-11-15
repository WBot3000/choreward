/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createThreads = /* GraphQL */ `
  mutation CreateThreads(
    $input: CreateThreadsInput!
    $condition: ModelThreadsConditionInput
  ) {
    createThreads(input: $input, condition: $condition) {
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
export const updateThreads = /* GraphQL */ `
  mutation UpdateThreads(
    $input: UpdateThreadsInput!
    $condition: ModelThreadsConditionInput
  ) {
    updateThreads(input: $input, condition: $condition) {
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
export const deleteThreads = /* GraphQL */ `
  mutation DeleteThreads(
    $input: DeleteThreadsInput!
    $condition: ModelThreadsConditionInput
  ) {
    deleteThreads(input: $input, condition: $condition) {
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
export const createChallenges = /* GraphQL */ `
  mutation CreateChallenges(
    $input: CreateChallengesInput!
    $condition: ModelChallengesConditionInput
  ) {
    createChallenges(input: $input, condition: $condition) {
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
export const updateChallenges = /* GraphQL */ `
  mutation UpdateChallenges(
    $input: UpdateChallengesInput!
    $condition: ModelChallengesConditionInput
  ) {
    updateChallenges(input: $input, condition: $condition) {
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
export const deleteChallenges = /* GraphQL */ `
  mutation DeleteChallenges(
    $input: DeleteChallengesInput!
    $condition: ModelChallengesConditionInput
  ) {
    deleteChallenges(input: $input, condition: $condition) {
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
export const createFamilies = /* GraphQL */ `
  mutation CreateFamilies(
    $input: CreateFamiliesInput!
    $condition: ModelFamiliesConditionInput
  ) {
    createFamilies(input: $input, condition: $condition) {
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
export const updateFamilies = /* GraphQL */ `
  mutation UpdateFamilies(
    $input: UpdateFamiliesInput!
    $condition: ModelFamiliesConditionInput
  ) {
    updateFamilies(input: $input, condition: $condition) {
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
export const deleteFamilies = /* GraphQL */ `
  mutation DeleteFamilies(
    $input: DeleteFamiliesInput!
    $condition: ModelFamiliesConditionInput
  ) {
    deleteFamilies(input: $input, condition: $condition) {
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
