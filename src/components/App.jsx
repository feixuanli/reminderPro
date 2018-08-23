import React, { Component } from '../../../Library/Caches/typescript/2.9/node_modules/@types/react';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="title">
                    Reminder Pro
                </div>
                <div className="form-inline">
                    <div className="form-group">
                        <input 
                            className="form-control"
                            placeholder="I have to..."
                        />
                    </div>
                    <button 
                        type="button"
                        className="btn btn-success"
                    >
                        Add Reminder
                    </button>
                </div>
            </div>
        );
    }
}

export default App;