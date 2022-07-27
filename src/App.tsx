import Header from "./components/Header";

import initialEmails from "./data/emails";

import "./App.css";

import { useState } from "react";

type Email = {
  id: number;
  sender: string;
  title: string;
  starred: boolean;
  read: boolean;
};

function App() {
  // Use initialEmails for state
  const [emails, setEmails] = useState(initialEmails);

  return (
    <div className="app">
      <Header />
      <nav className="left-menu">
        <ul className="inbox-list">
          <li
            className="item active"
            // onClick={() => {}}
          >
            <span className="label">Inbox</span>
            <span className="count">?</span>
          </li>
          <li
            className="item"
            // onClick={() => {}}
          >
            <span className="label">Starred</span>
            <span className="count">?</span>
          </li>

          <li className="item toggle">
            <label htmlFor="hide-read">Hide read</label>
            <input
              id="hide-read"
              type="checkbox"
              checked={false}
              // onChange={() => {}}
            />
          </li>
        </ul>
      </nav>
      <main className="emails">
        <div className="emails">
          <ul>
            {emails.map((email) => (
              <li
                className={email.read ? "email read" : "email unread"}
              >
                <input type="checkbox" checked={email.read} />
                <input
                  type="checkbox"
                  className="star-checkbox"
                  checked={email.starred}
                />
                <span className="sender">{email.sender}</span>
                <p className="title">{email.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
