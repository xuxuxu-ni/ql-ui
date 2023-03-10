/**
 * Created by WebStorm.
 * User: NiRongxu
 * Date: 2022/10/26
 * Description: æä»¶æè¿°
 */
'use strict'

module.exports = {
  types: [
    {
      value: "wip",
      emoji: "ðª",
      name: 'ðª  WIP:      å¼åä¸­'
    },
    {
      value: "feat",
      emoji: "â¨",
      name: 'â¨  feat:     æ°åè½'
    },
    {
      value: "fix",
      emoji: "ð",
      name: 'ð  fix:      bugä¿®å¤'
    },
    {
      value: "refactor",
      name: 'ð  refactor: ä»£ç éæ,ä¼å'
    },
    {
      value: "docs",
      emoji: "âï¸",
      name: 'ð  docs:     ææ¡£ä¿®æ¹'
    },
    {
      value: "test",
      emoji: "ð",
      name: 'ð  test:     æ·»å æä¿®æ¹æµè¯'
    },
    {
      value: "chore",
      emoji: "ð¯",
      name: 'ð¯  chore:    ä¸ä¿®æ¹srcææµè¯æä»¶çæ´æ¹ãæ¯å¦æ´æ°æå»ºä»»å¡ï¼åç®¡çå¨'
    },
    {
      value: "style",
      emoji: "ð",
      name: 'ð  style:    ä»£ç é£æ ¼ï¼ä¸å½±åä»£ç å«ä¹çæ´æ¹(ç©ºç½ãæ ¼å¼ãç¼ºå°åå·ç­)'
    },
    {
      value: "revert",
      emoji: "âª",
      name: 'âª  revert:   æ¢å¤å°æäº¤'
    }
  ],
  messages: {
    type: 'éæ©ä¸ç§ä½ çæäº¤ç±»å(å¿å¡«):',
    // used if allowCustomScopes is true
    customScope: 'æ­¤æ¬¡æäº¤éç¨èå´(å¯é):',
    subject: 'æ­¤æ¬¡æäº¤è¯´æ(å¿å¡«):\n',
    body: 'å¯¹äºæ­¤æ¬¡æäº¤è¯¦ç»è¯´æï¼ä½¿ç¨"|"æ¢è¡(å¯é)ï¼\n',
    breaking: 'ç ´åæ§åçº§,å¦æåè¡å¤§çæ¬è¯·æ·»å è¯´æ,å¦åç´æ¥åè½¦å¿½ç¥ (å¯é):\n',
    footer: 'å³èå³é­çissueï¼ä¾å¦ï¼#31, #34 (å¯é):\n',
    confirmCommit: 'ç¡®å®æäº¤è¯´æ?'
  },
  allowCustomScopes: false,
  allowBreakingChanges: ['feat', 'fix']
}
