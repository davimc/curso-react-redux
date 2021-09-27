import './Display.css'
import React from "react";

export default props => {
    return (
        <div className="display">
            <p className="previous">
                {props.previousValue}
            </p>
            <p className="current">
                {props.value}
            </p>

        </div>
    );
}