import React from 'react'
import Cookies from 'js-cookie'
import { Dropdown } from 'semantic-ui-react';
import { countries } from '../Employer/common.js';


export class Location extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this)
        this.handleCountryChange = this.handleCountryChange.bind(this)
        this.renderLocation = this.renderLocation.bind(this)
        this.renderNationality = this.renderNationality.bind(this)
    }

    handleChange(event) {
        var data = Object.assign({}, this.props.location);

        //required
        const name = event.target.name;
        let value = event.target.value;
        const id = event.target.id;

        data[name] = value;
        if (name == "country") {
            data["city"] = "";
        }
        var updateData = {
            target: {
                name: "location",
                value: data
            }
        };
        console.log("xyz", event.target);
        //update props here

        this.props.handleChange(updateData)

    }

    handleCountryChange(event) {
        var updateData = {
            target: { name: "nationality", value: event.target.value }
        };

        //update props here
        this.props.handleChange(updateData)
    }

    render() {
        return (
            this.props.option === "location" ? this.renderLocation() : this.renderNationality()
        )
    }

    renderLocation() {
        let countriesOptions = [];
        let citiesOptions = [];
        const selectedCountry = this.props.location.country;
        const selectedCity = this.props.location.city;

        countriesOptions = Object.keys(countries).map(x => (
            <option key={x} value={x}>
                {x}
            </option>
        ));

        if (selectedCountry != "" && selectedCountry != null) {
            var propCities = countries[selectedCountry].map(x =>
                (
                <option key={x} value={x}>
                    {""}{x}
                </option>
            ));

            citiesOptions = (
                <span>
                <select
                    className= "ui dropdown"
                    placeholder="Select city"
                    value={selectedCity}
                    onChange={this.handleChange}
                    name="city"
                    label="City"
                >
                    <option value="0">Select a city</option>
                    {propCities}
                    </select>
                </span>
            );
        }

        return (
            <React.Fragment>
                <div className="six wide column">
                    <select className="ui right labeled dropdown"
                        placeholder="Select Country"
                        value={selectedCountry}
                        onChange={this.handleChange} 
                        name="country">
                        {""}
                        <option value="">Select Your Country</option>
                        {countriesOptions}
                    </select>
                </div>
                <div className="six wide column">
                    <label>City</label>
                    {citiesOptions}
                </div>
            </React.Fragment>

        );
    }

    renderNationality()
    {
        let countriesOption = [];
        const selectedCountry = this.props.location.country;

        countriesOption = Object.keys(countries).map(x => (
            <option key={x} value={x}>
                {x}
            </option>
        ));

        return (
            <React.Fragment>
                <strong>
                    <label> Nationality</label>
                </strong>
                <select className="ui right labeled dropdown"
                    placeholder="Select Nationality"
                    value={selectedCountry}
                    onChange={this.handleCountryChange}
                    name="country">
                    {""}
                    <option value="">Select Your nationality</option>
                    {countriesOption}
                </select>
            </React.Fragment>
        )
    }
}

