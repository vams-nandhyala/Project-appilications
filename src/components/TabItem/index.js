import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails
  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }
  const isActiveTabCalssName=isActive ? "active-tab-btn" : ""
  return (
    <li className="tab-item-container ">
      <button type="button" className={`tab-btn ${isActiveTabCalssName}`} onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
