import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";

import AppWrap from "./AppWrap";
import store from "../store"

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <AppWrap/>
    </Provider>, app);