export default {
  sys: {
    networkRequestTimeout: 'Network request timeout',
    systemHint: 'System Hint',
    reloginTips: 'Login status has expired, you can stay on this page or login again',
    reloginBtn: 'Login again',
    interfaceRequestFailed: 'Interface request failed',
    logoutTips: 'Are you sure you want to log out and exit the system?',
    warningTitle: 'Warning'
  },
  login: {
    title: 'EF-ADMIN System Login',
    logIn: 'Login',
    username: 'Username',
    password: 'Password',
    rememberMe: 'Remember me',
    verificationCode: 'Verification code',
    LoggingIn: 'Logging In...'
  },
  sidebar: {
    title: 'EF-ADMIN System'
  },
  navbar: {
    dashboard: 'Dashboard',
    github: 'Github',
    fullScreen: 'Full Screen',
    theme: 'Theme',
    size: 'Global Size',
    switchLang: 'Switch Language',
    projectDocs: 'Project Docs',
    layoutSettings: 'Layout Settings',
    profile: 'Profile',
    logOut: 'Log Out'
  },
  dashboard: { // 首页数据面板部分
    dayFlow: 'Daily  Flow',
    dayIP: 'Daily IP Amount',
    weekFlow: 'Weekly Flow',
    weekIP: 'Weekly IP Amount'
  },
  crud: {
    new: 'New',
    edit: 'Edit',
    delete: 'Delete',
    export: 'Export',
    selectAll: 'Select All',
    search: 'Search',
    fuzzySearch: 'Fuzzy search',
    resetSearch: 'Reset Search',
    advanceSearch: 'Advance Search',
    confirm: 'OK',
    cancel: 'Cancel',
    submitSuccess: 'Submit success',
    addSuccess: 'Create success',
    editSuccess: 'Edit success',
    delSuccess: 'Delete success',
    exportData: 'Data',
    deleteTips: 'Are you sure you want to delete this data?',
    deleteWarn: 'Warning',
    multiDeleteTipsStart: 'Are you sure you want to delete the selected ',
    multiDeleteTipsEnd: ' data?',
    selectAtLeastOne: 'Please select at least one column',
    save: 'Save'
  },
  bool: {
    true: 'Yes',
    false: 'No'
  },
  common: {
    close: 'Close',
    clickUpload: 'Click Upload',
    success: 'Succeed',
    failure: 'Failure',
    dragFileUpload: 'Drag files here, or',
    startDate: 'Start date',
    endDate: 'End date',
    startTime: 'Start time',
    endTime: 'End time',
    testConnect: 'Test connection',
    connectOK: 'Connection succeed',
    connectFailed: 'Connection failed',
    execOK: 'Execution succeed'
  },
  // 组件的属性国际化
  // 基础实体BaseEntity的属性字段
  be: {
    id: 'Primary key',
    createTime: 'Creation Time',
    updateTime: 'Update Time',
    creatorNum: 'Founder',
    updaterNum: 'Updater',
    remark: 'Remark',
    operate: 'Operate'
  },
  // 用户管理表
  user: {
    TITLE: 'User',
    username: 'Username',
    nickName: 'Nickname',
    usercode: 'Usercode',
    sex: 'Sex',
    userAvatar: 'Profile picture',
    email: 'Email',
    phone: 'Phone',
    enabled: 'Status',
    password: 'Password',
    lastPasswordResetTime: 'Last modified password time',
    roles: 'Role',
    job: 'Job',
    dept: 'Department',
    selectDept: 'Select department',
    selectJob: 'Choose department first',
    selectRole: 'Choose a role'
  },
  sex: {
    male: 'Male',
    female: 'Female'
  },
  userAvatar: {
    realName: '真实姓名',
    path: '路径',
    size: '大小'
  },
  role: {
    TITLE: 'Role',
    name: 'Name',
    dataScope: 'Data Scope',
    level: 'Level',
    remark: 'Remark',
    permission: 'Permission',
    users: 'users',
    menus: 'menus',
    depts: 'depts',
    roleList: 'Role List',
    menuAssignment: 'Menu Assignment'
  },
  menu: {
    TITLE: 'Menu',
    name: 'Menu Name',
    sort: 'Sort',
    path: 'Route',
    component: 'Component',
    type: 'Menu Type',
    permission: 'Permission',
    componentName: 'Component Name',
    icon: 'Icon',
    cache: 'Cache',
    hidden: 'Display',
    pid: 'Superior Menu',
    iFrame: 'External link',
    roles: 'Associated Role'
  },
  menuType: {
    dir: 'Directory',
    menu: 'Menu',
    button: 'Button',
    menuTitle: 'Menu Title',
    btnName: 'Button Name'
  },
  dept: {
    TITLE: 'Department',
    name: 'Name',
    enabled: 'Status',
    pid: 'Higher office',
    roles: '角色',
    selectSuperTips: 'Select superior category',
    deleteTips: 'Are you sure you want to delete it? If there are subordinate nodes, delete it together. This operation cannot be undone!'
  },
  job: {
    TITLE: 'Job',
    name: 'Job name',
    sort: 'Sort',
    enabled: 'Status',
    dept: 'Related department'
  },
  dict: {
    TITLE: 'Dict',
    queryTips: 'Enter name or remark',
    name: 'Dict name',
    dictList: 'Dict List',
    dictDetails: 'Dict Details',
    deleteTips: 'This will delete the dictionary and the corresponding dictionary details. Are you sure you want to delete it?'
  },
  dictDetail: {
    TITLE: 'Dictionary Details',
    queryTips: 'Enter dict label',
    label: 'Dict label',
    value: 'Dict value',
    sort: 'Sort',
    dict: 'Own dictionary',
    clickViewDetail: 'Click on the dictionary for details',
    deleteTips: 'Are you sure you want to delete this data?'
  },
  employee: {
    TITLE: 'Employee',
    name: 'Name',
    idNumber: 'ID Number',
    sex: 'Sex',
    code: 'Code',
    avatar: 'Avatar',
    email: 'Email',
    phone: 'Phone',
    status: 'Status',
    birthday: 'Birthday',
    address: 'Address',
    job: 'Job',
    dept: 'Department'
  },
  online: {
    TITLE: 'Online User',
    userName: 'User name',
    nickName: 'Nick name',
    job: 'Job',
    browser: 'Browser',
    ip: 'Login IP',
    address: 'Login address',
    loginTime: 'Login time',
    forceOut: 'Force Out',
    deleteTips: 'Are you sure you want to force logout？',
    deleteOk: 'Force out successfully!',
    deleteTitle: 'Warning',
    deleteContentStart: 'Confirm the ',
    deleteContentEnd: ' users who are force out?',
    allTableLikeSearch: 'Full table fuzzy search'
  },
  log: {
    username: 'User name',
    description: 'Behavior description',
    method: 'Request Method',
    params: 'Request Params',
    logType: 'Log type',
    requestIp: 'Request IP',
    address: 'Request location',
    browser: 'Browser',
    time: 'Request time-consuming',
    exceptionDetail: 'Exception details',
    viewDetail: 'View details',
    clearLog: 'Clear',
    deleteTitle: 'Warning',
    deleteTips: 'Are you sure you want to clear all operation logs?',
    deleteErrorTips: 'Are you sure you want to clear all exception logs?'
  },
  server: {
    TITLE: 'Service',
    name: 'Name',
    address: 'IP Address',
    port: 'Port',
    state: 'Status',
    cpuRate: 'CPU usage',
    cpuCore: 'CPU cores',
    memTotal: 'Total memory',
    memUsed: 'Memory usage',
    diskTotal: 'Total disk',
    diskUsed: 'Disk usage',
    swapTotal: 'Total swap',
    swapUsed: 'Swap usage',
    sort: 'Sort'
  },
  mserver: {
    TITLE: 'Server',
    name: 'Name',
    ip: 'IP address',
    port: 'Port',
    account: 'Account',
    password: 'Password',
    nameRequired: 'Please enter a name',
    ipRequired: 'Please enter the IP address',
    portRequired: 'Please enter the port',
    accountRequired: 'please enter user name',
    passwordRequired: 'Please enter the password',
    searchPlaceholder: 'Enter name or IP search'
  },
  mapp: {
    TITLE: 'Application',
    name: 'App Name',
    port: 'Port',
    uploadPath: 'Upload directory',
    deployPath: 'Deploy directory',
    backupPath: 'Backup directory',
    startScript: 'Startup script',
    deployScript: 'Deploy script',
    copyBtn: 'Copy',
    searchPlaceholder: 'Enter name search',
    nameRequired: 'Please enter the application name',
    portRequired: 'Please enter the port',
    uploadPathRequired: 'Please enter the upload directory',
    deployPathRequired: 'Please enter the deploy directory',
    backupPathRequired: 'Please enter the backup directory',
    startScriptRequired: 'Please enter the startup script',
    deployScriptRequired: 'Please enter the deploy script',
    namePlaceholder: 'File or directory name after deployment for backup',
    portPlaceholder: 'E.g: 8080',
    uploadPathPlaceholder: 'E.g: /opt/upload',
    deployPathPlaceholder: 'E.g: /opt/app',
    backupPathPlaceholder: 'E.g: /opt/backup'
  },
  deploy: {
    TITLE: 'Deploy',
    appName: 'App Name',
    server: 'Server',
    deployTime: 'Deploy Time',
    appNameRequired: 'Please select an application name',
    serverRequired: 'please select an server',
    systemRecovery: 'System Restore',
    statusQuery: 'Status Query',
    start: 'Start',
    stop: 'Stop',
    oneKeyDeploy: 'One-click Deploy',
    searchPlaceholder: 'Enter app name search'
  },
  deployHistory: {
    TITLE: 'Deploy History',
    appName: 'Application name',
    ip: 'Deploy IP',
    deployDate: 'Deploy date',
    deployUser: 'Deploy user',
    deployId: 'Deploy id',
    searchPlaceholder: 'Enter search content'
  },
  db: {
    TITLE: 'Database',
    name: 'Database name',
    jdbcUrl: 'JDBC link',
    userName: 'DB user',
    pwd: 'DB password',
    execScript: 'Execute Script',
    nameRequired: 'Please enter the database name',
    jdbcUrlRequired: 'Please enter the JDBC address',
    userNameRequired: 'Please enter the database username',
    pwdRequired: 'Please enter the database password',
    execSqlTips: 'After uploading, the system will automatically execute the SQL script'
  },
  task: {
    TITLE: 'Timed Task',
    LOGTITLE: 'Execution log',
    jobName: 'Task name',
    beanName: 'Bean name',
    methodName: 'Method name',
    params: 'Method params',
    cronExpression: 'cron Expression',
    isPause: 'Paused',
    logBtn: 'Log',
    searchPlaceholder: 'Enter task name search',
    execBtn: 'Run',
    resumeBtn: 'Resume',
    pauseBtn: 'Pause',
    paused: 'Paused',
    running: 'Running',
    deleteTips: 'Are you sure you want to stop and delete the task?',
    jobNameRequired: 'Please enter the task name',
    beanNameRequired: 'Please enter the bean name',
    methodNameRequired: 'Please enter the method name',
    cronExpressionRequired: 'Please enter the cron expression',
    logState: 'Log Status',
    logConsumeTime: 'Consume Time(ms)',
    logExceptionDetails: 'Exception Details',
    viewExceptionDetails: 'View Details'
  },
  codegen: {
    TITLE: 'Code generation',
    tableName: 'Table Name',
    engine: 'Engine',
    coding: 'Charset',
    searchPlaceholder: 'Enter table name query',
    synchronizeBtn: 'Synchronize',
    previewBtn: 'Preview',
    downloadBtn: 'Download',
    generateBtn: 'Generate',
    syncTips: 'Use this function when the table fields in the database change',
    syncOK: 'Successful synchronization',
    generateOK: 'Generated successfully'
  },
  genConfig: {
    tableName: 'Table name',
    apiAlias: 'Interface name',
    pack: 'Package path',
    moduleName: 'Module name',
    path: 'Front-end file path',
    apiPath: 'Front-end file path',
    author: 'Author',
    prefix: 'Remove Table prefix',
    cover: 'Cover',
    tblFieldConfig: 'Table Field Configure',
    fieldName: 'Field name',
    fieldType: 'Field type',
    fieldDescription: 'Field description',
    isRequired: 'Required',
    inList: 'In list',
    inForm: 'In form',
    inputType: 'Input type',
    queryType: 'Query type',
    dateAnnotation: 'Date annotation',
    linkDict: 'Link dict',
    formInput: 'Input',
    formTextarea: 'Textarea',
    formRadio: 'Radio',
    formSelect: 'Select',
    formDate: 'Date',
    autoCreateTime: 'Automatic create time',
    autoUpdateTime: 'Automatic update time',
    saveAndGenerate: 'Save&Generate',
    generateConfigure: 'Generate Configure',
    selectPlaceholder: 'Please choose',
    apiAliasTips: 'Interface name, used in controller and interface documentation',
    packTips: 'The name of the project package, and in which package the generated code is placed',
    moduleNameTips: 'The name of the module, please select a module that already exists in the project',
    pathTips: 'Enter the directory under the views folder and create it if it does not exist',
    authorTips: 'Author name above the class',
    prefixTips: 'Table prefix is ​​not stripped by default, but can be customized',
    coverTips: 'Beware of misuse, please choose carefully',
    apiAliasRequired: 'Interface name cannot be empty',
    packRequired: 'Package path cannot be empty',
    moduleNameRequired: 'Module name cannot be empty',
    pathRequired: 'Front end path cannot be empty',
    authorRequired: 'Author name cannot be empty',
    coverRequired: 'Cover cannot be empty',
    saveOK: 'Save success'
  },
  picture: {
    TITLE: 'Picture',
    filename: 'File name',
    url: 'Thumbnail',
    size: 'Size',
    height: 'Height',
    width: 'Width',
    delete: 'Delete address',
    username: 'Uploaded man',
    md5Code: 'MD5',
    uploadBtn: 'Upload',
    synchronizeBtn: 'synchronize',
    syncOK: 'Successful synchronization',
    syncTips: 'To use the synchronization function, you need to register an account in https://sm.ms/login, and modify the Secret Token in the application.yml file',
    searchPlaceholder: 'Enter file name'
  },
  storage: {
    LOCAL_TITLE: 'Local Storage',
    QINIU_TITLE: 'Qiniu Cloud Storage',
    realName: 'Real file name',
    name: 'File name',
    suffix: 'Suffix',
    path: 'Path',
    type: 'Type',
    size: 'Size',
    operate: 'Operator',
    uploadBtn: 'Upload',
    synchronizeBtn: 'Synchronize',
    configBtn: 'Configure',
    localSearchPlaceholder: 'Fuzzy input search',
    qiniuSearchPlaceholder: 'Enter file name search',
    fileUpload: 'File Upload',
    addFile: 'Add file',
    editFile: 'Edit file',
    clickUpload: 'Click upload',
    localUploadTips: 'Can upload files in any format, no more than 100M',
    qiniuUploadTips: 'Do not upload illegal files, and the file does not exceed 15M',
    thumbnail: 'Thumbnail',
    uploadOK: 'Uploaded successfully',
    sizeLimit: 'Upload file size cannot exceed 100MB!',
    bucket: 'Bucket',
    zone: 'Zone',
    host: 'Domain name',
    bucketType: 'Bucket type',
    typePublic: 'Public',
    typePrivate: 'Private',
    qiniuConfigTitle: 'Qiniu Cloud Configuration',
    accessKeyRequired: 'Please enter the Access Key',
    secretKeyRequired: 'Please enter the Secret Key',
    bucketRequired: 'Please enter the Bucket',
    zoneRequired: 'Please enter the Zone',
    hostRequired: 'Please enter the Domain Name',
    bucketTypeRequired: 'Please enter the Bucket Type',
    accessKeyPlaceholder: 'accessKey, View in Security Center, Key Management',
    secretKeyPlaceholder: 'secretKey, view in Security Center, Key Management',
    bucketPlaceholder: 'Storage name as unique bucket identifier',
    zonePlaceholder: 'Please select a storage area',
    hostPlaceholder: 'Domain name, which can be customized and needs to be bound in Qiniu Cloud'
  },
  email: {
    EMAIL_CONFIG_TAB: 'Mailbox Configure',
    EMAIL_SEND_TAB: 'Send Email',
    INSTRUCTIONS_TAB: 'Instructions',
    host: 'SMTP Server',
    port: 'SMTP Port',
    user: 'Sender',
    pass: 'Email password',
    fromUser: 'Sender mailbox',
    hostRequired: 'Please enter the SMTP Server address',
    portRequired: 'Please enter the SMTP port',
    userRequired: 'Please enter the sender name',
    passRequired: 'Please enter the mailbox password',
    fromUserRequired: 'Please enter the sender email',
    emailFormatError: 'Please input the correct email address',
    hostTips: 'Outgoing server used by the mailbox',
    portTips: 'Outgoing port number',
    userTips: 'Sender\'s display name',
    passTips: 'Authentication password of the mailbox on the mail server',
    fromUserTips: 'Sender\'s full email address',
    emailTitle: 'Email Subject',
    mailTo: 'Recipient',
    sendBtn: 'Send Email',
    emailSubjectRequired: 'Email subject cannot be empty',
    mailToRequired: 'Recipient is not allowed to be empty',
    atLeastOneMailto: 'Please keep at least one recipient',
    sendOK: 'Sent successfully',
    helpServerConfigTitle: 'Mail Server Configuration',
    helpMoreTitle: 'More Help',
    helpServerConfigTips: '\n' +
      ' # SMTP address of the mail server, optional, default is smtp\n' +
      ' # SMTP port of the mail server, optional, default 465 or 25\n' +
      ' # Sender (must be correct, otherwise sending failed)\n' +
      ' # Username, default is the sender email prefix\n' +
      ' # Password (note that some mailboxes require a separate password for the SMTP service, such as QQ and 163, etc.)\n' +
      ' # Whether to enable ssl, which is enabled by default',
    moreHelpViewDoc: 'Please check the documentation for more help：',
    hutool: 'hutool toolkit'
  },
  aliPay: {
    PAY_CONFIG_TAB: 'Pay Parameter Configure',
    PAY_TEST_TAB: 'Pay Test',
    INSTRUCTIONS_TAB: 'Instructions',
    appId: 'appID',
    sysServiceProviderId: 'Merchant account',
    privateKey: 'Merchant private key',
    publicKey: 'Alipay public key',
    signType: 'Signature method',
    gatewayUrl: 'Alipay open secure address',
    returnUrl: 'Callback address',
    notifyUrl: 'Async notification',
    commodityName: 'Commodity name',
    commodityPrice: 'Commodity price',
    commodityDesc: 'Commodity remark',
    toPayBtn: 'To pay',
    commodityNameRequired: 'Commodity name cannot be empty',
    commodityPriceRequired: 'Commodity price cannot be empty',
    commodityDescRequired: 'Commodity remark cannot be empty',
    priceRangeTips: 'Test allowable range (0,5000]',
    helpWarningTitle: 'Attention',
    helpPaySettingsTitle: 'Pay Settings',
    applyAddress: '\nThe parameters used in the test are sandbox environments and are for test use only. Application address:',
    aliPayDevPlatform: 'Alipay development platform',
    payTestTips: '\nFor payment testing, use\n' +
      'Account：uuxesw9745@sandbox.com\n' +
      'Password and pay password：111111',
    codeRemark: '\n// Payment provides two interfaces，\n' +
      '// PC and mobile phones, and use code recognition on the front end',
    ifIsAndroid: 'Determine if it is an Android phone',
    ifIsApple: 'Determine if it is an Apple phone',
    appIdSpan: 'Application APPID, the receiving account is both the APPID corresponding Alipay account',
    sysServiceProviderIdSpan: 'Merchant account',
    privateKeySpan: 'Merchant private key, your PKCS8 format RSA2 private key',
    publicKeySpan: 'Alipay public key',
    returnUrlSpan: 'Address returned after order completion',
    notifyUrlSpan: 'Payment result asynchronous notification address',
    appIdRequired: 'Please enter appID',
    sysServiceProviderIdRequired: 'Please enter the merchant account',
    privateKeyRequired: 'Please enter the merchant private key',
    publicKeyRequired: 'Please enter the Alipay public key',
    returnUrlRequired: 'Please enter the callback address',
    notifyUrlRequired: 'Please enter the asynchronous notification address'
  },
  advanceSearch: {
    globalTypeLabel: 'Condition Type',
    nameLabel: 'Condition name',
    searchTypeLabel: 'Query mode',
    valLabel: 'Value',
    orderLabel: 'Order',
    logicalTypeLabel: 'Satisfy mode',
    bracketsGroupLabel: 'Belonging group',
    logicalTypeGroupLabel: 'Group logic',
    andLabel: 'AND',
    orLabel: 'OR',
    GroupItemDefault: 'Default group',
    GroupItemOther: 'Other group',
    typeSingle: 'Single',
    typeMulti: 'Multiple',
    typeGroup: 'Group',
    globalTypeTitle0: 'Select this when there is only one condition',
    globalTypeTitle1: 'Select this when there are multiple conditions',
    globalTypeTitle2: 'Select this when there are only bracket conditions',
    nameTitle: 'Please select a search condition',
    searchTypeTitle: 'Please select a query method',
    val1Title: 'Value, or the starting value of an range query',
    val2Title: 'End value of range query',
    orderTitle: 'The order in which the conditions are used. The default value is 0.',
    logicalTypeTitle: 'Please select the conditions to meet',
    bracketsGroupTitle: 'Please select the group to which the condition belongs',
    logicalTypeGroupTitle: 'Please choose a relationship with another group',
    searchTypeTitle0: 'Full fuzzy matching',
    searchTypeTitle1: 'Exact equality',
    searchTypeTitle2: 'Range',
    searchTypeTitle3: 'Not equal to',
    searchTypeTitle4: 'Less than',
    searchTypeTitle5: 'Less than or equal to',
    searchTypeTitle6: 'More than',
    searchTypeTitle7: 'Greater or equal to',
    searchTypeTitle8: 'Is null',
    searchTypeTitle9: 'Non-null',
    searchTypeTitle10: 'Left fuzzy query',
    searchTypeTitle11: 'Right fuzzy query',
    andTitle: 'Must meet this condition, the logical meaning is and',
    orTitle: 'The current conditions may not be met, the logical meaning is or',
    defaultGroupTitle: 'Use default group',
    otherGroupTitle: 'Use other group',
    btnSearch: 'Search',
    btnReset: 'Clear all query conditions',
    btnCancel: 'Cancel'
  },
  documentation: {
    documentation: 'Documentation',
    github: 'Github Repository'
  },
  permission: {
    addRole: 'New Role',
    editPermission: 'Edit',
    roles: 'Your roles',
    switchRoles: 'Switch roles',
    tips: 'In some cases, using v-permission will have no effect. For example: Element-UI  el-tab or el-table-column and other scenes that dynamically render dom. You can only do this with v-if.',
    delete: 'Delete',
    confirm: 'Confirm',
    cancel: 'Cancel'
  },
  guide: {
    description: 'The guide page is useful for some people who entered the project for the first time. You can briefly introduce the features of the project. Demo is based on ',
    button: 'Show Guide'
  },
  components: {
    documentation: 'Documentation',
    tinymceTips: 'Rich text is a core feature of the management backend, but at the same time it is a place with lots of pits. In the process of selecting rich texts, I also took a lot of detours. The common rich texts on the market have been basically used, and I finally chose Tinymce. See the more detailed rich text comparison and introduction.',
    dropzoneTips: 'Because my business has special needs, and has to upload images to qiniu, so instead of a third party, I chose encapsulate it by myself. It is very simple, you can see the detail code in @/components/Dropzone.',
    stickyTips: 'when the page is scrolled to the preset position will be sticky on the top.',
    backToTopTips1: 'When the page is scrolled to the specified position, the Back to Top button appears in the lower right corner',
    backToTopTips2: 'You can customize the style of the button, show / hide, height of appearance, height of the return. If you need a text prompt, you can use element-ui el-tooltip elements externally',
    imageUploadTips: 'Since I was using only the vue@1 version, and it is not compatible with mockjs at the moment, I modified it myself, and if you are going to use it, it is better to use official version.'
  },
  table: {
    dynamicTips1: 'Fixed header, sorted by header order',
    dynamicTips2: 'Not fixed header, sorted by click order',
    dragTips1: 'The default order',
    dragTips2: 'The after dragging order',
    title: 'Title',
    importance: 'Imp',
    type: 'Type',
    remark: 'Remark',
    search: 'Search',
    add: 'Add',
    export: 'Export',
    reviewer: 'reviewer',
    id: 'ID',
    date: 'Date',
    author: 'Author',
    readings: 'Readings',
    status: 'Status',
    actions: 'Actions',
    edit: 'Edit',
    publish: 'Publish',
    draft: 'Draft',
    delete: 'Delete',
    cancel: 'Cancel',
    confirm: 'Confirm'
  },
  example: {
    warning: 'Creating and editing pages cannot be cached by keep-alive because keep-alive include does not currently support caching based on routes, so it is currently cached based on component name. If you want to achieve a similar caching effect, you can use a browser caching scheme such as localStorage. Or do not use keep-alive include to cache all pages directly. See details'
  },
  errorLog: {
    tips: 'Please click the bug icon in the upper right corner',
    description: 'Now the management system are basically the form of the spa, it enhances the user experience, but it also increases the possibility of page problems, a small negligence may lead to the entire page deadlock. Fortunately Vue provides a way to catch handling exceptions, where you can handle errors or report exceptions.',
    documentation: 'Document introduction'
  },
  excel: {
    export: 'Export',
    selectedExport: 'Export Selected Items',
    placeholder: 'Please enter the file name (default excel-list)'
  },
  zip: {
    export: 'Export',
    placeholder: 'Please enter the file name (default file)'
  },
  pdf: {
    tips: 'Here we use window.print() to implement the feature of downloading PDF.'
  },
  theme: {
    change: 'Change Theme',
    documentation: 'Theme documentation',
    tips: 'Tips: It is different from the theme-pick on the navbar is two different skinning methods, each with different application scenarios. Refer to the documentation for details.'
  },
  tagsView: {
    refresh: 'Refresh',
    close: 'Close',
    closeOthers: 'Close Others',
    closeAll: 'Close All'
  },
  settings: {
    title: 'Page style setting',
    theme: 'Theme Color',
    tagsView: 'Open Tags-View',
    fixedHeader: 'Fixed Header',
    sidebarLogo: 'Display Sidebar Logo',
    menuUniqueOpened: 'Menu Unique Opened'
  }
}
