import classNames from 'classnames';

export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  return (
    <ul>
      {tabs.map(tab => (
        <li
          className={classNames({ 'is-active': activeTabId === tab.id })}
          data-cy="Tab"
        >
          <a
            onClick={() => onTabSelected(tab.id)}
            href={`#${tab.id}`}
            data-cy="TabLink"
          >
            {tab.title}
          </a>
        </li>
      ))}
      {/* <li className="is-active" data-cy="Tab">
        <a href="#tab-1" data-cy="TabLink">
          Tab 1
        </a>
      </li> */}
    </ul>
  );
};
