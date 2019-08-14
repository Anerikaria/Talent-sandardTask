/* Experience section */
import React from 'react';
import Cookies from 'js-cookie';
import { Table, Button } from 'semantic-ui-react'


export default class Experience extends React.Component {
    constructor(props) {
        super(props);

        const experienceData = props.experienceData ?
            Object.assign({}, props.experienceData)
            : {
                company: "",
                position: "",
                startDate: "",
                endDate: "",
                responsibilities:""
            }
        this.state = {
            showEditSection: false,
            newExperience: experienceData

        }

        this.renderEdit = this.renderEdit.bind(this)
        this.renderDisplay = this.renderDisplay.bind(this)
    }

    render() {

        return (
            this.state.showEditSection ? this.renderEdit() : this.renderDisplay()
        )
    }

    renderEdit() {
        return (
            <div className='row'>
                <div className="ui grid">
                    <div className="four wide column">
                        <ChildSingleInput
                            inputType="text"
                            label="language"
                            name="language"
                            value={this.state.newExperience.company}
                            controlFunc={this.handleChange}
                            maxLength={80}
                            placeholder="Add Language"
                            errorMessage="Please enter language"
                        />
                    </div>

                    <div className="four wide column">
                    </div>

                    <div className="four wide column">
                        <button type="button" className="ui teal button">Add</button>
                        <button type="button" className="ui button">Cancel</button>
                    </div>

                </div>
            </div>

        )
    }

    renderDisplay() {

        return (
            <div className='row'>
                <div className="sixteen wide column">
                    <Table className="singleLine" style={{ margin: "0px", padding: "0px" }}>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Company</Table.HeaderCell>
                                <Table.HeaderCell>Position</Table.HeaderCell>
                                <Table.HeaderCell>Responsibilities</Table.HeaderCell>
                                <Table.HeaderCell>Start</Table.HeaderCell>
                                <Table.HeaderCell>End</Table.HeaderCell>
                                <Table.HeaderCell>
                                    <button type="button" className="ui teal right floated button">+ Add New</button>
                                </Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                    </Table>
                </div>
            </div>

        )

    }
}
