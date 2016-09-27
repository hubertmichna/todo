import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import AppWrap from "./AppWrap";
import store from "../store"


ReactDOM.render(
    <Provider store={store}>
        <AppWrap/>
    </Provider>, document.getElementById('app'));