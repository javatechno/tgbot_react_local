import React from "react";
import {ListItemButton} from "@mui/material";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import InboxIcon from "@mui/icons-material/Inbox";
import ListItemText from "@material-ui/core/ListItemText";
import {Carousel} from "react-responsive-carousel";
import FsLightbox from "fslightbox-react";
export default class LightboxCarousel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
            selectedIndex: 0,
            loading: false,
        };
    }
    handleImageItemClick = (
        index: number,
    ) => {
        this.state.selectedIndex = index;
        console.log(this.state.selectedIndex)
        return <FsLightbox toggler={true} sources={this.state.images} key={index} />
    };

    renderItems = () => {
        return this.props.images.map((passedItem, index) =>
            <div>
                <img src=passedItem/>
            </div>)
    }

    render() {
        return (
            <Carousel centerMode={}{true} onClickItem={handleImageItemClick(index, item)}>
                {this.renderItems()}
            </Carousel>
        );
    }
}