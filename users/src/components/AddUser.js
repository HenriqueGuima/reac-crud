import React from "react";

class AddUser extends React.Component {
    state = {
        name: "",
        type: "",
        img: "",
        date: new Date() //Regular expressions to format the date time because some of them wouldn't display the correct time
            .toUTCString()
            .match(/([0-9]*[A-Z]*[a-z]*\,)\s[0-9]*\s[A-Z]*[a-z]*/g),
        time: new Date()
            .toTimeString()
            .match(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/g),
    };

    add = (e) => {
        e.preventDefault();
        if (this.state.name === "" || this.state.type === "") {
            alert("Please fill all fields");
            return;
        }
        this.props.addUserHandler(this.state);
        this.setState({
            name: "",
            type: "",
            img: "",
            date: new Date()
                .toUTCString()
                .match(/([0-9]*[A-Z]*[a-z]*\,)\s[0-9]*\s[A-Z]*[a-z]*/g),
            time: new Date()
                .toTimeString()
                .match(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]/g),
        });
        this.props.history.push("/");
    };

    //Form fields
    render() {
        return ( <
            div className = "ui main" >
            <
            h2 > Add User < /h2>{" "} <
            form className = "ui form"
            onSubmit = { this.add } >
            <
            div className = "field" >
            <
            label > Name < /label>{" "} <
            input type = "text"
            name = "name"
            placeholder = "Name"
            value = { this.state.name }
            onChange = {
                (e) => this.setState({ name: e.target.value }) }
            />{" "} <
            /div>{" "} <
            div className = "field" >
            <
            label > Type < /label>{" "} <
            input type = "text"
            name = "type"
            placeholder = "Fire"
            value = { this.state.type }
            onChange = {
                (e) => this.setState({ type: e.target.value }) }
            />{" "} <
            /div>{" "} <
            div className = "field" >
            <
            label > Img url < /label>{" "} <
            input type = "text"
            name = "img"
            placeholder = "url"
            value = { this.state.img }
            onChange = {
                (e) => this.setState({ img: e.target.value }) }
            />{" "} <
            /div>{" "} <
            button className = "ui button blue"
            onChange = {
                (e) =>
                this.setState({ time: e.target.value }, { date: e.target.value })
            } >
            { " " }
            Add { " " } <
            /button>{" "} <
            /form>{" "} <
            /div>
        );
    }
}

export default AddUser;