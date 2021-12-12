import React from 'react'
import { Icon, Bubble } from 'tea-component'

// 暂无 SVG：'records', 'sales', 'shutdown', 'running', 'deploy', 'links', 'client', 'alarm', 'try', 'new', 'favorable'
// prettier-ignore
const iconTypes = [
  "close", "dismiss", "delete", "shopcart", "more", "folderclose", "folderopen", "notice",
  "guide", "consult", "realname", "realnamev", "show", "hide", "success",
  "warning", "loading", "error", "sort", "sortup", "sortdown", "btnback", "plus", "minus", "setting",
  "pencil", "copy", "remind", "phone", "phonev", "phone-warning", "phone-error", "wechat", "wechatv",
  "wechat-warning", "wechat-error", "email", "emailv", "email-warning", "email-error", "qq",
  "viewgrid", "viewlist", "monitor", "download", "filter", "convertip--blue", "convertip",
  "info", "arrowup", "arrowdown", "arrowleft", "arrowright", "externallink", "refresh", "refresh-blue",
  "fullscreen", "fullscreenquit", "trenddown", "trendup", "drop", "news", "help", "pending-gray", "pending",
  "infoblue", "lastpage", "firstpage", "search", "transfer", "cur", "cur-active", "fold", "check",
  "not", "and", "detail", "qrcode", "database", "datasheet", "daily",
  "chart-pie", "chart-pie-hover", "chart-line", "chart-line-hover", "chart-column", "chart-column-hover",
  "table", "table-hover", "relationship", "relationship-hover", "multi-line", "percent", "percent-blue", "tag"
];

const smallIconTypes = ['close', 'dismiss', 'check']

export default function IconExample() {
  return (
    <>
      <section>
        {iconTypes.map((type) => (
          <Bubble key={type} content={`<Icon type="${type}" />`}>
            <Icon
              type={type}
              style={{ margin: '0 15px 15px 0', cursor: 'pointer' }}
            />
          </Bubble>
        ))}
      </section>
      <section>
        {smallIconTypes.map((type) => (
          <Bubble key={type} content={`<Icon type="${type}" size="s" />`}>
            <Icon
              type={type}
              size="s"
              style={{ margin: '0 10px 10px 0', cursor: 'pointer' }}
            />
          </Bubble>
        ))}
      </section>
    </>
  )
}
