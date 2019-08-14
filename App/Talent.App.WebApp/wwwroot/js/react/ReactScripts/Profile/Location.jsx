import React from 'react'
import Cookies from 'js-cookie'
import { default as Countries } from '../../../../util/jsonFiles/countries.json';
import { ChildSingleInput } from '../Form/SingleInput.jsx';
import { countries } from '../Employer/common.js';
import { Location } from './SelectedLocation.jsx';



export class Address extends React.Component {
    constructor(props) {
        super(props)

        const addressData = props.addressData ?
            Object.assign({}, props.addressData)
            : {
                number: "",
                street: "",
                suburb: "",
                postCode: "",

                country: "",
                city: ""


            };


        this.state = {
            showEditSection: false,
            newAdress: addressData

        }

        this.renderDisplay = this.renderDisplay.bind(this)
        this.renderEdit = this.renderEdit.bind(this)
        this.openEdit = this.openEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.saveContact = this.saveContact.bind(this)

    };

    openEdit() {
        const addressData = Object.assign({}, this.props.addressData)
        this.setState({
            showEditSection: true,
            newAdress: addressData
        })
    }

    closeEdit() {
        this.setState({
            showEditSection: false
        })
    }

    handleChange(event) {
        const data = Object.assign({}, this.state.newAdress)
        if (event.target.name === "location") {
            data["city"] = event.target.value.city;
            data["country"] = event.target.value.country;
        }
        else {
            data[event.target.name] = event.target.value;

        }
        this.setState({
            newAdress: data
        });

        }

    saveContact() {
            console.log(this.props.componentId)
            console.log(this.state.newAdress)
            const data = Object.assign({}, this.state.newAdress)
            this.props.controlFunc(this.props.componentId, data)
            this.closeEdit()

        }

    render() {
            return (
                this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
                )
        }

    renderEdit() {

        let location = { city: "", country: "" };
        if (this.state.newAdress.country && this.state.newAdress) {
                location.country = this.state.newAdress.country;
        }

        if (this.state.newAdress.city && this.state.newAdress) {
                location.city = this.state.newAdress.city;
            }


        return (
            <div className='row'>
                
        <div className="sixteen wide column">
 
        <div className="ui grid" >
            <div className="four wide column" >
 
                <ChildSingleInput
                    inputType="text"
                    label="Number"
                    name="number"
                    value={this.state.newAdress.number}
                    controlFunc={this.handleChange}
                    maxLength={80}
                    placeholder="Enter your Number"
                    errorMessage="Please enter a valid Address"
                />
            </div>
 
            <div className="eight wide column">
                <ChildSingleInput
                    inputType="text"
                    label="Street"
                    name="street"
                    value={this.state.newAdress.street}
                    controlFunc={this.handleChange}
                    maxLength={80}
                    placeholder="Enter your Street"
                    errorMessage="Please enter a valid Street"
                />
            </div>
 
            <div className="four wide column">
 
                <ChildSingleInput
                    inputType="text"
                    label="Suburb"
                    name="suburb"
                    value={this.state.newAdress.suburb}
                    controlFunc={this.handleChange}
                    maxLength={80}
                    placeholder="Enter your Suburb"
                    errorMessage="Please enter a valid Suburb"
                />
            </div>
 
        </div>
 
        <div className="ui grid">
          <label>Country</label>
             <Location
                option="location"
                location={location}
                handleChange={this.handleChange}
            />
 
 
            <div className="four wide column">
                <ChildSingleInput
                    inputType="text"
                    label="PostCode"
                    name="postCode"
                    value={this.state.newAdress.postCode}
                    controlFunc={this.handleChange}
                    maxLength={80}
                    placeholder="Enter your postcode"
                    errorMessage="Please enter a valid postcode"
                />
            </div>
 
        </div>
 
        <div className="ui grid" >
            <div className="four wide column">
                <button type="button" className="ui teal button" onClick={this.saveContact}>Save</button>
                <button type="button" className="ui button" onClick={this.closeEdit}>Cancel</button>
            </div>
        </div>
    </div>
                    
            </div>
           )

        }

    renderDisplay() {
            let address = this.props.addressData ? `${this.props.addressData.number} ,  ${this.props.addressData.street} , ${this.props.addressData.suburb} , ${this.props.addressData.postCode}` : ""
            let country = this.props.addressData ? `${this.props.addressData.country}` : ""
            let city = this.props.addressData ? `${this.props.addressData.city}` : ""
            return (
                <div className='row'>
                    <div className="sixteen wide column">
                        <p>Address:{address}</p>
                        <p>City: {city}</p>
                        <p>Country:{country}</p>

                        <button type="button" className="ui right floated teal button" onClick={this.openEdit}>
                            Edit
                        </button>

                    </div>
                </div>


                )
        }

}


export class Nationality extends React.Component {
    constructor(props) {
        super(props)

        const nationality = props.nationality;

        this.state = {
            newAdress: nationality
        }

        this.handleChange = this.handleChange.bind(this)
        this.saveContact = this.saveContact.bind(this)
    }

    handleChange(event) {
        const data = Object.assign({}, this.state.newAdress)

        data[event.target.name] = event.target.value;

        this.setState({
            newAdress: data
        },
            this.saveContact);

    }


    saveContact() {
        const data = Object.assign({}, this.state.newAdress);
        this.props.saveProfileData(data);
    }


    render() {
        let nationality = this.props.nationality ? this.props.nationality : "";
        return (
            <div className="row">
                <div className="sixteen wide column">
                    <div className="ui grid">
                        <div className="six wide column">
                            <Location
                                location={nationality}
                                handleChange={this.handleChange}
                                option="nationality"
                            />
                        </div>
                    </div>
                </div>
            </div>

        );

    }
}



