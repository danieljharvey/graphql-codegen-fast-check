import * as fc from "fast-check";
export const getArbitraryQuery = (): fc.Arbitrary<any> =>
  fc.record({
    codeOfConduct: getArbitraryCodeOfConduct(),
    codesOfConduct: fc.array(getArbitraryCodeOfConduct()),
    enterprise: getArbitraryEnterprise(),
    enterpriseAdministratorInvitation: getArbitraryEnterpriseAdministratorInvitation(),
    enterpriseAdministratorInvitationByToken: getArbitraryEnterpriseAdministratorInvitation(),
    license: getArbitraryLicense(),
    licenses: fc.array(getArbitraryLicense()),
    marketplaceCategories: fc.array(getArbitraryMarketplaceCategory()),
    marketplaceCategory: getArbitraryMarketplaceCategory(),
    marketplaceListing: getArbitraryMarketplaceListing(),
    marketplaceListings: getArbitraryMarketplaceListingConnection(),
    meta: getArbitraryGitHubMetadata(),
    node: getArbitraryNode(),
    nodes: fc.array(getArbitraryNode()),
    organization: getArbitraryOrganization(),
    rateLimit: getArbitraryRateLimit(),
    relay: getArbitraryQuery(),
    repository: getArbitraryRepository(),
    repositoryOwner: getArbitraryRepositoryOwner(),
    resource: getArbitraryUniformResourceLocatable(),
    search: getArbitrarySearchResultItemConnection(),
    securityAdvisories: getArbitrarySecurityAdvisoryConnection(),
    securityAdvisory: getArbitrarySecurityAdvisory(),
    securityVulnerabilities: getArbitrarySecurityVulnerabilityConnection(),
    sponsorsListing: getArbitrarySponsorsListing(),
    topic: getArbitraryTopic(),
    user: getArbitraryUser(),
    viewer: getArbitraryUser(),
  });

export const getArbitraryString = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryCodeOfConduct = (): fc.Arbitrary<any> =>
  fc.record({
    body: getArbitraryString(),
    id: getArbitraryID(),
    key: getArbitraryString(),
    name: getArbitraryString(),
    resourcePath: getArbitraryURI(),
    url: getArbitraryURI(),
  });

export const getArbitraryNode = (): fc.Arbitrary<any> =>
  fc.record({ id: getArbitraryID() });

export const getArbitraryID = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryURI = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryEnterprise = (): fc.Arbitrary<any> =>
  fc.record({
    avatarUrl: getArbitraryURI(),
    billingInfo: getArbitraryEnterpriseBillingInfo(),
    createdAt: getArbitraryDateTime(),
    databaseId: getArbitraryInt(),
    description: getArbitraryString(),
    descriptionHTML: getArbitraryHTML(),
    id: getArbitraryID(),
    location: getArbitraryString(),
    members: getArbitraryEnterpriseMemberConnection(),
    name: getArbitraryString(),
    organizations: getArbitraryOrganizationConnection(),
    ownerInfo: getArbitraryEnterpriseOwnerInfo(),
    resourcePath: getArbitraryURI(),
    slug: getArbitraryString(),
    url: getArbitraryURI(),
    userAccounts: getArbitraryEnterpriseUserAccountConnection(),
    viewerIsAdmin: getArbitraryBoolean(),
    websiteUrl: getArbitraryURI(),
  });

export const getArbitraryInt = (): fc.Arbitrary<any> => fc.integer();

export const getArbitraryEnterpriseBillingInfo = (): fc.Arbitrary<any> =>
  fc.record({
    allLicensableUsersCount: getArbitraryInt(),
    assetPacks: getArbitraryInt(),
    availableSeats: getArbitraryInt(),
    bandwidthQuota: getArbitraryFloat(),
    bandwidthUsage: getArbitraryFloat(),
    bandwidthUsagePercentage: getArbitraryInt(),
    seats: getArbitraryInt(),
    storageQuota: getArbitraryFloat(),
    storageUsage: getArbitraryFloat(),
    storageUsagePercentage: getArbitraryInt(),
    totalAvailableLicenses: getArbitraryInt(),
    totalLicenses: getArbitraryInt(),
  });

export const getArbitraryFloat = (): fc.Arbitrary<any> => fc.float();

export const getArbitraryDateTime = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryHTML = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryEnterpriseUserDeployment = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("CLOUD"), fc.constant("SERVER"));

export const getArbitraryEnterpriseMemberOrder = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryOrderDirection = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("ASC"), fc.constant("DESC"));

export const getArbitraryEnterpriseMemberOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("CREATED_AT"), fc.constant("LOGIN"));

export const getArbitraryEnterpriseUserAccountMembershipRole = (): fc.Arbitrary<
  any
> => fc.oneof(fc.constant("MEMBER"), fc.constant("OWNER"));

export const getArbitraryEnterpriseMemberConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryEnterpriseMemberEdge()),
    nodes: fc.array(getArbitraryEnterpriseMember()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryEnterpriseMemberEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    isUnlicensed: getArbitraryBoolean(),
    node: getArbitraryEnterpriseMember(),
  });

export const getArbitraryBoolean = (): fc.Arbitrary<any> => fc.boolean();

export const getArbitraryEnterpriseMember = (): fc.Arbitrary<any> =>
  fc.oneof(getArbitraryEnterpriseUserAccount(), getArbitraryUser());

export const getArbitraryEnterpriseUserAccount = (): fc.Arbitrary<any> =>
  fc.record({
    avatarUrl: getArbitraryURI(),
    createdAt: getArbitraryDateTime(),
    enterprise: getArbitraryEnterprise(),
    id: getArbitraryID(),
    login: getArbitraryString(),
    name: getArbitraryString(),
    organizations: getArbitraryEnterpriseOrganizationMembershipConnection(),
    resourcePath: getArbitraryURI(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
    user: getArbitraryUser(),
  });

export const getArbitraryActor = (): fc.Arbitrary<any> =>
  fc.record({
    avatarUrl: getArbitraryURI(),
    login: getArbitraryString(),
    resourcePath: getArbitraryURI(),
    url: getArbitraryURI(),
  });

export const getArbitraryOrganizationOrder = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryOrganizationOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("CREATED_AT"), fc.constant("LOGIN"));

export const getArbitraryEnterpriseOrganizationMembershipConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryEnterpriseOrganizationMembershipEdge()),
    nodes: fc.array(getArbitraryOrganization()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryEnterpriseOrganizationMembershipEdge = (): fc.Arbitrary<
  any
> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryOrganization(),
    role: getArbitraryEnterpriseUserAccountMembershipRole(),
  });

export const getArbitraryOrganization = (): fc.Arbitrary<any> =>
  fc.record({
    anyPinnableItems: getArbitraryBoolean(),
    auditLog: getArbitraryOrganizationAuditEntryConnection(),
    avatarUrl: getArbitraryURI(),
    createdAt: getArbitraryDateTime(),
    databaseId: getArbitraryInt(),
    description: getArbitraryString(),
    descriptionHTML: getArbitraryString(),
    email: getArbitraryString(),
    id: getArbitraryID(),
    isVerified: getArbitraryBoolean(),
    itemShowcase: getArbitraryProfileItemShowcase(),
    location: getArbitraryString(),
    login: getArbitraryString(),
    memberStatuses: getArbitraryUserStatusConnection(),
    membersWithRole: getArbitraryOrganizationMemberConnection(),
    name: getArbitraryString(),
    newTeamResourcePath: getArbitraryURI(),
    newTeamUrl: getArbitraryURI(),
    organizationBillingEmail: getArbitraryString(),
    pendingMembers: getArbitraryUserConnection(),
    pinnableItems: getArbitraryPinnableItemConnection(),
    pinnedItems: getArbitraryPinnableItemConnection(),
    pinnedItemsRemaining: getArbitraryInt(),
    pinnedRepositories: getArbitraryRepositoryConnection(),
    project: getArbitraryProject(),
    projects: getArbitraryProjectConnection(),
    projectsResourcePath: getArbitraryURI(),
    projectsUrl: getArbitraryURI(),
    registryPackages: getArbitraryRegistryPackageConnection(),
    registryPackagesForQuery: getArbitraryRegistryPackageConnection(),
    repositories: getArbitraryRepositoryConnection(),
    repository: getArbitraryRepository(),
    requiresTwoFactorAuthentication: getArbitraryBoolean(),
    resourcePath: getArbitraryURI(),
    samlIdentityProvider: getArbitraryOrganizationIdentityProvider(),
    sponsorsListing: getArbitrarySponsorsListing(),
    sponsorshipsAsMaintainer: getArbitrarySponsorshipConnection(),
    sponsorshipsAsSponsor: getArbitrarySponsorshipConnection(),
    team: getArbitraryTeam(),
    teams: getArbitraryTeamConnection(),
    teamsResourcePath: getArbitraryURI(),
    teamsUrl: getArbitraryURI(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
    viewerCanAdminister: getArbitraryBoolean(),
    viewerCanChangePinnedItems: getArbitraryBoolean(),
    viewerCanCreateProjects: getArbitraryBoolean(),
    viewerCanCreateRepositories: getArbitraryBoolean(),
    viewerCanCreateTeams: getArbitraryBoolean(),
    viewerIsAMember: getArbitraryBoolean(),
    websiteUrl: getArbitraryURI(),
  });

export const getArbitraryMemberStatusable = (): fc.Arbitrary<any> =>
  fc.record({ memberStatuses: getArbitraryUserStatusConnection() });

export const getArbitraryUserStatusOrder = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryUserStatusOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("UPDATED_AT"));

export const getArbitraryUserStatusConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryUserStatusEdge()),
    nodes: fc.array(getArbitraryUserStatus()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryUserStatusEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryUserStatus() });

export const getArbitraryUserStatus = (): fc.Arbitrary<any> =>
  fc.record({
    createdAt: getArbitraryDateTime(),
    emoji: getArbitraryString(),
    emojiHTML: getArbitraryHTML(),
    expiresAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    indicatesLimitedAvailability: getArbitraryBoolean(),
    message: getArbitraryString(),
    organization: getArbitraryOrganization(),
    updatedAt: getArbitraryDateTime(),
    user: getArbitraryUser(),
  });

export const getArbitraryUser = (): fc.Arbitrary<any> =>
  fc.record({
    anyPinnableItems: getArbitraryBoolean(),
    avatarUrl: getArbitraryURI(),
    bio: getArbitraryString(),
    bioHTML: getArbitraryHTML(),
    commitComments: getArbitraryCommitCommentConnection(),
    company: getArbitraryString(),
    companyHTML: getArbitraryHTML(),
    contributionsCollection: getArbitraryContributionsCollection(),
    createdAt: getArbitraryDateTime(),
    databaseId: getArbitraryInt(),
    email: getArbitraryString(),
    followers: getArbitraryFollowerConnection(),
    following: getArbitraryFollowingConnection(),
    gist: getArbitraryGist(),
    gistComments: getArbitraryGistCommentConnection(),
    gists: getArbitraryGistConnection(),
    hovercard: getArbitraryHovercard(),
    id: getArbitraryID(),
    isBountyHunter: getArbitraryBoolean(),
    isCampusExpert: getArbitraryBoolean(),
    isDeveloperProgramMember: getArbitraryBoolean(),
    isEmployee: getArbitraryBoolean(),
    isHireable: getArbitraryBoolean(),
    isSiteAdmin: getArbitraryBoolean(),
    isViewer: getArbitraryBoolean(),
    issueComments: getArbitraryIssueCommentConnection(),
    issues: getArbitraryIssueConnection(),
    itemShowcase: getArbitraryProfileItemShowcase(),
    location: getArbitraryString(),
    login: getArbitraryString(),
    name: getArbitraryString(),
    organization: getArbitraryOrganization(),
    organizations: getArbitraryOrganizationConnection(),
    pinnableItems: getArbitraryPinnableItemConnection(),
    pinnedItems: getArbitraryPinnableItemConnection(),
    pinnedItemsRemaining: getArbitraryInt(),
    pinnedRepositories: getArbitraryRepositoryConnection(),
    project: getArbitraryProject(),
    projects: getArbitraryProjectConnection(),
    projectsResourcePath: getArbitraryURI(),
    projectsUrl: getArbitraryURI(),
    publicKeys: getArbitraryPublicKeyConnection(),
    pullRequests: getArbitraryPullRequestConnection(),
    registryPackages: getArbitraryRegistryPackageConnection(),
    registryPackagesForQuery: getArbitraryRegistryPackageConnection(),
    repositories: getArbitraryRepositoryConnection(),
    repositoriesContributedTo: getArbitraryRepositoryConnection(),
    repository: getArbitraryRepository(),
    resourcePath: getArbitraryURI(),
    savedReplies: getArbitrarySavedReplyConnection(),
    sponsorsListing: getArbitrarySponsorsListing(),
    sponsorshipsAsMaintainer: getArbitrarySponsorshipConnection(),
    sponsorshipsAsSponsor: getArbitrarySponsorshipConnection(),
    starredRepositories: getArbitraryStarredRepositoryConnection(),
    status: getArbitraryUserStatus(),
    topRepositories: getArbitraryRepositoryConnection(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
    viewerCanChangePinnedItems: getArbitraryBoolean(),
    viewerCanCreateProjects: getArbitraryBoolean(),
    viewerCanFollow: getArbitraryBoolean(),
    viewerIsFollowing: getArbitraryBoolean(),
    watching: getArbitraryRepositoryConnection(),
    websiteUrl: getArbitraryURI(),
  });

export const getArbitraryProfileOwner = (): fc.Arbitrary<any> =>
  fc.record({
    anyPinnableItems: getArbitraryBoolean(),
    email: getArbitraryString(),
    id: getArbitraryID(),
    itemShowcase: getArbitraryProfileItemShowcase(),
    location: getArbitraryString(),
    login: getArbitraryString(),
    name: getArbitraryString(),
    pinnableItems: getArbitraryPinnableItemConnection(),
    pinnedItems: getArbitraryPinnableItemConnection(),
    pinnedItemsRemaining: getArbitraryInt(),
    viewerCanChangePinnedItems: getArbitraryBoolean(),
    websiteUrl: getArbitraryURI(),
  });

export const getArbitraryPinnableItemType = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("GIST"),
    fc.constant("ISSUE"),
    fc.constant("ORGANIZATION"),
    fc.constant("PROJECT"),
    fc.constant("PULL_REQUEST"),
    fc.constant("REPOSITORY"),
    fc.constant("TEAM"),
    fc.constant("USER")
  );

export const getArbitraryProfileItemShowcase = (): fc.Arbitrary<any> =>
  fc.record({
    hasPinnedItems: getArbitraryBoolean(),
    items: getArbitraryPinnableItemConnection(),
  });

export const getArbitraryPinnableItemConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryPinnableItemEdge()),
    nodes: fc.array(getArbitraryPinnableItem()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryPinnableItemEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryPinnableItem() });

export const getArbitraryPinnableItem = (): fc.Arbitrary<any> =>
  fc.oneof(getArbitraryGist(), getArbitraryRepository());

export const getArbitraryGist = (): fc.Arbitrary<any> =>
  fc.record({
    comments: getArbitraryGistCommentConnection(),
    createdAt: getArbitraryDateTime(),
    description: getArbitraryString(),
    files: fc.array(getArbitraryGistFile()),
    forks: getArbitraryGistConnection(),
    id: getArbitraryID(),
    isFork: getArbitraryBoolean(),
    isPublic: getArbitraryBoolean(),
    name: getArbitraryString(),
    owner: getArbitraryRepositoryOwner(),
    pushedAt: getArbitraryDateTime(),
    resourcePath: getArbitraryURI(),
    stargazers: getArbitraryStargazerConnection(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
    viewerHasStarred: getArbitraryBoolean(),
  });

export const getArbitraryStarrable = (): fc.Arbitrary<any> =>
  fc.record({
    id: getArbitraryID(),
    stargazers: getArbitraryStargazerConnection(),
    viewerHasStarred: getArbitraryBoolean(),
  });

export const getArbitraryStarOrder = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryStarOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("STARRED_AT"));

export const getArbitraryStargazerConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryStargazerEdge()),
    nodes: fc.array(getArbitraryUser()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryStargazerEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryUser(),
    starredAt: getArbitraryDateTime(),
  });

export const getArbitraryPageInfo = (): fc.Arbitrary<any> =>
  fc.record({
    endCursor: getArbitraryString(),
    hasNextPage: getArbitraryBoolean(),
    hasPreviousPage: getArbitraryBoolean(),
    startCursor: getArbitraryString(),
  });

export const getArbitraryUniformResourceLocatable = (): fc.Arbitrary<any> =>
  fc.record({ resourcePath: getArbitraryURI(), url: getArbitraryURI() });

export const getArbitraryGistCommentConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryGistCommentEdge()),
    nodes: fc.array(getArbitraryGistComment()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryGistCommentEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryGistComment() });

export const getArbitraryGistComment = (): fc.Arbitrary<any> =>
  fc.record({
    author: getArbitraryActor(),
    authorAssociation: getArbitraryCommentAuthorAssociation(),
    body: getArbitraryString(),
    bodyHTML: getArbitraryHTML(),
    bodyText: getArbitraryString(),
    createdAt: getArbitraryDateTime(),
    createdViaEmail: getArbitraryBoolean(),
    databaseId: getArbitraryInt(),
    editor: getArbitraryActor(),
    gist: getArbitraryGist(),
    id: getArbitraryID(),
    includesCreatedEdit: getArbitraryBoolean(),
    isMinimized: getArbitraryBoolean(),
    lastEditedAt: getArbitraryDateTime(),
    minimizedReason: getArbitraryString(),
    publishedAt: getArbitraryDateTime(),
    updatedAt: getArbitraryDateTime(),
    userContentEdits: getArbitraryUserContentEditConnection(),
    viewerCanDelete: getArbitraryBoolean(),
    viewerCanMinimize: getArbitraryBoolean(),
    viewerCanUpdate: getArbitraryBoolean(),
    viewerCannotUpdateReasons: fc.array(
      getArbitraryCommentCannotUpdateReason()
    ),
    viewerDidAuthor: getArbitraryBoolean(),
  });

export const getArbitraryComment = (): fc.Arbitrary<any> =>
  fc.record({
    author: getArbitraryActor(),
    authorAssociation: getArbitraryCommentAuthorAssociation(),
    body: getArbitraryString(),
    bodyHTML: getArbitraryHTML(),
    bodyText: getArbitraryString(),
    createdAt: getArbitraryDateTime(),
    createdViaEmail: getArbitraryBoolean(),
    editor: getArbitraryActor(),
    id: getArbitraryID(),
    includesCreatedEdit: getArbitraryBoolean(),
    lastEditedAt: getArbitraryDateTime(),
    publishedAt: getArbitraryDateTime(),
    updatedAt: getArbitraryDateTime(),
    userContentEdits: getArbitraryUserContentEditConnection(),
    viewerDidAuthor: getArbitraryBoolean(),
  });

export const getArbitraryCommentAuthorAssociation = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("COLLABORATOR"),
    fc.constant("CONTRIBUTOR"),
    fc.constant("FIRST_TIMER"),
    fc.constant("FIRST_TIME_CONTRIBUTOR"),
    fc.constant("MEMBER"),
    fc.constant("NONE"),
    fc.constant("OWNER")
  );

export const getArbitraryUserContentEditConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryUserContentEditEdge()),
    nodes: fc.array(getArbitraryUserContentEdit()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryUserContentEditEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryUserContentEdit(),
  });

export const getArbitraryUserContentEdit = (): fc.Arbitrary<any> =>
  fc.record({
    createdAt: getArbitraryDateTime(),
    deletedAt: getArbitraryDateTime(),
    deletedBy: getArbitraryActor(),
    diff: getArbitraryString(),
    editedAt: getArbitraryDateTime(),
    editor: getArbitraryActor(),
    id: getArbitraryID(),
    updatedAt: getArbitraryDateTime(),
  });

export const getArbitraryDeletable = (): fc.Arbitrary<any> =>
  fc.record({ viewerCanDelete: getArbitraryBoolean() });

export const getArbitraryMinimizable = (): fc.Arbitrary<any> =>
  fc.record({
    isMinimized: getArbitraryBoolean(),
    minimizedReason: getArbitraryString(),
    viewerCanMinimize: getArbitraryBoolean(),
  });

export const getArbitraryUpdatable = (): fc.Arbitrary<any> =>
  fc.record({ viewerCanUpdate: getArbitraryBoolean() });

export const getArbitraryUpdatableComment = (): fc.Arbitrary<any> =>
  fc.record({
    viewerCannotUpdateReasons: fc.array(
      getArbitraryCommentCannotUpdateReason()
    ),
  });

export const getArbitraryCommentCannotUpdateReason = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("ARCHIVED"),
    fc.constant("DENIED"),
    fc.constant("INSUFFICIENT_ACCESS"),
    fc.constant("LOCKED"),
    fc.constant("LOGIN_REQUIRED"),
    fc.constant("MAINTENANCE"),
    fc.constant("VERIFIED_EMAIL_REQUIRED")
  );

export const getArbitraryGitObjectID = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryGistFile = (): fc.Arbitrary<any> =>
  fc.record({
    encodedName: getArbitraryString(),
    encoding: getArbitraryString(),
    extension: getArbitraryString(),
    isImage: getArbitraryBoolean(),
    isTruncated: getArbitraryBoolean(),
    language: getArbitraryLanguage(),
    name: getArbitraryString(),
    size: getArbitraryInt(),
    text: getArbitraryString(),
  });

export const getArbitraryLanguage = (): fc.Arbitrary<any> =>
  fc.record({
    color: getArbitraryString(),
    id: getArbitraryID(),
    name: getArbitraryString(),
  });

export const getArbitraryGistOrder = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryGistOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("CREATED_AT"),
    fc.constant("PUSHED_AT"),
    fc.constant("UPDATED_AT")
  );

export const getArbitraryGistConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryGistEdge()),
    nodes: fc.array(getArbitraryGist()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryGistEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryGist() });

export const getArbitraryRepositoryOwner = (): fc.Arbitrary<any> =>
  fc.record({
    avatarUrl: getArbitraryURI(),
    id: getArbitraryID(),
    login: getArbitraryString(),
    pinnedRepositories: getArbitraryRepositoryConnection(),
    repositories: getArbitraryRepositoryConnection(),
    repository: getArbitraryRepository(),
    resourcePath: getArbitraryURI(),
    url: getArbitraryURI(),
  });

export const getArbitraryRepositoryAffiliation = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("COLLABORATOR"),
    fc.constant("ORGANIZATION_MEMBER"),
    fc.constant("OWNER")
  );

export const getArbitraryRepositoryOrder = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryRepositoryOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("CREATED_AT"),
    fc.constant("NAME"),
    fc.constant("PUSHED_AT"),
    fc.constant("STARGAZERS"),
    fc.constant("UPDATED_AT")
  );

export const getArbitraryRepositoryPrivacy = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("PRIVATE"), fc.constant("PUBLIC"));

export const getArbitraryRepositoryConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryRepositoryEdge()),
    nodes: fc.array(getArbitraryRepository()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
    totalDiskUsage: getArbitraryInt(),
  });

export const getArbitraryRepositoryEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryRepository() });

export const getArbitraryRepository = (): fc.Arbitrary<any> =>
  fc.record({
    assignableUsers: getArbitraryUserConnection(),
    branchProtectionRules: getArbitraryBranchProtectionRuleConnection(),
    codeOfConduct: getArbitraryCodeOfConduct(),
    collaborators: getArbitraryRepositoryCollaboratorConnection(),
    commitComments: getArbitraryCommitCommentConnection(),
    createdAt: getArbitraryDateTime(),
    databaseId: getArbitraryInt(),
    defaultBranchRef: getArbitraryRef(),
    deleteBranchOnMerge: getArbitraryBoolean(),
    deployKeys: getArbitraryDeployKeyConnection(),
    deployments: getArbitraryDeploymentConnection(),
    description: getArbitraryString(),
    descriptionHTML: getArbitraryHTML(),
    diskUsage: getArbitraryInt(),
    forkCount: getArbitraryInt(),
    forks: getArbitraryRepositoryConnection(),
    fundingLinks: fc.array(getArbitraryFundingLink()),
    hasIssuesEnabled: getArbitraryBoolean(),
    hasProjectsEnabled: getArbitraryBoolean(),
    hasWikiEnabled: getArbitraryBoolean(),
    homepageUrl: getArbitraryURI(),
    id: getArbitraryID(),
    isArchived: getArbitraryBoolean(),
    isDisabled: getArbitraryBoolean(),
    isFork: getArbitraryBoolean(),
    isLocked: getArbitraryBoolean(),
    isMirror: getArbitraryBoolean(),
    isPrivate: getArbitraryBoolean(),
    isTemplate: getArbitraryBoolean(),
    issue: getArbitraryIssue(),
    issueOrPullRequest: getArbitraryIssueOrPullRequest(),
    issues: getArbitraryIssueConnection(),
    label: getArbitraryLabel(),
    labels: getArbitraryLabelConnection(),
    languages: getArbitraryLanguageConnection(),
    licenseInfo: getArbitraryLicense(),
    lockReason: getArbitraryRepositoryLockReason(),
    mentionableUsers: getArbitraryUserConnection(),
    mergeCommitAllowed: getArbitraryBoolean(),
    milestone: getArbitraryMilestone(),
    milestones: getArbitraryMilestoneConnection(),
    mirrorUrl: getArbitraryURI(),
    name: getArbitraryString(),
    nameWithOwner: getArbitraryString(),
    object: getArbitraryGitObject(),
    openGraphImageUrl: getArbitraryURI(),
    owner: getArbitraryRepositoryOwner(),
    parent: getArbitraryRepository(),
    primaryLanguage: getArbitraryLanguage(),
    project: getArbitraryProject(),
    projects: getArbitraryProjectConnection(),
    projectsResourcePath: getArbitraryURI(),
    projectsUrl: getArbitraryURI(),
    pullRequest: getArbitraryPullRequest(),
    pullRequests: getArbitraryPullRequestConnection(),
    pushedAt: getArbitraryDateTime(),
    rebaseMergeAllowed: getArbitraryBoolean(),
    ref: getArbitraryRef(),
    refs: getArbitraryRefConnection(),
    registryPackages: getArbitraryRegistryPackageConnection(),
    registryPackagesForQuery: getArbitraryRegistryPackageConnection(),
    release: getArbitraryRelease(),
    releases: getArbitraryReleaseConnection(),
    repositoryTopics: getArbitraryRepositoryTopicConnection(),
    resourcePath: getArbitraryURI(),
    shortDescriptionHTML: getArbitraryHTML(),
    squashMergeAllowed: getArbitraryBoolean(),
    sshUrl: getArbitraryGitSSHRemote(),
    stargazers: getArbitraryStargazerConnection(),
    submodules: getArbitrarySubmoduleConnection(),
    tempCloneToken: getArbitraryString(),
    templateRepository: getArbitraryRepository(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
    usesCustomOpenGraphImage: getArbitraryBoolean(),
    viewerCanAdminister: getArbitraryBoolean(),
    viewerCanCreateProjects: getArbitraryBoolean(),
    viewerCanSubscribe: getArbitraryBoolean(),
    viewerCanUpdateTopics: getArbitraryBoolean(),
    viewerHasStarred: getArbitraryBoolean(),
    viewerPermission: getArbitraryRepositoryPermission(),
    viewerSubscription: getArbitrarySubscriptionState(),
    vulnerabilityAlerts: getArbitraryRepositoryVulnerabilityAlertConnection(),
    watchers: getArbitraryUserConnection(),
  });

export const getArbitraryProjectOwner = (): fc.Arbitrary<any> =>
  fc.record({
    id: getArbitraryID(),
    project: getArbitraryProject(),
    projects: getArbitraryProjectConnection(),
    projectsResourcePath: getArbitraryURI(),
    projectsUrl: getArbitraryURI(),
    viewerCanCreateProjects: getArbitraryBoolean(),
  });

export const getArbitraryProject = (): fc.Arbitrary<any> =>
  fc.record({
    body: getArbitraryString(),
    bodyHTML: getArbitraryHTML(),
    closed: getArbitraryBoolean(),
    closedAt: getArbitraryDateTime(),
    columns: getArbitraryProjectColumnConnection(),
    createdAt: getArbitraryDateTime(),
    creator: getArbitraryActor(),
    databaseId: getArbitraryInt(),
    id: getArbitraryID(),
    name: getArbitraryString(),
    number: getArbitraryInt(),
    owner: getArbitraryProjectOwner(),
    pendingCards: getArbitraryProjectCardConnection(),
    resourcePath: getArbitraryURI(),
    state: getArbitraryProjectState(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
    viewerCanUpdate: getArbitraryBoolean(),
  });

export const getArbitraryClosable = (): fc.Arbitrary<any> =>
  fc.record({
    closed: getArbitraryBoolean(),
    closedAt: getArbitraryDateTime(),
  });

export const getArbitraryProjectColumnConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryProjectColumnEdge()),
    nodes: fc.array(getArbitraryProjectColumn()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryProjectColumnEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryProjectColumn(),
  });

export const getArbitraryProjectColumn = (): fc.Arbitrary<any> =>
  fc.record({
    cards: getArbitraryProjectCardConnection(),
    createdAt: getArbitraryDateTime(),
    databaseId: getArbitraryInt(),
    id: getArbitraryID(),
    name: getArbitraryString(),
    project: getArbitraryProject(),
    purpose: getArbitraryProjectColumnPurpose(),
    resourcePath: getArbitraryURI(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
  });

export const getArbitraryProjectCardArchivedState = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("ARCHIVED"), fc.constant("NOT_ARCHIVED"));

export const getArbitraryProjectCardConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryProjectCardEdge()),
    nodes: fc.array(getArbitraryProjectCard()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryProjectCardEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryProjectCard() });

export const getArbitraryProjectCard = (): fc.Arbitrary<any> =>
  fc.record({
    column: getArbitraryProjectColumn(),
    content: getArbitraryProjectCardItem(),
    createdAt: getArbitraryDateTime(),
    creator: getArbitraryActor(),
    databaseId: getArbitraryInt(),
    id: getArbitraryID(),
    isArchived: getArbitraryBoolean(),
    note: getArbitraryString(),
    project: getArbitraryProject(),
    resourcePath: getArbitraryURI(),
    state: getArbitraryProjectCardState(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
  });

export const getArbitraryProjectCardItem = (): fc.Arbitrary<any> =>
  fc.oneof(getArbitraryIssue(), getArbitraryPullRequest());

export const getArbitraryIssue = (): fc.Arbitrary<any> =>
  fc.record({
    activeLockReason: getArbitraryLockReason(),
    assignees: getArbitraryUserConnection(),
    author: getArbitraryActor(),
    authorAssociation: getArbitraryCommentAuthorAssociation(),
    body: getArbitraryString(),
    bodyHTML: getArbitraryHTML(),
    bodyText: getArbitraryString(),
    closed: getArbitraryBoolean(),
    closedAt: getArbitraryDateTime(),
    comments: getArbitraryIssueCommentConnection(),
    createdAt: getArbitraryDateTime(),
    createdViaEmail: getArbitraryBoolean(),
    databaseId: getArbitraryInt(),
    editor: getArbitraryActor(),
    hovercard: getArbitraryHovercard(),
    id: getArbitraryID(),
    includesCreatedEdit: getArbitraryBoolean(),
    labels: getArbitraryLabelConnection(),
    lastEditedAt: getArbitraryDateTime(),
    locked: getArbitraryBoolean(),
    milestone: getArbitraryMilestone(),
    number: getArbitraryInt(),
    participants: getArbitraryUserConnection(),
    projectCards: getArbitraryProjectCardConnection(),
    publishedAt: getArbitraryDateTime(),
    reactionGroups: fc.array(getArbitraryReactionGroup()),
    reactions: getArbitraryReactionConnection(),
    repository: getArbitraryRepository(),
    resourcePath: getArbitraryURI(),
    state: getArbitraryIssueState(),
    timeline: getArbitraryIssueTimelineConnection(),
    timelineItems: getArbitraryIssueTimelineItemsConnection(),
    title: getArbitraryString(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
    userContentEdits: getArbitraryUserContentEditConnection(),
    viewerCanReact: getArbitraryBoolean(),
    viewerCanSubscribe: getArbitraryBoolean(),
    viewerCanUpdate: getArbitraryBoolean(),
    viewerCannotUpdateReasons: fc.array(
      getArbitraryCommentCannotUpdateReason()
    ),
    viewerDidAuthor: getArbitraryBoolean(),
    viewerSubscription: getArbitrarySubscriptionState(),
  });

export const getArbitraryAssignable = (): fc.Arbitrary<any> =>
  fc.record({ assignees: getArbitraryUserConnection() });

export const getArbitraryUserConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryUserEdge()),
    nodes: fc.array(getArbitraryUser()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryUserEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryUser() });

export const getArbitraryLabelable = (): fc.Arbitrary<any> =>
  fc.record({ labels: getArbitraryLabelConnection() });

export const getArbitraryLabelOrder = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryLabelOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("CREATED_AT"), fc.constant("NAME"));

export const getArbitraryLabelConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryLabelEdge()),
    nodes: fc.array(getArbitraryLabel()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryLabelEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryLabel() });

export const getArbitraryLabel = (): fc.Arbitrary<any> =>
  fc.record({
    color: getArbitraryString(),
    createdAt: getArbitraryDateTime(),
    description: getArbitraryString(),
    id: getArbitraryID(),
    isDefault: getArbitraryBoolean(),
    issues: getArbitraryIssueConnection(),
    name: getArbitraryString(),
    pullRequests: getArbitraryPullRequestConnection(),
    repository: getArbitraryRepository(),
    resourcePath: getArbitraryURI(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
  });

export const getArbitraryIssueFilters = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryIssueState = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("CLOSED"), fc.constant("OPEN"));

export const getArbitraryIssueOrder = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryIssueOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("COMMENTS"),
    fc.constant("CREATED_AT"),
    fc.constant("UPDATED_AT")
  );

export const getArbitraryIssueConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryIssueEdge()),
    nodes: fc.array(getArbitraryIssue()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryIssueEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryIssue() });

export const getArbitraryPullRequestState = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("CLOSED"), fc.constant("MERGED"), fc.constant("OPEN"));

export const getArbitraryPullRequestConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryPullRequestEdge()),
    nodes: fc.array(getArbitraryPullRequest()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryPullRequestEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryPullRequest() });

export const getArbitraryPullRequest = (): fc.Arbitrary<any> =>
  fc.record({
    activeLockReason: getArbitraryLockReason(),
    additions: getArbitraryInt(),
    assignees: getArbitraryUserConnection(),
    author: getArbitraryActor(),
    authorAssociation: getArbitraryCommentAuthorAssociation(),
    baseRef: getArbitraryRef(),
    baseRefName: getArbitraryString(),
    baseRefOid: getArbitraryGitObjectID(),
    baseRepository: getArbitraryRepository(),
    body: getArbitraryString(),
    bodyHTML: getArbitraryHTML(),
    bodyText: getArbitraryString(),
    changedFiles: getArbitraryInt(),
    checksResourcePath: getArbitraryURI(),
    checksUrl: getArbitraryURI(),
    closed: getArbitraryBoolean(),
    closedAt: getArbitraryDateTime(),
    comments: getArbitraryIssueCommentConnection(),
    commits: getArbitraryPullRequestCommitConnection(),
    createdAt: getArbitraryDateTime(),
    createdViaEmail: getArbitraryBoolean(),
    databaseId: getArbitraryInt(),
    deletions: getArbitraryInt(),
    editor: getArbitraryActor(),
    files: getArbitraryPullRequestChangedFileConnection(),
    headRef: getArbitraryRef(),
    headRefName: getArbitraryString(),
    headRefOid: getArbitraryGitObjectID(),
    headRepository: getArbitraryRepository(),
    headRepositoryOwner: getArbitraryRepositoryOwner(),
    hovercard: getArbitraryHovercard(),
    id: getArbitraryID(),
    includesCreatedEdit: getArbitraryBoolean(),
    isCrossRepository: getArbitraryBoolean(),
    isDraft: getArbitraryBoolean(),
    labels: getArbitraryLabelConnection(),
    lastEditedAt: getArbitraryDateTime(),
    locked: getArbitraryBoolean(),
    maintainerCanModify: getArbitraryBoolean(),
    mergeCommit: getArbitraryCommit(),
    mergeable: getArbitraryMergeableState(),
    merged: getArbitraryBoolean(),
    mergedAt: getArbitraryDateTime(),
    mergedBy: getArbitraryActor(),
    milestone: getArbitraryMilestone(),
    number: getArbitraryInt(),
    participants: getArbitraryUserConnection(),
    permalink: getArbitraryURI(),
    potentialMergeCommit: getArbitraryCommit(),
    projectCards: getArbitraryProjectCardConnection(),
    publishedAt: getArbitraryDateTime(),
    reactionGroups: fc.array(getArbitraryReactionGroup()),
    reactions: getArbitraryReactionConnection(),
    repository: getArbitraryRepository(),
    resourcePath: getArbitraryURI(),
    revertResourcePath: getArbitraryURI(),
    revertUrl: getArbitraryURI(),
    reviewDecision: getArbitraryPullRequestReviewDecision(),
    reviewRequests: getArbitraryReviewRequestConnection(),
    reviewThreads: getArbitraryPullRequestReviewThreadConnection(),
    reviews: getArbitraryPullRequestReviewConnection(),
    state: getArbitraryPullRequestState(),
    suggestedReviewers: fc.array(getArbitrarySuggestedReviewer()),
    timeline: getArbitraryPullRequestTimelineConnection(),
    timelineItems: getArbitraryPullRequestTimelineItemsConnection(),
    title: getArbitraryString(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
    userContentEdits: getArbitraryUserContentEditConnection(),
    viewerCanApplySuggestion: getArbitraryBoolean(),
    viewerCanReact: getArbitraryBoolean(),
    viewerCanSubscribe: getArbitraryBoolean(),
    viewerCanUpdate: getArbitraryBoolean(),
    viewerCannotUpdateReasons: fc.array(
      getArbitraryCommentCannotUpdateReason()
    ),
    viewerDidAuthor: getArbitraryBoolean(),
    viewerSubscription: getArbitrarySubscriptionState(),
  });

export const getArbitraryLockable = (): fc.Arbitrary<any> =>
  fc.record({
    activeLockReason: getArbitraryLockReason(),
    locked: getArbitraryBoolean(),
  });

export const getArbitraryLockReason = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("OFF_TOPIC"),
    fc.constant("RESOLVED"),
    fc.constant("SPAM"),
    fc.constant("TOO_HEATED")
  );

export const getArbitraryReactable = (): fc.Arbitrary<any> =>
  fc.record({
    databaseId: getArbitraryInt(),
    id: getArbitraryID(),
    reactionGroups: fc.array(getArbitraryReactionGroup()),
    reactions: getArbitraryReactionConnection(),
    viewerCanReact: getArbitraryBoolean(),
  });

export const getArbitraryReactionGroup = (): fc.Arbitrary<any> =>
  fc.record({
    content: getArbitraryReactionContent(),
    createdAt: getArbitraryDateTime(),
    subject: getArbitraryReactable(),
    users: getArbitraryReactingUserConnection(),
    viewerHasReacted: getArbitraryBoolean(),
  });

export const getArbitraryReactionContent = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("CONFUSED"),
    fc.constant("EYES"),
    fc.constant("HEART"),
    fc.constant("HOORAY"),
    fc.constant("LAUGH"),
    fc.constant("ROCKET"),
    fc.constant("THUMBS_DOWN"),
    fc.constant("THUMBS_UP")
  );

export const getArbitraryReactingUserConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryReactingUserEdge()),
    nodes: fc.array(getArbitraryUser()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryReactingUserEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryUser(),
    reactedAt: getArbitraryDateTime(),
  });

export const getArbitraryReactionOrder = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryReactionOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("CREATED_AT"));

export const getArbitraryReactionConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryReactionEdge()),
    nodes: fc.array(getArbitraryReaction()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
    viewerHasReacted: getArbitraryBoolean(),
  });

export const getArbitraryReactionEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryReaction() });

export const getArbitraryReaction = (): fc.Arbitrary<any> =>
  fc.record({
    content: getArbitraryReactionContent(),
    createdAt: getArbitraryDateTime(),
    databaseId: getArbitraryInt(),
    id: getArbitraryID(),
    reactable: getArbitraryReactable(),
    user: getArbitraryUser(),
  });

export const getArbitraryRepositoryNode = (): fc.Arbitrary<any> =>
  fc.record({ repository: getArbitraryRepository() });

export const getArbitrarySubscribable = (): fc.Arbitrary<any> =>
  fc.record({
    id: getArbitraryID(),
    viewerCanSubscribe: getArbitraryBoolean(),
    viewerSubscription: getArbitrarySubscriptionState(),
  });

export const getArbitrarySubscriptionState = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("IGNORED"),
    fc.constant("SUBSCRIBED"),
    fc.constant("UNSUBSCRIBED")
  );

export const getArbitraryRef = (): fc.Arbitrary<any> =>
  fc.record({
    associatedPullRequests: getArbitraryPullRequestConnection(),
    id: getArbitraryID(),
    name: getArbitraryString(),
    prefix: getArbitraryString(),
    repository: getArbitraryRepository(),
    target: getArbitraryGitObject(),
  });

export const getArbitraryGitObject = (): fc.Arbitrary<any> =>
  fc.record({
    abbreviatedOid: getArbitraryString(),
    commitResourcePath: getArbitraryURI(),
    commitUrl: getArbitraryURI(),
    id: getArbitraryID(),
    oid: getArbitraryGitObjectID(),
    repository: getArbitraryRepository(),
  });

export const getArbitraryIssueCommentConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryIssueCommentEdge()),
    nodes: fc.array(getArbitraryIssueComment()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryIssueCommentEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryIssueComment() });

export const getArbitraryIssueComment = (): fc.Arbitrary<any> =>
  fc.record({
    author: getArbitraryActor(),
    authorAssociation: getArbitraryCommentAuthorAssociation(),
    body: getArbitraryString(),
    bodyHTML: getArbitraryHTML(),
    bodyText: getArbitraryString(),
    createdAt: getArbitraryDateTime(),
    createdViaEmail: getArbitraryBoolean(),
    databaseId: getArbitraryInt(),
    editor: getArbitraryActor(),
    id: getArbitraryID(),
    includesCreatedEdit: getArbitraryBoolean(),
    isMinimized: getArbitraryBoolean(),
    issue: getArbitraryIssue(),
    lastEditedAt: getArbitraryDateTime(),
    minimizedReason: getArbitraryString(),
    publishedAt: getArbitraryDateTime(),
    pullRequest: getArbitraryPullRequest(),
    reactionGroups: fc.array(getArbitraryReactionGroup()),
    reactions: getArbitraryReactionConnection(),
    repository: getArbitraryRepository(),
    resourcePath: getArbitraryURI(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
    userContentEdits: getArbitraryUserContentEditConnection(),
    viewerCanDelete: getArbitraryBoolean(),
    viewerCanMinimize: getArbitraryBoolean(),
    viewerCanReact: getArbitraryBoolean(),
    viewerCanUpdate: getArbitraryBoolean(),
    viewerCannotUpdateReasons: fc.array(
      getArbitraryCommentCannotUpdateReason()
    ),
    viewerDidAuthor: getArbitraryBoolean(),
  });

export const getArbitraryPullRequestCommitConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryPullRequestCommitEdge()),
    nodes: fc.array(getArbitraryPullRequestCommit()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryPullRequestCommitEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryPullRequestCommit(),
  });

export const getArbitraryPullRequestCommit = (): fc.Arbitrary<any> =>
  fc.record({
    commit: getArbitraryCommit(),
    id: getArbitraryID(),
    pullRequest: getArbitraryPullRequest(),
    resourcePath: getArbitraryURI(),
    url: getArbitraryURI(),
  });

export const getArbitraryCommit = (): fc.Arbitrary<any> =>
  fc.record({
    abbreviatedOid: getArbitraryString(),
    additions: getArbitraryInt(),
    associatedPullRequests: getArbitraryPullRequestConnection(),
    author: getArbitraryGitActor(),
    authoredByCommitter: getArbitraryBoolean(),
    authoredDate: getArbitraryDateTime(),
    blame: getArbitraryBlame(),
    changedFiles: getArbitraryInt(),
    comments: getArbitraryCommitCommentConnection(),
    commitResourcePath: getArbitraryURI(),
    commitUrl: getArbitraryURI(),
    committedDate: getArbitraryDateTime(),
    committedViaWeb: getArbitraryBoolean(),
    committer: getArbitraryGitActor(),
    deletions: getArbitraryInt(),
    deployments: getArbitraryDeploymentConnection(),
    history: getArbitraryCommitHistoryConnection(),
    id: getArbitraryID(),
    message: getArbitraryString(),
    messageBody: getArbitraryString(),
    messageBodyHTML: getArbitraryHTML(),
    messageHeadline: getArbitraryString(),
    messageHeadlineHTML: getArbitraryHTML(),
    oid: getArbitraryGitObjectID(),
    onBehalfOf: getArbitraryOrganization(),
    parents: getArbitraryCommitConnection(),
    pushedDate: getArbitraryDateTime(),
    repository: getArbitraryRepository(),
    resourcePath: getArbitraryURI(),
    signature: getArbitraryGitSignature(),
    status: getArbitraryStatus(),
    statusCheckRollup: getArbitraryStatusCheckRollup(),
    submodules: getArbitrarySubmoduleConnection(),
    tarballUrl: getArbitraryURI(),
    tree: getArbitraryTree(),
    treeResourcePath: getArbitraryURI(),
    treeUrl: getArbitraryURI(),
    url: getArbitraryURI(),
    viewerCanSubscribe: getArbitraryBoolean(),
    viewerSubscription: getArbitrarySubscriptionState(),
    zipballUrl: getArbitraryURI(),
  });

export const getArbitraryPullRequestOrder = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryPullRequestOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("CREATED_AT"), fc.constant("UPDATED_AT"));

export const getArbitraryGitActor = (): fc.Arbitrary<any> =>
  fc.record({
    avatarUrl: getArbitraryURI(),
    date: getArbitraryGitTimestamp(),
    email: getArbitraryString(),
    name: getArbitraryString(),
    user: getArbitraryUser(),
  });

export const getArbitraryGitTimestamp = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryBlame = (): fc.Arbitrary<any> =>
  fc.record({ ranges: fc.array(getArbitraryBlameRange()) });

export const getArbitraryBlameRange = (): fc.Arbitrary<any> =>
  fc.record({
    age: getArbitraryInt(),
    commit: getArbitraryCommit(),
    endingLine: getArbitraryInt(),
    startingLine: getArbitraryInt(),
  });

export const getArbitraryCommitCommentConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryCommitCommentEdge()),
    nodes: fc.array(getArbitraryCommitComment()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryCommitCommentEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryCommitComment(),
  });

export const getArbitraryCommitComment = (): fc.Arbitrary<any> =>
  fc.record({
    author: getArbitraryActor(),
    authorAssociation: getArbitraryCommentAuthorAssociation(),
    body: getArbitraryString(),
    bodyHTML: getArbitraryHTML(),
    bodyText: getArbitraryString(),
    commit: getArbitraryCommit(),
    createdAt: getArbitraryDateTime(),
    createdViaEmail: getArbitraryBoolean(),
    databaseId: getArbitraryInt(),
    editor: getArbitraryActor(),
    id: getArbitraryID(),
    includesCreatedEdit: getArbitraryBoolean(),
    isMinimized: getArbitraryBoolean(),
    lastEditedAt: getArbitraryDateTime(),
    minimizedReason: getArbitraryString(),
    path: getArbitraryString(),
    position: getArbitraryInt(),
    publishedAt: getArbitraryDateTime(),
    reactionGroups: fc.array(getArbitraryReactionGroup()),
    reactions: getArbitraryReactionConnection(),
    repository: getArbitraryRepository(),
    resourcePath: getArbitraryURI(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
    userContentEdits: getArbitraryUserContentEditConnection(),
    viewerCanDelete: getArbitraryBoolean(),
    viewerCanMinimize: getArbitraryBoolean(),
    viewerCanReact: getArbitraryBoolean(),
    viewerCanUpdate: getArbitraryBoolean(),
    viewerCannotUpdateReasons: fc.array(
      getArbitraryCommentCannotUpdateReason()
    ),
    viewerDidAuthor: getArbitraryBoolean(),
  });

export const getArbitraryDeploymentOrder = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryDeploymentOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("CREATED_AT"));

export const getArbitraryDeploymentConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryDeploymentEdge()),
    nodes: fc.array(getArbitraryDeployment()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryDeploymentEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryDeployment() });

export const getArbitraryDeployment = (): fc.Arbitrary<any> =>
  fc.record({
    commit: getArbitraryCommit(),
    commitOid: getArbitraryString(),
    createdAt: getArbitraryDateTime(),
    creator: getArbitraryActor(),
    databaseId: getArbitraryInt(),
    description: getArbitraryString(),
    environment: getArbitraryString(),
    id: getArbitraryID(),
    latestEnvironment: getArbitraryString(),
    latestStatus: getArbitraryDeploymentStatus(),
    originalEnvironment: getArbitraryString(),
    payload: getArbitraryString(),
    ref: getArbitraryRef(),
    repository: getArbitraryRepository(),
    state: getArbitraryDeploymentState(),
    statuses: getArbitraryDeploymentStatusConnection(),
    task: getArbitraryString(),
    updatedAt: getArbitraryDateTime(),
  });

export const getArbitraryDeploymentStatus = (): fc.Arbitrary<any> =>
  fc.record({
    createdAt: getArbitraryDateTime(),
    creator: getArbitraryActor(),
    deployment: getArbitraryDeployment(),
    description: getArbitraryString(),
    environmentUrl: getArbitraryURI(),
    id: getArbitraryID(),
    logUrl: getArbitraryURI(),
    state: getArbitraryDeploymentStatusState(),
    updatedAt: getArbitraryDateTime(),
  });

export const getArbitraryDeploymentStatusState = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("ERROR"),
    fc.constant("FAILURE"),
    fc.constant("INACTIVE"),
    fc.constant("IN_PROGRESS"),
    fc.constant("PENDING"),
    fc.constant("QUEUED"),
    fc.constant("SUCCESS")
  );

export const getArbitraryDeploymentState = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("ABANDONED"),
    fc.constant("ACTIVE"),
    fc.constant("DESTROYED"),
    fc.constant("ERROR"),
    fc.constant("FAILURE"),
    fc.constant("INACTIVE"),
    fc.constant("IN_PROGRESS"),
    fc.constant("PENDING"),
    fc.constant("QUEUED")
  );

export const getArbitraryDeploymentStatusConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryDeploymentStatusEdge()),
    nodes: fc.array(getArbitraryDeploymentStatus()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryDeploymentStatusEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryDeploymentStatus(),
  });

export const getArbitraryCommitAuthor = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryCommitHistoryConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryCommitEdge()),
    nodes: fc.array(getArbitraryCommit()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryCommitEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryCommit() });

export const getArbitraryCommitConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryCommitEdge()),
    nodes: fc.array(getArbitraryCommit()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryGitSignature = (): fc.Arbitrary<any> =>
  fc.record({
    email: getArbitraryString(),
    isValid: getArbitraryBoolean(),
    payload: getArbitraryString(),
    signature: getArbitraryString(),
    signer: getArbitraryUser(),
    state: getArbitraryGitSignatureState(),
    wasSignedByGitHub: getArbitraryBoolean(),
  });

export const getArbitraryGitSignatureState = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("BAD_CERT"),
    fc.constant("BAD_EMAIL"),
    fc.constant("EXPIRED_KEY"),
    fc.constant("GPGVERIFY_ERROR"),
    fc.constant("GPGVERIFY_UNAVAILABLE"),
    fc.constant("INVALID"),
    fc.constant("MALFORMED_SIG"),
    fc.constant("NOT_SIGNING_KEY"),
    fc.constant("NO_USER"),
    fc.constant("OCSP_ERROR"),
    fc.constant("OCSP_PENDING"),
    fc.constant("OCSP_REVOKED"),
    fc.constant("UNKNOWN_KEY"),
    fc.constant("UNKNOWN_SIG_TYPE"),
    fc.constant("UNSIGNED"),
    fc.constant("UNVERIFIED_EMAIL"),
    fc.constant("VALID")
  );

export const getArbitraryStatus = (): fc.Arbitrary<any> =>
  fc.record({
    commit: getArbitraryCommit(),
    context: getArbitraryStatusContext(),
    contexts: fc.array(getArbitraryStatusContext()),
    id: getArbitraryID(),
    state: getArbitraryStatusState(),
  });

export const getArbitraryStatusContext = (): fc.Arbitrary<any> =>
  fc.record({
    avatarUrl: getArbitraryURI(),
    commit: getArbitraryCommit(),
    context: getArbitraryString(),
    createdAt: getArbitraryDateTime(),
    creator: getArbitraryActor(),
    description: getArbitraryString(),
    id: getArbitraryID(),
    state: getArbitraryStatusState(),
    targetUrl: getArbitraryURI(),
  });

export const getArbitraryStatusState = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("ERROR"),
    fc.constant("EXPECTED"),
    fc.constant("FAILURE"),
    fc.constant("PENDING"),
    fc.constant("SUCCESS")
  );

export const getArbitraryStatusCheckRollup = (): fc.Arbitrary<any> =>
  fc.record({
    commit: getArbitraryCommit(),
    contexts: getArbitraryStatusCheckRollupContextConnection(),
    id: getArbitraryID(),
    state: getArbitraryStatusState(),
  });

export const getArbitraryStatusCheckRollupContextConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryStatusCheckRollupContextEdge()),
    nodes: fc.array(getArbitraryStatusCheckRollupContext()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryStatusCheckRollupContextEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryStatusCheckRollupContext(),
  });

export const getArbitraryStatusCheckRollupContext = (): fc.Arbitrary<any> =>
  fc.oneof(getArbitraryStatusContext());

export const getArbitrarySubmoduleConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitrarySubmoduleEdge()),
    nodes: fc.array(getArbitrarySubmodule()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitrarySubmoduleEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitrarySubmodule() });

export const getArbitrarySubmodule = (): fc.Arbitrary<any> =>
  fc.record({
    branch: getArbitraryString(),
    gitUrl: getArbitraryURI(),
    name: getArbitraryString(),
    path: getArbitraryString(),
    subprojectCommitOid: getArbitraryGitObjectID(),
  });

export const getArbitraryTree = (): fc.Arbitrary<any> =>
  fc.record({
    abbreviatedOid: getArbitraryString(),
    commitResourcePath: getArbitraryURI(),
    commitUrl: getArbitraryURI(),
    entries: fc.array(getArbitraryTreeEntry()),
    id: getArbitraryID(),
    oid: getArbitraryGitObjectID(),
    repository: getArbitraryRepository(),
  });

export const getArbitraryTreeEntry = (): fc.Arbitrary<any> =>
  fc.record({
    mode: getArbitraryInt(),
    name: getArbitraryString(),
    object: getArbitraryGitObject(),
    oid: getArbitraryGitObjectID(),
    repository: getArbitraryRepository(),
    submodule: getArbitrarySubmodule(),
    type: getArbitraryString(),
  });

export const getArbitraryPullRequestChangedFileConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryPullRequestChangedFileEdge()),
    nodes: fc.array(getArbitraryPullRequestChangedFile()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryPullRequestChangedFileEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryPullRequestChangedFile(),
  });

export const getArbitraryPullRequestChangedFile = (): fc.Arbitrary<any> =>
  fc.record({
    additions: getArbitraryInt(),
    deletions: getArbitraryInt(),
    path: getArbitraryString(),
  });

export const getArbitraryHovercard = (): fc.Arbitrary<any> =>
  fc.record({ contexts: fc.array(getArbitraryHovercardContext()) });

export const getArbitraryHovercardContext = (): fc.Arbitrary<any> =>
  fc.record({ message: getArbitraryString(), octicon: getArbitraryString() });

export const getArbitraryMergeableState = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("CONFLICTING"),
    fc.constant("MERGEABLE"),
    fc.constant("UNKNOWN")
  );

export const getArbitraryMilestone = (): fc.Arbitrary<any> =>
  fc.record({
    closed: getArbitraryBoolean(),
    closedAt: getArbitraryDateTime(),
    createdAt: getArbitraryDateTime(),
    creator: getArbitraryActor(),
    description: getArbitraryString(),
    dueOn: getArbitraryDateTime(),
    id: getArbitraryID(),
    issuePrioritiesDebug: getArbitraryString(),
    issues: getArbitraryIssueConnection(),
    number: getArbitraryInt(),
    pullRequests: getArbitraryPullRequestConnection(),
    repository: getArbitraryRepository(),
    resourcePath: getArbitraryURI(),
    state: getArbitraryMilestoneState(),
    title: getArbitraryString(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
  });

export const getArbitraryMilestoneState = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("CLOSED"), fc.constant("OPEN"));

export const getArbitraryPullRequestReviewDecision = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("APPROVED"),
    fc.constant("CHANGES_REQUESTED"),
    fc.constant("REVIEW_REQUIRED")
  );

export const getArbitraryReviewRequestConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryReviewRequestEdge()),
    nodes: fc.array(getArbitraryReviewRequest()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryReviewRequestEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryReviewRequest(),
  });

export const getArbitraryReviewRequest = (): fc.Arbitrary<any> =>
  fc.record({
    databaseId: getArbitraryInt(),
    id: getArbitraryID(),
    pullRequest: getArbitraryPullRequest(),
    requestedReviewer: getArbitraryRequestedReviewer(),
  });

export const getArbitraryRequestedReviewer = (): fc.Arbitrary<any> =>
  fc.oneof(getArbitraryMannequin(), getArbitraryTeam(), getArbitraryUser());

export const getArbitraryMannequin = (): fc.Arbitrary<any> =>
  fc.record({
    avatarUrl: getArbitraryURI(),
    createdAt: getArbitraryDateTime(),
    databaseId: getArbitraryInt(),
    email: getArbitraryString(),
    id: getArbitraryID(),
    login: getArbitraryString(),
    resourcePath: getArbitraryURI(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
  });

export const getArbitraryTeam = (): fc.Arbitrary<any> =>
  fc.record({
    ancestors: getArbitraryTeamConnection(),
    avatarUrl: getArbitraryURI(),
    childTeams: getArbitraryTeamConnection(),
    combinedSlug: getArbitraryString(),
    createdAt: getArbitraryDateTime(),
    description: getArbitraryString(),
    discussion: getArbitraryTeamDiscussion(),
    discussions: getArbitraryTeamDiscussionConnection(),
    discussionsResourcePath: getArbitraryURI(),
    discussionsUrl: getArbitraryURI(),
    editTeamResourcePath: getArbitraryURI(),
    editTeamUrl: getArbitraryURI(),
    id: getArbitraryID(),
    invitations: getArbitraryOrganizationInvitationConnection(),
    memberStatuses: getArbitraryUserStatusConnection(),
    members: getArbitraryTeamMemberConnection(),
    membersResourcePath: getArbitraryURI(),
    membersUrl: getArbitraryURI(),
    name: getArbitraryString(),
    newTeamResourcePath: getArbitraryURI(),
    newTeamUrl: getArbitraryURI(),
    organization: getArbitraryOrganization(),
    parentTeam: getArbitraryTeam(),
    privacy: getArbitraryTeamPrivacy(),
    repositories: getArbitraryTeamRepositoryConnection(),
    repositoriesResourcePath: getArbitraryURI(),
    repositoriesUrl: getArbitraryURI(),
    resourcePath: getArbitraryURI(),
    slug: getArbitraryString(),
    teamsResourcePath: getArbitraryURI(),
    teamsUrl: getArbitraryURI(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
    viewerCanAdminister: getArbitraryBoolean(),
    viewerCanSubscribe: getArbitraryBoolean(),
    viewerSubscription: getArbitrarySubscriptionState(),
  });

export const getArbitraryTeamConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryTeamEdge()),
    nodes: fc.array(getArbitraryTeam()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryTeamEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryTeam() });

export const getArbitraryTeamOrder = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryTeamOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("NAME"));

export const getArbitraryTeamDiscussion = (): fc.Arbitrary<any> =>
  fc.record({
    author: getArbitraryActor(),
    authorAssociation: getArbitraryCommentAuthorAssociation(),
    body: getArbitraryString(),
    bodyHTML: getArbitraryHTML(),
    bodyText: getArbitraryString(),
    bodyVersion: getArbitraryString(),
    comments: getArbitraryTeamDiscussionCommentConnection(),
    commentsResourcePath: getArbitraryURI(),
    commentsUrl: getArbitraryURI(),
    createdAt: getArbitraryDateTime(),
    createdViaEmail: getArbitraryBoolean(),
    databaseId: getArbitraryInt(),
    editor: getArbitraryActor(),
    id: getArbitraryID(),
    includesCreatedEdit: getArbitraryBoolean(),
    isPinned: getArbitraryBoolean(),
    isPrivate: getArbitraryBoolean(),
    lastEditedAt: getArbitraryDateTime(),
    number: getArbitraryInt(),
    publishedAt: getArbitraryDateTime(),
    reactionGroups: fc.array(getArbitraryReactionGroup()),
    reactions: getArbitraryReactionConnection(),
    resourcePath: getArbitraryURI(),
    team: getArbitraryTeam(),
    title: getArbitraryString(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
    userContentEdits: getArbitraryUserContentEditConnection(),
    viewerCanDelete: getArbitraryBoolean(),
    viewerCanPin: getArbitraryBoolean(),
    viewerCanReact: getArbitraryBoolean(),
    viewerCanSubscribe: getArbitraryBoolean(),
    viewerCanUpdate: getArbitraryBoolean(),
    viewerCannotUpdateReasons: fc.array(
      getArbitraryCommentCannotUpdateReason()
    ),
    viewerDidAuthor: getArbitraryBoolean(),
    viewerSubscription: getArbitrarySubscriptionState(),
  });

export const getArbitraryTeamDiscussionCommentOrder = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryTeamDiscussionCommentOrderField = (): fc.Arbitrary<
  any
> => fc.oneof(fc.constant("NUMBER"));

export const getArbitraryTeamDiscussionCommentConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryTeamDiscussionCommentEdge()),
    nodes: fc.array(getArbitraryTeamDiscussionComment()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryTeamDiscussionCommentEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryTeamDiscussionComment(),
  });

export const getArbitraryTeamDiscussionComment = (): fc.Arbitrary<any> =>
  fc.record({
    author: getArbitraryActor(),
    authorAssociation: getArbitraryCommentAuthorAssociation(),
    body: getArbitraryString(),
    bodyHTML: getArbitraryHTML(),
    bodyText: getArbitraryString(),
    bodyVersion: getArbitraryString(),
    createdAt: getArbitraryDateTime(),
    createdViaEmail: getArbitraryBoolean(),
    databaseId: getArbitraryInt(),
    discussion: getArbitraryTeamDiscussion(),
    editor: getArbitraryActor(),
    id: getArbitraryID(),
    includesCreatedEdit: getArbitraryBoolean(),
    lastEditedAt: getArbitraryDateTime(),
    number: getArbitraryInt(),
    publishedAt: getArbitraryDateTime(),
    reactionGroups: fc.array(getArbitraryReactionGroup()),
    reactions: getArbitraryReactionConnection(),
    resourcePath: getArbitraryURI(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
    userContentEdits: getArbitraryUserContentEditConnection(),
    viewerCanDelete: getArbitraryBoolean(),
    viewerCanReact: getArbitraryBoolean(),
    viewerCanUpdate: getArbitraryBoolean(),
    viewerCannotUpdateReasons: fc.array(
      getArbitraryCommentCannotUpdateReason()
    ),
    viewerDidAuthor: getArbitraryBoolean(),
  });

export const getArbitraryTeamDiscussionOrder = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryTeamDiscussionOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("CREATED_AT"));

export const getArbitraryTeamDiscussionConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryTeamDiscussionEdge()),
    nodes: fc.array(getArbitraryTeamDiscussion()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryTeamDiscussionEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryTeamDiscussion(),
  });

export const getArbitraryOrganizationInvitationConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryOrganizationInvitationEdge()),
    nodes: fc.array(getArbitraryOrganizationInvitation()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryOrganizationInvitationEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryOrganizationInvitation(),
  });

export const getArbitraryOrganizationInvitation = (): fc.Arbitrary<any> =>
  fc.record({
    createdAt: getArbitraryDateTime(),
    email: getArbitraryString(),
    id: getArbitraryID(),
    invitationType: getArbitraryOrganizationInvitationType(),
    invitee: getArbitraryUser(),
    inviter: getArbitraryUser(),
    organization: getArbitraryOrganization(),
    role: getArbitraryOrganizationInvitationRole(),
  });

export const getArbitraryOrganizationInvitationType = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("EMAIL"), fc.constant("USER"));

export const getArbitraryOrganizationInvitationRole = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("ADMIN"),
    fc.constant("BILLING_MANAGER"),
    fc.constant("DIRECT_MEMBER"),
    fc.constant("REINSTATE")
  );

export const getArbitraryTeamMembershipType = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("ALL"),
    fc.constant("CHILD_TEAM"),
    fc.constant("IMMEDIATE")
  );

export const getArbitraryTeamMemberOrder = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryTeamMemberOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("CREATED_AT"), fc.constant("LOGIN"));

export const getArbitraryTeamMemberRole = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("MAINTAINER"), fc.constant("MEMBER"));

export const getArbitraryTeamMemberConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryTeamMemberEdge()),
    nodes: fc.array(getArbitraryUser()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryTeamMemberEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    memberAccessResourcePath: getArbitraryURI(),
    memberAccessUrl: getArbitraryURI(),
    node: getArbitraryUser(),
    role: getArbitraryTeamMemberRole(),
  });

export const getArbitraryTeamPrivacy = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("SECRET"), fc.constant("VISIBLE"));

export const getArbitraryTeamRepositoryOrder = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryTeamRepositoryOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("CREATED_AT"),
    fc.constant("NAME"),
    fc.constant("PERMISSION"),
    fc.constant("PUSHED_AT"),
    fc.constant("STARGAZERS"),
    fc.constant("UPDATED_AT")
  );

export const getArbitraryTeamRepositoryConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryTeamRepositoryEdge()),
    nodes: fc.array(getArbitraryRepository()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryTeamRepositoryEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryRepository(),
    permission: getArbitraryRepositoryPermission(),
  });

export const getArbitraryRepositoryPermission = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("ADMIN"),
    fc.constant("MAINTAIN"),
    fc.constant("READ"),
    fc.constant("TRIAGE"),
    fc.constant("WRITE")
  );

export const getArbitraryPullRequestReviewThreadConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryPullRequestReviewThreadEdge()),
    nodes: fc.array(getArbitraryPullRequestReviewThread()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryPullRequestReviewThreadEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryPullRequestReviewThread(),
  });

export const getArbitraryPullRequestReviewThread = (): fc.Arbitrary<any> =>
  fc.record({
    comments: getArbitraryPullRequestReviewCommentConnection(),
    diffSide: getArbitraryDiffSide(),
    id: getArbitraryID(),
    isResolved: getArbitraryBoolean(),
    line: getArbitraryInt(),
    originalLine: getArbitraryInt(),
    originalStartLine: getArbitraryInt(),
    pullRequest: getArbitraryPullRequest(),
    repository: getArbitraryRepository(),
    resolvedBy: getArbitraryUser(),
    startDiffSide: getArbitraryDiffSide(),
    startLine: getArbitraryInt(),
    viewerCanResolve: getArbitraryBoolean(),
    viewerCanUnresolve: getArbitraryBoolean(),
  });

export const getArbitraryPullRequestReviewCommentConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryPullRequestReviewCommentEdge()),
    nodes: fc.array(getArbitraryPullRequestReviewComment()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryPullRequestReviewCommentEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryPullRequestReviewComment(),
  });

export const getArbitraryPullRequestReviewComment = (): fc.Arbitrary<any> =>
  fc.record({
    author: getArbitraryActor(),
    authorAssociation: getArbitraryCommentAuthorAssociation(),
    body: getArbitraryString(),
    bodyHTML: getArbitraryHTML(),
    bodyText: getArbitraryString(),
    commit: getArbitraryCommit(),
    createdAt: getArbitraryDateTime(),
    createdViaEmail: getArbitraryBoolean(),
    databaseId: getArbitraryInt(),
    diffHunk: getArbitraryString(),
    draftedAt: getArbitraryDateTime(),
    editor: getArbitraryActor(),
    id: getArbitraryID(),
    includesCreatedEdit: getArbitraryBoolean(),
    isMinimized: getArbitraryBoolean(),
    lastEditedAt: getArbitraryDateTime(),
    minimizedReason: getArbitraryString(),
    originalCommit: getArbitraryCommit(),
    originalPosition: getArbitraryInt(),
    outdated: getArbitraryBoolean(),
    path: getArbitraryString(),
    position: getArbitraryInt(),
    publishedAt: getArbitraryDateTime(),
    pullRequest: getArbitraryPullRequest(),
    pullRequestReview: getArbitraryPullRequestReview(),
    reactionGroups: fc.array(getArbitraryReactionGroup()),
    reactions: getArbitraryReactionConnection(),
    replyTo: getArbitraryPullRequestReviewComment(),
    repository: getArbitraryRepository(),
    resourcePath: getArbitraryURI(),
    state: getArbitraryPullRequestReviewCommentState(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
    userContentEdits: getArbitraryUserContentEditConnection(),
    viewerCanDelete: getArbitraryBoolean(),
    viewerCanMinimize: getArbitraryBoolean(),
    viewerCanReact: getArbitraryBoolean(),
    viewerCanUpdate: getArbitraryBoolean(),
    viewerCannotUpdateReasons: fc.array(
      getArbitraryCommentCannotUpdateReason()
    ),
    viewerDidAuthor: getArbitraryBoolean(),
  });

export const getArbitraryPullRequestReview = (): fc.Arbitrary<any> =>
  fc.record({
    author: getArbitraryActor(),
    authorAssociation: getArbitraryCommentAuthorAssociation(),
    body: getArbitraryString(),
    bodyHTML: getArbitraryHTML(),
    bodyText: getArbitraryString(),
    comments: getArbitraryPullRequestReviewCommentConnection(),
    commit: getArbitraryCommit(),
    createdAt: getArbitraryDateTime(),
    createdViaEmail: getArbitraryBoolean(),
    databaseId: getArbitraryInt(),
    editor: getArbitraryActor(),
    id: getArbitraryID(),
    includesCreatedEdit: getArbitraryBoolean(),
    lastEditedAt: getArbitraryDateTime(),
    onBehalfOf: getArbitraryTeamConnection(),
    publishedAt: getArbitraryDateTime(),
    pullRequest: getArbitraryPullRequest(),
    reactionGroups: fc.array(getArbitraryReactionGroup()),
    reactions: getArbitraryReactionConnection(),
    repository: getArbitraryRepository(),
    resourcePath: getArbitraryURI(),
    state: getArbitraryPullRequestReviewState(),
    submittedAt: getArbitraryDateTime(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
    userContentEdits: getArbitraryUserContentEditConnection(),
    viewerCanDelete: getArbitraryBoolean(),
    viewerCanReact: getArbitraryBoolean(),
    viewerCanUpdate: getArbitraryBoolean(),
    viewerCannotUpdateReasons: fc.array(
      getArbitraryCommentCannotUpdateReason()
    ),
    viewerDidAuthor: getArbitraryBoolean(),
  });

export const getArbitraryPullRequestReviewState = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("APPROVED"),
    fc.constant("CHANGES_REQUESTED"),
    fc.constant("COMMENTED"),
    fc.constant("DISMISSED"),
    fc.constant("PENDING")
  );

export const getArbitraryPullRequestReviewCommentState = (): fc.Arbitrary<
  any
> => fc.oneof(fc.constant("PENDING"), fc.constant("SUBMITTED"));

export const getArbitraryDiffSide = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("LEFT"), fc.constant("RIGHT"));

export const getArbitraryPullRequestReviewConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryPullRequestReviewEdge()),
    nodes: fc.array(getArbitraryPullRequestReview()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryPullRequestReviewEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryPullRequestReview(),
  });

export const getArbitrarySuggestedReviewer = (): fc.Arbitrary<any> =>
  fc.record({
    isAuthor: getArbitraryBoolean(),
    isCommenter: getArbitraryBoolean(),
    reviewer: getArbitraryUser(),
  });

export const getArbitraryPullRequestTimelineConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryPullRequestTimelineItemEdge()),
    nodes: fc.array(getArbitraryPullRequestTimelineItem()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryPullRequestTimelineItemEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryPullRequestTimelineItem(),
  });

export const getArbitraryPullRequestTimelineItem = (): fc.Arbitrary<any> =>
  fc.oneof(
    getArbitraryAssignedEvent(),
    getArbitraryBaseRefForcePushedEvent(),
    getArbitraryClosedEvent(),
    getArbitraryCommit(),
    getArbitraryCommitCommentThread(),
    getArbitraryCrossReferencedEvent(),
    getArbitraryDemilestonedEvent(),
    getArbitraryDeployedEvent(),
    getArbitraryDeploymentEnvironmentChangedEvent(),
    getArbitraryHeadRefDeletedEvent(),
    getArbitraryHeadRefForcePushedEvent(),
    getArbitraryHeadRefRestoredEvent(),
    getArbitraryIssueComment(),
    getArbitraryLabeledEvent(),
    getArbitraryLockedEvent(),
    getArbitraryMergedEvent(),
    getArbitraryMilestonedEvent(),
    getArbitraryPullRequestReview(),
    getArbitraryPullRequestReviewComment(),
    getArbitraryPullRequestReviewThread(),
    getArbitraryReferencedEvent(),
    getArbitraryRenamedTitleEvent(),
    getArbitraryReopenedEvent(),
    getArbitraryReviewDismissedEvent(),
    getArbitraryReviewRequestRemovedEvent(),
    getArbitraryReviewRequestedEvent(),
    getArbitrarySubscribedEvent(),
    getArbitraryUnassignedEvent(),
    getArbitraryUnlabeledEvent(),
    getArbitraryUnlockedEvent(),
    getArbitraryUnsubscribedEvent(),
    getArbitraryUserBlockedEvent()
  );

export const getArbitraryAssignedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    assignable: getArbitraryAssignable(),
    assignee: getArbitraryAssignee(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    user: getArbitraryUser(),
  });

export const getArbitraryAssignee = (): fc.Arbitrary<any> =>
  fc.oneof(
    getArbitraryBot(),
    getArbitraryMannequin(),
    getArbitraryOrganization(),
    getArbitraryUser()
  );

export const getArbitraryBot = (): fc.Arbitrary<any> =>
  fc.record({
    avatarUrl: getArbitraryURI(),
    createdAt: getArbitraryDateTime(),
    databaseId: getArbitraryInt(),
    id: getArbitraryID(),
    login: getArbitraryString(),
    resourcePath: getArbitraryURI(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
  });

export const getArbitraryBaseRefForcePushedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    afterCommit: getArbitraryCommit(),
    beforeCommit: getArbitraryCommit(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    pullRequest: getArbitraryPullRequest(),
    ref: getArbitraryRef(),
  });

export const getArbitraryClosedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    closable: getArbitraryClosable(),
    closer: getArbitraryCloser(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    resourcePath: getArbitraryURI(),
    url: getArbitraryURI(),
  });

export const getArbitraryCloser = (): fc.Arbitrary<any> =>
  fc.oneof(getArbitraryCommit(), getArbitraryPullRequest());

export const getArbitraryCommitCommentThread = (): fc.Arbitrary<any> =>
  fc.record({
    comments: getArbitraryCommitCommentConnection(),
    commit: getArbitraryCommit(),
    id: getArbitraryID(),
    path: getArbitraryString(),
    position: getArbitraryInt(),
    repository: getArbitraryRepository(),
  });

export const getArbitraryCrossReferencedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    isCrossRepository: getArbitraryBoolean(),
    referencedAt: getArbitraryDateTime(),
    resourcePath: getArbitraryURI(),
    source: getArbitraryReferencedSubject(),
    target: getArbitraryReferencedSubject(),
    url: getArbitraryURI(),
    willCloseTarget: getArbitraryBoolean(),
  });

export const getArbitraryReferencedSubject = (): fc.Arbitrary<any> =>
  fc.oneof(getArbitraryIssue(), getArbitraryPullRequest());

export const getArbitraryDemilestonedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    milestoneTitle: getArbitraryString(),
    subject: getArbitraryMilestoneItem(),
  });

export const getArbitraryMilestoneItem = (): fc.Arbitrary<any> =>
  fc.oneof(getArbitraryIssue(), getArbitraryPullRequest());

export const getArbitraryDeployedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    databaseId: getArbitraryInt(),
    deployment: getArbitraryDeployment(),
    id: getArbitraryID(),
    pullRequest: getArbitraryPullRequest(),
    ref: getArbitraryRef(),
  });

export const getArbitraryDeploymentEnvironmentChangedEvent = (): fc.Arbitrary<
  any
> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    deploymentStatus: getArbitraryDeploymentStatus(),
    id: getArbitraryID(),
    pullRequest: getArbitraryPullRequest(),
  });

export const getArbitraryHeadRefDeletedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    headRef: getArbitraryRef(),
    headRefName: getArbitraryString(),
    id: getArbitraryID(),
    pullRequest: getArbitraryPullRequest(),
  });

export const getArbitraryHeadRefForcePushedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    afterCommit: getArbitraryCommit(),
    beforeCommit: getArbitraryCommit(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    pullRequest: getArbitraryPullRequest(),
    ref: getArbitraryRef(),
  });

export const getArbitraryHeadRefRestoredEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    pullRequest: getArbitraryPullRequest(),
  });

export const getArbitraryLabeledEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    label: getArbitraryLabel(),
    labelable: getArbitraryLabelable(),
  });

export const getArbitraryLockedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    lockReason: getArbitraryLockReason(),
    lockable: getArbitraryLockable(),
  });

export const getArbitraryMergedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    commit: getArbitraryCommit(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    mergeRef: getArbitraryRef(),
    mergeRefName: getArbitraryString(),
    pullRequest: getArbitraryPullRequest(),
    resourcePath: getArbitraryURI(),
    url: getArbitraryURI(),
  });

export const getArbitraryMilestonedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    milestoneTitle: getArbitraryString(),
    subject: getArbitraryMilestoneItem(),
  });

export const getArbitraryReferencedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    commit: getArbitraryCommit(),
    commitRepository: getArbitraryRepository(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    isCrossRepository: getArbitraryBoolean(),
    isDirectReference: getArbitraryBoolean(),
    subject: getArbitraryReferencedSubject(),
  });

export const getArbitraryRenamedTitleEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    currentTitle: getArbitraryString(),
    id: getArbitraryID(),
    previousTitle: getArbitraryString(),
    subject: getArbitraryRenamedTitleSubject(),
  });

export const getArbitraryRenamedTitleSubject = (): fc.Arbitrary<any> =>
  fc.oneof(getArbitraryIssue(), getArbitraryPullRequest());

export const getArbitraryReopenedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    closable: getArbitraryClosable(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
  });

export const getArbitraryReviewDismissedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    databaseId: getArbitraryInt(),
    dismissalMessage: getArbitraryString(),
    dismissalMessageHTML: getArbitraryString(),
    id: getArbitraryID(),
    previousReviewState: getArbitraryPullRequestReviewState(),
    pullRequest: getArbitraryPullRequest(),
    pullRequestCommit: getArbitraryPullRequestCommit(),
    resourcePath: getArbitraryURI(),
    review: getArbitraryPullRequestReview(),
    url: getArbitraryURI(),
  });

export const getArbitraryReviewRequestRemovedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    pullRequest: getArbitraryPullRequest(),
    requestedReviewer: getArbitraryRequestedReviewer(),
  });

export const getArbitraryReviewRequestedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    pullRequest: getArbitraryPullRequest(),
    requestedReviewer: getArbitraryRequestedReviewer(),
  });

export const getArbitrarySubscribedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    subscribable: getArbitrarySubscribable(),
  });

export const getArbitraryUnassignedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    assignable: getArbitraryAssignable(),
    assignee: getArbitraryAssignee(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    user: getArbitraryUser(),
  });

export const getArbitraryUnlabeledEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    label: getArbitraryLabel(),
    labelable: getArbitraryLabelable(),
  });

export const getArbitraryUnlockedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    lockable: getArbitraryLockable(),
  });

export const getArbitraryUnsubscribedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    subscribable: getArbitrarySubscribable(),
  });

export const getArbitraryUserBlockedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    blockDuration: getArbitraryUserBlockDuration(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    subject: getArbitraryUser(),
  });

export const getArbitraryUserBlockDuration = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("ONE_DAY"),
    fc.constant("ONE_MONTH"),
    fc.constant("ONE_WEEK"),
    fc.constant("PERMANENT"),
    fc.constant("THREE_DAYS")
  );

export const getArbitraryPullRequestTimelineItemsItemType = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("ADDED_TO_PROJECT_EVENT"),
    fc.constant("ASSIGNED_EVENT"),
    fc.constant("BASE_REF_CHANGED_EVENT"),
    fc.constant("BASE_REF_FORCE_PUSHED_EVENT"),
    fc.constant("CLOSED_EVENT"),
    fc.constant("COMMENT_DELETED_EVENT"),
    fc.constant("CONNECTED_EVENT"),
    fc.constant("CONVERTED_NOTE_TO_ISSUE_EVENT"),
    fc.constant("CROSS_REFERENCED_EVENT"),
    fc.constant("DEMILESTONED_EVENT"),
    fc.constant("DEPLOYED_EVENT"),
    fc.constant("DEPLOYMENT_ENVIRONMENT_CHANGED_EVENT"),
    fc.constant("DISCONNECTED_EVENT"),
    fc.constant("HEAD_REF_DELETED_EVENT"),
    fc.constant("HEAD_REF_FORCE_PUSHED_EVENT"),
    fc.constant("HEAD_REF_RESTORED_EVENT"),
    fc.constant("ISSUE_COMMENT"),
    fc.constant("LABELED_EVENT"),
    fc.constant("LOCKED_EVENT"),
    fc.constant("MARKED_AS_DUPLICATE_EVENT"),
    fc.constant("MENTIONED_EVENT"),
    fc.constant("MERGED_EVENT"),
    fc.constant("MILESTONED_EVENT"),
    fc.constant("MOVED_COLUMNS_IN_PROJECT_EVENT"),
    fc.constant("PINNED_EVENT"),
    fc.constant("PULL_REQUEST_COMMIT"),
    fc.constant("PULL_REQUEST_COMMIT_COMMENT_THREAD"),
    fc.constant("PULL_REQUEST_REVIEW"),
    fc.constant("PULL_REQUEST_REVIEW_THREAD"),
    fc.constant("PULL_REQUEST_REVISION_MARKER"),
    fc.constant("READY_FOR_REVIEW_EVENT"),
    fc.constant("REFERENCED_EVENT"),
    fc.constant("REMOVED_FROM_PROJECT_EVENT"),
    fc.constant("RENAMED_TITLE_EVENT"),
    fc.constant("REOPENED_EVENT"),
    fc.constant("REVIEW_DISMISSED_EVENT"),
    fc.constant("REVIEW_REQUESTED_EVENT"),
    fc.constant("REVIEW_REQUEST_REMOVED_EVENT"),
    fc.constant("SUBSCRIBED_EVENT"),
    fc.constant("TRANSFERRED_EVENT"),
    fc.constant("UNASSIGNED_EVENT"),
    fc.constant("UNLABELED_EVENT"),
    fc.constant("UNLOCKED_EVENT"),
    fc.constant("UNMARKED_AS_DUPLICATE_EVENT"),
    fc.constant("UNPINNED_EVENT"),
    fc.constant("UNSUBSCRIBED_EVENT"),
    fc.constant("USER_BLOCKED_EVENT")
  );

export const getArbitraryPullRequestTimelineItemsConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryPullRequestTimelineItemsEdge()),
    filteredCount: getArbitraryInt(),
    nodes: fc.array(getArbitraryPullRequestTimelineItems()),
    pageCount: getArbitraryInt(),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
    updatedAt: getArbitraryDateTime(),
  });

export const getArbitraryPullRequestTimelineItemsEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryPullRequestTimelineItems(),
  });

export const getArbitraryPullRequestTimelineItems = (): fc.Arbitrary<any> =>
  fc.oneof(
    getArbitraryAddedToProjectEvent(),
    getArbitraryAssignedEvent(),
    getArbitraryBaseRefChangedEvent(),
    getArbitraryBaseRefForcePushedEvent(),
    getArbitraryClosedEvent(),
    getArbitraryCommentDeletedEvent(),
    getArbitraryConnectedEvent(),
    getArbitraryConvertedNoteToIssueEvent(),
    getArbitraryCrossReferencedEvent(),
    getArbitraryDemilestonedEvent(),
    getArbitraryDeployedEvent(),
    getArbitraryDeploymentEnvironmentChangedEvent(),
    getArbitraryDisconnectedEvent(),
    getArbitraryHeadRefDeletedEvent(),
    getArbitraryHeadRefForcePushedEvent(),
    getArbitraryHeadRefRestoredEvent(),
    getArbitraryIssueComment(),
    getArbitraryLabeledEvent(),
    getArbitraryLockedEvent(),
    getArbitraryMarkedAsDuplicateEvent(),
    getArbitraryMentionedEvent(),
    getArbitraryMergedEvent(),
    getArbitraryMilestonedEvent(),
    getArbitraryMovedColumnsInProjectEvent(),
    getArbitraryPinnedEvent(),
    getArbitraryPullRequestCommit(),
    getArbitraryPullRequestCommitCommentThread(),
    getArbitraryPullRequestReview(),
    getArbitraryPullRequestReviewThread(),
    getArbitraryPullRequestRevisionMarker(),
    getArbitraryReadyForReviewEvent(),
    getArbitraryReferencedEvent(),
    getArbitraryRemovedFromProjectEvent(),
    getArbitraryRenamedTitleEvent(),
    getArbitraryReopenedEvent(),
    getArbitraryReviewDismissedEvent(),
    getArbitraryReviewRequestRemovedEvent(),
    getArbitraryReviewRequestedEvent(),
    getArbitrarySubscribedEvent(),
    getArbitraryTransferredEvent(),
    getArbitraryUnassignedEvent(),
    getArbitraryUnlabeledEvent(),
    getArbitraryUnlockedEvent(),
    getArbitraryUnmarkedAsDuplicateEvent(),
    getArbitraryUnpinnedEvent(),
    getArbitraryUnsubscribedEvent(),
    getArbitraryUserBlockedEvent()
  );

export const getArbitraryAddedToProjectEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    databaseId: getArbitraryInt(),
    id: getArbitraryID(),
  });

export const getArbitraryBaseRefChangedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    databaseId: getArbitraryInt(),
    id: getArbitraryID(),
  });

export const getArbitraryCommentDeletedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    databaseId: getArbitraryInt(),
    id: getArbitraryID(),
  });

export const getArbitraryConnectedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    isCrossRepository: getArbitraryBoolean(),
    source: getArbitraryReferencedSubject(),
    subject: getArbitraryReferencedSubject(),
  });

export const getArbitraryConvertedNoteToIssueEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    databaseId: getArbitraryInt(),
    id: getArbitraryID(),
  });

export const getArbitraryDisconnectedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    isCrossRepository: getArbitraryBoolean(),
    source: getArbitraryReferencedSubject(),
    subject: getArbitraryReferencedSubject(),
  });

export const getArbitraryMarkedAsDuplicateEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
  });

export const getArbitraryMentionedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    databaseId: getArbitraryInt(),
    id: getArbitraryID(),
  });

export const getArbitraryMovedColumnsInProjectEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    databaseId: getArbitraryInt(),
    id: getArbitraryID(),
  });

export const getArbitraryPinnedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    issue: getArbitraryIssue(),
  });

export const getArbitraryPullRequestCommitCommentThread = (): fc.Arbitrary<
  any
> =>
  fc.record({
    comments: getArbitraryCommitCommentConnection(),
    commit: getArbitraryCommit(),
    id: getArbitraryID(),
    path: getArbitraryString(),
    position: getArbitraryInt(),
    pullRequest: getArbitraryPullRequest(),
    repository: getArbitraryRepository(),
  });

export const getArbitraryPullRequestRevisionMarker = (): fc.Arbitrary<any> =>
  fc.record({
    createdAt: getArbitraryDateTime(),
    lastSeenCommit: getArbitraryCommit(),
    pullRequest: getArbitraryPullRequest(),
  });

export const getArbitraryReadyForReviewEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    pullRequest: getArbitraryPullRequest(),
    resourcePath: getArbitraryURI(),
    url: getArbitraryURI(),
  });

export const getArbitraryRemovedFromProjectEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    databaseId: getArbitraryInt(),
    id: getArbitraryID(),
  });

export const getArbitraryTransferredEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    fromRepository: getArbitraryRepository(),
    id: getArbitraryID(),
    issue: getArbitraryIssue(),
  });

export const getArbitraryUnmarkedAsDuplicateEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
  });

export const getArbitraryUnpinnedEvent = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    issue: getArbitraryIssue(),
  });

export const getArbitraryIssueTimelineConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryIssueTimelineItemEdge()),
    nodes: fc.array(getArbitraryIssueTimelineItem()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryIssueTimelineItemEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryIssueTimelineItem(),
  });

export const getArbitraryIssueTimelineItem = (): fc.Arbitrary<any> =>
  fc.oneof(
    getArbitraryAssignedEvent(),
    getArbitraryClosedEvent(),
    getArbitraryCommit(),
    getArbitraryCrossReferencedEvent(),
    getArbitraryDemilestonedEvent(),
    getArbitraryIssueComment(),
    getArbitraryLabeledEvent(),
    getArbitraryLockedEvent(),
    getArbitraryMilestonedEvent(),
    getArbitraryReferencedEvent(),
    getArbitraryRenamedTitleEvent(),
    getArbitraryReopenedEvent(),
    getArbitrarySubscribedEvent(),
    getArbitraryTransferredEvent(),
    getArbitraryUnassignedEvent(),
    getArbitraryUnlabeledEvent(),
    getArbitraryUnlockedEvent(),
    getArbitraryUnsubscribedEvent(),
    getArbitraryUserBlockedEvent()
  );

export const getArbitraryIssueTimelineItemsItemType = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("ADDED_TO_PROJECT_EVENT"),
    fc.constant("ASSIGNED_EVENT"),
    fc.constant("CLOSED_EVENT"),
    fc.constant("COMMENT_DELETED_EVENT"),
    fc.constant("CONNECTED_EVENT"),
    fc.constant("CONVERTED_NOTE_TO_ISSUE_EVENT"),
    fc.constant("CROSS_REFERENCED_EVENT"),
    fc.constant("DEMILESTONED_EVENT"),
    fc.constant("DISCONNECTED_EVENT"),
    fc.constant("ISSUE_COMMENT"),
    fc.constant("LABELED_EVENT"),
    fc.constant("LOCKED_EVENT"),
    fc.constant("MARKED_AS_DUPLICATE_EVENT"),
    fc.constant("MENTIONED_EVENT"),
    fc.constant("MILESTONED_EVENT"),
    fc.constant("MOVED_COLUMNS_IN_PROJECT_EVENT"),
    fc.constant("PINNED_EVENT"),
    fc.constant("REFERENCED_EVENT"),
    fc.constant("REMOVED_FROM_PROJECT_EVENT"),
    fc.constant("RENAMED_TITLE_EVENT"),
    fc.constant("REOPENED_EVENT"),
    fc.constant("SUBSCRIBED_EVENT"),
    fc.constant("TRANSFERRED_EVENT"),
    fc.constant("UNASSIGNED_EVENT"),
    fc.constant("UNLABELED_EVENT"),
    fc.constant("UNLOCKED_EVENT"),
    fc.constant("UNMARKED_AS_DUPLICATE_EVENT"),
    fc.constant("UNPINNED_EVENT"),
    fc.constant("UNSUBSCRIBED_EVENT"),
    fc.constant("USER_BLOCKED_EVENT")
  );

export const getArbitraryIssueTimelineItemsConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryIssueTimelineItemsEdge()),
    filteredCount: getArbitraryInt(),
    nodes: fc.array(getArbitraryIssueTimelineItems()),
    pageCount: getArbitraryInt(),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
    updatedAt: getArbitraryDateTime(),
  });

export const getArbitraryIssueTimelineItemsEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryIssueTimelineItems(),
  });

export const getArbitraryIssueTimelineItems = (): fc.Arbitrary<any> =>
  fc.oneof(
    getArbitraryAddedToProjectEvent(),
    getArbitraryAssignedEvent(),
    getArbitraryClosedEvent(),
    getArbitraryCommentDeletedEvent(),
    getArbitraryConnectedEvent(),
    getArbitraryConvertedNoteToIssueEvent(),
    getArbitraryCrossReferencedEvent(),
    getArbitraryDemilestonedEvent(),
    getArbitraryDisconnectedEvent(),
    getArbitraryIssueComment(),
    getArbitraryLabeledEvent(),
    getArbitraryLockedEvent(),
    getArbitraryMarkedAsDuplicateEvent(),
    getArbitraryMentionedEvent(),
    getArbitraryMilestonedEvent(),
    getArbitraryMovedColumnsInProjectEvent(),
    getArbitraryPinnedEvent(),
    getArbitraryReferencedEvent(),
    getArbitraryRemovedFromProjectEvent(),
    getArbitraryRenamedTitleEvent(),
    getArbitraryReopenedEvent(),
    getArbitrarySubscribedEvent(),
    getArbitraryTransferredEvent(),
    getArbitraryUnassignedEvent(),
    getArbitraryUnlabeledEvent(),
    getArbitraryUnlockedEvent(),
    getArbitraryUnmarkedAsDuplicateEvent(),
    getArbitraryUnpinnedEvent(),
    getArbitraryUnsubscribedEvent(),
    getArbitraryUserBlockedEvent()
  );

export const getArbitraryProjectCardState = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("CONTENT_ONLY"),
    fc.constant("NOTE_ONLY"),
    fc.constant("REDACTED")
  );

export const getArbitraryProjectColumnPurpose = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("DONE"),
    fc.constant("IN_PROGRESS"),
    fc.constant("TODO")
  );

export const getArbitraryProjectState = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("CLOSED"), fc.constant("OPEN"));

export const getArbitraryProjectOrder = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryProjectOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("CREATED_AT"),
    fc.constant("NAME"),
    fc.constant("UPDATED_AT")
  );

export const getArbitraryProjectConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryProjectEdge()),
    nodes: fc.array(getArbitraryProject()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryProjectEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryProject() });

export const getArbitraryRegistryPackageOwner = (): fc.Arbitrary<any> =>
  fc.record({
    id: getArbitraryID(),
    registryPackages: getArbitraryRegistryPackageConnection(),
  });

export const getArbitraryRegistryPackageType = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("DEBIAN"),
    fc.constant("DOCKER"),
    fc.constant("MAVEN"),
    fc.constant("NPM"),
    fc.constant("NUGET"),
    fc.constant("PYTHON"),
    fc.constant("RUBYGEMS")
  );

export const getArbitraryRegistryPackageConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryRegistryPackageEdge()),
    nodes: fc.array(getArbitraryRegistryPackage()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryRegistryPackageEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryRegistryPackage(),
  });

export const getArbitraryRegistryPackage = (): fc.Arbitrary<any> =>
  fc.record({
    color: getArbitraryString(),
    id: getArbitraryID(),
    latestVersion: getArbitraryRegistryPackageVersion(),
    name: getArbitraryString(),
    nameWithOwner: getArbitraryString(),
    packageFileByGuid: getArbitraryRegistryPackageFile(),
    packageFileBySha256: getArbitraryRegistryPackageFile(),
    packageType: getArbitraryRegistryPackageType(),
    preReleaseVersions: getArbitraryRegistryPackageVersionConnection(),
    registryPackageType: getArbitraryString(),
    repository: getArbitraryRepository(),
    statistics: getArbitraryRegistryPackageStatistics(),
    tags: getArbitraryRegistryPackageTagConnection(),
    topics: getArbitraryTopicConnection(),
    version: getArbitraryRegistryPackageVersion(),
    versionByPlatform: getArbitraryRegistryPackageVersion(),
    versionBySha256: getArbitraryRegistryPackageVersion(),
    versions: getArbitraryRegistryPackageVersionConnection(),
    versionsByMetadatum: getArbitraryRegistryPackageVersionConnection(),
  });

export const getArbitraryRegistryPackageVersion = (): fc.Arbitrary<any> =>
  fc.record({
    dependencies: getArbitraryRegistryPackageDependencyConnection(),
    fileByName: getArbitraryRegistryPackageFile(),
    files: getArbitraryRegistryPackageFileConnection(),
    id: getArbitraryID(),
    installationCommand: getArbitraryString(),
    manifest: getArbitraryString(),
    platform: getArbitraryString(),
    preRelease: getArbitraryBoolean(),
    readme: getArbitraryString(),
    readmeHtml: getArbitraryHTML(),
    registryPackage: getArbitraryRegistryPackage(),
    release: getArbitraryRelease(),
    sha256: getArbitraryString(),
    size: getArbitraryInt(),
    statistics: getArbitraryRegistryPackageVersionStatistics(),
    summary: getArbitraryString(),
    updatedAt: getArbitraryDateTime(),
    version: getArbitraryString(),
    viewerCanEdit: getArbitraryBoolean(),
  });

export const getArbitraryRegistryPackageDependencyType = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("BUNDLED"),
    fc.constant("DEFAULT"),
    fc.constant("DEV"),
    fc.constant("OPTIONAL"),
    fc.constant("PEER"),
    fc.constant("TEST")
  );

export const getArbitraryRegistryPackageDependencyConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryRegistryPackageDependencyEdge()),
    nodes: fc.array(getArbitraryRegistryPackageDependency()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryRegistryPackageDependencyEdge = (): fc.Arbitrary<
  any
> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryRegistryPackageDependency(),
  });

export const getArbitraryRegistryPackageDependency = (): fc.Arbitrary<any> =>
  fc.record({
    dependencyType: getArbitraryRegistryPackageDependencyType(),
    id: getArbitraryID(),
    name: getArbitraryString(),
    version: getArbitraryString(),
  });

export const getArbitraryRegistryPackageFile = (): fc.Arbitrary<any> =>
  fc.record({
    guid: getArbitraryString(),
    id: getArbitraryID(),
    md5: getArbitraryString(),
    metadataUrl: getArbitraryURI(),
    name: getArbitraryString(),
    packageVersion: getArbitraryRegistryPackageVersion(),
    sha1: getArbitraryString(),
    sha256: getArbitraryString(),
    size: getArbitraryInt(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
  });

export const getArbitraryRegistryPackageFileConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryRegistryPackageFileEdge()),
    nodes: fc.array(getArbitraryRegistryPackageFile()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryRegistryPackageFileEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryRegistryPackageFile(),
  });

export const getArbitraryRelease = (): fc.Arbitrary<any> =>
  fc.record({
    author: getArbitraryUser(),
    createdAt: getArbitraryDateTime(),
    description: getArbitraryString(),
    descriptionHTML: getArbitraryHTML(),
    id: getArbitraryID(),
    isDraft: getArbitraryBoolean(),
    isPrerelease: getArbitraryBoolean(),
    name: getArbitraryString(),
    publishedAt: getArbitraryDateTime(),
    releaseAssets: getArbitraryReleaseAssetConnection(),
    resourcePath: getArbitraryURI(),
    shortDescriptionHTML: getArbitraryHTML(),
    tag: getArbitraryRef(),
    tagName: getArbitraryString(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
  });

export const getArbitraryReleaseAssetConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryReleaseAssetEdge()),
    nodes: fc.array(getArbitraryReleaseAsset()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryReleaseAssetEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryReleaseAsset() });

export const getArbitraryReleaseAsset = (): fc.Arbitrary<any> =>
  fc.record({
    contentType: getArbitraryString(),
    createdAt: getArbitraryDateTime(),
    downloadCount: getArbitraryInt(),
    downloadUrl: getArbitraryURI(),
    id: getArbitraryID(),
    name: getArbitraryString(),
    release: getArbitraryRelease(),
    size: getArbitraryInt(),
    updatedAt: getArbitraryDateTime(),
    uploadedBy: getArbitraryUser(),
    url: getArbitraryURI(),
  });

export const getArbitraryRegistryPackageVersionStatistics = (): fc.Arbitrary<
  any
> =>
  fc.record({
    downloadsThisMonth: getArbitraryInt(),
    downloadsThisWeek: getArbitraryInt(),
    downloadsThisYear: getArbitraryInt(),
    downloadsToday: getArbitraryInt(),
    downloadsTotalCount: getArbitraryInt(),
  });

export const getArbitraryRegistryPackageVersionConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryRegistryPackageVersionEdge()),
    nodes: fc.array(getArbitraryRegistryPackageVersion()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryRegistryPackageVersionEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryRegistryPackageVersion(),
  });

export const getArbitraryRegistryPackageStatistics = (): fc.Arbitrary<any> =>
  fc.record({
    downloadsThisMonth: getArbitraryInt(),
    downloadsThisWeek: getArbitraryInt(),
    downloadsThisYear: getArbitraryInt(),
    downloadsToday: getArbitraryInt(),
    downloadsTotalCount: getArbitraryInt(),
  });

export const getArbitraryRegistryPackageTagConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryRegistryPackageTagEdge()),
    nodes: fc.array(getArbitraryRegistryPackageTag()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryRegistryPackageTagEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryRegistryPackageTag(),
  });

export const getArbitraryRegistryPackageTag = (): fc.Arbitrary<any> =>
  fc.record({
    id: getArbitraryID(),
    name: getArbitraryString(),
    version: getArbitraryRegistryPackageVersion(),
  });

export const getArbitraryTopicConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryTopicEdge()),
    nodes: fc.array(getArbitraryTopic()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryTopicEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryTopic() });

export const getArbitraryTopic = (): fc.Arbitrary<any> =>
  fc.record({
    id: getArbitraryID(),
    name: getArbitraryString(),
    relatedTopics: fc.array(getArbitraryTopic()),
    stargazers: getArbitraryStargazerConnection(),
    viewerHasStarred: getArbitraryBoolean(),
  });

export const getArbitraryRegistryPackageMetadatum = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryRegistryPackageSearch = (): fc.Arbitrary<any> =>
  fc.record({
    id: getArbitraryID(),
    registryPackagesForQuery: getArbitraryRegistryPackageConnection(),
  });

export const getArbitraryRepositoryInfo = (): fc.Arbitrary<any> =>
  fc.record({
    createdAt: getArbitraryDateTime(),
    description: getArbitraryString(),
    descriptionHTML: getArbitraryHTML(),
    forkCount: getArbitraryInt(),
    hasIssuesEnabled: getArbitraryBoolean(),
    hasProjectsEnabled: getArbitraryBoolean(),
    hasWikiEnabled: getArbitraryBoolean(),
    homepageUrl: getArbitraryURI(),
    isArchived: getArbitraryBoolean(),
    isFork: getArbitraryBoolean(),
    isLocked: getArbitraryBoolean(),
    isMirror: getArbitraryBoolean(),
    isPrivate: getArbitraryBoolean(),
    isTemplate: getArbitraryBoolean(),
    licenseInfo: getArbitraryLicense(),
    lockReason: getArbitraryRepositoryLockReason(),
    mirrorUrl: getArbitraryURI(),
    name: getArbitraryString(),
    nameWithOwner: getArbitraryString(),
    openGraphImageUrl: getArbitraryURI(),
    owner: getArbitraryRepositoryOwner(),
    pushedAt: getArbitraryDateTime(),
    resourcePath: getArbitraryURI(),
    shortDescriptionHTML: getArbitraryHTML(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
    usesCustomOpenGraphImage: getArbitraryBoolean(),
  });

export const getArbitraryLicense = (): fc.Arbitrary<any> =>
  fc.record({
    body: getArbitraryString(),
    conditions: fc.array(getArbitraryLicenseRule()),
    description: getArbitraryString(),
    featured: getArbitraryBoolean(),
    hidden: getArbitraryBoolean(),
    id: getArbitraryID(),
    implementation: getArbitraryString(),
    key: getArbitraryString(),
    limitations: fc.array(getArbitraryLicenseRule()),
    name: getArbitraryString(),
    nickname: getArbitraryString(),
    permissions: fc.array(getArbitraryLicenseRule()),
    pseudoLicense: getArbitraryBoolean(),
    spdxId: getArbitraryString(),
    url: getArbitraryURI(),
  });

export const getArbitraryLicenseRule = (): fc.Arbitrary<any> =>
  fc.record({
    description: getArbitraryString(),
    key: getArbitraryString(),
    label: getArbitraryString(),
  });

export const getArbitraryRepositoryLockReason = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("BILLING"),
    fc.constant("MIGRATING"),
    fc.constant("MOVING"),
    fc.constant("RENAME")
  );

export const getArbitraryBranchProtectionRuleConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryBranchProtectionRuleEdge()),
    nodes: fc.array(getArbitraryBranchProtectionRule()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryBranchProtectionRuleEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryBranchProtectionRule(),
  });

export const getArbitraryBranchProtectionRule = (): fc.Arbitrary<any> =>
  fc.record({
    branchProtectionRuleConflicts: getArbitraryBranchProtectionRuleConflictConnection(),
    creator: getArbitraryActor(),
    databaseId: getArbitraryInt(),
    dismissesStaleReviews: getArbitraryBoolean(),
    id: getArbitraryID(),
    isAdminEnforced: getArbitraryBoolean(),
    matchingRefs: getArbitraryRefConnection(),
    pattern: getArbitraryString(),
    pushAllowances: getArbitraryPushAllowanceConnection(),
    repository: getArbitraryRepository(),
    requiredApprovingReviewCount: getArbitraryInt(),
    requiredStatusCheckContexts: fc.array(getArbitraryString()),
    requiresApprovingReviews: getArbitraryBoolean(),
    requiresCodeOwnerReviews: getArbitraryBoolean(),
    requiresCommitSignatures: getArbitraryBoolean(),
    requiresStatusChecks: getArbitraryBoolean(),
    requiresStrictStatusChecks: getArbitraryBoolean(),
    restrictsPushes: getArbitraryBoolean(),
    restrictsReviewDismissals: getArbitraryBoolean(),
    reviewDismissalAllowances: getArbitraryReviewDismissalAllowanceConnection(),
  });

export const getArbitraryBranchProtectionRuleConflictConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryBranchProtectionRuleConflictEdge()),
    nodes: fc.array(getArbitraryBranchProtectionRuleConflict()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryBranchProtectionRuleConflictEdge = (): fc.Arbitrary<
  any
> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryBranchProtectionRuleConflict(),
  });

export const getArbitraryBranchProtectionRuleConflict = (): fc.Arbitrary<any> =>
  fc.record({
    branchProtectionRule: getArbitraryBranchProtectionRule(),
    conflictingBranchProtectionRule: getArbitraryBranchProtectionRule(),
    ref: getArbitraryRef(),
  });

export const getArbitraryRefConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryRefEdge()),
    nodes: fc.array(getArbitraryRef()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryRefEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryRef() });

export const getArbitraryPushAllowanceConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryPushAllowanceEdge()),
    nodes: fc.array(getArbitraryPushAllowance()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryPushAllowanceEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryPushAllowance(),
  });

export const getArbitraryPushAllowance = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryPushAllowanceActor(),
    branchProtectionRule: getArbitraryBranchProtectionRule(),
    id: getArbitraryID(),
  });

export const getArbitraryPushAllowanceActor = (): fc.Arbitrary<any> =>
  fc.oneof(getArbitraryApp(), getArbitraryTeam(), getArbitraryUser());

export const getArbitraryApp = (): fc.Arbitrary<any> =>
  fc.record({
    createdAt: getArbitraryDateTime(),
    databaseId: getArbitraryInt(),
    description: getArbitraryString(),
    id: getArbitraryID(),
    logoBackgroundColor: getArbitraryString(),
    logoUrl: getArbitraryURI(),
    name: getArbitraryString(),
    slug: getArbitraryString(),
    updatedAt: getArbitraryDateTime(),
    url: getArbitraryURI(),
  });

export const getArbitraryReviewDismissalAllowanceConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryReviewDismissalAllowanceEdge()),
    nodes: fc.array(getArbitraryReviewDismissalAllowance()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryReviewDismissalAllowanceEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryReviewDismissalAllowance(),
  });

export const getArbitraryReviewDismissalAllowance = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryReviewDismissalAllowanceActor(),
    branchProtectionRule: getArbitraryBranchProtectionRule(),
    id: getArbitraryID(),
  });

export const getArbitraryReviewDismissalAllowanceActor = (): fc.Arbitrary<
  any
> => fc.oneof(getArbitraryTeam(), getArbitraryUser());

export const getArbitraryCollaboratorAffiliation = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("ALL"), fc.constant("DIRECT"), fc.constant("OUTSIDE"));

export const getArbitraryRepositoryCollaboratorConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryRepositoryCollaboratorEdge()),
    nodes: fc.array(getArbitraryUser()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryRepositoryCollaboratorEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryUser(),
    permission: getArbitraryRepositoryPermission(),
    permissionSources: fc.array(getArbitraryPermissionSource()),
  });

export const getArbitraryPermissionSource = (): fc.Arbitrary<any> =>
  fc.record({
    organization: getArbitraryOrganization(),
    permission: getArbitraryDefaultRepositoryPermissionField(),
    source: getArbitraryPermissionGranter(),
  });

export const getArbitraryDefaultRepositoryPermissionField = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("ADMIN"),
    fc.constant("NONE"),
    fc.constant("READ"),
    fc.constant("WRITE")
  );

export const getArbitraryPermissionGranter = (): fc.Arbitrary<any> =>
  fc.oneof(
    getArbitraryOrganization(),
    getArbitraryRepository(),
    getArbitraryTeam()
  );

export const getArbitraryDeployKeyConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryDeployKeyEdge()),
    nodes: fc.array(getArbitraryDeployKey()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryDeployKeyEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryDeployKey() });

export const getArbitraryDeployKey = (): fc.Arbitrary<any> =>
  fc.record({
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    key: getArbitraryString(),
    readOnly: getArbitraryBoolean(),
    title: getArbitraryString(),
    verified: getArbitraryBoolean(),
  });

export const getArbitraryFundingLink = (): fc.Arbitrary<any> =>
  fc.record({
    platform: getArbitraryFundingPlatform(),
    url: getArbitraryURI(),
  });

export const getArbitraryFundingPlatform = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("COMMUNITY_BRIDGE"),
    fc.constant("CUSTOM"),
    fc.constant("GITHUB"),
    fc.constant("ISSUEHUNT"),
    fc.constant("KO_FI"),
    fc.constant("LIBERAPAY"),
    fc.constant("OPEN_COLLECTIVE"),
    fc.constant("OTECHIE"),
    fc.constant("PATREON"),
    fc.constant("TIDELIFT")
  );

export const getArbitraryIssueOrPullRequest = (): fc.Arbitrary<any> =>
  fc.oneof(getArbitraryIssue(), getArbitraryPullRequest());

export const getArbitraryLanguageOrder = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryLanguageOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("SIZE"));

export const getArbitraryLanguageConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryLanguageEdge()),
    nodes: fc.array(getArbitraryLanguage()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
    totalSize: getArbitraryInt(),
  });

export const getArbitraryLanguageEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryLanguage(),
    size: getArbitraryInt(),
  });

export const getArbitraryMilestoneOrder = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryMilestoneOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("CREATED_AT"),
    fc.constant("DUE_DATE"),
    fc.constant("NUMBER"),
    fc.constant("UPDATED_AT")
  );

export const getArbitraryMilestoneConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryMilestoneEdge()),
    nodes: fc.array(getArbitraryMilestone()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryMilestoneEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryMilestone() });

export const getArbitraryRefOrder = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryRefOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("ALPHABETICAL"), fc.constant("TAG_COMMIT_DATE"));

export const getArbitraryReleaseOrder = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryReleaseOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("CREATED_AT"), fc.constant("NAME"));

export const getArbitraryReleaseConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryReleaseEdge()),
    nodes: fc.array(getArbitraryRelease()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryReleaseEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryRelease() });

export const getArbitraryRepositoryTopicConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryRepositoryTopicEdge()),
    nodes: fc.array(getArbitraryRepositoryTopic()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryRepositoryTopicEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryRepositoryTopic(),
  });

export const getArbitraryRepositoryTopic = (): fc.Arbitrary<any> =>
  fc.record({
    id: getArbitraryID(),
    resourcePath: getArbitraryURI(),
    topic: getArbitraryTopic(),
    url: getArbitraryURI(),
  });

export const getArbitraryGitSSHRemote = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryRepositoryVulnerabilityAlertConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryRepositoryVulnerabilityAlertEdge()),
    nodes: fc.array(getArbitraryRepositoryVulnerabilityAlert()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryRepositoryVulnerabilityAlertEdge = (): fc.Arbitrary<
  any
> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryRepositoryVulnerabilityAlert(),
  });

export const getArbitraryRepositoryVulnerabilityAlert = (): fc.Arbitrary<any> =>
  fc.record({
    affectedRange: getArbitraryString(),
    createdAt: getArbitraryDateTime(),
    dismissReason: getArbitraryString(),
    dismissedAt: getArbitraryDateTime(),
    dismisser: getArbitraryUser(),
    externalIdentifier: getArbitraryString(),
    externalReference: getArbitraryString(),
    fixedIn: getArbitraryString(),
    id: getArbitraryID(),
    packageName: getArbitraryString(),
    repository: getArbitraryRepository(),
    securityAdvisory: getArbitrarySecurityAdvisory(),
    securityVulnerability: getArbitrarySecurityVulnerability(),
    vulnerableManifestFilename: getArbitraryString(),
    vulnerableManifestPath: getArbitraryString(),
    vulnerableRequirements: getArbitraryString(),
  });

export const getArbitrarySecurityAdvisory = (): fc.Arbitrary<any> =>
  fc.record({
    databaseId: getArbitraryInt(),
    description: getArbitraryString(),
    ghsaId: getArbitraryString(),
    id: getArbitraryID(),
    identifiers: fc.array(getArbitrarySecurityAdvisoryIdentifier()),
    origin: getArbitraryString(),
    permalink: getArbitraryURI(),
    publishedAt: getArbitraryDateTime(),
    references: fc.array(getArbitrarySecurityAdvisoryReference()),
    severity: getArbitrarySecurityAdvisorySeverity(),
    summary: getArbitraryString(),
    updatedAt: getArbitraryDateTime(),
    vulnerabilities: getArbitrarySecurityVulnerabilityConnection(),
    withdrawnAt: getArbitraryDateTime(),
  });

export const getArbitrarySecurityAdvisoryIdentifier = (): fc.Arbitrary<any> =>
  fc.record({ type: getArbitraryString(), value: getArbitraryString() });

export const getArbitrarySecurityAdvisoryReference = (): fc.Arbitrary<any> =>
  fc.record({ url: getArbitraryURI() });

export const getArbitrarySecurityAdvisorySeverity = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("CRITICAL"),
    fc.constant("HIGH"),
    fc.constant("LOW"),
    fc.constant("MODERATE")
  );

export const getArbitrarySecurityAdvisoryEcosystem = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("COMPOSER"),
    fc.constant("MAVEN"),
    fc.constant("NPM"),
    fc.constant("NUGET"),
    fc.constant("PIP"),
    fc.constant("RUBYGEMS")
  );

export const getArbitrarySecurityVulnerabilityOrder = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitrarySecurityVulnerabilityOrderField = (): fc.Arbitrary<
  any
> => fc.oneof(fc.constant("UPDATED_AT"));

export const getArbitrarySecurityVulnerabilityConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitrarySecurityVulnerabilityEdge()),
    nodes: fc.array(getArbitrarySecurityVulnerability()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitrarySecurityVulnerabilityEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitrarySecurityVulnerability(),
  });

export const getArbitrarySecurityVulnerability = (): fc.Arbitrary<any> =>
  fc.record({
    advisory: getArbitrarySecurityAdvisory(),
    firstPatchedVersion: getArbitrarySecurityAdvisoryPackageVersion(),
    package: getArbitrarySecurityAdvisoryPackage(),
    severity: getArbitrarySecurityAdvisorySeverity(),
    updatedAt: getArbitraryDateTime(),
    vulnerableVersionRange: getArbitraryString(),
  });

export const getArbitrarySecurityAdvisoryPackageVersion = (): fc.Arbitrary<
  any
> => fc.record({ identifier: getArbitraryString() });

export const getArbitrarySecurityAdvisoryPackage = (): fc.Arbitrary<any> =>
  fc.record({
    ecosystem: getArbitrarySecurityAdvisoryEcosystem(),
    name: getArbitraryString(),
  });

export const getArbitrarySponsorable = (): fc.Arbitrary<any> =>
  fc.record({
    sponsorsListing: getArbitrarySponsorsListing(),
    sponsorshipsAsMaintainer: getArbitrarySponsorshipConnection(),
    sponsorshipsAsSponsor: getArbitrarySponsorshipConnection(),
  });

export const getArbitrarySponsorsListing = (): fc.Arbitrary<any> =>
  fc.record({
    createdAt: getArbitraryDateTime(),
    fullDescription: getArbitraryString(),
    fullDescriptionHTML: getArbitraryHTML(),
    id: getArbitraryID(),
    name: getArbitraryString(),
    shortDescription: getArbitraryString(),
    slug: getArbitraryString(),
    tiers: getArbitrarySponsorsTierConnection(),
  });

export const getArbitrarySponsorsTierOrder = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitrarySponsorsTierOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("CREATED_AT"), fc.constant("MONTHLY_PRICE_IN_CENTS"));

export const getArbitrarySponsorsTierConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitrarySponsorsTierEdge()),
    nodes: fc.array(getArbitrarySponsorsTier()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitrarySponsorsTierEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitrarySponsorsTier() });

export const getArbitrarySponsorsTier = (): fc.Arbitrary<any> =>
  fc.record({
    adminInfo: getArbitrarySponsorsTierAdminInfo(),
    createdAt: getArbitraryDateTime(),
    description: getArbitraryString(),
    descriptionHTML: getArbitraryHTML(),
    id: getArbitraryID(),
    monthlyPriceInCents: getArbitraryInt(),
    monthlyPriceInDollars: getArbitraryInt(),
    name: getArbitraryString(),
    sponsorsListing: getArbitrarySponsorsListing(),
    updatedAt: getArbitraryDateTime(),
  });

export const getArbitrarySponsorsTierAdminInfo = (): fc.Arbitrary<any> =>
  fc.record({ sponsorships: getArbitrarySponsorshipConnection() });

export const getArbitrarySponsorshipOrder = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitrarySponsorshipOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("CREATED_AT"));

export const getArbitrarySponsorshipConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitrarySponsorshipEdge()),
    nodes: fc.array(getArbitrarySponsorship()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitrarySponsorshipEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitrarySponsorship() });

export const getArbitrarySponsorship = (): fc.Arbitrary<any> =>
  fc.record({
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    maintainer: getArbitraryUser(),
    privacyLevel: getArbitrarySponsorshipPrivacy(),
    sponsor: getArbitraryUser(),
    sponsorable: getArbitrarySponsorable(),
    tier: getArbitrarySponsorsTier(),
  });

export const getArbitrarySponsorshipPrivacy = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("PRIVATE"), fc.constant("PUBLIC"));

export const getArbitraryContributionsCollection = (): fc.Arbitrary<any> =>
  fc.record({
    commitContributionsByRepository: fc.array(
      getArbitraryCommitContributionsByRepository()
    ),
    contributionCalendar: getArbitraryContributionCalendar(),
    contributionYears: fc.array(getArbitraryInt()),
    doesEndInCurrentMonth: getArbitraryBoolean(),
    earliestRestrictedContributionDate: getArbitraryDate(),
    endedAt: getArbitraryDateTime(),
    firstIssueContribution: getArbitraryCreatedIssueOrRestrictedContribution(),
    firstPullRequestContribution: getArbitraryCreatedPullRequestOrRestrictedContribution(),
    firstRepositoryContribution: getArbitraryCreatedRepositoryOrRestrictedContribution(),
    hasActivityInThePast: getArbitraryBoolean(),
    hasAnyContributions: getArbitraryBoolean(),
    hasAnyRestrictedContributions: getArbitraryBoolean(),
    isSingleDay: getArbitraryBoolean(),
    issueContributions: getArbitraryCreatedIssueContributionConnection(),
    issueContributionsByRepository: fc.array(
      getArbitraryIssueContributionsByRepository()
    ),
    joinedGitHubContribution: getArbitraryJoinedGitHubContribution(),
    latestRestrictedContributionDate: getArbitraryDate(),
    mostRecentCollectionWithActivity: getArbitraryContributionsCollection(),
    mostRecentCollectionWithoutActivity: getArbitraryContributionsCollection(),
    popularIssueContribution: getArbitraryCreatedIssueContribution(),
    popularPullRequestContribution: getArbitraryCreatedPullRequestContribution(),
    pullRequestContributions: getArbitraryCreatedPullRequestContributionConnection(),
    pullRequestContributionsByRepository: fc.array(
      getArbitraryPullRequestContributionsByRepository()
    ),
    pullRequestReviewContributions: getArbitraryCreatedPullRequestReviewContributionConnection(),
    pullRequestReviewContributionsByRepository: fc.array(
      getArbitraryPullRequestReviewContributionsByRepository()
    ),
    repositoryContributions: getArbitraryCreatedRepositoryContributionConnection(),
    restrictedContributionsCount: getArbitraryInt(),
    startedAt: getArbitraryDateTime(),
    totalCommitContributions: getArbitraryInt(),
    totalIssueContributions: getArbitraryInt(),
    totalPullRequestContributions: getArbitraryInt(),
    totalPullRequestReviewContributions: getArbitraryInt(),
    totalRepositoriesWithContributedCommits: getArbitraryInt(),
    totalRepositoriesWithContributedIssues: getArbitraryInt(),
    totalRepositoriesWithContributedPullRequestReviews: getArbitraryInt(),
    totalRepositoriesWithContributedPullRequests: getArbitraryInt(),
    totalRepositoryContributions: getArbitraryInt(),
    user: getArbitraryUser(),
  });

export const getArbitraryCommitContributionsByRepository = (): fc.Arbitrary<
  any
> =>
  fc.record({
    contributions: getArbitraryCreatedCommitContributionConnection(),
    repository: getArbitraryRepository(),
    resourcePath: getArbitraryURI(),
    url: getArbitraryURI(),
  });

export const getArbitraryCommitContributionOrder = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryCommitContributionOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("COMMIT_COUNT"), fc.constant("OCCURRED_AT"));

export const getArbitraryCreatedCommitContributionConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryCreatedCommitContributionEdge()),
    nodes: fc.array(getArbitraryCreatedCommitContribution()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryCreatedCommitContributionEdge = (): fc.Arbitrary<
  any
> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryCreatedCommitContribution(),
  });

export const getArbitraryCreatedCommitContribution = (): fc.Arbitrary<any> =>
  fc.record({
    commitCount: getArbitraryInt(),
    isRestricted: getArbitraryBoolean(),
    occurredAt: getArbitraryDateTime(),
    repository: getArbitraryRepository(),
    resourcePath: getArbitraryURI(),
    url: getArbitraryURI(),
    user: getArbitraryUser(),
  });

export const getArbitraryContribution = (): fc.Arbitrary<any> =>
  fc.record({
    isRestricted: getArbitraryBoolean(),
    occurredAt: getArbitraryDateTime(),
    resourcePath: getArbitraryURI(),
    url: getArbitraryURI(),
    user: getArbitraryUser(),
  });

export const getArbitraryContributionCalendar = (): fc.Arbitrary<any> =>
  fc.record({
    colors: fc.array(getArbitraryString()),
    isHalloween: getArbitraryBoolean(),
    months: fc.array(getArbitraryContributionCalendarMonth()),
    totalContributions: getArbitraryInt(),
    weeks: fc.array(getArbitraryContributionCalendarWeek()),
  });

export const getArbitraryContributionCalendarMonth = (): fc.Arbitrary<any> =>
  fc.record({
    firstDay: getArbitraryDate(),
    name: getArbitraryString(),
    totalWeeks: getArbitraryInt(),
    year: getArbitraryInt(),
  });

export const getArbitraryDate = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryContributionCalendarWeek = (): fc.Arbitrary<any> =>
  fc.record({
    contributionDays: fc.array(getArbitraryContributionCalendarDay()),
    firstDay: getArbitraryDate(),
  });

export const getArbitraryContributionCalendarDay = (): fc.Arbitrary<any> =>
  fc.record({
    color: getArbitraryString(),
    contributionCount: getArbitraryInt(),
    date: getArbitraryDate(),
    weekday: getArbitraryInt(),
  });

export const getArbitraryCreatedIssueOrRestrictedContribution = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    getArbitraryCreatedIssueContribution(),
    getArbitraryRestrictedContribution()
  );

export const getArbitraryCreatedIssueContribution = (): fc.Arbitrary<any> =>
  fc.record({
    isRestricted: getArbitraryBoolean(),
    issue: getArbitraryIssue(),
    occurredAt: getArbitraryDateTime(),
    resourcePath: getArbitraryURI(),
    url: getArbitraryURI(),
    user: getArbitraryUser(),
  });

export const getArbitraryRestrictedContribution = (): fc.Arbitrary<any> =>
  fc.record({
    isRestricted: getArbitraryBoolean(),
    occurredAt: getArbitraryDateTime(),
    resourcePath: getArbitraryURI(),
    url: getArbitraryURI(),
    user: getArbitraryUser(),
  });

export const getArbitraryCreatedPullRequestOrRestrictedContribution = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    getArbitraryCreatedPullRequestContribution(),
    getArbitraryRestrictedContribution()
  );

export const getArbitraryCreatedPullRequestContribution = (): fc.Arbitrary<
  any
> =>
  fc.record({
    isRestricted: getArbitraryBoolean(),
    occurredAt: getArbitraryDateTime(),
    pullRequest: getArbitraryPullRequest(),
    resourcePath: getArbitraryURI(),
    url: getArbitraryURI(),
    user: getArbitraryUser(),
  });

export const getArbitraryCreatedRepositoryOrRestrictedContribution = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    getArbitraryCreatedRepositoryContribution(),
    getArbitraryRestrictedContribution()
  );

export const getArbitraryCreatedRepositoryContribution = (): fc.Arbitrary<
  any
> =>
  fc.record({
    isRestricted: getArbitraryBoolean(),
    occurredAt: getArbitraryDateTime(),
    repository: getArbitraryRepository(),
    resourcePath: getArbitraryURI(),
    url: getArbitraryURI(),
    user: getArbitraryUser(),
  });

export const getArbitraryContributionOrder = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryContributionOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("OCCURRED_AT"));

export const getArbitraryCreatedIssueContributionConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryCreatedIssueContributionEdge()),
    nodes: fc.array(getArbitraryCreatedIssueContribution()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryCreatedIssueContributionEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryCreatedIssueContribution(),
  });

export const getArbitraryIssueContributionsByRepository = (): fc.Arbitrary<
  any
> =>
  fc.record({
    contributions: getArbitraryCreatedIssueContributionConnection(),
    repository: getArbitraryRepository(),
  });

export const getArbitraryJoinedGitHubContribution = (): fc.Arbitrary<any> =>
  fc.record({
    isRestricted: getArbitraryBoolean(),
    occurredAt: getArbitraryDateTime(),
    resourcePath: getArbitraryURI(),
    url: getArbitraryURI(),
    user: getArbitraryUser(),
  });

export const getArbitraryCreatedPullRequestContributionConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryCreatedPullRequestContributionEdge()),
    nodes: fc.array(getArbitraryCreatedPullRequestContribution()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryCreatedPullRequestContributionEdge = (): fc.Arbitrary<
  any
> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryCreatedPullRequestContribution(),
  });

export const getArbitraryPullRequestContributionsByRepository = (): fc.Arbitrary<
  any
> =>
  fc.record({
    contributions: getArbitraryCreatedPullRequestContributionConnection(),
    repository: getArbitraryRepository(),
  });

export const getArbitraryCreatedPullRequestReviewContributionConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryCreatedPullRequestReviewContributionEdge()),
    nodes: fc.array(getArbitraryCreatedPullRequestReviewContribution()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryCreatedPullRequestReviewContributionEdge = (): fc.Arbitrary<
  any
> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryCreatedPullRequestReviewContribution(),
  });

export const getArbitraryCreatedPullRequestReviewContribution = (): fc.Arbitrary<
  any
> =>
  fc.record({
    isRestricted: getArbitraryBoolean(),
    occurredAt: getArbitraryDateTime(),
    pullRequest: getArbitraryPullRequest(),
    pullRequestReview: getArbitraryPullRequestReview(),
    repository: getArbitraryRepository(),
    resourcePath: getArbitraryURI(),
    url: getArbitraryURI(),
    user: getArbitraryUser(),
  });

export const getArbitraryPullRequestReviewContributionsByRepository = (): fc.Arbitrary<
  any
> =>
  fc.record({
    contributions: getArbitraryCreatedPullRequestReviewContributionConnection(),
    repository: getArbitraryRepository(),
  });

export const getArbitraryCreatedRepositoryContributionConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryCreatedRepositoryContributionEdge()),
    nodes: fc.array(getArbitraryCreatedRepositoryContribution()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryCreatedRepositoryContributionEdge = (): fc.Arbitrary<
  any
> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryCreatedRepositoryContribution(),
  });

export const getArbitraryFollowerConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryUserEdge()),
    nodes: fc.array(getArbitraryUser()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryFollowingConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryUserEdge()),
    nodes: fc.array(getArbitraryUser()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryGistPrivacy = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("ALL"), fc.constant("PUBLIC"), fc.constant("SECRET"));

export const getArbitraryOrganizationConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryOrganizationEdge()),
    nodes: fc.array(getArbitraryOrganization()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryOrganizationEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryOrganization() });

export const getArbitraryPublicKeyConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryPublicKeyEdge()),
    nodes: fc.array(getArbitraryPublicKey()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryPublicKeyEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitraryPublicKey() });

export const getArbitraryPublicKey = (): fc.Arbitrary<any> =>
  fc.record({
    accessedAt: getArbitraryDateTime(),
    createdAt: getArbitraryDateTime(),
    fingerprint: getArbitraryString(),
    id: getArbitraryID(),
    isReadOnly: getArbitraryBoolean(),
    key: getArbitraryString(),
    updatedAt: getArbitraryDateTime(),
  });

export const getArbitraryRepositoryContributionType = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("COMMIT"),
    fc.constant("ISSUE"),
    fc.constant("PULL_REQUEST"),
    fc.constant("PULL_REQUEST_REVIEW"),
    fc.constant("REPOSITORY")
  );

export const getArbitrarySavedReplyOrder = (): fc.Arbitrary<any> => fc.string();

export const getArbitrarySavedReplyOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("UPDATED_AT"));

export const getArbitrarySavedReplyConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitrarySavedReplyEdge()),
    nodes: fc.array(getArbitrarySavedReply()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitrarySavedReplyEdge = (): fc.Arbitrary<any> =>
  fc.record({ cursor: getArbitraryString(), node: getArbitrarySavedReply() });

export const getArbitrarySavedReply = (): fc.Arbitrary<any> =>
  fc.record({
    body: getArbitraryString(),
    bodyHTML: getArbitraryHTML(),
    databaseId: getArbitraryInt(),
    id: getArbitraryID(),
    title: getArbitraryString(),
    user: getArbitraryActor(),
  });

export const getArbitraryStarredRepositoryConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryStarredRepositoryEdge()),
    nodes: fc.array(getArbitraryRepository()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryStarredRepositoryEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryRepository(),
    starredAt: getArbitraryDateTime(),
  });

export const getArbitraryAuditLogOrder = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryAuditLogOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("CREATED_AT"));

export const getArbitraryOrganizationAuditEntryConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryOrganizationAuditEntryEdge()),
    nodes: fc.array(getArbitraryOrganizationAuditEntry()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryOrganizationAuditEntryEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryOrganizationAuditEntry(),
  });

export const getArbitraryOrganizationAuditEntry = (): fc.Arbitrary<any> =>
  fc.oneof(
    getArbitraryMembersCanDeleteReposClearAuditEntry(),
    getArbitraryMembersCanDeleteReposDisableAuditEntry(),
    getArbitraryMembersCanDeleteReposEnableAuditEntry(),
    getArbitraryOauthApplicationCreateAuditEntry(),
    getArbitraryOrgAddBillingManagerAuditEntry(),
    getArbitraryOrgAddMemberAuditEntry(),
    getArbitraryOrgBlockUserAuditEntry(),
    getArbitraryOrgConfigDisableCollaboratorsOnlyAuditEntry(),
    getArbitraryOrgConfigEnableCollaboratorsOnlyAuditEntry(),
    getArbitraryOrgCreateAuditEntry(),
    getArbitraryOrgDisableOauthAppRestrictionsAuditEntry(),
    getArbitraryOrgDisableSamlAuditEntry(),
    getArbitraryOrgDisableTwoFactorRequirementAuditEntry(),
    getArbitraryOrgEnableOauthAppRestrictionsAuditEntry(),
    getArbitraryOrgEnableSamlAuditEntry(),
    getArbitraryOrgEnableTwoFactorRequirementAuditEntry(),
    getArbitraryOrgInviteMemberAuditEntry(),
    getArbitraryOrgInviteToBusinessAuditEntry(),
    getArbitraryOrgOauthAppAccessApprovedAuditEntry(),
    getArbitraryOrgOauthAppAccessDeniedAuditEntry(),
    getArbitraryOrgOauthAppAccessRequestedAuditEntry(),
    getArbitraryOrgRemoveBillingManagerAuditEntry(),
    getArbitraryOrgRemoveMemberAuditEntry(),
    getArbitraryOrgRemoveOutsideCollaboratorAuditEntry(),
    getArbitraryOrgRestoreMemberAuditEntry(),
    getArbitraryOrgUnblockUserAuditEntry(),
    getArbitraryOrgUpdateDefaultRepositoryPermissionAuditEntry(),
    getArbitraryOrgUpdateMemberAuditEntry(),
    getArbitraryOrgUpdateMemberRepositoryCreationPermissionAuditEntry(),
    getArbitraryOrgUpdateMemberRepositoryInvitationPermissionAuditEntry(),
    getArbitraryPrivateRepositoryForkingDisableAuditEntry(),
    getArbitraryPrivateRepositoryForkingEnableAuditEntry(),
    getArbitraryRepoAccessAuditEntry(),
    getArbitraryRepoAddMemberAuditEntry(),
    getArbitraryRepoAddTopicAuditEntry(),
    getArbitraryRepoArchivedAuditEntry(),
    getArbitraryRepoChangeMergeSettingAuditEntry(),
    getArbitraryRepoConfigDisableAnonymousGitAccessAuditEntry(),
    getArbitraryRepoConfigDisableCollaboratorsOnlyAuditEntry(),
    getArbitraryRepoConfigDisableContributorsOnlyAuditEntry(),
    getArbitraryRepoConfigDisableSockpuppetDisallowedAuditEntry(),
    getArbitraryRepoConfigEnableAnonymousGitAccessAuditEntry(),
    getArbitraryRepoConfigEnableCollaboratorsOnlyAuditEntry(),
    getArbitraryRepoConfigEnableContributorsOnlyAuditEntry(),
    getArbitraryRepoConfigEnableSockpuppetDisallowedAuditEntry(),
    getArbitraryRepoConfigLockAnonymousGitAccessAuditEntry(),
    getArbitraryRepoConfigUnlockAnonymousGitAccessAuditEntry(),
    getArbitraryRepoCreateAuditEntry(),
    getArbitraryRepoDestroyAuditEntry(),
    getArbitraryRepoRemoveMemberAuditEntry(),
    getArbitraryRepoRemoveTopicAuditEntry(),
    getArbitraryRepositoryVisibilityChangeDisableAuditEntry(),
    getArbitraryRepositoryVisibilityChangeEnableAuditEntry(),
    getArbitraryTeamAddMemberAuditEntry(),
    getArbitraryTeamAddRepositoryAuditEntry(),
    getArbitraryTeamChangeParentTeamAuditEntry(),
    getArbitraryTeamRemoveMemberAuditEntry(),
    getArbitraryTeamRemoveRepositoryAuditEntry()
  );

export const getArbitraryMembersCanDeleteReposClearAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    enterpriseResourcePath: getArbitraryURI(),
    enterpriseSlug: getArbitraryString(),
    enterpriseUrl: getArbitraryURI(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryAuditEntry = (): fc.Arbitrary<any> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    operationType: getArbitraryOperationType(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryAuditEntryActor = (): fc.Arbitrary<any> =>
  fc.oneof(getArbitraryBot(), getArbitraryOrganization(), getArbitraryUser());

export const getArbitraryActorLocation = (): fc.Arbitrary<any> =>
  fc.record({
    city: getArbitraryString(),
    country: getArbitraryString(),
    countryCode: getArbitraryString(),
    region: getArbitraryString(),
    regionCode: getArbitraryString(),
  });

export const getArbitraryPreciseDateTime = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryOperationType = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("ACCESS"),
    fc.constant("AUTHENTICATION"),
    fc.constant("CREATE"),
    fc.constant("MODIFY"),
    fc.constant("REMOVE"),
    fc.constant("RESTORE"),
    fc.constant("TRANSFER")
  );

export const getArbitraryEnterpriseAuditEntryData = (): fc.Arbitrary<any> =>
  fc.record({
    enterpriseResourcePath: getArbitraryURI(),
    enterpriseSlug: getArbitraryString(),
    enterpriseUrl: getArbitraryURI(),
  });

export const getArbitraryOrganizationAuditEntryData = (): fc.Arbitrary<any> =>
  fc.record({
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
  });

export const getArbitraryMembersCanDeleteReposDisableAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    enterpriseResourcePath: getArbitraryURI(),
    enterpriseSlug: getArbitraryString(),
    enterpriseUrl: getArbitraryURI(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryMembersCanDeleteReposEnableAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    enterpriseResourcePath: getArbitraryURI(),
    enterpriseSlug: getArbitraryString(),
    enterpriseUrl: getArbitraryURI(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOauthApplicationCreateAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    applicationUrl: getArbitraryURI(),
    callbackUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    oauthApplicationName: getArbitraryString(),
    oauthApplicationResourcePath: getArbitraryURI(),
    oauthApplicationUrl: getArbitraryURI(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    rateLimit: getArbitraryInt(),
    state: getArbitraryOauthApplicationCreateAuditEntryState(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOauthApplicationAuditEntryData = (): fc.Arbitrary<
  any
> =>
  fc.record({
    oauthApplicationName: getArbitraryString(),
    oauthApplicationResourcePath: getArbitraryURI(),
    oauthApplicationUrl: getArbitraryURI(),
  });

export const getArbitraryOauthApplicationCreateAuditEntryState = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("ACTIVE"),
    fc.constant("PENDING_DELETION"),
    fc.constant("SUSPENDED")
  );

export const getArbitraryOrgAddBillingManagerAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    invitationEmail: getArbitraryString(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgAddMemberAuditEntry = (): fc.Arbitrary<any> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    permission: getArbitraryOrgAddMemberAuditEntryPermission(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgAddMemberAuditEntryPermission = (): fc.Arbitrary<
  any
> => fc.oneof(fc.constant("ADMIN"), fc.constant("READ"));

export const getArbitraryOrgBlockUserAuditEntry = (): fc.Arbitrary<any> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    blockedUser: getArbitraryUser(),
    blockedUserName: getArbitraryString(),
    blockedUserResourcePath: getArbitraryURI(),
    blockedUserUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgConfigDisableCollaboratorsOnlyAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgConfigEnableCollaboratorsOnlyAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgCreateAuditEntry = (): fc.Arbitrary<any> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    billingPlan: getArbitraryOrgCreateAuditEntryBillingPlan(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgCreateAuditEntryBillingPlan = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("BUSINESS"),
    fc.constant("BUSINESS_PLUS"),
    fc.constant("FREE"),
    fc.constant("TIERED_PER_SEAT"),
    fc.constant("UNLIMITED")
  );

export const getArbitraryOrgDisableOauthAppRestrictionsAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgDisableSamlAuditEntry = (): fc.Arbitrary<any> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    digestMethodUrl: getArbitraryURI(),
    id: getArbitraryID(),
    issuerUrl: getArbitraryURI(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    signatureMethodUrl: getArbitraryURI(),
    singleSignOnUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgDisableTwoFactorRequirementAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgEnableOauthAppRestrictionsAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgEnableSamlAuditEntry = (): fc.Arbitrary<any> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    digestMethodUrl: getArbitraryURI(),
    id: getArbitraryID(),
    issuerUrl: getArbitraryURI(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    signatureMethodUrl: getArbitraryURI(),
    singleSignOnUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgEnableTwoFactorRequirementAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgInviteMemberAuditEntry = (): fc.Arbitrary<any> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    email: getArbitraryString(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationInvitation: getArbitraryOrganizationInvitation(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgInviteToBusinessAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    enterpriseResourcePath: getArbitraryURI(),
    enterpriseSlug: getArbitraryString(),
    enterpriseUrl: getArbitraryURI(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgOauthAppAccessApprovedAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    oauthApplicationName: getArbitraryString(),
    oauthApplicationResourcePath: getArbitraryURI(),
    oauthApplicationUrl: getArbitraryURI(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgOauthAppAccessDeniedAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    oauthApplicationName: getArbitraryString(),
    oauthApplicationResourcePath: getArbitraryURI(),
    oauthApplicationUrl: getArbitraryURI(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgOauthAppAccessRequestedAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    oauthApplicationName: getArbitraryString(),
    oauthApplicationResourcePath: getArbitraryURI(),
    oauthApplicationUrl: getArbitraryURI(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgRemoveBillingManagerAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    reason: getArbitraryOrgRemoveBillingManagerAuditEntryReason(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgRemoveBillingManagerAuditEntryReason = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("SAML_EXTERNAL_IDENTITY_MISSING"),
    fc.constant("SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY"),
    fc.constant("TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE")
  );

export const getArbitraryOrgRemoveMemberAuditEntry = (): fc.Arbitrary<any> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    membershipTypes: fc.array(
      getArbitraryOrgRemoveMemberAuditEntryMembershipType()
    ),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    reason: getArbitraryOrgRemoveMemberAuditEntryReason(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgRemoveMemberAuditEntryMembershipType = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("ADMIN"),
    fc.constant("BILLING_MANAGER"),
    fc.constant("DIRECT_MEMBER"),
    fc.constant("OUTSIDE_COLLABORATOR"),
    fc.constant("UNAFFILIATED")
  );

export const getArbitraryOrgRemoveMemberAuditEntryReason = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("SAML_EXTERNAL_IDENTITY_MISSING"),
    fc.constant("SAML_SSO_ENFORCEMENT_REQUIRES_EXTERNAL_IDENTITY"),
    fc.constant("TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE")
  );

export const getArbitraryOrgRemoveOutsideCollaboratorAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    membershipTypes: fc.array(
      getArbitraryOrgRemoveOutsideCollaboratorAuditEntryMembershipType()
    ),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    reason: getArbitraryOrgRemoveOutsideCollaboratorAuditEntryReason(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgRemoveOutsideCollaboratorAuditEntryMembershipType = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("BILLING_MANAGER"),
    fc.constant("OUTSIDE_COLLABORATOR"),
    fc.constant("UNAFFILIATED")
  );

export const getArbitraryOrgRemoveOutsideCollaboratorAuditEntryReason = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("SAML_EXTERNAL_IDENTITY_MISSING"),
    fc.constant("TWO_FACTOR_REQUIREMENT_NON_COMPLIANCE")
  );

export const getArbitraryOrgRestoreMemberAuditEntry = (): fc.Arbitrary<any> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    restoredCustomEmailRoutingsCount: getArbitraryInt(),
    restoredIssueAssignmentsCount: getArbitraryInt(),
    restoredMemberships: fc.array(
      getArbitraryOrgRestoreMemberAuditEntryMembership()
    ),
    restoredMembershipsCount: getArbitraryInt(),
    restoredRepositoriesCount: getArbitraryInt(),
    restoredRepositoryStarsCount: getArbitraryInt(),
    restoredRepositoryWatchesCount: getArbitraryInt(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgRestoreMemberAuditEntryMembership = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    getArbitraryOrgRestoreMemberMembershipOrganizationAuditEntryData(),
    getArbitraryOrgRestoreMemberMembershipRepositoryAuditEntryData(),
    getArbitraryOrgRestoreMemberMembershipTeamAuditEntryData()
  );

export const getArbitraryOrgRestoreMemberMembershipOrganizationAuditEntryData = (): fc.Arbitrary<
  any
> =>
  fc.record({
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
  });

export const getArbitraryOrgRestoreMemberMembershipRepositoryAuditEntryData = (): fc.Arbitrary<
  any
> =>
  fc.record({
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
  });

export const getArbitraryRepositoryAuditEntryData = (): fc.Arbitrary<any> =>
  fc.record({
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
  });

export const getArbitraryOrgRestoreMemberMembershipTeamAuditEntryData = (): fc.Arbitrary<
  any
> =>
  fc.record({
    team: getArbitraryTeam(),
    teamName: getArbitraryString(),
    teamResourcePath: getArbitraryURI(),
    teamUrl: getArbitraryURI(),
  });

export const getArbitraryTeamAuditEntryData = (): fc.Arbitrary<any> =>
  fc.record({
    team: getArbitraryTeam(),
    teamName: getArbitraryString(),
    teamResourcePath: getArbitraryURI(),
    teamUrl: getArbitraryURI(),
  });

export const getArbitraryOrgUnblockUserAuditEntry = (): fc.Arbitrary<any> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    blockedUser: getArbitraryUser(),
    blockedUserName: getArbitraryString(),
    blockedUserResourcePath: getArbitraryURI(),
    blockedUserUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgUpdateDefaultRepositoryPermissionAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    permission: getArbitraryOrgUpdateDefaultRepositoryPermissionAuditEntryPermission(),
    permissionWas: getArbitraryOrgUpdateDefaultRepositoryPermissionAuditEntryPermission(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgUpdateDefaultRepositoryPermissionAuditEntryPermission = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("ADMIN"),
    fc.constant("NONE"),
    fc.constant("READ"),
    fc.constant("WRITE")
  );

export const getArbitraryOrgUpdateMemberAuditEntry = (): fc.Arbitrary<any> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    permission: getArbitraryOrgUpdateMemberAuditEntryPermission(),
    permissionWas: getArbitraryOrgUpdateMemberAuditEntryPermission(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrgUpdateMemberAuditEntryPermission = (): fc.Arbitrary<
  any
> => fc.oneof(fc.constant("ADMIN"), fc.constant("READ"));

export const getArbitraryOrgUpdateMemberRepositoryCreationPermissionAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    canCreateRepositories: getArbitraryBoolean(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
    visibility: getArbitraryOrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility(),
  });

export const getArbitraryOrgUpdateMemberRepositoryCreationPermissionAuditEntryVisibility = (): fc.Arbitrary<
  any
> => fc.oneof(fc.constant("ALL"), fc.constant("PUBLIC"));

export const getArbitraryOrgUpdateMemberRepositoryInvitationPermissionAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    canInviteOutsideCollaboratorsToRepositories: getArbitraryBoolean(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryPrivateRepositoryForkingDisableAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    enterpriseResourcePath: getArbitraryURI(),
    enterpriseSlug: getArbitraryString(),
    enterpriseUrl: getArbitraryURI(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryPrivateRepositoryForkingEnableAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    enterpriseResourcePath: getArbitraryURI(),
    enterpriseSlug: getArbitraryString(),
    enterpriseUrl: getArbitraryURI(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryRepoAccessAuditEntry = (): fc.Arbitrary<any> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
    visibility: getArbitraryRepoAccessAuditEntryVisibility(),
  });

export const getArbitraryRepoAccessAuditEntryVisibility = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("INTERNAL"),
    fc.constant("PRIVATE"),
    fc.constant("PUBLIC")
  );

export const getArbitraryRepoAddMemberAuditEntry = (): fc.Arbitrary<any> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
    visibility: getArbitraryRepoAddMemberAuditEntryVisibility(),
  });

export const getArbitraryRepoAddMemberAuditEntryVisibility = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("INTERNAL"),
    fc.constant("PRIVATE"),
    fc.constant("PUBLIC")
  );

export const getArbitraryRepoAddTopicAuditEntry = (): fc.Arbitrary<any> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    topic: getArbitraryTopic(),
    topicName: getArbitraryString(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryTopicAuditEntryData = (): fc.Arbitrary<any> =>
  fc.record({ topic: getArbitraryTopic(), topicName: getArbitraryString() });

export const getArbitraryRepoArchivedAuditEntry = (): fc.Arbitrary<any> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
    visibility: getArbitraryRepoArchivedAuditEntryVisibility(),
  });

export const getArbitraryRepoArchivedAuditEntryVisibility = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("INTERNAL"),
    fc.constant("PRIVATE"),
    fc.constant("PUBLIC")
  );

export const getArbitraryRepoChangeMergeSettingAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    isEnabled: getArbitraryBoolean(),
    mergeType: getArbitraryRepoChangeMergeSettingAuditEntryMergeType(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryRepoChangeMergeSettingAuditEntryMergeType = (): fc.Arbitrary<
  any
> =>
  fc.oneof(fc.constant("MERGE"), fc.constant("REBASE"), fc.constant("SQUASH"));

export const getArbitraryRepoConfigDisableAnonymousGitAccessAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryRepoConfigDisableCollaboratorsOnlyAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryRepoConfigDisableContributorsOnlyAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryRepoConfigDisableSockpuppetDisallowedAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryRepoConfigEnableAnonymousGitAccessAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryRepoConfigEnableCollaboratorsOnlyAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryRepoConfigEnableContributorsOnlyAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryRepoConfigEnableSockpuppetDisallowedAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryRepoConfigLockAnonymousGitAccessAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryRepoConfigUnlockAnonymousGitAccessAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryRepoCreateAuditEntry = (): fc.Arbitrary<any> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    forkParentName: getArbitraryString(),
    forkSourceName: getArbitraryString(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
    visibility: getArbitraryRepoCreateAuditEntryVisibility(),
  });

export const getArbitraryRepoCreateAuditEntryVisibility = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("INTERNAL"),
    fc.constant("PRIVATE"),
    fc.constant("PUBLIC")
  );

export const getArbitraryRepoDestroyAuditEntry = (): fc.Arbitrary<any> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
    visibility: getArbitraryRepoDestroyAuditEntryVisibility(),
  });

export const getArbitraryRepoDestroyAuditEntryVisibility = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("INTERNAL"),
    fc.constant("PRIVATE"),
    fc.constant("PUBLIC")
  );

export const getArbitraryRepoRemoveMemberAuditEntry = (): fc.Arbitrary<any> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
    visibility: getArbitraryRepoRemoveMemberAuditEntryVisibility(),
  });

export const getArbitraryRepoRemoveMemberAuditEntryVisibility = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("INTERNAL"),
    fc.constant("PRIVATE"),
    fc.constant("PUBLIC")
  );

export const getArbitraryRepoRemoveTopicAuditEntry = (): fc.Arbitrary<any> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    topic: getArbitraryTopic(),
    topicName: getArbitraryString(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryRepositoryVisibilityChangeDisableAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    enterpriseResourcePath: getArbitraryURI(),
    enterpriseSlug: getArbitraryString(),
    enterpriseUrl: getArbitraryURI(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryRepositoryVisibilityChangeEnableAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    enterpriseResourcePath: getArbitraryURI(),
    enterpriseSlug: getArbitraryString(),
    enterpriseUrl: getArbitraryURI(),
    id: getArbitraryID(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryTeamAddMemberAuditEntry = (): fc.Arbitrary<any> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    isLdapMapped: getArbitraryBoolean(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    team: getArbitraryTeam(),
    teamName: getArbitraryString(),
    teamResourcePath: getArbitraryURI(),
    teamUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryTeamAddRepositoryAuditEntry = (): fc.Arbitrary<any> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    isLdapMapped: getArbitraryBoolean(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    team: getArbitraryTeam(),
    teamName: getArbitraryString(),
    teamResourcePath: getArbitraryURI(),
    teamUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryTeamChangeParentTeamAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    isLdapMapped: getArbitraryBoolean(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    parentTeam: getArbitraryTeam(),
    parentTeamName: getArbitraryString(),
    parentTeamNameWas: getArbitraryString(),
    parentTeamResourcePath: getArbitraryURI(),
    parentTeamUrl: getArbitraryURI(),
    parentTeamWas: getArbitraryTeam(),
    parentTeamWasResourcePath: getArbitraryURI(),
    parentTeamWasUrl: getArbitraryURI(),
    team: getArbitraryTeam(),
    teamName: getArbitraryString(),
    teamResourcePath: getArbitraryURI(),
    teamUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryTeamRemoveMemberAuditEntry = (): fc.Arbitrary<any> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    isLdapMapped: getArbitraryBoolean(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    team: getArbitraryTeam(),
    teamName: getArbitraryString(),
    teamResourcePath: getArbitraryURI(),
    teamUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryTeamRemoveRepositoryAuditEntry = (): fc.Arbitrary<
  any
> =>
  fc.record({
    action: getArbitraryString(),
    actor: getArbitraryAuditEntryActor(),
    actorIp: getArbitraryString(),
    actorLocation: getArbitraryActorLocation(),
    actorLogin: getArbitraryString(),
    actorResourcePath: getArbitraryURI(),
    actorUrl: getArbitraryURI(),
    createdAt: getArbitraryPreciseDateTime(),
    id: getArbitraryID(),
    isLdapMapped: getArbitraryBoolean(),
    operationType: getArbitraryOperationType(),
    organization: getArbitraryOrganization(),
    organizationName: getArbitraryString(),
    organizationResourcePath: getArbitraryURI(),
    organizationUrl: getArbitraryURI(),
    repository: getArbitraryRepository(),
    repositoryName: getArbitraryString(),
    repositoryResourcePath: getArbitraryURI(),
    repositoryUrl: getArbitraryURI(),
    team: getArbitraryTeam(),
    teamName: getArbitraryString(),
    teamResourcePath: getArbitraryURI(),
    teamUrl: getArbitraryURI(),
    user: getArbitraryUser(),
    userLogin: getArbitraryString(),
    userResourcePath: getArbitraryURI(),
    userUrl: getArbitraryURI(),
  });

export const getArbitraryOrganizationMemberConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryOrganizationMemberEdge()),
    nodes: fc.array(getArbitraryUser()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryOrganizationMemberEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    hasTwoFactorEnabled: getArbitraryBoolean(),
    node: getArbitraryUser(),
    role: getArbitraryOrganizationMemberRole(),
  });

export const getArbitraryOrganizationMemberRole = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("ADMIN"), fc.constant("MEMBER"));

export const getArbitraryOrganizationIdentityProvider = (): fc.Arbitrary<any> =>
  fc.record({
    digestMethod: getArbitraryURI(),
    externalIdentities: getArbitraryExternalIdentityConnection(),
    id: getArbitraryID(),
    idpCertificate: getArbitraryX509Certificate(),
    issuer: getArbitraryString(),
    organization: getArbitraryOrganization(),
    signatureMethod: getArbitraryURI(),
    ssoUrl: getArbitraryURI(),
  });

export const getArbitraryExternalIdentityConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryExternalIdentityEdge()),
    nodes: fc.array(getArbitraryExternalIdentity()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryExternalIdentityEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryExternalIdentity(),
  });

export const getArbitraryExternalIdentity = (): fc.Arbitrary<any> =>
  fc.record({
    guid: getArbitraryString(),
    id: getArbitraryID(),
    organizationInvitation: getArbitraryOrganizationInvitation(),
    samlIdentity: getArbitraryExternalIdentitySamlAttributes(),
    scimIdentity: getArbitraryExternalIdentityScimAttributes(),
    user: getArbitraryUser(),
  });

export const getArbitraryExternalIdentitySamlAttributes = (): fc.Arbitrary<
  any
> => fc.record({ nameId: getArbitraryString() });

export const getArbitraryExternalIdentityScimAttributes = (): fc.Arbitrary<
  any
> => fc.record({ username: getArbitraryString() });

export const getArbitraryX509Certificate = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryTeamRole = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("ADMIN"), fc.constant("MEMBER"));

export const getArbitraryEnterpriseOwnerInfo = (): fc.Arbitrary<any> =>
  fc.record({
    actionExecutionCapabilitySettingOrganizations: getArbitraryOrganizationConnection(),
    admins: getArbitraryEnterpriseAdministratorConnection(),
    affiliatedUsersWithTwoFactorDisabled: getArbitraryUserConnection(),
    affiliatedUsersWithTwoFactorDisabledExist: getArbitraryBoolean(),
    allowPrivateRepositoryForkingSetting: getArbitraryEnterpriseEnabledDisabledSettingValue(),
    allowPrivateRepositoryForkingSettingOrganizations: getArbitraryOrganizationConnection(),
    defaultRepositoryPermissionSetting: getArbitraryEnterpriseDefaultRepositoryPermissionSettingValue(),
    defaultRepositoryPermissionSettingOrganizations: getArbitraryOrganizationConnection(),
    enterpriseServerInstallations: getArbitraryEnterpriseServerInstallationConnection(),
    ipAllowListEnabledSetting: getArbitraryIpAllowListEnabledSettingValue(),
    ipAllowListEntries: getArbitraryIpAllowListEntryConnection(),
    isUpdatingDefaultRepositoryPermission: getArbitraryBoolean(),
    isUpdatingTwoFactorRequirement: getArbitraryBoolean(),
    membersCanChangeRepositoryVisibilitySetting: getArbitraryEnterpriseEnabledDisabledSettingValue(),
    membersCanChangeRepositoryVisibilitySettingOrganizations: getArbitraryOrganizationConnection(),
    membersCanCreateInternalRepositoriesSetting: getArbitraryBoolean(),
    membersCanCreatePrivateRepositoriesSetting: getArbitraryBoolean(),
    membersCanCreatePublicRepositoriesSetting: getArbitraryBoolean(),
    membersCanCreateRepositoriesSetting: getArbitraryEnterpriseMembersCanCreateRepositoriesSettingValue(),
    membersCanCreateRepositoriesSettingOrganizations: getArbitraryOrganizationConnection(),
    membersCanDeleteIssuesSetting: getArbitraryEnterpriseEnabledDisabledSettingValue(),
    membersCanDeleteIssuesSettingOrganizations: getArbitraryOrganizationConnection(),
    membersCanDeleteRepositoriesSetting: getArbitraryEnterpriseEnabledDisabledSettingValue(),
    membersCanDeleteRepositoriesSettingOrganizations: getArbitraryOrganizationConnection(),
    membersCanInviteCollaboratorsSetting: getArbitraryEnterpriseEnabledDisabledSettingValue(),
    membersCanInviteCollaboratorsSettingOrganizations: getArbitraryOrganizationConnection(),
    membersCanMakePurchasesSetting: getArbitraryEnterpriseMembersCanMakePurchasesSettingValue(),
    membersCanUpdateProtectedBranchesSetting: getArbitraryEnterpriseEnabledDisabledSettingValue(),
    membersCanUpdateProtectedBranchesSettingOrganizations: getArbitraryOrganizationConnection(),
    membersCanViewDependencyInsightsSetting: getArbitraryEnterpriseEnabledDisabledSettingValue(),
    membersCanViewDependencyInsightsSettingOrganizations: getArbitraryOrganizationConnection(),
    organizationProjectsSetting: getArbitraryEnterpriseEnabledDisabledSettingValue(),
    organizationProjectsSettingOrganizations: getArbitraryOrganizationConnection(),
    outsideCollaborators: getArbitraryEnterpriseOutsideCollaboratorConnection(),
    pendingAdminInvitations: getArbitraryEnterpriseAdministratorInvitationConnection(),
    pendingCollaborators: getArbitraryEnterprisePendingCollaboratorConnection(),
    pendingMemberInvitations: getArbitraryEnterprisePendingMemberInvitationConnection(),
    repositoryProjectsSetting: getArbitraryEnterpriseEnabledDisabledSettingValue(),
    repositoryProjectsSettingOrganizations: getArbitraryOrganizationConnection(),
    samlIdentityProvider: getArbitraryEnterpriseIdentityProvider(),
    samlIdentityProviderSettingOrganizations: getArbitraryOrganizationConnection(),
    teamDiscussionsSetting: getArbitraryEnterpriseEnabledDisabledSettingValue(),
    teamDiscussionsSettingOrganizations: getArbitraryOrganizationConnection(),
    twoFactorRequiredSetting: getArbitraryEnterpriseEnabledSettingValue(),
    twoFactorRequiredSettingOrganizations: getArbitraryOrganizationConnection(),
  });

export const getArbitraryEnterpriseAdministratorRole = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("BILLING_MANAGER"), fc.constant("OWNER"));

export const getArbitraryEnterpriseAdministratorConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryEnterpriseAdministratorEdge()),
    nodes: fc.array(getArbitraryUser()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryEnterpriseAdministratorEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryUser(),
    role: getArbitraryEnterpriseAdministratorRole(),
  });

export const getArbitraryEnterpriseEnabledDisabledSettingValue = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("DISABLED"),
    fc.constant("ENABLED"),
    fc.constant("NO_POLICY")
  );

export const getArbitraryEnterpriseDefaultRepositoryPermissionSettingValue = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("ADMIN"),
    fc.constant("NONE"),
    fc.constant("NO_POLICY"),
    fc.constant("READ"),
    fc.constant("WRITE")
  );

export const getArbitraryEnterpriseServerInstallationOrder = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryEnterpriseServerInstallationOrderField = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("CREATED_AT"),
    fc.constant("CUSTOMER_NAME"),
    fc.constant("HOST_NAME")
  );

export const getArbitraryEnterpriseServerInstallationConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryEnterpriseServerInstallationEdge()),
    nodes: fc.array(getArbitraryEnterpriseServerInstallation()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryEnterpriseServerInstallationEdge = (): fc.Arbitrary<
  any
> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryEnterpriseServerInstallation(),
  });

export const getArbitraryEnterpriseServerInstallation = (): fc.Arbitrary<any> =>
  fc.record({
    createdAt: getArbitraryDateTime(),
    customerName: getArbitraryString(),
    hostName: getArbitraryString(),
    id: getArbitraryID(),
    isConnected: getArbitraryBoolean(),
    updatedAt: getArbitraryDateTime(),
    userAccounts: getArbitraryEnterpriseServerUserAccountConnection(),
    userAccountsUploads: getArbitraryEnterpriseServerUserAccountsUploadConnection(),
  });

export const getArbitraryEnterpriseServerUserAccountOrder = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryEnterpriseServerUserAccountOrderField = (): fc.Arbitrary<
  any
> => fc.oneof(fc.constant("LOGIN"), fc.constant("REMOTE_CREATED_AT"));

export const getArbitraryEnterpriseServerUserAccountConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryEnterpriseServerUserAccountEdge()),
    nodes: fc.array(getArbitraryEnterpriseServerUserAccount()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryEnterpriseServerUserAccountEdge = (): fc.Arbitrary<
  any
> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryEnterpriseServerUserAccount(),
  });

export const getArbitraryEnterpriseServerUserAccount = (): fc.Arbitrary<any> =>
  fc.record({
    createdAt: getArbitraryDateTime(),
    emails: getArbitraryEnterpriseServerUserAccountEmailConnection(),
    enterpriseServerInstallation: getArbitraryEnterpriseServerInstallation(),
    id: getArbitraryID(),
    isSiteAdmin: getArbitraryBoolean(),
    login: getArbitraryString(),
    profileName: getArbitraryString(),
    remoteCreatedAt: getArbitraryDateTime(),
    remoteUserId: getArbitraryInt(),
    updatedAt: getArbitraryDateTime(),
  });

export const getArbitraryEnterpriseServerUserAccountEmailOrder = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryEnterpriseServerUserAccountEmailOrderField = (): fc.Arbitrary<
  any
> => fc.oneof(fc.constant("EMAIL"));

export const getArbitraryEnterpriseServerUserAccountEmailConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryEnterpriseServerUserAccountEmailEdge()),
    nodes: fc.array(getArbitraryEnterpriseServerUserAccountEmail()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryEnterpriseServerUserAccountEmailEdge = (): fc.Arbitrary<
  any
> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryEnterpriseServerUserAccountEmail(),
  });

export const getArbitraryEnterpriseServerUserAccountEmail = (): fc.Arbitrary<
  any
> =>
  fc.record({
    createdAt: getArbitraryDateTime(),
    email: getArbitraryString(),
    id: getArbitraryID(),
    isPrimary: getArbitraryBoolean(),
    updatedAt: getArbitraryDateTime(),
    userAccount: getArbitraryEnterpriseServerUserAccount(),
  });

export const getArbitraryEnterpriseServerUserAccountsUploadOrder = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryEnterpriseServerUserAccountsUploadOrderField = (): fc.Arbitrary<
  any
> => fc.oneof(fc.constant("CREATED_AT"));

export const getArbitraryEnterpriseServerUserAccountsUploadConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryEnterpriseServerUserAccountsUploadEdge()),
    nodes: fc.array(getArbitraryEnterpriseServerUserAccountsUpload()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryEnterpriseServerUserAccountsUploadEdge = (): fc.Arbitrary<
  any
> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryEnterpriseServerUserAccountsUpload(),
  });

export const getArbitraryEnterpriseServerUserAccountsUpload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    createdAt: getArbitraryDateTime(),
    enterprise: getArbitraryEnterprise(),
    enterpriseServerInstallation: getArbitraryEnterpriseServerInstallation(),
    id: getArbitraryID(),
    name: getArbitraryString(),
    syncState: getArbitraryEnterpriseServerUserAccountsUploadSyncState(),
    updatedAt: getArbitraryDateTime(),
  });

export const getArbitraryEnterpriseServerUserAccountsUploadSyncState = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("FAILURE"),
    fc.constant("PENDING"),
    fc.constant("SUCCESS")
  );

export const getArbitraryIpAllowListEnabledSettingValue = (): fc.Arbitrary<
  any
> => fc.oneof(fc.constant("DISABLED"), fc.constant("ENABLED"));

export const getArbitraryIpAllowListEntryOrder = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryIpAllowListEntryOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("ALLOW_LIST_VALUE"), fc.constant("CREATED_AT"));

export const getArbitraryIpAllowListEntryConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryIpAllowListEntryEdge()),
    nodes: fc.array(getArbitraryIpAllowListEntry()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryIpAllowListEntryEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryIpAllowListEntry(),
  });

export const getArbitraryIpAllowListEntry = (): fc.Arbitrary<any> =>
  fc.record({
    allowListValue: getArbitraryString(),
    createdAt: getArbitraryDateTime(),
    id: getArbitraryID(),
    isActive: getArbitraryBoolean(),
    name: getArbitraryString(),
    owner: getArbitraryIpAllowListOwner(),
    updatedAt: getArbitraryDateTime(),
  });

export const getArbitraryIpAllowListOwner = (): fc.Arbitrary<any> =>
  fc.oneof(getArbitraryEnterprise(), getArbitraryOrganization());

export const getArbitraryEnterpriseMembersCanCreateRepositoriesSettingValue = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("ALL"),
    fc.constant("DISABLED"),
    fc.constant("NO_POLICY"),
    fc.constant("PRIVATE"),
    fc.constant("PUBLIC")
  );

export const getArbitraryOrganizationMembersCanCreateRepositoriesSettingValue = (): fc.Arbitrary<
  any
> =>
  fc.oneof(fc.constant("ALL"), fc.constant("DISABLED"), fc.constant("PRIVATE"));

export const getArbitraryEnterpriseMembersCanMakePurchasesSettingValue = (): fc.Arbitrary<
  any
> => fc.oneof(fc.constant("DISABLED"), fc.constant("ENABLED"));

export const getArbitraryRepositoryVisibility = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("INTERNAL"),
    fc.constant("PRIVATE"),
    fc.constant("PUBLIC")
  );

export const getArbitraryEnterpriseOutsideCollaboratorConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryEnterpriseOutsideCollaboratorEdge()),
    nodes: fc.array(getArbitraryUser()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryEnterpriseOutsideCollaboratorEdge = (): fc.Arbitrary<
  any
> =>
  fc.record({
    cursor: getArbitraryString(),
    isUnlicensed: getArbitraryBoolean(),
    node: getArbitraryUser(),
    repositories: getArbitraryEnterpriseRepositoryInfoConnection(),
  });

export const getArbitraryEnterpriseRepositoryInfoConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryEnterpriseRepositoryInfoEdge()),
    nodes: fc.array(getArbitraryEnterpriseRepositoryInfo()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryEnterpriseRepositoryInfoEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryEnterpriseRepositoryInfo(),
  });

export const getArbitraryEnterpriseRepositoryInfo = (): fc.Arbitrary<any> =>
  fc.record({
    id: getArbitraryID(),
    isPrivate: getArbitraryBoolean(),
    name: getArbitraryString(),
    nameWithOwner: getArbitraryString(),
  });

export const getArbitraryEnterpriseAdministratorInvitationOrder = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryEnterpriseAdministratorInvitationOrderField = (): fc.Arbitrary<
  any
> => fc.oneof(fc.constant("CREATED_AT"));

export const getArbitraryEnterpriseAdministratorInvitationConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryEnterpriseAdministratorInvitationEdge()),
    nodes: fc.array(getArbitraryEnterpriseAdministratorInvitation()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryEnterpriseAdministratorInvitationEdge = (): fc.Arbitrary<
  any
> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryEnterpriseAdministratorInvitation(),
  });

export const getArbitraryEnterpriseAdministratorInvitation = (): fc.Arbitrary<
  any
> =>
  fc.record({
    createdAt: getArbitraryDateTime(),
    email: getArbitraryString(),
    enterprise: getArbitraryEnterprise(),
    id: getArbitraryID(),
    invitee: getArbitraryUser(),
    inviter: getArbitraryUser(),
    role: getArbitraryEnterpriseAdministratorRole(),
  });

export const getArbitraryRepositoryInvitationOrder = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryRepositoryInvitationOrderField = (): fc.Arbitrary<
  any
> => fc.oneof(fc.constant("CREATED_AT"), fc.constant("INVITEE_LOGIN"));

export const getArbitraryEnterprisePendingCollaboratorConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryEnterprisePendingCollaboratorEdge()),
    nodes: fc.array(getArbitraryUser()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryEnterprisePendingCollaboratorEdge = (): fc.Arbitrary<
  any
> =>
  fc.record({
    cursor: getArbitraryString(),
    isUnlicensed: getArbitraryBoolean(),
    node: getArbitraryUser(),
    repositories: getArbitraryEnterpriseRepositoryInfoConnection(),
  });

export const getArbitraryEnterprisePendingMemberInvitationConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryEnterprisePendingMemberInvitationEdge()),
    nodes: fc.array(getArbitraryOrganizationInvitation()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
    totalUniqueUserCount: getArbitraryInt(),
  });

export const getArbitraryEnterprisePendingMemberInvitationEdge = (): fc.Arbitrary<
  any
> =>
  fc.record({
    cursor: getArbitraryString(),
    isUnlicensed: getArbitraryBoolean(),
    node: getArbitraryOrganizationInvitation(),
  });

export const getArbitraryEnterpriseIdentityProvider = (): fc.Arbitrary<any> =>
  fc.record({
    digestMethod: getArbitrarySamlDigestAlgorithm(),
    enterprise: getArbitraryEnterprise(),
    externalIdentities: getArbitraryExternalIdentityConnection(),
    id: getArbitraryID(),
    idpCertificate: getArbitraryX509Certificate(),
    issuer: getArbitraryString(),
    recoveryCodes: fc.array(getArbitraryString()),
    signatureMethod: getArbitrarySamlSignatureAlgorithm(),
    ssoUrl: getArbitraryURI(),
  });

export const getArbitrarySamlDigestAlgorithm = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("SHA1"),
    fc.constant("SHA256"),
    fc.constant("SHA384"),
    fc.constant("SHA512")
  );

export const getArbitrarySamlSignatureAlgorithm = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("RSA_SHA1"),
    fc.constant("RSA_SHA256"),
    fc.constant("RSA_SHA384"),
    fc.constant("RSA_SHA512")
  );

export const getArbitraryIdentityProviderConfigurationState = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("CONFIGURED"),
    fc.constant("ENFORCED"),
    fc.constant("UNCONFIGURED")
  );

export const getArbitraryEnterpriseEnabledSettingValue = (): fc.Arbitrary<
  any
> => fc.oneof(fc.constant("ENABLED"), fc.constant("NO_POLICY"));

export const getArbitraryEnterpriseUserAccountConnection = (): fc.Arbitrary<
  any
> =>
  fc.record({
    edges: fc.array(getArbitraryEnterpriseUserAccountEdge()),
    nodes: fc.array(getArbitraryEnterpriseUserAccount()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryEnterpriseUserAccountEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryEnterpriseUserAccount(),
  });

export const getArbitraryMarketplaceCategory = (): fc.Arbitrary<any> =>
  fc.record({
    description: getArbitraryString(),
    howItWorks: getArbitraryString(),
    id: getArbitraryID(),
    name: getArbitraryString(),
    primaryListingCount: getArbitraryInt(),
    resourcePath: getArbitraryURI(),
    secondaryListingCount: getArbitraryInt(),
    slug: getArbitraryString(),
    url: getArbitraryURI(),
  });

export const getArbitraryMarketplaceListing = (): fc.Arbitrary<any> =>
  fc.record({
    app: getArbitraryApp(),
    companyUrl: getArbitraryURI(),
    configurationResourcePath: getArbitraryURI(),
    configurationUrl: getArbitraryURI(),
    documentationUrl: getArbitraryURI(),
    extendedDescription: getArbitraryString(),
    extendedDescriptionHTML: getArbitraryHTML(),
    fullDescription: getArbitraryString(),
    fullDescriptionHTML: getArbitraryHTML(),
    hasApprovalBeenRequested: getArbitraryBoolean(),
    hasPublishedFreeTrialPlans: getArbitraryBoolean(),
    hasTermsOfService: getArbitraryBoolean(),
    howItWorks: getArbitraryString(),
    howItWorksHTML: getArbitraryHTML(),
    id: getArbitraryID(),
    installationUrl: getArbitraryURI(),
    installedForViewer: getArbitraryBoolean(),
    isApproved: getArbitraryBoolean(),
    isArchived: getArbitraryBoolean(),
    isDelisted: getArbitraryBoolean(),
    isDraft: getArbitraryBoolean(),
    isPaid: getArbitraryBoolean(),
    isPublic: getArbitraryBoolean(),
    isRejected: getArbitraryBoolean(),
    isUnverified: getArbitraryBoolean(),
    isUnverifiedPending: getArbitraryBoolean(),
    isVerificationPendingFromDraft: getArbitraryBoolean(),
    isVerificationPendingFromUnverified: getArbitraryBoolean(),
    isVerified: getArbitraryBoolean(),
    logoBackgroundColor: getArbitraryString(),
    logoUrl: getArbitraryURI(),
    name: getArbitraryString(),
    normalizedShortDescription: getArbitraryString(),
    pricingUrl: getArbitraryURI(),
    primaryCategory: getArbitraryMarketplaceCategory(),
    privacyPolicyUrl: getArbitraryURI(),
    resourcePath: getArbitraryURI(),
    screenshotUrls: fc.array(getArbitraryString()),
    secondaryCategory: getArbitraryMarketplaceCategory(),
    shortDescription: getArbitraryString(),
    slug: getArbitraryString(),
    statusUrl: getArbitraryURI(),
    supportEmail: getArbitraryString(),
    supportUrl: getArbitraryURI(),
    termsOfServiceUrl: getArbitraryURI(),
    url: getArbitraryURI(),
    viewerCanAddPlans: getArbitraryBoolean(),
    viewerCanApprove: getArbitraryBoolean(),
    viewerCanDelist: getArbitraryBoolean(),
    viewerCanEdit: getArbitraryBoolean(),
    viewerCanEditCategories: getArbitraryBoolean(),
    viewerCanEditPlans: getArbitraryBoolean(),
    viewerCanRedraft: getArbitraryBoolean(),
    viewerCanReject: getArbitraryBoolean(),
    viewerCanRequestApproval: getArbitraryBoolean(),
    viewerHasPurchased: getArbitraryBoolean(),
    viewerHasPurchasedForAllOrganizations: getArbitraryBoolean(),
    viewerIsListingAdmin: getArbitraryBoolean(),
  });

export const getArbitraryMarketplaceListingConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitraryMarketplaceListingEdge()),
    nodes: fc.array(getArbitraryMarketplaceListing()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitraryMarketplaceListingEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitraryMarketplaceListing(),
  });

export const getArbitraryGitHubMetadata = (): fc.Arbitrary<any> =>
  fc.record({
    gitHubServicesSha: getArbitraryGitObjectID(),
    gitIpAddresses: fc.array(getArbitraryString()),
    hookIpAddresses: fc.array(getArbitraryString()),
    importerIpAddresses: fc.array(getArbitraryString()),
    isPasswordAuthenticationVerifiable: getArbitraryBoolean(),
    pagesIpAddresses: fc.array(getArbitraryString()),
  });

export const getArbitraryRateLimit = (): fc.Arbitrary<any> =>
  fc.record({
    cost: getArbitraryInt(),
    limit: getArbitraryInt(),
    nodeCount: getArbitraryInt(),
    remaining: getArbitraryInt(),
    resetAt: getArbitraryDateTime(),
  });

export const getArbitrarySearchType = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("ISSUE"),
    fc.constant("REPOSITORY"),
    fc.constant("USER")
  );

export const getArbitrarySearchResultItemConnection = (): fc.Arbitrary<any> =>
  fc.record({
    codeCount: getArbitraryInt(),
    edges: fc.array(getArbitrarySearchResultItemEdge()),
    issueCount: getArbitraryInt(),
    nodes: fc.array(getArbitrarySearchResultItem()),
    pageInfo: getArbitraryPageInfo(),
    repositoryCount: getArbitraryInt(),
    userCount: getArbitraryInt(),
    wikiCount: getArbitraryInt(),
  });

export const getArbitrarySearchResultItemEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitrarySearchResultItem(),
    textMatches: fc.array(getArbitraryTextMatch()),
  });

export const getArbitrarySearchResultItem = (): fc.Arbitrary<any> =>
  fc.oneof(
    getArbitraryApp(),
    getArbitraryIssue(),
    getArbitraryMarketplaceListing(),
    getArbitraryOrganization(),
    getArbitraryPullRequest(),
    getArbitraryRepository(),
    getArbitraryUser()
  );

export const getArbitraryTextMatch = (): fc.Arbitrary<any> =>
  fc.record({
    fragment: getArbitraryString(),
    highlights: fc.array(getArbitraryTextMatchHighlight()),
    property: getArbitraryString(),
  });

export const getArbitraryTextMatchHighlight = (): fc.Arbitrary<any> =>
  fc.record({
    beginIndice: getArbitraryInt(),
    endIndice: getArbitraryInt(),
    text: getArbitraryString(),
  });

export const getArbitrarySecurityAdvisoryIdentifierFilter = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitrarySecurityAdvisoryIdentifierType = (): fc.Arbitrary<
  any
> => fc.oneof(fc.constant("CVE"), fc.constant("GHSA"));

export const getArbitrarySecurityAdvisoryOrder = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitrarySecurityAdvisoryOrderField = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("PUBLISHED_AT"), fc.constant("UPDATED_AT"));

export const getArbitrarySecurityAdvisoryConnection = (): fc.Arbitrary<any> =>
  fc.record({
    edges: fc.array(getArbitrarySecurityAdvisoryEdge()),
    nodes: fc.array(getArbitrarySecurityAdvisory()),
    pageInfo: getArbitraryPageInfo(),
    totalCount: getArbitraryInt(),
  });

export const getArbitrarySecurityAdvisoryEdge = (): fc.Arbitrary<any> =>
  fc.record({
    cursor: getArbitraryString(),
    node: getArbitrarySecurityAdvisory(),
  });

export const getArbitraryMutation = (): fc.Arbitrary<any> =>
  fc.record({
    acceptEnterpriseAdministratorInvitation: getArbitraryAcceptEnterpriseAdministratorInvitationPayload(),
    acceptTopicSuggestion: getArbitraryAcceptTopicSuggestionPayload(),
    addAssigneesToAssignable: getArbitraryAddAssigneesToAssignablePayload(),
    addComment: getArbitraryAddCommentPayload(),
    addLabelsToLabelable: getArbitraryAddLabelsToLabelablePayload(),
    addProjectCard: getArbitraryAddProjectCardPayload(),
    addProjectColumn: getArbitraryAddProjectColumnPayload(),
    addPullRequestReview: getArbitraryAddPullRequestReviewPayload(),
    addPullRequestReviewComment: getArbitraryAddPullRequestReviewCommentPayload(),
    addPullRequestReviewThread: getArbitraryAddPullRequestReviewThreadPayload(),
    addReaction: getArbitraryAddReactionPayload(),
    addStar: getArbitraryAddStarPayload(),
    archiveRepository: getArbitraryArchiveRepositoryPayload(),
    cancelEnterpriseAdminInvitation: getArbitraryCancelEnterpriseAdminInvitationPayload(),
    changeUserStatus: getArbitraryChangeUserStatusPayload(),
    clearLabelsFromLabelable: getArbitraryClearLabelsFromLabelablePayload(),
    cloneProject: getArbitraryCloneProjectPayload(),
    cloneTemplateRepository: getArbitraryCloneTemplateRepositoryPayload(),
    closeIssue: getArbitraryCloseIssuePayload(),
    closePullRequest: getArbitraryClosePullRequestPayload(),
    convertProjectCardNoteToIssue: getArbitraryConvertProjectCardNoteToIssuePayload(),
    createBranchProtectionRule: getArbitraryCreateBranchProtectionRulePayload(),
    createEnterpriseOrganization: getArbitraryCreateEnterpriseOrganizationPayload(),
    createIpAllowListEntry: getArbitraryCreateIpAllowListEntryPayload(),
    createIssue: getArbitraryCreateIssuePayload(),
    createProject: getArbitraryCreateProjectPayload(),
    createPullRequest: getArbitraryCreatePullRequestPayload(),
    createRef: getArbitraryCreateRefPayload(),
    createRepository: getArbitraryCreateRepositoryPayload(),
    createTeamDiscussion: getArbitraryCreateTeamDiscussionPayload(),
    createTeamDiscussionComment: getArbitraryCreateTeamDiscussionCommentPayload(),
    declineTopicSuggestion: getArbitraryDeclineTopicSuggestionPayload(),
    deleteBranchProtectionRule: getArbitraryDeleteBranchProtectionRulePayload(),
    deleteDeployment: getArbitraryDeleteDeploymentPayload(),
    deleteIpAllowListEntry: getArbitraryDeleteIpAllowListEntryPayload(),
    deleteIssue: getArbitraryDeleteIssuePayload(),
    deleteIssueComment: getArbitraryDeleteIssueCommentPayload(),
    deleteProject: getArbitraryDeleteProjectPayload(),
    deleteProjectCard: getArbitraryDeleteProjectCardPayload(),
    deleteProjectColumn: getArbitraryDeleteProjectColumnPayload(),
    deletePullRequestReview: getArbitraryDeletePullRequestReviewPayload(),
    deletePullRequestReviewComment: getArbitraryDeletePullRequestReviewCommentPayload(),
    deleteRef: getArbitraryDeleteRefPayload(),
    deleteTeamDiscussion: getArbitraryDeleteTeamDiscussionPayload(),
    deleteTeamDiscussionComment: getArbitraryDeleteTeamDiscussionCommentPayload(),
    dismissPullRequestReview: getArbitraryDismissPullRequestReviewPayload(),
    followUser: getArbitraryFollowUserPayload(),
    inviteEnterpriseAdmin: getArbitraryInviteEnterpriseAdminPayload(),
    linkRepositoryToProject: getArbitraryLinkRepositoryToProjectPayload(),
    lockLockable: getArbitraryLockLockablePayload(),
    markPullRequestReadyForReview: getArbitraryMarkPullRequestReadyForReviewPayload(),
    mergeBranch: getArbitraryMergeBranchPayload(),
    mergePullRequest: getArbitraryMergePullRequestPayload(),
    minimizeComment: getArbitraryMinimizeCommentPayload(),
    moveProjectCard: getArbitraryMoveProjectCardPayload(),
    moveProjectColumn: getArbitraryMoveProjectColumnPayload(),
    regenerateEnterpriseIdentityProviderRecoveryCodes: getArbitraryRegenerateEnterpriseIdentityProviderRecoveryCodesPayload(),
    removeAssigneesFromAssignable: getArbitraryRemoveAssigneesFromAssignablePayload(),
    removeEnterpriseAdmin: getArbitraryRemoveEnterpriseAdminPayload(),
    removeEnterpriseIdentityProvider: getArbitraryRemoveEnterpriseIdentityProviderPayload(),
    removeEnterpriseOrganization: getArbitraryRemoveEnterpriseOrganizationPayload(),
    removeLabelsFromLabelable: getArbitraryRemoveLabelsFromLabelablePayload(),
    removeOutsideCollaborator: getArbitraryRemoveOutsideCollaboratorPayload(),
    removeReaction: getArbitraryRemoveReactionPayload(),
    removeStar: getArbitraryRemoveStarPayload(),
    reopenIssue: getArbitraryReopenIssuePayload(),
    reopenPullRequest: getArbitraryReopenPullRequestPayload(),
    requestReviews: getArbitraryRequestReviewsPayload(),
    resolveReviewThread: getArbitraryResolveReviewThreadPayload(),
    setEnterpriseIdentityProvider: getArbitrarySetEnterpriseIdentityProviderPayload(),
    submitPullRequestReview: getArbitrarySubmitPullRequestReviewPayload(),
    transferIssue: getArbitraryTransferIssuePayload(),
    unarchiveRepository: getArbitraryUnarchiveRepositoryPayload(),
    unfollowUser: getArbitraryUnfollowUserPayload(),
    unlinkRepositoryFromProject: getArbitraryUnlinkRepositoryFromProjectPayload(),
    unlockLockable: getArbitraryUnlockLockablePayload(),
    unmarkIssueAsDuplicate: getArbitraryUnmarkIssueAsDuplicatePayload(),
    unminimizeComment: getArbitraryUnminimizeCommentPayload(),
    unresolveReviewThread: getArbitraryUnresolveReviewThreadPayload(),
    updateBranchProtectionRule: getArbitraryUpdateBranchProtectionRulePayload(),
    updateEnterpriseActionExecutionCapabilitySetting: getArbitraryUpdateEnterpriseActionExecutionCapabilitySettingPayload(),
    updateEnterpriseAdministratorRole: getArbitraryUpdateEnterpriseAdministratorRolePayload(),
    updateEnterpriseAllowPrivateRepositoryForkingSetting: getArbitraryUpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload(),
    updateEnterpriseDefaultRepositoryPermissionSetting: getArbitraryUpdateEnterpriseDefaultRepositoryPermissionSettingPayload(),
    updateEnterpriseMembersCanChangeRepositoryVisibilitySetting: getArbitraryUpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload(),
    updateEnterpriseMembersCanCreateRepositoriesSetting: getArbitraryUpdateEnterpriseMembersCanCreateRepositoriesSettingPayload(),
    updateEnterpriseMembersCanDeleteIssuesSetting: getArbitraryUpdateEnterpriseMembersCanDeleteIssuesSettingPayload(),
    updateEnterpriseMembersCanDeleteRepositoriesSetting: getArbitraryUpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload(),
    updateEnterpriseMembersCanInviteCollaboratorsSetting: getArbitraryUpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload(),
    updateEnterpriseMembersCanMakePurchasesSetting: getArbitraryUpdateEnterpriseMembersCanMakePurchasesSettingPayload(),
    updateEnterpriseMembersCanUpdateProtectedBranchesSetting: getArbitraryUpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload(),
    updateEnterpriseMembersCanViewDependencyInsightsSetting: getArbitraryUpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload(),
    updateEnterpriseOrganizationProjectsSetting: getArbitraryUpdateEnterpriseOrganizationProjectsSettingPayload(),
    updateEnterpriseProfile: getArbitraryUpdateEnterpriseProfilePayload(),
    updateEnterpriseRepositoryProjectsSetting: getArbitraryUpdateEnterpriseRepositoryProjectsSettingPayload(),
    updateEnterpriseTeamDiscussionsSetting: getArbitraryUpdateEnterpriseTeamDiscussionsSettingPayload(),
    updateEnterpriseTwoFactorAuthenticationRequiredSetting: getArbitraryUpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload(),
    updateIpAllowListEnabledSetting: getArbitraryUpdateIpAllowListEnabledSettingPayload(),
    updateIpAllowListEntry: getArbitraryUpdateIpAllowListEntryPayload(),
    updateIssue: getArbitraryUpdateIssuePayload(),
    updateIssueComment: getArbitraryUpdateIssueCommentPayload(),
    updateProject: getArbitraryUpdateProjectPayload(),
    updateProjectCard: getArbitraryUpdateProjectCardPayload(),
    updateProjectColumn: getArbitraryUpdateProjectColumnPayload(),
    updatePullRequest: getArbitraryUpdatePullRequestPayload(),
    updatePullRequestReview: getArbitraryUpdatePullRequestReviewPayload(),
    updatePullRequestReviewComment: getArbitraryUpdatePullRequestReviewCommentPayload(),
    updateRef: getArbitraryUpdateRefPayload(),
    updateRepository: getArbitraryUpdateRepositoryPayload(),
    updateSubscription: getArbitraryUpdateSubscriptionPayload(),
    updateTeamDiscussion: getArbitraryUpdateTeamDiscussionPayload(),
    updateTeamDiscussionComment: getArbitraryUpdateTeamDiscussionCommentPayload(),
    updateTopics: getArbitraryUpdateTopicsPayload(),
  });

export const getArbitraryAcceptEnterpriseAdministratorInvitationInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryAcceptEnterpriseAdministratorInvitationPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    invitation: getArbitraryEnterpriseAdministratorInvitation(),
    message: getArbitraryString(),
  });

export const getArbitraryAcceptTopicSuggestionInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryAcceptTopicSuggestionPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    topic: getArbitraryTopic(),
  });

export const getArbitraryAddAssigneesToAssignableInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryAddAssigneesToAssignablePayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    assignable: getArbitraryAssignable(),
    clientMutationId: getArbitraryString(),
  });

export const getArbitraryAddCommentInput = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryAddCommentPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    commentEdge: getArbitraryIssueCommentEdge(),
    subject: getArbitraryNode(),
    timelineEdge: getArbitraryIssueTimelineItemEdge(),
  });

export const getArbitraryAddLabelsToLabelableInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryAddLabelsToLabelablePayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    labelable: getArbitraryLabelable(),
  });

export const getArbitraryAddProjectCardInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryAddProjectCardPayload = (): fc.Arbitrary<any> =>
  fc.record({
    cardEdge: getArbitraryProjectCardEdge(),
    clientMutationId: getArbitraryString(),
    projectColumn: getArbitraryProjectColumn(),
  });

export const getArbitraryAddProjectColumnInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryAddProjectColumnPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    columnEdge: getArbitraryProjectColumnEdge(),
    project: getArbitraryProject(),
  });

export const getArbitraryAddPullRequestReviewInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryDraftPullRequestReviewComment = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryPullRequestReviewEvent = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("APPROVE"),
    fc.constant("COMMENT"),
    fc.constant("DISMISS"),
    fc.constant("REQUEST_CHANGES")
  );

export const getArbitraryDraftPullRequestReviewThread = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryAddPullRequestReviewPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    pullRequestReview: getArbitraryPullRequestReview(),
    reviewEdge: getArbitraryPullRequestReviewEdge(),
  });

export const getArbitraryAddPullRequestReviewCommentInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryAddPullRequestReviewCommentPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    comment: getArbitraryPullRequestReviewComment(),
    commentEdge: getArbitraryPullRequestReviewCommentEdge(),
  });

export const getArbitraryAddPullRequestReviewThreadInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryAddPullRequestReviewThreadPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    thread: getArbitraryPullRequestReviewThread(),
  });

export const getArbitraryAddReactionInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryAddReactionPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    reaction: getArbitraryReaction(),
    subject: getArbitraryReactable(),
  });

export const getArbitraryAddStarInput = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryAddStarPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    starrable: getArbitraryStarrable(),
  });

export const getArbitraryArchiveRepositoryInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryArchiveRepositoryPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    repository: getArbitraryRepository(),
  });

export const getArbitraryCancelEnterpriseAdminInvitationInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryCancelEnterpriseAdminInvitationPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    invitation: getArbitraryEnterpriseAdministratorInvitation(),
    message: getArbitraryString(),
  });

export const getArbitraryChangeUserStatusInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryChangeUserStatusPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    status: getArbitraryUserStatus(),
  });

export const getArbitraryClearLabelsFromLabelableInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryClearLabelsFromLabelablePayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    labelable: getArbitraryLabelable(),
  });

export const getArbitraryCloneProjectInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryCloneProjectPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    jobStatusId: getArbitraryString(),
    project: getArbitraryProject(),
  });

export const getArbitraryCloneTemplateRepositoryInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryCloneTemplateRepositoryPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    repository: getArbitraryRepository(),
  });

export const getArbitraryCloseIssueInput = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryCloseIssuePayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    issue: getArbitraryIssue(),
  });

export const getArbitraryClosePullRequestInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryClosePullRequestPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    pullRequest: getArbitraryPullRequest(),
  });

export const getArbitraryConvertProjectCardNoteToIssueInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryConvertProjectCardNoteToIssuePayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    projectCard: getArbitraryProjectCard(),
  });

export const getArbitraryCreateBranchProtectionRuleInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryCreateBranchProtectionRulePayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    branchProtectionRule: getArbitraryBranchProtectionRule(),
    clientMutationId: getArbitraryString(),
  });

export const getArbitraryCreateEnterpriseOrganizationInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryCreateEnterpriseOrganizationPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    enterprise: getArbitraryEnterprise(),
    organization: getArbitraryOrganization(),
  });

export const getArbitraryCreateIpAllowListEntryInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryCreateIpAllowListEntryPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    ipAllowListEntry: getArbitraryIpAllowListEntry(),
  });

export const getArbitraryCreateIssueInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryCreateIssuePayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    issue: getArbitraryIssue(),
  });

export const getArbitraryCreateProjectInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryProjectTemplate = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("AUTOMATED_KANBAN_V2"),
    fc.constant("AUTOMATED_REVIEWS_KANBAN"),
    fc.constant("BASIC_KANBAN"),
    fc.constant("BUG_TRIAGE")
  );

export const getArbitraryCreateProjectPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    project: getArbitraryProject(),
  });

export const getArbitraryCreatePullRequestInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryCreatePullRequestPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    pullRequest: getArbitraryPullRequest(),
  });

export const getArbitraryCreateRefInput = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryCreateRefPayload = (): fc.Arbitrary<any> =>
  fc.record({ clientMutationId: getArbitraryString(), ref: getArbitraryRef() });

export const getArbitraryCreateRepositoryInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryCreateRepositoryPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    repository: getArbitraryRepository(),
  });

export const getArbitraryCreateTeamDiscussionInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryCreateTeamDiscussionPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    teamDiscussion: getArbitraryTeamDiscussion(),
  });

export const getArbitraryCreateTeamDiscussionCommentInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryCreateTeamDiscussionCommentPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    teamDiscussionComment: getArbitraryTeamDiscussionComment(),
  });

export const getArbitraryDeclineTopicSuggestionInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryTopicSuggestionDeclineReason = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("NOT_RELEVANT"),
    fc.constant("PERSONAL_PREFERENCE"),
    fc.constant("TOO_GENERAL"),
    fc.constant("TOO_SPECIFIC")
  );

export const getArbitraryDeclineTopicSuggestionPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    topic: getArbitraryTopic(),
  });

export const getArbitraryDeleteBranchProtectionRuleInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryDeleteBranchProtectionRulePayload = (): fc.Arbitrary<
  any
> => fc.record({ clientMutationId: getArbitraryString() });

export const getArbitraryDeleteDeploymentInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryDeleteDeploymentPayload = (): fc.Arbitrary<any> =>
  fc.record({ clientMutationId: getArbitraryString() });

export const getArbitraryDeleteIpAllowListEntryInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryDeleteIpAllowListEntryPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    ipAllowListEntry: getArbitraryIpAllowListEntry(),
  });

export const getArbitraryDeleteIssueInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryDeleteIssuePayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    repository: getArbitraryRepository(),
  });

export const getArbitraryDeleteIssueCommentInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryDeleteIssueCommentPayload = (): fc.Arbitrary<any> =>
  fc.record({ clientMutationId: getArbitraryString() });

export const getArbitraryDeleteProjectInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryDeleteProjectPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    owner: getArbitraryProjectOwner(),
  });

export const getArbitraryDeleteProjectCardInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryDeleteProjectCardPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    column: getArbitraryProjectColumn(),
    deletedCardId: getArbitraryID(),
  });

export const getArbitraryDeleteProjectColumnInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryDeleteProjectColumnPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    deletedColumnId: getArbitraryID(),
    project: getArbitraryProject(),
  });

export const getArbitraryDeletePullRequestReviewInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryDeletePullRequestReviewPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    pullRequestReview: getArbitraryPullRequestReview(),
  });

export const getArbitraryDeletePullRequestReviewCommentInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryDeletePullRequestReviewCommentPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    pullRequestReview: getArbitraryPullRequestReview(),
  });

export const getArbitraryDeleteRefInput = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryDeleteRefPayload = (): fc.Arbitrary<any> =>
  fc.record({ clientMutationId: getArbitraryString() });

export const getArbitraryDeleteTeamDiscussionInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryDeleteTeamDiscussionPayload = (): fc.Arbitrary<any> =>
  fc.record({ clientMutationId: getArbitraryString() });

export const getArbitraryDeleteTeamDiscussionCommentInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryDeleteTeamDiscussionCommentPayload = (): fc.Arbitrary<
  any
> => fc.record({ clientMutationId: getArbitraryString() });

export const getArbitraryDismissPullRequestReviewInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryDismissPullRequestReviewPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    pullRequestReview: getArbitraryPullRequestReview(),
  });

export const getArbitraryFollowUserInput = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryFollowUserPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    user: getArbitraryUser(),
  });

export const getArbitraryInviteEnterpriseAdminInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryInviteEnterpriseAdminPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    invitation: getArbitraryEnterpriseAdministratorInvitation(),
  });

export const getArbitraryLinkRepositoryToProjectInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryLinkRepositoryToProjectPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    project: getArbitraryProject(),
    repository: getArbitraryRepository(),
  });

export const getArbitraryLockLockableInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryLockLockablePayload = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    clientMutationId: getArbitraryString(),
    lockedRecord: getArbitraryLockable(),
  });

export const getArbitraryMarkPullRequestReadyForReviewInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryMarkPullRequestReadyForReviewPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    pullRequest: getArbitraryPullRequest(),
  });

export const getArbitraryMergeBranchInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryMergeBranchPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    mergeCommit: getArbitraryCommit(),
  });

export const getArbitraryMergePullRequestInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryPullRequestMergeMethod = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("MERGE"), fc.constant("REBASE"), fc.constant("SQUASH"));

export const getArbitraryMergePullRequestPayload = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    clientMutationId: getArbitraryString(),
    pullRequest: getArbitraryPullRequest(),
  });

export const getArbitraryMinimizeCommentInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryReportedContentClassifiers = (): fc.Arbitrary<any> =>
  fc.oneof(
    fc.constant("ABUSE"),
    fc.constant("DUPLICATE"),
    fc.constant("OFF_TOPIC"),
    fc.constant("OUTDATED"),
    fc.constant("RESOLVED"),
    fc.constant("SPAM")
  );

export const getArbitraryMinimizeCommentPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    minimizedComment: getArbitraryMinimizable(),
  });

export const getArbitraryMoveProjectCardInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryMoveProjectCardPayload = (): fc.Arbitrary<any> =>
  fc.record({
    cardEdge: getArbitraryProjectCardEdge(),
    clientMutationId: getArbitraryString(),
  });

export const getArbitraryMoveProjectColumnInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryMoveProjectColumnPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    columnEdge: getArbitraryProjectColumnEdge(),
  });

export const getArbitraryRegenerateEnterpriseIdentityProviderRecoveryCodesInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryRegenerateEnterpriseIdentityProviderRecoveryCodesPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    identityProvider: getArbitraryEnterpriseIdentityProvider(),
  });

export const getArbitraryRemoveAssigneesFromAssignableInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryRemoveAssigneesFromAssignablePayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    assignable: getArbitraryAssignable(),
    clientMutationId: getArbitraryString(),
  });

export const getArbitraryRemoveEnterpriseAdminInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryRemoveEnterpriseAdminPayload = (): fc.Arbitrary<any> =>
  fc.record({
    admin: getArbitraryUser(),
    clientMutationId: getArbitraryString(),
    enterprise: getArbitraryEnterprise(),
    message: getArbitraryString(),
    viewer: getArbitraryUser(),
  });

export const getArbitraryRemoveEnterpriseIdentityProviderInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryRemoveEnterpriseIdentityProviderPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    identityProvider: getArbitraryEnterpriseIdentityProvider(),
  });

export const getArbitraryRemoveEnterpriseOrganizationInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryRemoveEnterpriseOrganizationPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    enterprise: getArbitraryEnterprise(),
    organization: getArbitraryOrganization(),
    viewer: getArbitraryUser(),
  });

export const getArbitraryRemoveLabelsFromLabelableInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryRemoveLabelsFromLabelablePayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    labelable: getArbitraryLabelable(),
  });

export const getArbitraryRemoveOutsideCollaboratorInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryRemoveOutsideCollaboratorPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    removedUser: getArbitraryUser(),
  });

export const getArbitraryRemoveReactionInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryRemoveReactionPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    reaction: getArbitraryReaction(),
    subject: getArbitraryReactable(),
  });

export const getArbitraryRemoveStarInput = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryRemoveStarPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    starrable: getArbitraryStarrable(),
  });

export const getArbitraryReopenIssueInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryReopenIssuePayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    issue: getArbitraryIssue(),
  });

export const getArbitraryReopenPullRequestInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryReopenPullRequestPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    pullRequest: getArbitraryPullRequest(),
  });

export const getArbitraryRequestReviewsInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryRequestReviewsPayload = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    clientMutationId: getArbitraryString(),
    pullRequest: getArbitraryPullRequest(),
    requestedReviewersEdge: getArbitraryUserEdge(),
  });

export const getArbitraryResolveReviewThreadInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryResolveReviewThreadPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    thread: getArbitraryPullRequestReviewThread(),
  });

export const getArbitrarySetEnterpriseIdentityProviderInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitrarySetEnterpriseIdentityProviderPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    identityProvider: getArbitraryEnterpriseIdentityProvider(),
  });

export const getArbitrarySubmitPullRequestReviewInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitrarySubmitPullRequestReviewPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    pullRequestReview: getArbitraryPullRequestReview(),
  });

export const getArbitraryTransferIssueInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryTransferIssuePayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    issue: getArbitraryIssue(),
  });

export const getArbitraryUnarchiveRepositoryInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryUnarchiveRepositoryPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    repository: getArbitraryRepository(),
  });

export const getArbitraryUnfollowUserInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryUnfollowUserPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    user: getArbitraryUser(),
  });

export const getArbitraryUnlinkRepositoryFromProjectInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryUnlinkRepositoryFromProjectPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    project: getArbitraryProject(),
    repository: getArbitraryRepository(),
  });

export const getArbitraryUnlockLockableInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryUnlockLockablePayload = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    clientMutationId: getArbitraryString(),
    unlockedRecord: getArbitraryLockable(),
  });

export const getArbitraryUnmarkIssueAsDuplicateInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryUnmarkIssueAsDuplicatePayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    duplicate: getArbitraryIssueOrPullRequest(),
  });

export const getArbitraryUnminimizeCommentInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryUnminimizeCommentPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    unminimizedComment: getArbitraryMinimizable(),
  });

export const getArbitraryUnresolveReviewThreadInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryUnresolveReviewThreadPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    thread: getArbitraryPullRequestReviewThread(),
  });

export const getArbitraryUpdateBranchProtectionRuleInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryUpdateBranchProtectionRulePayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    branchProtectionRule: getArbitraryBranchProtectionRule(),
    clientMutationId: getArbitraryString(),
  });

export const getArbitraryUpdateEnterpriseActionExecutionCapabilitySettingInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryActionExecutionCapabilitySetting = (): fc.Arbitrary<
  any
> =>
  fc.oneof(
    fc.constant("ALL_ACTIONS"),
    fc.constant("DISABLED"),
    fc.constant("LOCAL_ACTIONS_ONLY"),
    fc.constant("NO_POLICY")
  );

export const getArbitraryUpdateEnterpriseActionExecutionCapabilitySettingPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    enterprise: getArbitraryEnterprise(),
    message: getArbitraryString(),
  });

export const getArbitraryUpdateEnterpriseAdministratorRoleInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryUpdateEnterpriseAdministratorRolePayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    message: getArbitraryString(),
  });

export const getArbitraryUpdateEnterpriseAllowPrivateRepositoryForkingSettingInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryUpdateEnterpriseAllowPrivateRepositoryForkingSettingPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    enterprise: getArbitraryEnterprise(),
    message: getArbitraryString(),
  });

export const getArbitraryUpdateEnterpriseDefaultRepositoryPermissionSettingInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryUpdateEnterpriseDefaultRepositoryPermissionSettingPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    enterprise: getArbitraryEnterprise(),
    message: getArbitraryString(),
  });

export const getArbitraryUpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryUpdateEnterpriseMembersCanChangeRepositoryVisibilitySettingPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    enterprise: getArbitraryEnterprise(),
    message: getArbitraryString(),
  });

export const getArbitraryUpdateEnterpriseMembersCanCreateRepositoriesSettingInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryUpdateEnterpriseMembersCanCreateRepositoriesSettingPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    enterprise: getArbitraryEnterprise(),
    message: getArbitraryString(),
  });

export const getArbitraryUpdateEnterpriseMembersCanDeleteIssuesSettingInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryUpdateEnterpriseMembersCanDeleteIssuesSettingPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    enterprise: getArbitraryEnterprise(),
    message: getArbitraryString(),
  });

export const getArbitraryUpdateEnterpriseMembersCanDeleteRepositoriesSettingInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryUpdateEnterpriseMembersCanDeleteRepositoriesSettingPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    enterprise: getArbitraryEnterprise(),
    message: getArbitraryString(),
  });

export const getArbitraryUpdateEnterpriseMembersCanInviteCollaboratorsSettingInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryUpdateEnterpriseMembersCanInviteCollaboratorsSettingPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    enterprise: getArbitraryEnterprise(),
    message: getArbitraryString(),
  });

export const getArbitraryUpdateEnterpriseMembersCanMakePurchasesSettingInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryUpdateEnterpriseMembersCanMakePurchasesSettingPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    enterprise: getArbitraryEnterprise(),
    message: getArbitraryString(),
  });

export const getArbitraryUpdateEnterpriseMembersCanUpdateProtectedBranchesSettingInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryUpdateEnterpriseMembersCanUpdateProtectedBranchesSettingPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    enterprise: getArbitraryEnterprise(),
    message: getArbitraryString(),
  });

export const getArbitraryUpdateEnterpriseMembersCanViewDependencyInsightsSettingInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryUpdateEnterpriseMembersCanViewDependencyInsightsSettingPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    enterprise: getArbitraryEnterprise(),
    message: getArbitraryString(),
  });

export const getArbitraryUpdateEnterpriseOrganizationProjectsSettingInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryUpdateEnterpriseOrganizationProjectsSettingPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    enterprise: getArbitraryEnterprise(),
    message: getArbitraryString(),
  });

export const getArbitraryUpdateEnterpriseProfileInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryUpdateEnterpriseProfilePayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    enterprise: getArbitraryEnterprise(),
  });

export const getArbitraryUpdateEnterpriseRepositoryProjectsSettingInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryUpdateEnterpriseRepositoryProjectsSettingPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    enterprise: getArbitraryEnterprise(),
    message: getArbitraryString(),
  });

export const getArbitraryUpdateEnterpriseTeamDiscussionsSettingInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryUpdateEnterpriseTeamDiscussionsSettingPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    enterprise: getArbitraryEnterprise(),
    message: getArbitraryString(),
  });

export const getArbitraryUpdateEnterpriseTwoFactorAuthenticationRequiredSettingInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryUpdateEnterpriseTwoFactorAuthenticationRequiredSettingPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    enterprise: getArbitraryEnterprise(),
    message: getArbitraryString(),
  });

export const getArbitraryUpdateIpAllowListEnabledSettingInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryUpdateIpAllowListEnabledSettingPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    owner: getArbitraryIpAllowListOwner(),
  });

export const getArbitraryUpdateIpAllowListEntryInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryUpdateIpAllowListEntryPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    ipAllowListEntry: getArbitraryIpAllowListEntry(),
  });

export const getArbitraryUpdateIssueInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryUpdateIssuePayload = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    clientMutationId: getArbitraryString(),
    issue: getArbitraryIssue(),
  });

export const getArbitraryUpdateIssueCommentInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryUpdateIssueCommentPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    issueComment: getArbitraryIssueComment(),
  });

export const getArbitraryUpdateProjectInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryUpdateProjectPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    project: getArbitraryProject(),
  });

export const getArbitraryUpdateProjectCardInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryUpdateProjectCardPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    projectCard: getArbitraryProjectCard(),
  });

export const getArbitraryUpdateProjectColumnInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryUpdateProjectColumnPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    projectColumn: getArbitraryProjectColumn(),
  });

export const getArbitraryUpdatePullRequestInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryPullRequestUpdateState = (): fc.Arbitrary<any> =>
  fc.oneof(fc.constant("CLOSED"), fc.constant("OPEN"));

export const getArbitraryUpdatePullRequestPayload = (): fc.Arbitrary<any> =>
  fc.record({
    actor: getArbitraryActor(),
    clientMutationId: getArbitraryString(),
    pullRequest: getArbitraryPullRequest(),
  });

export const getArbitraryUpdatePullRequestReviewInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryUpdatePullRequestReviewPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    pullRequestReview: getArbitraryPullRequestReview(),
  });

export const getArbitraryUpdatePullRequestReviewCommentInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryUpdatePullRequestReviewCommentPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    pullRequestReviewComment: getArbitraryPullRequestReviewComment(),
  });

export const getArbitraryUpdateRefInput = (): fc.Arbitrary<any> => fc.string();

export const getArbitraryUpdateRefPayload = (): fc.Arbitrary<any> =>
  fc.record({ clientMutationId: getArbitraryString(), ref: getArbitraryRef() });

export const getArbitraryUpdateRepositoryInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryUpdateRepositoryPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    repository: getArbitraryRepository(),
  });

export const getArbitraryUpdateSubscriptionInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryUpdateSubscriptionPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    subscribable: getArbitrarySubscribable(),
  });

export const getArbitraryUpdateTeamDiscussionInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryUpdateTeamDiscussionPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    teamDiscussion: getArbitraryTeamDiscussion(),
  });

export const getArbitraryUpdateTeamDiscussionCommentInput = (): fc.Arbitrary<
  any
> => fc.string();

export const getArbitraryUpdateTeamDiscussionCommentPayload = (): fc.Arbitrary<
  any
> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    teamDiscussionComment: getArbitraryTeamDiscussionComment(),
  });

export const getArbitraryUpdateTopicsInput = (): fc.Arbitrary<any> =>
  fc.string();

export const getArbitraryUpdateTopicsPayload = (): fc.Arbitrary<any> =>
  fc.record({
    clientMutationId: getArbitraryString(),
    invalidTopicNames: fc.array(getArbitraryString()),
    repository: getArbitraryRepository(),
  });

export const getArbitraryBlob = (): fc.Arbitrary<any> =>
  fc.record({
    abbreviatedOid: getArbitraryString(),
    byteSize: getArbitraryInt(),
    commitResourcePath: getArbitraryURI(),
    commitUrl: getArbitraryURI(),
    id: getArbitraryID(),
    isBinary: getArbitraryBoolean(),
    isTruncated: getArbitraryBoolean(),
    oid: getArbitraryGitObjectID(),
    repository: getArbitraryRepository(),
    text: getArbitraryString(),
  });

export const getArbitraryGenericHovercardContext = (): fc.Arbitrary<any> =>
  fc.record({ message: getArbitraryString(), octicon: getArbitraryString() });

export const getArbitraryGpgSignature = (): fc.Arbitrary<any> =>
  fc.record({
    email: getArbitraryString(),
    isValid: getArbitraryBoolean(),
    keyId: getArbitraryString(),
    payload: getArbitraryString(),
    signature: getArbitraryString(),
    signer: getArbitraryUser(),
    state: getArbitraryGitSignatureState(),
    wasSignedByGitHub: getArbitraryBoolean(),
  });

export const getArbitraryOrganizationTeamsHovercardContext = (): fc.Arbitrary<
  any
> =>
  fc.record({
    message: getArbitraryString(),
    octicon: getArbitraryString(),
    relevantTeams: getArbitraryTeamConnection(),
    teamsResourcePath: getArbitraryURI(),
    teamsUrl: getArbitraryURI(),
    totalTeamCount: getArbitraryInt(),
  });

export const getArbitraryOrganizationsHovercardContext = (): fc.Arbitrary<
  any
> =>
  fc.record({
    message: getArbitraryString(),
    octicon: getArbitraryString(),
    relevantOrganizations: getArbitraryOrganizationConnection(),
    totalOrganizationCount: getArbitraryInt(),
  });

export const getArbitraryRepositoryInvitation = (): fc.Arbitrary<any> =>
  fc.record({
    id: getArbitraryID(),
    invitee: getArbitraryUser(),
    inviter: getArbitraryUser(),
    permission: getArbitraryRepositoryPermission(),
    repository: getArbitraryRepositoryInfo(),
  });

export const getArbitraryReviewStatusHovercardContext = (): fc.Arbitrary<any> =>
  fc.record({
    message: getArbitraryString(),
    octicon: getArbitraryString(),
    reviewDecision: getArbitraryPullRequestReviewDecision(),
  });

export const getArbitrarySmimeSignature = (): fc.Arbitrary<any> =>
  fc.record({
    email: getArbitraryString(),
    isValid: getArbitraryBoolean(),
    payload: getArbitraryString(),
    signature: getArbitraryString(),
    signer: getArbitraryUser(),
    state: getArbitraryGitSignatureState(),
    wasSignedByGitHub: getArbitraryBoolean(),
  });

export const getArbitraryTag = (): fc.Arbitrary<any> =>
  fc.record({
    abbreviatedOid: getArbitraryString(),
    commitResourcePath: getArbitraryURI(),
    commitUrl: getArbitraryURI(),
    id: getArbitraryID(),
    message: getArbitraryString(),
    name: getArbitraryString(),
    oid: getArbitraryGitObjectID(),
    repository: getArbitraryRepository(),
    tagger: getArbitraryGitActor(),
    target: getArbitraryGitObject(),
  });

export const getArbitraryUnknownSignature = (): fc.Arbitrary<any> =>
  fc.record({
    email: getArbitraryString(),
    isValid: getArbitraryBoolean(),
    payload: getArbitraryString(),
    signature: getArbitraryString(),
    signer: getArbitraryUser(),
    state: getArbitraryGitSignatureState(),
    wasSignedByGitHub: getArbitraryBoolean(),
  });

export const getArbitraryViewerHovercardContext = (): fc.Arbitrary<any> =>
  fc.record({
    message: getArbitraryString(),
    octicon: getArbitraryString(),
    viewer: getArbitraryUser(),
  });
