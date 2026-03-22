import { Component } from 'react';
import { CdsButton } from '@cds/react/button';
import { registerIcons } from './icons';
import { Alerts } from './components/Alerts';
import { Timeline } from './components/Timeline';
import { Stacker } from './components/Stacker';
import { Home } from './components/Home';

// Register all icons
registerIcons();

interface AppState {
  show: boolean;
  theme: 'light' | 'dark';
}

export default class App extends Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      show: false,
      theme: 'light',
    };
  }

  toggleTheme = () => {
    const nextTheme = this.state.theme === 'light' ? 'dark' : 'light';
    this.setState({ theme: nextTheme });
    document.body.setAttribute('cds-theme', nextTheme);
  };

  render() {
    return (
      <Home>
        {/* <div cds-layout="vertical gap:lg" cds-text="body">
          <div cds-layout="horizontal align:vertical-center align:space-between">
            <CdsButton action="outline" size="sm" onClick={this.toggleTheme}>
              <cds-icon shape={this.state.theme === 'light' ? 'moon' : 'sun'}></cds-icon>
              {this.state.theme === 'light' ? 'Dark Mode' : 'Light Mode'}
            </CdsButton>
          </div>

          <Alerts
            show={this.state.show}
            onClose={() => this.setState({ show: false })}
          />

          <CdsButton status="success" size="sm" onClick={() => this.setState({ show: true })}>
            Show Alert
          </CdsButton>

          <Timeline />
          <Stacker />
        </div> */}
      </Home>
    );
  }
}