import React from "react";
import Box from "@mui/material/Box";
import {Typography} from "@mui/material";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
export default class CustomTabPanel extends React.Component<TabPanelProps> {
    constructor(props) {
        super(props);
        this.state = {
            index: props.index,
            value: props.value,
            children: props.children
        };
    }
    handleListItemClick = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        this.state.value = this.state.index;

        console.log(this.state.index)
    };


    render() {
        return (
        <div
            role="tabpanel"
            onClick={(event) => this.handleListItemClick(event, this.index)}
            hidden={this.value !== this.index}
            id={`simple-tabpanel-${this.index}`}
            aria-labelledby={`simple-tab-${this.index}`}
        >
            {this.value === this.index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{this.children}</Typography>
                </Box>
            )}
        </div>
        )
    }
}